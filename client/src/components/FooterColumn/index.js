/**
 *
 * FooterColumn
 *
 */

import React from 'react';
import { Nav } from 'reactstrap';
import Column from './Column';

function FooterColumn({ columns }) {
  columns.reduce((acc, curr) => {
    const subLinks = curr.link.reduce((accumulator, current) => {
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
      {columns.map(column => (
        <Column links={column.link} key={column.link.label} />
      ))}
    </Nav>
  );
}

FooterColumn.defaultProps = {};
FooterColumn.propTypes = {};

export default FooterColumn;
