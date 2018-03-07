import { createSelector } from 'reselect';
import _ from 'lodash';

export const getAppStore = store => store.app;

export const getApiStatus = createSelector(
  [getAppStore],
  (appStore) => {
    return _.get(appStore, 'apiStatus');
  }
);

export const getLoadedStatus = createSelector(
  [getAppStore],
  (appStore) => {
    return _.get(appStore, 'loaded');
  }
);