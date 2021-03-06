import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="w-full flex flex-col mx-8 py-4 items-center">
        <label className="flex flex-col w-2/3 mb-4 text-2xl" htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="name"
            value={cardName}
            onChange={onInputChange}
            className="rounded mt-1 px-2 py-1 text-black text-lg"
            data-testid="name-input"
          />
        </label>

        <label className="flex flex-col w-2/3 mb-4 text-2xl" htmlFor="description">
          Descrição
          <textarea
            name="description"
            id="description"
            cols="30"
            value={cardDescription}
            onChange={onInputChange}
            className="rounded mt-1 px-2 py-1 text-black text-lg"
            data-testid="description-input"
          />
        </label>

        <label className="flex flex-col w-2/3 mb-4 text-2xl" htmlFor="attr1">
          Energia amaldiçoada
          <input
            type="number"
            name="attr1"
            id="attr1"
            min="0"
            max="90"
            value={cardAttr1}
            onChange={onInputChange}
            className="rounded mt-1 px-2 py-1 text-black text-lg"
            data-testid="attr1-input"
          />
        </label>

        <label className="flex flex-col w-2/3 mb-4 text-2xl" htmlFor="attr2">
          Combate corpo a corpo
          <input
            type="number"
            name="attr2"
            id="attr2"
            min="0"
            max="90"
            value={cardAttr2}
            onChange={onInputChange}
            className="rounded mt-1 px-2 py-1 text-black text-lg"
            data-testid="attr2-input"
          />
        </label>

        <label className="flex flex-col w-2/3 mb-4 text-2xl" htmlFor="attr3">
          Força do pacto
          <input
            type="number"
            name="attr3"
            id="attr3"
            min="0"
            max="90"
            value={cardAttr3}
            onChange={onInputChange}
            className="rounded mt-1 px-2 py-1 text-black text-lg"
            data-testid="attr3-input"
          />
        </label>

        <label className="flex flex-col w-2/3 mb-4 text-2xl" htmlFor="image">
          Imagem (URL)
          <input
            type="text"
            name="image"
            id="image"
            value={cardImage}
            onChange={onInputChange}
            className="rounded mt-1 px-2 py-1 text-black text-lg"
            data-testid="image-input"
          />
        </label>

        <label className="flex flex-col w-2/3 mb-4 text-2xl" htmlFor="rarity">
          Raridade
          <select
            name="rarity"
            id="rarity"
            value={cardRare}
            onChange={onInputChange}
            className="rounded mt-1 px-2 py-1 text-black text-lg"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        {hasTrunfo ? (
          <p>Você já tem um Super Trunfo em seu baralho</p>
        ) : (
          <label className="flex flex-col w-2/3 mb-4 text-2xl" htmlFor="trunfo">
            É super trunfo?
            <input
              type="checkbox"
              name="trunfo"
              id="trunfo"
              checked={cardTrunfo}
              onChange={onInputChange}
              className=""
              data-testid="trunfo-input"
            />
          </label>
        )}

        <button
          type="submit"
          disabled={isSaveButtonDisabled}
          onClick={onSaveButtonClick}
          className="py-2 px-8 bg-cerise-1-600 rounded-3xl text-xl disabled:opacity-50"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
