/**
 *
 * FooterColumn
 *
 */

import React from 'react';
import { Nav } from 'reactstrap';
import Column from './Column';
import PropTypes from 'prop-types';


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

FooterColumn.defaultProps = {};
FooterColumn.propTypes = {
  column: PropTypes.shape({ links: PropTypes.array }),
};

export default FooterColumn;
