// @flow

import type { Players } from '../../types';

import React, { Component } from 'react';
import { page } from '../../hocs';
import { Row, Column } from 'hedron';
import {
  Content,
  ContentTitle,
  ContentBody,
} from '../../components/styled-components';
import SquadPlayers from './SquadPlayers';

type Props = {
  feeds: {
    players?: Players,
  },
};

class Squad extends Component<void, Props, void> {
  render() {
    const { feeds } = this.props;
    const { players } = feeds;

    if (!players || !players.players) {
      return null;
    }

    const squad = players.players.reduce(
      (s, player) => {
        if (player.position === 'goalkeeper') {
          s.goalkeepers.push(player);
        } else if (player.position === 'defender') {
          s.defenders.push(player);
        } else if (player.position === 'midtfielder') {
          s.midtfielders.push(player);
        } else if (player.position === 'striker') {
          s.strikers.push(player);
        }

        return s;
      },
      {
        goalkeepers: [],
        defenders: [],
        midtfielders: [],
        strikers: [],
      }
    );

    return (
      <Row>
        <Column>
          <Content>
            <ContentTitle>
              {'Målvakter'}
            </ContentTitle>
            <ContentBody>
              <SquadPlayers players={squad.goalkeepers} />
            </ContentBody>
          </Content>
          <Content>
            <ContentTitle>
              {'Forsvar'}
            </ContentTitle>
            <ContentBody>
              <SquadPlayers players={squad.defenders} />
            </ContentBody>
          </Content>
          <Content>
            <ContentTitle>
              {'Midtbane'}
            </ContentTitle>
            <ContentBody>
              <SquadPlayers players={squad.midtfielders} />
            </ContentBody>
          </Content>
          <Content>
            <ContentTitle>
              {'Angrep'}
            </ContentTitle>
            <ContentBody>
              <SquadPlayers players={squad.strikers} />
            </ContentBody>
          </Content>
        </Column>
      </Row>
    );
  }
}

export default page({
  nav: true,
  feeds: {
    players: {
      feed: 'players',
      required: true,
    },
  },
})(Squad);
