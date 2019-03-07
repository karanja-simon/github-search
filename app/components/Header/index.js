/**
 *
 * Header
 *
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Banner from './banner.jpg';
import A from '../A';
import Img from '../Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <A href="https://skdev.works">
          <Img src={Banner} alt="logo" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
