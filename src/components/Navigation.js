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
  display: block;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  line-height: 2;
  background: ${props => props.active && 'rgba(0, 166, 231, 1)'};
  color: #fff;
`;

const navItems = [
  {
    name: 'HJEM'
  },
  {
    name: 'OM'
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
