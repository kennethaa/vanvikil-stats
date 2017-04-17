// @flow

import React, { Component } from 'react';
import { TableBody, TableRow, TableColumn } from './styled-components';

type Props = {
  match: Object,
};

class MatchFacts extends Component<void, Props, void> {
  render() {
    const { match } = this.props;
    const { matchinfo } = match;

    return (
      <TableBody>
        <TableRow>
          <TableColumn>{'Sted:'}</TableColumn>
          <TableColumn>{matchinfo.venue}</TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn>{'Dato:'}</TableColumn>
          <TableColumn>{matchinfo.start_time}</TableColumn>
        </TableRow>
        {matchinfo.ref
          ? <TableRow>
              <TableColumn>{'Dommer:'}</TableColumn>
              <TableColumn>{matchinfo.ref}</TableColumn>
            </TableRow>
          : null}
        {matchinfo.a_ref1
          ? <TableRow>
              <TableColumn>{'AD1:'}</TableColumn>
              <TableColumn>{matchinfo.a_ref1}</TableColumn>
            </TableRow>
          : null}
        {matchinfo.a_ref2
          ? <TableRow>
              <TableColumn>{'AD2:'}</TableColumn>
              <TableColumn>{matchinfo.a_ref2}</TableColumn>
            </TableRow>
          : null}
        {matchinfo.spectators
          ? <TableRow>
              <TableColumn>{'Tilskuere:'}</TableColumn>
              <TableColumn>{matchinfo.spectators}</TableColumn>
            </TableRow>
          : null}
      </TableBody>
    );
  }
}

export default MatchFacts;
