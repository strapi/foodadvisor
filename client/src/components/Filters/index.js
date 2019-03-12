/**
 *
 * Filters
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Collapse, NavbarToggler } from 'reactstrap';

import StyledFilters from './StyledFilters';
import H1 from '../H1';
import FiltersGroup from '../FiltersGroup';

import Icon from '../../assets/img/icon_filter.png';

function Filters(props) {
  const [isOpen, toggleIsOpen] = useState(false);
  const { filters, onChange } = props;

  return (
    <>
      <StyledFilters />
      <Collapse className="filters-collapse" isOpen={isOpen} navbar>
        <H1>Filters</H1>
        <hr />
        {filters.map(filter => {
          return (
            <FiltersGroup {...filter} key={filter.name} onChange={onChange} />
          );
        })}
      </Collapse>
      <NavbarToggler onClick={() => toggleIsOpen(!isOpen)}>
        <div className="filter-btn">
          <img src={Icon} alt="filter" />
          <span>Filters</span>
        </div>
      </NavbarToggler>
    </>
  );
}

Filters.defaultProps = {
  filters: [],
  onChange: () => {}
};

Filters.propTypes = {
  filters: PropTypes.array,
  onChange: PropTypes.func
};

export default Filters;
