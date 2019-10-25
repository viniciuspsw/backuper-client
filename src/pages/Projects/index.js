import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Content } from './styles';
import Sidebar from '../../components/Sidebar';
import CurrentUser from '../../components/CurrentUser';
import ProjectsList from '../../components/ProjectsList';
import { apiUrl } from '../../config/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${apiUrl}/projects`);
        setProjects(response.data.projects);
      } catch (error) {
        // error
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Container>
      <Sidebar />
      <Content>
        <CurrentUser />
        <ProjectsList projects={projects} />
      </Content>
    </Container>
  );
};

export default Projects;
