import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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

export const AddButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: ${colors.primary};
  border-radius: 50%;
  color: #fff;
  cursor: pointer;

  span {
    display: none;
  }

  svg {
    color: #fff;
  }
`;

export const List = styled.div``;

export const ListHeader = styled.div`
  display: flex;
  padding: 14px 0;
`;

export const ListHeaderColumn = styled.div`
  flex: 1;
  font-size: 12px;
  font-weight: 600;
  color: ${colors.text};
  text-transform: uppercase;
  padding: 0 14px;
`;

export const ListItem = styled(NavLink)`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s all;
  opacity: 0.8;
  margin-bottom: 12px;
  border-radius: 24px;
  color: ${colors.blackText};

  &:hover {
    box-shadow: 0 1px 4px 1px rgba(0, 0, 0, .05);
    opacity: 1;
  }
`;

export const ListItemColumn = styled.div`
  flex: 1;
  padding: 14px;
  display: flex;
  align-items: center;
  line-height: 1.2;
`;

export const ProjectIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const BulletStatus = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${(props) => (props.status === 'active' ? '#079e20' : '#eaeaea')};
  margin-right: 14px;
  ${(props) => (props.status === 'active' ? 'animation: shadow-pulse 1.5s infinite;' : '')}

  @keyframes shadow-pulse {
    0% {
      box-shadow: 0 0 0 0px rgba(7, 158, 32, 0.5);
    }

    100% {
      box-shadow: 0 0 0 8px rgba(7, 158, 32, 0);
    }
  }
`;
