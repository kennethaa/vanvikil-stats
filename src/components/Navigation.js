// @flow

import type { Routes } from '../types';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Row, Col } from './styled-components';

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
      <Container>
        <Row>
          <Col>
            <Nav>
              <Row>
                {navItems.map((navItem, index) =>
                  <Col key={index} colWidth={100 / navItems.length}>
                    <NavItem
                      to={navItem.path}
                      exact={navItem.exact}
                      title={navItem.nav}
                    >
                      {navItem.nav}
                    </NavItem>
                  </Col>
                )}
              </Row>
            </Nav>
          </Col>
        </Row>
        {children}
      </Container>
    );
  }
}

export default Navigation;
