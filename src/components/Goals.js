// @flow

import React, { Component } from 'react';
import Icon from 'react-fa';
import {
  TableBody,
  TableRow,
  TableColumn,
} from './styled-components';

type Props = {
  match: Object,
};

class Goals extends Component<void, Props, void> {
  render() {
    const { match } = this.props;

    const goals = match.happenings.filter(
      happening => happening.happening === 'goal',
    );

    return (
      <TableBody>
        {goals.map(goal => (
          <TableRow key={goal.id}>
            <TableColumn>{`${goal.minute}'`}</TableColumn>
          <TableColumn>
              <Icon name="futbol-o" />
              {' '}
              {goal.hometeam === '0'
                ? match.matchinfo.awayteam_id
                : match.matchinfo.hometeam_id}
              {goal.scorer && `: ${goal.scorer}`}
              {goal.assist && `, (${goal.assist})`}
            </TableColumn>
          </TableRow>
        ))}
      </TableBody>
    );
  }
}

export default Goals;
