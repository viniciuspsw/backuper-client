import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './styles';

const FormLabel = ({ children }) => <Label>{children}</Label>;

FormLabel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormLabel;
