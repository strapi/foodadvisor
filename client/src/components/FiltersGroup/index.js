/**
 *
 * FiltersGroup
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Radio from '../Radio';

function FiltersGroup(props) {
  const { title, name, options, value, onChange } = props;

  return (
    <div>
      <p>{title}</p>
      <ul>
        {options.map(option => {
          return typeof option === 'string' ? (
            <li key={option}>
              <Radio
                onChange={onChange}
                name={name}
                message={option}
                value={option}
                checked={value === option}
              />
            </li>
          ) : (
            <li key={option.name}>
              <Radio
                onChange={onChange}
                name={name}
                message={option.name}
                value={option.id}
                checked={value === option.id}
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
  value: null
};

FiltersGroup.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.string
};

export default FiltersGroup;
