import React from 'react';
import { Container, Content } from './styles';
import Sidebar from '../../components/Sidebar';
import CurrentUser from '../../components/CurrentUser';
import CreateProjectForm from '../../components/CreateProjectForm';

const CreateProject = () => (
  <Container>
    <Sidebar />
    <Content>
      <CurrentUser />
      <CreateProjectForm />
    </Content>
  </Container>
);

export default CreateProject;
