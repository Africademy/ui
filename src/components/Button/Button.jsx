import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import * as Styles from './style';

const ButtonStyled = style.div`  
  ${Styles.buttonbase};
  ${props => Styles[props.size]};
  ${props => Styles[props.type]};
`;

const ButtonArrow = style.div`
  ${Styles.split};
`;

/** All buttons, including text, link and split-buttons, follow the same core principles in dimensions, padding, and font sizes.
 * Combined with simple modifiers, they can be changed in size and appearance.  */
const Button = ({
  children,
  disabled,
  onClick,
  type,
  size,
  label,
  isSplit,
}) => (
  <ButtonStyled
    onClick={onClick}
    disabled={disabled}
    size={size}
    type={type}
    isSplit={isSplit}
    aria-label={label || null}
  >
    {children}
    {isSplit && <ButtonArrow>▾</ButtonArrow>}
  </ButtonStyled>
);


Button.propTypes = {
  /** Children node */
  children: PropTypes.node.isRequired,

  /** Is the button disabled */
  disabled: PropTypes.bool,

  /** Size of the Button */
  size: PropTypes.oneOf(['small', 'large', 'medium']),

  /** OnClick handler */
  onClick: PropTypes.func.isRequired,

  /** Button label for accessibility */
  label: PropTypes.string.isRequired,

  /** Type of button */
  type: PropTypes.oneOf(['link', 'primarySplit', 'primary', 'secondary', 'text']).isRequired,

  /** Is the Button Split  */
  isSplit: PropTypes.bool,
};


Button.defaultProps = {
  disabled: false,
  isSplit: false,
  size: 'medium',
};


export default Button;
