// @flow

import type { Routes } from '../types';
import NotFound from '../pages/NotFound';
import Stats from '../pages/Stats';
import Live from '../pages/Live';
import LiveMatch from '../pages/LiveMatch';
import Squad from '../pages/Squad';
import ATeam from '../pages/ATeam';
import BTeam from '../pages/BTeam';
import MatchInfo from '../pages/MatchInfo';

const routes: Routes = [
  {
    path: '/',
    nav: 'Stats',
    component: Stats,
    exact: true,
  },
  {
    path: '/live/match/:matchId',
    component: LiveMatch,
    exact: true,
  },
  {
    path: '/live',
    nav: 'Live',
    component: Live,
    exact: false,
  },
  {
    path: '/spillerstall',
    nav: 'Spillerstall',
    component: Squad,
    exact: true,
  },
  {
    path: '/a-lag',
    nav: 'A-lag',
    component: ATeam,
    exact: true,
  },
  {
    path: '/b-lag',
    nav: 'B-lag',
    component: BTeam,
    exact: true,
  },
  {
    path: '/match-info/:matchId',
    component: MatchInfo,
    exact: true,
  },
  {
    component: NotFound,
  },
];

export default routes;
