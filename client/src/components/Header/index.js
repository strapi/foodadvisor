/**
 *
 * Header
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import StyledHeader from './StyledHeader';
import Link from '../Link';
import logo from '../../assets/img/logo.svg';

function Header({ links }) {
  const [isOpen, toggleIsOpen] = useState(false);

  const toggleCollapse = () => {
    if (window.innerWidth < 768) {
      toggleIsOpen(!isOpen);
    }
  };

  return (
    <StyledHeader>
      <Navbar expand="md">
        <div className="container">
          <div className="navbar-brand">
            <Link url="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              {links.map(link => {
                return (
                  <NavItem key={link.to} onClick={toggleCollapse}>
                    <Link
                      url={link.to}
                      active={window.location.pathname === link.to}
                    >
                      <span title={link.name}>{link.name}</span>
                    </Link>
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
          <NavbarToggler onClick={toggleCollapse}>
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
  links: [],
};
Header.propTypes = {
  links: PropTypes.array,
};

export default Header;
