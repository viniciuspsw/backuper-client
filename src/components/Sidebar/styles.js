import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import colors from '../../styles/colors';

export const Container = styled.div`
  padding: 40px;
  border-radius: 24px;
  background-color: #fff;
  min-width: 400px;
  height: 100%;
  box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.05);
`;

export const Logo = styled.img`
  max-width: 170px;
  margin: 0 16px;
`;

export const Nav = styled.div`
  margin-top: 40px;
`;

export const NavItem = styled(NavLink)`
  color: ${colors.text};
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  border-radius: 24px;
  padding: 12px 16px;
  transition: 0.1s all;
  margin-bottom: 10px;

  &:hover {
    background-color: ${colors.background};
  }

  &.active {
    background-color: ${colors.secondary};
    color: #fff;

    svg {
      color: #fff;
    }
  }

  svg {
    margin-right: 16px;
    color: ${colors.grey};
  }
`;
