/**
 *
 * RepoListItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';

import { createStructuredSelector } from 'reselect/lib/index';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import NormalIssueIcon from 'components/IssueIcon';
import NormalA from 'components/A';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: space-between;
`;

const RepoLink = styled(NormalA)`
  height: 100%;
  color: black;
  display: flex;
  align-items: center;
  width: 100%;
`;

const IssueLink = styled(NormalA)`
  height: 100%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IssueIcon = styled(NormalIssueIcon)`
  fill: #ccc;
  margin-right: 0.25em;
`;

/* eslint-disable react/prefer-stateless-function */
export class RepoListItem extends React.PureComponent {
  render() {
    const { item } = this.props;
    let nameprefix = '';

    // If the repository is owned by a different person than we got the data for
    // it's a fork and we should show the name of the owner
    if (item.owner.login !== this.props.currentUser) {
      nameprefix = `${item.owner.login}/`;
    }

    const content = (
      <Wrapper>
        <RepoLink href={item.html_url} target="_blank">
          {nameprefix + item.name}
        </RepoLink>
        <IssueLink href={`${item.html_url}/issues`} target="_blank" />
        <IssueIcon />
        <FormattedNumber value={item.open_issues_count} />
      </Wrapper>
    );

    return <ListItem key={`repo-list-item-${item.full_name}`} item={content} />;
  }
}

RepoListItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser,
});

export default connect(mapStateToProps)(RepoListItem);
