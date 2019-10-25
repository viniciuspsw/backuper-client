import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle, Wrapper, Container } from './styles/global';
import Projects from './pages/Projects';
import CreateProject from './pages/CreateProject';
import ShowProject from './pages/ShowProject';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Switch>
            <Route path="/" exact component={Projects} />
            <Route path="/create" component={CreateProject} />
            <Route path="/projects/:id" component={ShowProject} />
          </Switch>
        </Container>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
