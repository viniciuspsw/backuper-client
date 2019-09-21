import React from 'react';
import { FiDatabase, FiUsers } from 'react-icons/fi';
import {
  Container, Logo, Nav, NavItem,
} from './styles';
import * as logo from '../../assets/images/logo.png';

const Sidebar = () => (
  <Container>
    <Logo src={logo} />
    <Nav>
      <NavItem exact to="/">
        <FiDatabase size={18} />
        Projetos
      </NavItem>
      <NavItem to="/users">
        <FiUsers size={18} />
        Usuários
      </NavItem>
    </Nav>
  </Container>
);

export default Sidebar;
