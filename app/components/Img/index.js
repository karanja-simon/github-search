/**
 *
 * Img
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  width: 800px;
  height: 400px;
`;

function Img(props) {
  return <Image className={props.className} src={props.src} alt={props.alt} />;
}

Img.propTypes = {
  className: PropTypes.string,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
};

export default Img;
