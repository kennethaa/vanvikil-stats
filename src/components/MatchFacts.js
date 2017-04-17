// @flow

import React, { Component } from 'react';

type Props = {
  match: Object,
};

class MatchFacts extends Component<void, Props, void> {
  render() {
    const { match } = this.props;
    const { matchinfo } = match;

    return (
      <tbody>
        <tr>
          <td>{'Sted:'}</td>
          <td>{matchinfo.venue}</td>
        </tr>
        <tr>
          <td>{'Dato:'}</td>
          <td>{matchinfo.start_time}</td>
        </tr>
        <tr>
          <td>{'Dommer:'}</td>
          <td>{matchinfo.ref}</td>
        </tr>
        <tr>
          <td>{'AD1:'}</td>
          <td>{matchinfo.a_ref1}</td>
        </tr>
        <tr>
          <td>{'AD2:'}</td>
          <td>{matchinfo.a_ref2}</td>
        </tr>
        {matchinfo.spectators
          ? <tr>
              <td>{'Tilskuere:'}</td>
              <td>{matchinfo.spectators}</td>
            </tr>
          : null}
      </tbody>
    );
  }
}

export default MatchFacts;
