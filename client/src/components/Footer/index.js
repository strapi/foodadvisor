/**
 *
 * Footer
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FooterColumn from '../FooterColumn';
import Input from '../Input';
import Img from '../Img';
import arrow from '../../assets/img/icon_arrow_right.png';

import StyledFooter from './StyledFooter';
import logo from '../../assets/img/logo.svg';

function Footer({ columns, onSubmit }) {
  const [email, setValue] = useState('');

  return (
    <StyledFooter>
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <FooterColumn columns={columns} />
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
  onSubmit: e => e.preventDefault(),
};
Footer.propTypes = {
  onSubmit: PropTypes.func,
  columns: PropTypes.array.isRequired,
};

export default Footer;
