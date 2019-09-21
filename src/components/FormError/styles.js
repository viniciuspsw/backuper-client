import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5px;
  font-size: 11px;
  font-weight: 600;
  color: #cc0b06;
  align-items: center;
  display: ${(props) => (props.hide ? 'none' : 'flex')};

  svg {
    margin-right: 5px;
  }
`;
