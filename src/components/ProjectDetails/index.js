import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { FiTrash } from 'react-icons/fi';
import { apiUrl } from '../../config/api';
import {
  Container, Title, TitleText, DeleteButton,
} from './styles';

function ProjectDetails({ project, history }) {
  const handleDeleteProject = async () => {
    if (global.confirm('Tem certeza que deseja excluir este projeto?')) {
      try {
        axios.delete(`${apiUrl}/projects/${project._id}`);
        history.push('/');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <Title>
        <TitleText>{project && project.name}</TitleText>
        <DeleteButton onClick={handleDeleteProject}><FiTrash size={18} /></DeleteButton>
      </Title>
    </Container>
  );
}

ProjectDetails.defaultProps = {
  project: null,
};

ProjectDetails.propTypes = {
  project: PropTypes.object,
  history: PropTypes.object.isRequired,
};

export default withRouter(ProjectDetails);
