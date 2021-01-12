/**
 *
 * FooterColumn
 *
 */

import React from 'react';
import { Nav } from 'reactstrap';
import Column from './Column';

function FooterColumn({ columns }) {
  const links = columns.reduce((acc, current) => {
    const subLinks = current.link.reduce((accumulator, curr) => {
      let to = curr.url;

      if (curr.universal) {
        to = `/${curr.universal.slug}`;
      }

      accumulator.push({ name: curr.label, to });

      return accumulator;
    }, []);

    return [...acc, ...subLinks];
  }, []);

  return (
    <Nav navbar>
      {columns.map((column, key) => (
        <Column links={column.link} key={key} />
      ))}
    </Nav>
  );
}

FooterColumn.defaultProps = {};
FooterColumn.propTypes = {};

export default FooterColumn;
