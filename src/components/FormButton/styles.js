import styled from 'styled-components';
import colors from '../../styles/colors';

export const Button = styled.button`
  display: block;
  padding: 12px 24px;
  border-radius: 24px;
  background-color: ${colors.primary};
  color: #fff;
  border: 0;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    box-shadow: 0 2px 6px 2px rgba(40, 33, 137, 0.3);
  }
`;
