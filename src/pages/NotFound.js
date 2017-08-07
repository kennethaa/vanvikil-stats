// @flow

import React, { Component } from 'react';
import { page } from '../hocs';
import { Row, Column } from 'hedron';
import { Content, ContentTitle } from '../components/styled-components';

class NotFound extends Component {
  render() {
    return (
      <Row>
        <Column>
          <Content>
            <ContentTitle>
              {'Not Found'}
            </ContentTitle>
          </Content>
        </Column>
      </Row>
    );
  }
}

export default page({
  nav: true,
})(NotFound);
