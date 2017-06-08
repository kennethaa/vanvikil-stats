import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from './styled-components';

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
          </Col>
        </Row>
        {children}
      </Container>
    );
  }
}

export default Navigation;
