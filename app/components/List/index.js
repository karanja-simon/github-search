/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 3px;
  overflow: hidden;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  width: 100%;
  max-height: 30em;
  overflow-y: auto;
  padding: 0 1em;
`;

function List(props) {
  const ComponentToRender = props.component;
  let content = <div />;

  // If we have items render them
  if (props.items) {
    content = props.items.map(item => (
      <ComponentToRender key={`item-${item.id}`} item={item} />
    ));
  } else {
    content = <ComponentToRender />;
  }
  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
}

List.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array,
};

export default List;
