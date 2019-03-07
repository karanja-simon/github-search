import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePage = state => state.get('homePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectUsername = () =>
  createSelector(selectHomePage, homePageState =>
    homePageState.get('username'),
  );

export { selectHomePage, makeSelectUsername };
