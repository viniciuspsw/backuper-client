import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';

const FormButton = ({ children }) => <Button>{children}</Button>;

FormButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormButton;
