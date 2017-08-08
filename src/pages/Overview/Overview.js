// @flow

import type { Players, Player } from '../../types';

import React, { Component } from 'react';
import { page } from '../../hocs';
import { Row, Column } from 'hedron';
import {
  Content,
  ContentTitle,
  ContentBody,
} from '../../components/styled-components';
import OverviewPlayers from './OverviewPlayers';

type Props = {
  feeds: {
    players?: Players,
  },
};

type Team = 'ateam' | 'bteam';
type Item = 'starting' | 'sub' | 'goals' | 'assists' | 'points' | 'stars';

function getTopPlayers(
  players: Array<Player>,
  team: Team,
  item: Item
): Array<Player> {
  const topPlayers = [...players].sort((a, b) => {
    if (!a[team] && !b[team]) {
      return 0;
    }

    if (!a[team]) {
      return 1;
    }

    if (!b[team]) {
      return -1;
    }

    return b[team][item] - a[team][item];
  });

  return topPlayers.slice(0, 5);
}

function getAngryPlayers(players: Array<Player>, team: Team): Array<Player> {
  const angryPlayers = [...players].sort((a, b) => {
    if (!a[team] && !b[team]) {
      return 0;
    }

    if (!a[team]) {
      return 1;
    }

    if (!b[team]) {
      return -1;
    }

    if (b[team].red_cards !== a[team].red_cards)
      return b[team].red_cards - a[team].red_cards;
    else if (b[team].yellowred_cards !== a[team].yellowred_cards)
      return b[team].yellowred_cards - a[team].yellowred_cards;
    else if (b[team].yellow_cards !== a[team].yellow_cards)
      return b[team].yellow_cards - a[team].yellow_cards;
    return a.name.localeCompare(b.name);
  });

  return angryPlayers.slice(0, 5);
}

const STARS_ITEMS = [undefined, undefined, 'stars'];
const GOALS_ITEMS = [undefined, undefined, 'goals'];
const ASSISTS_ITEMS = [undefined, undefined, 'assists'];
const POINTS_ITEMS = [undefined, undefined, 'points'];
const ANGRY_ITEMS = ['yellow_cards', 'yellowred_cards', 'red_cards'];
const ANGRY_HEADERS = ['Gule kort', 'To gule kort', 'Røde kort'];

class Overview extends Component<void, Props, void> {
  render() {
    const { feeds } = this.props;

    if (!feeds.players || !feeds.players.players) {
      return null;
    }

    const { players } = feeds.players;

    return (
      <Row>
        {['ateam', 'bteam'].map(team =>
          <Column lg={6} key={team}>
            <Content>
              <ContentTitle>
                {team === 'ateam' ? 'A-lag' : 'B-lag'}
              </ContentTitle>
              <ContentBody>
                <OverviewPlayers
                  header="Stjerner"
                  players={getTopPlayers(players, team, 'stars')}
                  team={team}
                  items={STARS_ITEMS}
                />
                <OverviewPlayers
                  header="Toppscorer"
                  players={getTopPlayers(players, team, 'goals')}
                  team={team}
                  items={GOALS_ITEMS}
                />
                <OverviewPlayers
                  header="Servitøren"
                  players={getTopPlayers(players, team, 'assists')}
                  team={team}
                  items={ASSISTS_ITEMS}
                />
                <OverviewPlayers
                  header="Poengbørs"
                  players={getTopPlayers(players, team, 'points')}
                  team={team}
                  items={POINTS_ITEMS}
                />
                <OverviewPlayers
                  header="Råtassen"
                  players={getAngryPlayers(players, team)}
                  team={team}
                  items={ANGRY_ITEMS}
                  itemsHeaders={ANGRY_HEADERS}
                />
              </ContentBody>
            </Content>
          </Column>
        )}
      </Row>
    );
  }
}

export default page({
  feeds: {
    players: {
      feed: 'players',
      required: true,
    },
  },
})(Overview);
