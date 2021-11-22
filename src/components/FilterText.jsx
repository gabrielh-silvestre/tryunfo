import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FilterText extends Component {
  render() {
    const { name, handleFilter } = this.props;

    return (
      <label htmlFor={ name } className="flex flex-col text-xl">
        Pesquisa por nome:
        <input
          type="text"
          name={ name }
          id={ name }
          className="rounded mt-1 px-2 py-1 text-black text-lg"
          onChange={ handleFilter }
          data-testid="name-filter"
        />
      </label>
    );
  }
}

FilterText.propTypes = {
  name: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
