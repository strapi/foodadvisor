/**
 *
 * Footer
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

import Input from '../Input';
import Img from '../Img';
import arrow from '../../assets/img/icon_arrow_right.png';

import StyledFooter from './StyledFooter';
import logo from '../../assets/img/logo.svg';

function Footer({ links, onSubmit }) {
  const [email, setValue] = useState('');
  
  return (
    <StyledFooter>
      <div className="container">
        <div className="navbar-brand">
          <Link to='/'>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <Nav navbar>
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
                onChange={e => setValue(e.target.value)}
                value={email}
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
  onSubmit: e => e.preventDefault()
};
Footer.propTypes = {
  links: PropTypes.array,
  onSubmit: PropTypes.func
};

export default Footer;
