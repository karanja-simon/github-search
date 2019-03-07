import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the featurePage state domain
 */

const selectFeaturePageDomain = state => state.get('featurePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by FeaturePage
 */

const makeSelectFeaturePage = () =>
  createSelector(selectFeaturePageDomain, substate => substate.toJS());

export default makeSelectFeaturePage;
export { selectFeaturePageDomain };
