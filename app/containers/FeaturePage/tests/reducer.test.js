import { fromJS } from 'immutable';
import featurePageReducer from '../reducer';

describe('featurePageReducer', () => {
  it('returns the initial state', () => {
    expect(featurePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
