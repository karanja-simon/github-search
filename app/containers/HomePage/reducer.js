/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_USERNAME } from './constants';

export const initialState = fromJS({
  username: '',
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state.set('username', action.name.replace(/@/gi, ''));
    default:
      return state;
  }
}

export default homePageReducer;
