import styled from 'styled-components';
import PropTypes from 'prop-types';
import { rounded } from '../../utils/styleVars';

const RoundedImage = styled.img`
    width: 100%;
    border-radius: ${(props) => rounded[props.rounded]};
`;

RoundedImage.propTypes = {
  rounded: PropTypes.oneOf(Object.keys(rounded)),
};

RoundedImage.defaultProps = {
  rounded: 'm',
};

export default RoundedImage;
