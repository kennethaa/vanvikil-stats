// @flow

import type { Match } from 'react-router-dom';

export type FeedConfig = {
  feed: string,
  params?: (Options, Match) => string | void,
  required?: boolean,
};
export type PageConfig = {
  feeds?: {
    [key: string]: FeedConfig,
  },
};

export type Options = {};

export type DataResponse = {
  query: string,
  json?: Object,
  error?: Error,
};
export type Data = {
  [key: string]: DataResponse,
};

export type Actions = {
  saveNewData: Data => void,
};

export type Path = string;
export type Route = {
  path?: Path,
  nav?: string,
  component: ReactClass<*>,
  exact?: boolean,
};
export type Routes = Array<Route>;
