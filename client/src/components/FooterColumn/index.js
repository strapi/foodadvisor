/**
 *
 * FooterColumn
 *
 */
/* eslint-disable react/no-array-index-key */

import React from 'react';
import { Nav } from 'reactstrap';
import PropTypes from 'prop-types';

import Column from './Column';

function FooterColumn({ columns }) {
  columns.reduce((acc, curr) => {
    const subLinks = curr.links.reduce((accumulator, current) => {
      let to = current.url;

      if (current.universal) {
        to = `/${current.universal.slug}`;
      }

      accumulator.push({ name: current.label, to });

      return accumulator;
    }, []);

    return [...acc, ...subLinks];
  }, []);

  return (
    <Nav navbar>
      {columns.map((column, key) => (
        <Column links={column.links} key={key} />
      ))}
    </Nav>
  );
}

FooterColumn.defaultProps = {
  columns: [],
};
FooterColumn.propTypes = {
  columns: PropTypes.array,
};

export default FooterColumn;
