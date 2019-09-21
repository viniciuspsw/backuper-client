import React from 'react';
import { Container, Content } from './styles';
import Sidebar from '../../components/Sidebar';
import CurrentUser from '../../components/CurrentUser';
import ProjectsList from '../../components/ProjectsList';

const Projects = () => (
  <Container>
    <Sidebar />
    <Content>
      <CurrentUser />
      <ProjectsList />
    </Content>
  </Container>
);

export default Projects;
