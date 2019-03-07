/**
 *
 * FeaturePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectFeaturePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class FeaturePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>FeaturePage</title>
          <meta name="description" content="Description of FeaturePage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

FeaturePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  featurePage: makeSelectFeaturePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'featurePage', reducer });
const withSaga = injectSaga({ key: 'featurePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FeaturePage);
