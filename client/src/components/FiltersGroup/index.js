/**
 *
 * FiltersGroup
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Radio from '../Radio';

function FiltersGroup({ 
  title, 
  name, 
  options, 
  value, 
  onChange 
}) {
  return (
    <div>
      <p>{title}</p>
      <ul>
        {options.map(option => {
          return (
            <li key={option.name || option}>
              <Radio
                onChange={onChange}
                name={name}
                message={option.name || option}
                value={option.id || option}
                checked={value === option.id || value === option}
              />
            </li>
          );
        })}
      </ul>
      <hr />
    </div>
  );
}

FiltersGroup.defaultProps = {
  title: '',
  name: '',
  onChange: () => {},
  options: [],
  value: null,
};

FiltersGroup.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.string,
};

export default FiltersGroup;
