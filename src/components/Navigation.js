// @flow

import type { Routes } from '../types';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Page, Row, Column } from 'hedron';

const Nav = styled.nav`background: rgba(4, 18, 31, 0.7);`;

const activeClassName = 'active';
const NavItem = styled(NavLink).attrs({
  activeClassName,
})`
  display: block;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 1rem 0.5rem;
  font-size: 1rem;
  line-height: 2;
  color: #fff;
  &.${activeClassName} {
    background: rgba(0, 166, 231, 1);
  }
`;

type Props = {
  children: React$Element<*>,
  routes: Routes,
};

class Navigation extends Component<void, Props, void> {
  render() {
    const { children, routes } = this.props;

    const navItems = routes.filter(route => route.nav);

    return (
      <Page fluid>
        <Nav>
          <Row divisions={navItems.length}>
            {navItems.map((navItem, index) =>
              <Column key={index} fluid xs={1}>
                <NavItem
                  to={navItem.path}
                  exact={navItem.exact}
                  title={navItem.nav}
                >
                  {navItem.nav}
                </NavItem>
              </Column>
            )}
          </Row>
        </Nav>
        {children}
      </Page>
    );
  }
}

export default Navigation;
