import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import Layout from './containers/Layout';
import { BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Layout>
        <BaseRouter />
        </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
