import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      isPreview,
      deleteCard,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <section className="min-w-min max-w-xs card-container w-8/12 border-10 border-b-16 border-solid border-gray-300 mx-auto">
        <div className="flex flex-col border-2 border-solid border-black">
          <div
            className="w-full h-80 bg-center bg-cover"
            style={{
              backgroundImage: `url(${cardImage})`,
            }}
            data-testid="image-card"
          />

          <h2
            className="text-2xl text-center font-jujutsu font-bold w-full h-12 py-2 px-6 bg-cerise-2-700"
            data-testid="name-card"
          >
            {cardName}
          </h2>

          <div className="w-full p-4 bg-cerise-2-700 text-gray-900">
            <ul className="flex">
              <li
                className="w-full mx-2 px-2 py-1 my-2 bg-teal-2-400 text-gray-200 rounded-xl flex justify-between"
                data-testid="attr1-card"
              >
                <span className="mr-4">Energia</span>
                {cardAttr1}
              </li>
              <li
                className="w-full mx-2 px-2 py-1 my-2 bg-teal-2-400 text-gray-200 rounded-xl flex justify-between"
                data-testid="attr2-card"
              >
                <span className="mr-4">Combate</span>
                {cardAttr2}
              </li>
              <li
                className="w-full mx-2 px-2 py-1 my-2 bg-teal-2-400 text-gray-200 rounded-xl flex justify-between"
                data-testid="attr3-card"
              >
                <span className="mr-4">Pacto</span>
                {cardAttr3}
              </li>
            </ul>

            <div className="w-full flex justify-around">
              <div
                className="px-3 py-1 mt-4 rounded-xl bg-teal-1-500 text-gray-200 flex justify-center items-center"
                data-testid="rare-card"
              >
                {cardRare}
              </div>
              {cardTrunfo && (
                <h3
                  className="px-3 py-1 mt-4 rounded-xl bg-teal-1-500 text-gray-200 flex justify-center items-center"
                  data-testid="trunfo-card"
                >
                  Super Trunfo
                </h3>
              )}
            </div>
          </div>

          <div className="w-full max-w-full">
            <p
              className="min-w-full px-4 py-2 bg-beaver-800 break-words overflow-clip"
              data-testid="description-card"
            >
              {cardDescription}
            </p>
          </div>

          {!isPreview && (
            <button
              type="button"
              name={cardName}
              onClick={deleteCard}
              className="py-1 bg-teal-1-400"
              data-testid="delete-button"
            >
              Excluir
            </button>
          )}
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  isPreview: PropTypes.bool.isRequired,
  deleteCard: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
