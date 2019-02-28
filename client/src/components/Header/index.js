/**
 *
 * Header
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import StyledHeader from './StyledHeader';
import Link from '../Link';
import logo from '../../assets/img/logo.svg';

function Header({ links }) {
  const [isOpen, toggleIsOpen] = useState(false);

  return (
    <StyledHeader>
      <Navbar expand="md">
        <div className="container">
          <NavbarBrand href="/">
            <img src={logo} alt="logo" />
          </NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              {links.map(link => (
                <NavItem key={link.to} className="active">
                  <Link url={link.to} active={false}>
                    <span>{link.name}</span>
                  </Link>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
          <NavbarToggler onClick={() => toggleIsOpen(!isOpen)}>
            <div className="nav-icon">
              <span />
              <span />
              <span />
              <span />
            </div>
          </NavbarToggler>
        </div>
      </Navbar>
    </StyledHeader>
  );
}

Header.defaultProps = {
  links: []
  // tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
};
Header.propTypes = {
  links: PropTypes.array
  // light: PropTypes.bool,
  // dark: PropTypes.bool,
  // fixed: PropTypes.string,
  // color: PropTypes.string,
  // role: PropTypes.string,
  // expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  // tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
};

export default Header;
