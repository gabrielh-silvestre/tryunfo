import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FilterSelect extends Component {
  render() {
    const { name, options, handleFilter } = this.props;

    return (
      <label htmlFor={ name }>
        Pesquisa por raridade:
        <select
          name={ name }
          id={ name }
          onChange={ handleFilter }
          data-testid="rare-filter"
        >
          {options.map((opt) => (
            <option key={ opt } value={ opt }>
              {opt}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

FilterSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
  handleFilter: PropTypes.func.isRequired,
};
