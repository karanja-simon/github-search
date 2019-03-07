import { takeLatest, call, put, select } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import request from 'utils/request';
import { repoLoadingError, reposLoaded } from 'containers/App/actions';
import { makeSelectUsername } from './selectors';

export function* getRepos() {
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (error) {
    yield put(repoLoadingError(error));
  }
}

// Individual exports for testing
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
}
