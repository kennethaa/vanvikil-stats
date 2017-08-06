// @flow

import type { Match } from 'react-router-dom';
import type {
  Routes,
  Path,
  Options,
  Data,
  DataResponse,
  FeedConfig,
  PageConfig,
} from '../types';

import { matchRoutes } from 'react-router-config';

function getFeed(
  options: Options,
  query: string,
  required: boolean = false
): Promise<DataResponse> {
  return new Promise((resolve, reject) =>
    fetch(`https://live.vanvikil.no/api/v1/${query}`, {
      mode: 'cors',
    })
      .then(response => response.json())
      .then(json =>
        resolve({
          query,
          json,
        })
      )
      .catch(error => {
        if (required) {
          return reject({
            query,
            error,
          });
        }

        return resolve({
          query,
          error,
        });
      })
  );
}

function getFeedWithParams(
  fishnetFeedConfig: FeedConfig,
  options: Options,
  match: Match
): string {
  const params = fishnetFeedConfig.params(options, match);

  if (params) {
    return `${fishnetFeedConfig.feed}/${params}`;
  }

  return fishnetFeedConfig.feed;
}

export default function getData(
  routes: Routes,
  path: Path,
  options: Options
): Promise<Data> {
  return new Promise((resolve, reject) =>
    Promise.all(
      matchRoutes(routes, path).map(matchedRoute => {
        const { match, route } = matchedRoute;

        if (route.component && route.component.pageConfig) {
          const pageConfig: PageConfig = route.component.pageConfig;

          if (pageConfig.feeds) {
            return Promise.all(
              Object.keys(pageConfig.feeds).reduce((feeds, feedKey) => {
                const fishnetFeedConfig =
                  pageConfig.feeds && pageConfig.feeds[feedKey];

                if (!fishnetFeedConfig) {
                  return feeds;
                }

                const query = getFeedWithParams(
                  fishnetFeedConfig,
                  options,
                  match
                );

                feeds.push(getFeed(options, query, fishnetFeedConfig.required));

                return feeds;
              }, [])
            );
          }
        }

        return Promise.resolve(null);
      })
    )
      .then(routesData => {
        const data = routesData.reduce((d, routeData) => {
          if (routeData) {
            routeData.forEach(feed => {
              if (d[feed.query]) {
                console.warn(
                  `Feed ${feed.query} fetched more than once in same request`
                );
                return;
              }

              d[feed.query] = feed;
            });
          }

          return d;
        }, {});

        return resolve(data);
      })
      .catch(reject)
  );
}
