import styled from 'styled-components';
import colors from '../../styles/colors';

export const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  padding: 12px 16px;
  font-size: 14px;
  color: ${colors.text};
  transition: 0.1s all;

  &:focus, &:active {
    outline: none;
    box-shadow: 0 2px 6px 1px rgba(40, 33, 137, 0.05);
    border-color: ${colors.primary};
  }
`;
