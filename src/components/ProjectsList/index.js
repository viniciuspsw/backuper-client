import React from 'react';
import PropTypes from 'prop-types';
import { FiPlus } from 'react-icons/fi';
import moment from 'moment';
import {
  Container,
  Title,
  TitleText,
  AddButton,
  List,
  ListHeader,
  ListHeaderColumn,
  ListItem,
  ListItemColumn,
  ProjectIcon,
  BulletStatus,
} from './styles';
import 'moment/locale/pt-br';

const ProjectsList = ({ projects }) => {
  const formatDate = (date) => {
    moment.locale('pt-br');
    return moment(date).fromNow();
  };

  return (
    <Container>
      <Title>
        <TitleText>Projetos</TitleText>
        <AddButton to="/create"><FiPlus size={18} /></AddButton>
      </Title>
      <List>
        <ListHeader>
          <ListHeaderColumn>Nome do projeto</ListHeaderColumn>
          <ListHeaderColumn>Status</ListHeaderColumn>
          <ListHeaderColumn>Último backup</ListHeaderColumn>
        </ListHeader>
        { projects.map((el) => (
          <ListItem key={el._id} to={{ pathname: `/projects/${el._id}`, state: { project: el } }}>
            <ListItemColumn>
              <ProjectIcon src="https://d301sr5gafysq2.cloudfront.net/e16e88290a29/img/projects/avatars/192/default.png" />
              {el.name}
            </ListItemColumn>
            <ListItemColumn>
              <BulletStatus status={el.status} />
              {el.status === 'active' ? 'Ativo' : 'Inativo'}
            </ListItemColumn>
            <ListItemColumn>
              {el.lastBackup ? formatDate(el.lastBackup.createdAt) : 'Nenhum backup'}
            </ListItemColumn>
          </ListItem>
        )) }
      </List>
    </Container>
  );
};

ProjectsList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectsList;
