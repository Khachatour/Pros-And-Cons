import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col } from 'react-bootstrap';
import List from './components/List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div className="App-intro container" style={{ display: 'inline' }}>
          Can I eat McDonalds
          <Row>
            <Col md={6}>
              Pros
              <List
                valueArr={
                  ['It is really taste', 'It is really taste', 'It is really taste', 'It is really taste', 'It is really taste','']
                } />
            </Col>
            <Col md={6}>
              Cons
              <List
                valueArr={
                  ['Too Expensive', 'New Entry','']
                } />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
