import React from 'react';
import PropTypes from 'prop-types';
import { FiAlertCircle } from 'react-icons/fi';
import { Container } from './styles';

const FormError = ({ children, hide }) => (
  <Container hide={hide}>
    <FiAlertCircle size={12} />
    {children}
  </Container>
);

FormError.defaultProps = {
  hide: false,
};

FormError.propTypes = {
  children: PropTypes.node.isRequired,
  hide: PropTypes.bool,
};

export default FormError;
