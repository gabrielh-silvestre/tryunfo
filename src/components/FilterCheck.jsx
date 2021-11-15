import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FilterCheck extends Component {
  render() {
    const { name, handleFilter } = this.props;

    return (
      <label htmlFor={ name }>
        Super Trunfo
        <input
          type="checkbox"
          name={ name }
          id={ name }
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
