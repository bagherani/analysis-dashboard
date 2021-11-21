import * as React from 'react';
import Header from './header';
import Nav from './nav';
import Pages from './pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

import { Col, Container, Row } from 'react-bootstrap';

function App() {
  // const [open, setOpen] = React.useState(window.innerWidth > 1024);

  return (
    <Container>
      <Header />
      <Row>
        <Col lg="3">
          <Nav />
        </Col>
        <Col lg="9">
          <Pages />
        </Col>
      </Row>
    </Container>
  );
}

export default App;