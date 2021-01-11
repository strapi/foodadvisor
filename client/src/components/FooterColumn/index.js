/**
 *
 * FooterColumn
 *
 */

import React from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import Column from './Column';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

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
      {/* {links.map(link => {
          if (link.to.startsWith('http')) {
            return (
              <a href={link.to} target="_blank" key={link.to}>
                {link.name}
              </a>
            );
          }

          return (
            <Link
              key={link.name}
              to={link.to}
              className={
                link.name === 'My account' || link.name === 'Favorites'
                  ? 'main-link'
                  : ''
              }
            >
              <span title={link.name}>{link.name}</span>
            </Link>
          );
        })} */}
    </Nav>
  );
}

FooterColumn.defaultProps = {};
FooterColumn.propTypes = {};

export default FooterColumn;
