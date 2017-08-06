// @flow

import React, { Component } from 'react';
import { page } from '../hocs';

class Home extends Component {
  render() {
    return (
      <div>
        {'Home'}
      </div>
    );
  }
}

export default page()(Home);
