// @flow

import type { Routes } from '../types';
import NotFound from '../pages/NotFound';
import Overview from '../pages/Overview';
import Live from '../pages/Live';
import LiveMatch from '../pages/LiveMatch';
import Squad from '../pages/squad';
import Teams from '../pages/Teams';
import MatchInfo from '../pages/MatchInfo';

const routes: Routes = [
  {
    path: '/',
    nav: 'Oversikt',
    component: Overview,
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
    path: '/lag',
    nav: 'Lag',
    component: Teams,
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
