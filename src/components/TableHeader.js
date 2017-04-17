// @flow

import React, { Component } from 'react';
import {
  TableHeader as THead,
  TableRow,
  TableColumnHeader,
} from './styled-components';

type Props = {
  header: string,
};

class TableHeader extends Component<void, Props, void> {
  render() {
    const { header } = this.props;

    return (
      <THead>
        <TableRow>
          <TableColumnHeader colSpan="100">
            {header}
          </TableColumnHeader>
        </TableRow>
      </THead>
    );
  }
}

export default TableHeader;
