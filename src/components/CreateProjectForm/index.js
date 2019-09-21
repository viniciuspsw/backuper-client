import React from 'react';
import {
  Container, Title, TitleText, Form, FormGroup,
} from './styles';
import FormLabel from '../FormLabel';
import FormInput from '../FormInput';
import FormSelect from '../FormSelect';
import FormButton from '../FormButton';
import FormError from '../FormError';

function CreateProjectForm() {
  const availableDrivers = [{ id: 'mongodb', name: 'MongoDB' }];

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Title>
        <TitleText>Novo projeto</TitleText>
      </Title>
      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <FormLabel>Nome do projeto</FormLabel>
          <FormInput placeholder="ex: LIQ" />
          <FormError hide>Digite o nome do projeto.</FormError>
        </FormGroup>
        <FormGroup>
          <FormLabel>Driver de conexão</FormLabel>
          <FormSelect>
            {availableDrivers.map((el) => (<option value={el.id}>{el.name}</option>))}
          </FormSelect>
          <FormError hide>Escolha o driver de conexão com o banco de dados.</FormError>
        </FormGroup>
        <FormGroup>
          <FormLabel>URL de conexão</FormLabel>
          <FormInput placeholder="ex: mongodb://localhost:2017/liq" />
          <FormError hide>Digite a URL de conexão ao banco de dados.</FormError>
        </FormGroup>
        <FormButton>Salvar</FormButton>
      </Form>
    </Container>
  );
}

export default CreateProjectForm;
