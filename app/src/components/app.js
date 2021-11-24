import * as React from 'react';
import Header from './shared/header';
import Nav from './shared/nav';
import Pages from './pages';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import './app.scss';

import { Col, Container, Row } from 'react-bootstrap';

function App() {
  let [state, setState] = useState({ menuIsOpen: false });

  const toggleMenu = () => {
    setState({ ...state, menuIsOpen: !state.menuIsOpen });
  };

  return (
    <Container>
      <Header toggleMenu={toggleMenu} />
      <Row className="position-relative">
        <Col lg="12" xl="2">
          <Nav onClose={toggleMenu} menuIsOpen={state.menuIsOpen} />
        </Col>
        <Col lg="12" xl="10" sm="12">
          <Pages />
        </Col>
      </Row>
    </Container>
  );
}

export default App;