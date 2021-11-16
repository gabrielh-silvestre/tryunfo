import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_IMG =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2F888c345a4ce6c25e33fdee744c7a8fe6%2F09d03ac297c9dde3-a7%2Fs2048x3072%2F263ab96038a8c8950acde306311395a157b87b19.jpg&f=1&nofb=1';
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
      <section className="card-container w-8/12 border-8 border-solid border-gray-400 mx-auto">
        <div className="flex flex-col border-2 border-solid border-black">
          <div
            className="w-full h-80 bg-center bg-cover"
            style={{
              backgroundImage: `url(${
                cardImage === '' ? DEFAULT_IMG : cardImage
              })`,
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
                <span>Energia</span>
                {cardAttr1}
              </li>
              <li
                className="w-full mx-2 px-2 py-1 my-2 bg-teal-2-400 text-gray-200 rounded-xl flex justify-between"
                data-testid="attr2-card"
              >
                <span>Combate</span>
                {cardAttr2}
              </li>
              <li
                className="w-full mx-2 px-2 py-1 my-2 bg-teal-2-400 text-gray-200 rounded-xl flex justify-between"
                data-testid="attr3-card"
              >
                <span>Pacto</span>
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
