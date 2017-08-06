// @flow

import type { Routes } from '../types';
import withNavigation from '../hocs/withNavigation';
import Home from '../pages/Home';
import MatchInfo from '../pages/MatchInfo';

const routes: Routes = [
  {
    path: '/',
    component: withNavigation(Home),
    exact: true,
  },
  {
    path: '/match-info/:matchId',
    component: MatchInfo,
    exact: true,
  },
];

export default routes;
