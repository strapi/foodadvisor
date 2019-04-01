/**
 *
 * ProgressBar
 *
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../assets/styles/colors';

const ProgressBar = styled.div`
  background-color: ${colors.darkBeige};
  width: ${props => props.value}%;
  height: 100%;
`;

ProgressBar.defaultProps = {
  value: 0
};

ProgressBar.propTypes = {
  value: PropTypes.number
};

export default ProgressBar;
