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
      <form className="border-red-500 border-solid border-2 flex flex-col mx-8 py-4 items-center">
        <label className="flex flex-col w-2/3 mb-4" htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="name"
            value={cardName}
            onChange={onInputChange}
            className="rounded mt-1"
            data-testid="name-input"
          />
        </label>

        <label className="flex flex-col w-2/3 mb-4" htmlFor="description">
          Descrição
          <textarea
            name="description"
            id="description"
            cols="30"
            value={cardDescription}
            onChange={onInputChange}
            className="rounded mt-1"
            data-testid="description-input"
          />
        </label>

        <label className="flex flex-col w-2/3 mb-4" htmlFor="attr1">
          Energia amaldiçoada
          <input
            type="number"
            name="attr1"
            id="attr1"
            min="0"
            max="90"
            value={cardAttr1}
            onChange={onInputChange}
            className="rounded mt-1"
            data-testid="attr1-input"
          />
        </label>

        <label className="flex flex-col w-2/3 mb-4" htmlFor="attr2">
          Combate corpo a corpo
          <input
            type="number"
            name="attr2"
            id="attr2"
            min="0"
            max="90"
            value={cardAttr2}
            onChange={onInputChange}
            className="rounded mt-1"
            data-testid="attr2-input"
          />
        </label>

        <label className="flex flex-col w-2/3 mb-4" htmlFor="attr3">
          Força do pacto
          <input
            type="number"
            name="attr3"
            id="attr3"
            min="0"
            max="90"
            value={cardAttr3}
            onChange={onInputChange}
            className="rounded mt-1"
            data-testid="attr3-input"
          />
        </label>

        <label className="flex flex-col w-2/3 mb-4" htmlFor="image">
          Imagem (URL)
          <input
            type="text"
            name="image"
            id="image"
            value={cardImage}
            onChange={onInputChange}
            className="rounded mt-1"
            data-testid="image-input"
          />
        </label>

        <label className="flex flex-col w-2/3 mb-4" htmlFor="rarity">
          Raridade
          <select
            name="rarity"
            id="rarity"
            value={cardRare}
            onChange={onInputChange}
            className="rounded mt-1"
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
          <label className="flex flex-col w-2/3 mb-4" htmlFor="trunfo">
            É super trunfo?
            <input
              type="checkbox"
              name="trunfo"
              id="trunfo"
              checked={cardTrunfo}
              onChange={onInputChange}
              className="rounded mt-1"
              data-testid="trunfo-input"
            />
          </label>
        )}

        <button
          type="submit"
          disabled={isSaveButtonDisabled}
          data-testid="save-button"
          onClick={onSaveButtonClick}
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
