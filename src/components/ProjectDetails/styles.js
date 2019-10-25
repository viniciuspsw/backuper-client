import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  padding: 40px;
  border-radius: 24px;
  background-color: #fff;
  box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleText = styled.h1`
  color: ${colors.blackText};
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 40px;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: #DC4343;
  border-radius: 50%;
  color: #fff;
  border: 0;
  cursor: pointer;
  outline: none;

  span {
    display: none;
  }

  svg {
    color: #fff;
  }
`;
