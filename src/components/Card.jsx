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
      <section>
        <h2 data-testid="name-card">{cardName}</h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{cardDescription}</p>
        <ul>
          <li data-testid="attr1-card">{cardAttr1}</li>
          <li data-testid="attr2-card">{cardAttr2}</li>
          <li data-testid="attr3-card">{cardAttr3}</li>
        </ul>
        <div data-testid="rare-card">{cardRare}</div>
        {cardTrunfo ? <h3 data-testid="trunfo-card">Super Trunfo</h3> : ''}
        {!isPreview ? (
          <button
            type="button"
            name={ cardName }
            data-testid="delete-button"
            onClick={ deleteCard }
          >
            Excluir
          </button>
        ) : (
          ''
        )}
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
