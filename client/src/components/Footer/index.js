/**
 *
 * Footer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { NavbarBrand, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

import Input from '../Input';
import Img from '../Img';
import arrow from '../../assets/img/icon_arrow_right.png';

import StyledFooter from './StyledFooter';
import logo from '../../assets/img/logo.svg';

function Footer({ links, onChange, onSubmit }) {
  return (
    <StyledFooter>
      <div className="container">
        <Nav navbar>
          <NavbarBrand href="/">
            <img src={logo} alt="logo" />
          </NavbarBrand>

          <div className="nav-list">
            {links.map(link => {
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
            })}
          </div>
        </Nav>
        <div className="newsletter">
          <form onSubmit={onSubmit}>
            <p className="newsletter-lbl">Subscribe to the newsletter&nbsp;:</p>
            <div className="input-wrapper">
              <Input
                placeholder="Your email"
                name="newsletter"
                onChange={onChange}
                value=""
              />
              <button type="submit">
                <Img src={arrow} alt="arrow" />
              </button>
            </div>
          </form>
        </div>
        <div className="love-lbl">
          <p>Made with love and running on Strapi</p>
        </div>
      </div>
    </StyledFooter>
  );
}

Footer.defaultProps = {
  links: [],
  onChange: () => {},
  onSubmit: e => e.preventDefault()
};
Footer.propTypes = {
  links: PropTypes.array,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default Footer;
