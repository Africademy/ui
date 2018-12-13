import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const Pinterest = ({ type, size }) => (
  <Icon type={type} size={size}>
    <StyledIcon type={type} fillRule="evenodd" clipRule="evenodd" d="M7.99997 0C3.58173 0 0 3.58173 0 7.99997C0 11.3891 2.10865 14.2865 5.08457 15.4521C5.01467 14.8191 4.95152 13.8457 5.11238 13.1547C5.2577 12.5304 6.05041 9.1782 6.05041 9.1782C6.05041 9.1782 5.81111 8.69896 5.81111 7.99046C5.81111 6.87806 6.45587 6.04759 7.25868 6.04759C7.94121 6.04759 8.27087 6.56008 8.27087 7.17454C8.27087 7.86088 7.83386 8.8871 7.60834 9.83811C7.41987 10.6344 8.00764 11.2838 8.793 11.2838C10.2149 11.2838 11.3078 9.78454 11.3078 7.62034C11.3078 5.70494 9.9315 4.36565 7.96619 4.36565C5.68999 4.36565 4.35384 6.07296 4.35384 7.83747C4.35384 8.52498 4.61871 9.26234 4.94922 9.66309C5.0146 9.7423 5.02418 9.81175 5.00477 9.89254C4.94398 10.1453 4.80902 10.6887 4.78252 10.7998C4.74764 10.9462 4.66658 10.9773 4.51497 10.9068C3.51582 10.4417 2.89113 8.98095 2.89113 7.80756C2.89113 5.284 4.72468 2.96648 8.17703 2.96648C10.9522 2.96648 13.1089 4.94398 13.1089 7.58683C13.1089 10.344 11.3705 12.5629 8.9576 12.5629C8.14699 12.5629 7.38485 12.1417 7.12398 11.6443C7.12398 11.6443 6.72284 13.1717 6.62559 13.5459C6.44499 14.2409 5.95742 15.1119 5.6313 15.6432C6.3798 15.8749 7.17526 16 7.99997 16C12.4183 16 16 12.4183 16 7.99997C16 3.58173 12.4183 0 7.99997 0Z" fill="black" />
  </Icon>
);

Pinterest.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};

Pinterest.defaultProps = {
  size: 'medium',
  type: 'secondary',
};


export default Pinterest;
