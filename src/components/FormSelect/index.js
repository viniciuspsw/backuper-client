import React from 'react';
import PropTypes from 'prop-types';
import { Select } from './styles';

const FormSelect = ({ children }) => <Select>{children}</Select>;

FormSelect.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormSelect;
