import { useState } from 'react'
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavOutput from './components/NavOutput.jsx'
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx'
import MyTweetPage from './pages/MyTweetPage.jsx';

function App() {
  return (
    <Router>
      <Container fluid className="app">
        <Row className="justify-content-center">
          <header>
            <NavOutput />
          </header>
        </Row>
        <Row  className="">
          <Col className="bg-light border"
      sm={{
        offset: 4,
        order: 2,
        size: 4
      }}>
          <main>
            <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/tweet" element={<MyTweetPage />} />
            </Routes>
          </main>
          </Col>
        </Row>
        <Row>
          <footer>
            {/* Add footer here */}
          </footer>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
