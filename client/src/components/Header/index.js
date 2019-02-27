/**
 *
 * Header
 *
 */

// import React from 'react';
// // import PropTypes from 'prop-types';
// import StyledNav from './StyledNav';
// import Link from '../Link';
// import logo from '../../assets/img/logo.svg';

// function Nav() {
//   return (
//     <StyledNav>
//       <Link url="#">
//         <img src={logo} alt="logo"/>
//       </Link>
//       <Link url="yo">RESTAURANTS</Link>
//       <Link url="yo">ABOUT US</Link>
//       <Link url="yo">BLOG</Link>
//     </StyledNav>
//   );
// }

// Nav.defaultProps = {};
// Nav.propTypes = {};

// export default Nav;

import PropTypes from 'prop-types';

import React from 'react';
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

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <StyledHeader>
        <Navbar expand="md">
          <div className="container">
            <NavbarBrand href="/">
              <img src={logo} alt="logo" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link url="#">Restaurants</Link>
                </NavItem>
                <NavItem>
                  <Link url="#">About us</Link>
                </NavItem>
                <NavItem>
                  <Link url="#">Blog</Link>
                </NavItem>
              </Nav>
            </Collapse>
            <NavbarToggler onClick={this.toggle}>
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
}

NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
};
Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
};
