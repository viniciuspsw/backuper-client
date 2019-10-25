import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Container, Content } from './styles';
import Sidebar from '../../components/Sidebar';
import CurrentUser from '../../components/CurrentUser';
import ProjectDetails from '../../components/ProjectDetails';
import { apiUrl } from '../../config/api';

const ShowProject = ({ match, location }) => {
  const { params: { id } } = match;
  const [project, setProject] = useState(null);

  useEffect(() => {
    const getProject = async () => {
      try {
        const response = await axios.get(`${apiUrl}/projects/${id}`);

        setProject(response.data.project);
      } catch (error) {
        console.log(error);
      }
    };

    if (!project) {
      if (location.state) {
        setProject(location.state.project);
      } else {
        getProject();
      }
    }
  }, [location, project, id]);

  return (
    <Container>
      <Sidebar />
      <Content>
        <CurrentUser />
        <ProjectDetails project={project} />
      </Content>
    </Container>
  );
};

ShowProject.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default ShowProject;
