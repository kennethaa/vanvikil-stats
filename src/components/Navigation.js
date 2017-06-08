import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Container,
  Row,
  Col
} from './styled-components';

const Nav = styled.nav`
  background: rgba(4, 18, 31, 0.7);
`;
const NavItem = styled.a`
  padding: 1rem;
  color: #fff;
`;

const navItems = [
  {
    name: 'Hjem'
  },
  {
    name: 'Om'
  }
]

type Props = {
  children: ReactElement
};

class Navigation extends Component<void, Props, void> {
  render() {
    const { children } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <Nav>
              <Row>
                {navItems.map((navItem) =>
                  <Col
                    key={navItem.name}
                    colWidth={100 / navItems.length}
                  >
                    <NavItem>
                      {navItem.name}
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
