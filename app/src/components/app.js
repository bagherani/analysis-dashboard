import * as React from 'react';
import Header from './shared/header';
import Nav from './shared/nav';
import Pages from './pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import './app.scss';

import { Col, Container, Row } from 'react-bootstrap';

function App() {
  // const [open, setOpen] = React.useState(window.innerWidth > 1024);

  return (
    <Container>
      <Header />
      <Row>
        <Col lg="2">
          <Nav />
        </Col>
        <Col lg="10">
          <Pages />
        </Col>
      </Row>
    </Container>
  );
}

export default App;