import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {
  Container, Title, TitleText, Form, FormGroup,
} from './styles';
import FormLabel from '../FormLabel';
import FormInput from '../FormInput';
import FormSelect from '../FormSelect';
import FormButton from '../FormButton';
import FormError from '../FormError';

function CreateProjectForm({ history }) {
  const [name, setName] = useState(null);
  const [connectionDriver, setConnectionDriver] = useState('mongodb');
  const [connectionUrl, setConnectionUrl] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [connectionDriverError, setConnectionDriverError] = useState(null);
  const [connectionUrlError, setConnectionUrlError] = useState(null);

  const availableDrivers = [{ id: 'mongodb', name: 'MongoDB' }];

  const validateForm = () => {
    if (!name) {
      setNameError('Digite o nome do projeto.');
      return false;
    }

    setNameError(null);

    if (!connectionDriver) {
      setConnectionDriverError('Escolha o driver de conexão com o banco de dados.');
      return false;
    }

    setConnectionDriverError(null);

    if (!connectionUrl) {
      setConnectionUrlError('Digite a URL de conexão ao banco de dados.');
      return false;
    }

    setConnectionUrlError(null);
    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const data = { name, connectionDriver, connectionUrl };

    try {
      await axios.post('http://localhost:9000/api/projects', data);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Title>
        <TitleText>Novo projeto</TitleText>
      </Title>
      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <FormLabel>Nome do projeto</FormLabel>
          <FormInput placeholder="ex: LIQ" onChange={(e) => setName(e.target.value)} />
          <FormError hide={!nameError}>Digite o nome do projeto.</FormError>
        </FormGroup>
        <FormGroup>
          <FormLabel>Driver de conexão</FormLabel>
          <FormSelect onChange={(e) => setConnectionDriver(e.target.value)}>
            {availableDrivers.map((el) => (<option key={el.id} value={el.id}>{el.name}</option>))}
          </FormSelect>
          <FormError hide={!connectionDriverError}>Escolha o driver de conexão com o banco de dados.</FormError>
        </FormGroup>
        <FormGroup>
          <FormLabel>URL de conexão</FormLabel>
          <FormInput placeholder="ex: mongodb://localhost:2017/liq" onChange={(e) => setConnectionUrl(e.target.value)} />
          <FormError hide={!connectionUrlError}>Digite a URL de conexão ao banco de dados.</FormError>
        </FormGroup>
        <FormButton>Salvar</FormButton>
      </Form>
    </Container>
  );
}

CreateProjectForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(CreateProjectForm);
