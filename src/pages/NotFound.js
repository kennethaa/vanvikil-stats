// @flow

import React, { Component } from 'react';
import { page } from '../hocs';
import { Container, Row, Col } from '../components/styled-components';

class NotFound extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            {'Not Found'}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default page({
  nav: true,
})(NotFound);
