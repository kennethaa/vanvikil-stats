// @flow

import React, { PureComponent } from 'react';

type Props = {
  error: Error,
};

class Loading extends PureComponent<void, Props, void> {
  render() {
    const { error } = this.props;

    return (
      <div>
        {'Error: '}
        {error.message}
        {error.stack}
      </div>
    );
  }
}

export default Loading;
