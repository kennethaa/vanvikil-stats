// @flow

import React, { Component } from 'react';
import Icon from 'react-fa';

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
      <tbody>
        {goals.map(goal => (
          <tr key={goal.id}>
            <td>{`${goal.minute}'`}</td>
            <td>
              <Icon name="futbol-o" />
              {' '}
              {goal.hometeam === '0'
                ? match.matchinfo.awayteam_id
                : match.matchinfo.hometeam_id}
              {goal.scorer && `: ${goal.scorer}`}
              {goal.assist && `, (${goal.assist})`}
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default Goals;
