// @flow

import React, { Component } from 'react';

type Props = {
  header: string,
};

class TableHeader extends Component<void, Props, void> {
  render() {
    const { header } = this.props;

    return (
      <thead>
        <tr>
          <th colSpan="100">
            <span className="table-match-info-header">{header}</span>
          </th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
