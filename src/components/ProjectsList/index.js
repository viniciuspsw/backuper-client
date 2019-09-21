import React from 'react';
import { FiPlus } from 'react-icons/fi';
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

const ProjectsList = () => (
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
      <ListItem>
        <ListItemColumn>
          <ProjectIcon src="https://d301sr5gafysq2.cloudfront.net/e16e88290a29/img/projects/avatars/192/default.png" />
          Teste
        </ListItemColumn>
        <ListItemColumn>
          <BulletStatus status="active" />
          Ativo
        </ListItemColumn>
        <ListItemColumn>hoje, às 14h35min</ListItemColumn>
      </ListItem>
      <ListItem>
        <ListItemColumn>
          <ProjectIcon src="https://d301sr5gafysq2.cloudfront.net/e16e88290a29/img/projects/avatars/192/default.png" />
          Teste
        </ListItemColumn>
        <ListItemColumn>
          <BulletStatus status="inactive" />
          Inativo
        </ListItemColumn>
        <ListItemColumn>ontem, às 12h</ListItemColumn>
      </ListItem>
    </List>
  </Container>
);

export default ProjectsList;
