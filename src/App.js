import React from 'react';
import Card from './components/Card';
import FilterCheck from './components/FilterCheck';
import FilterSelect from './components/FilterSelect';
import FilterText from './components/FilterText';
import Form from './components/Form';
import './App.css';

const initialForm = {
  name: 'Satoru Goju',
  description: 'O feiticeiro mais poderoso!',
  attr1: '90',
  attr2: '90',
  attr3: '30',
  image:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2F888c345a4ce6c25e33fdee744c7a8fe6%2F09d03ac297c9dde3-a7%2Fs2048x3072%2F263ab96038a8c8950acde306311395a157b87b19.jpg&f=1&nofb=1',
  rarity: 'muito raro',
  trunfo: true,
  hasError: false,
  hasTrunfo: false,
  cardList: [],
  textFilter: undefined,
  selectFilter: 'todas',
  checkFilter: false,
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialForm;
  }

  handleChange = ({ target: { type, name, value, checked } }) => {
    this.setState({ [name]: type === 'checkbox' ? checked : value }, () => {
      const { textFilter, hasTrunfo, trunfo } = this.state;
      if (textFilter === '') this.setState({ textFilter: undefined });
      if (hasTrunfo && trunfo) this.setState({ trunfo: false });
      this.handleErrors();
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const states = this.state;

    this.setState(
      (prevState) => ({
        cardList: [...prevState.cardList, this.cardConstructor(states)],
      }),
      () => {
        this.resetForm();
        this.setState({ hasTrunfo: this.validTrunfo() });
      }
    );
  };

  handleClick = ({ target: { name } }) => {
    const { cardList } = this.state;
    const attCardList = cardList.filter((card) => card.name !== name);

    this.setState(
      {
        cardList: attCardList,
      },
      () => {
        this.setState({ hasTrunfo: this.validTrunfo() });
      }
    );
  };

  handleErrors = () => {
    const { attr1, attr2, attr3 } = this.state;
    const attributes = [attr1, attr2, attr3];
    const allStates = this.state;

    this.setState({
      hasError:
        this.validRange(attributes) ||
        this.validSum(attributes) ||
        this.validTextInputs(allStates),
    });
  };

  cardConstructor = ({
    name,
    description,
    attr1,
    attr2,
    attr3,
    image,
    rarity,
    trunfo,
  }) => ({ name, description, attr1, attr2, attr3, image, rarity, trunfo });

  validRange = (arr) => {
    const min = 0;
    const max = 90;

    return arr.some((item) => item < min || item > max);
  };

  validSum = (arr) => {
    const maxSum = 210;

    return (
      arr.map((item) => parseInt(item, 10)).reduce((acc, curr) => acc + curr) >
      maxSum
    );
  };

  validTextInputs = (obj) => Object.values(obj).some((value) => value === '');

  validTrunfo = () => {
    const { cardList } = this.state;
    return cardList.some(({ trunfo }) => trunfo);
  };

  resetForm = () => {
    this.setState({
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rarity: 'normal',
      hasError: true,
    });
  };

  renderCardList = (list, isPreview) =>
    list.map((card) => (
      <Card
        key={card.name}
        isPreview={isPreview}
        deleteCard={this.handleClick}
        cardName={card.name}
        cardDescription={card.description}
        cardAttr1={card.attr1}
        cardAttr2={card.attr2}
        cardAttr3={card.attr3}
        cardImage={card.image}
        cardRare={card.rarity}
        cardTrunfo={card.trunfo}
      />
    ));

  renderFiltered = () => {
    const { cardList, textFilter, selectFilter, checkFilter } = this.state;

    if (checkFilter) {
      return this.renderCardList(
        cardList.filter(({ trunfo }) => trunfo === checkFilter),
        false
      );
    }

    if (textFilter && textFilter !== '' && selectFilter !== 'todas') {
      const filteredList = cardList.filter(
        ({ name, rarity }) =>
          name.includes(textFilter) && rarity === selectFilter
      );

      return this.renderCardList(filteredList, false);
    }

    if (textFilter && textFilter !== '') {
      return this.renderCardList(
        cardList.filter(({ name }) => name.includes(textFilter)),
        false
      );
    }

    if (selectFilter !== 'todas') {
      const filteredList = cardList.filter(
        ({ rarity }) => rarity === selectFilter
      );

      return this.renderCardList(filteredList, false);
    }
  };

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rarity,
      trunfo,
      hasError,
      hasTrunfo,
      cardList,
      textFilter,
      selectFilter,
      checkFilter,
    } = this.state;

    const allStates = this.state;

    return (
      <main className="bg-beaver-900 text-gray-200">
        <h1 className="text-3xl text-center font-bold bg-teal-2-400 py-4 mb-8">
          Tryunfo
        </h1>
        <article className="grid grid-cols-2 content-center justify-items-center">
          <Form
            cardName={name}
            cardDescription={description}
            cardAttr1={attr1}
            cardAttr2={attr2}
            cardAttr3={attr3}
            cardImage={image}
            cardRare={rarity}
            cardTrunfo={trunfo}
            onInputChange={this.handleChange}
            onSaveButtonClick={this.handleSubmit}
            isSaveButtonDisabled={hasError}
            hasTrunfo={hasTrunfo}
          />
          {this.renderCardList([this.cardConstructor(allStates)], true)}
          <section className="flex w-full justify-around col-span-full">
            <FilterText name="textFilter" handleFilter={this.handleChange} />
            <FilterSelect
              name="selectFilter"
              options={['todas', 'normal', 'raro', 'muito raro']}
              handleFilter={this.handleChange}
            />
            <FilterCheck name="checkFilter" handleFilter={this.handleChange} />
          </section>
        </article>

        <article className="grid grid-cols-3">
          {!textFilter && selectFilter === 'todas' && !checkFilter
            ? this.renderCardList(cardList, false)
            : this.renderFiltered()}
        </article>
      </main>
    );
  }
}

export default App;
