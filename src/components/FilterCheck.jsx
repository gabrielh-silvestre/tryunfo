import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FilterCheck extends Component {
  render() {
    const { name, handleFilter } = this.props;

    return (
      <label htmlFor={ name } className="flex text-xl items-center">
        Super Trunfo
        <input
          type="checkbox"
          name={ name }
          id={ name }
          className="rounded mt-1 px-2 py-1 text-black text-lg"
          onChange={ handleFilter }
          data-testid="trunfo-filter"
        />
      </label>
    );
  }
}

FilterCheck.propTypes = {
  name: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
