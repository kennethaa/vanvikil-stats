// @flow

import type { Routes } from '../types';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Column } from 'hedron';
import { elevation2 } from './styled-components';

const Nav = styled.section`
  background: rgba(4, 18, 31, 0.7);
  ${elevation2()};
`;

const NavTitle = styled.section`
  color: #fff;
  line-height: 2;
  font-size: 1.5rem;
`;

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
  line-height: 4rem;
  font-size: 1rem;
  color: #fff;

  border-bottom: 0.4rem solid transparent;
  &.${activeClassName} {
    border-bottom-color: rgba(0, 166, 231, 1);
  }
`;

type Props = {
  routes: Routes,
};

class Toolbar extends Component<void, Props, void> {
  render() {
    const { routes } = this.props;

    const navItems = routes.filter(route => route.nav);

    return (
      <Nav>
        <Row>
          <Column>
            <NavTitle>
              {'Vanvik IL Stats'}
            </NavTitle>
          </Column>
        </Row>
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
    );
  }
}

export default Toolbar;
