import React, { FC } from 'react';
import { Button, Menu } from 'antd';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CustomerPage from './CustomerPage';
import { Header } from 'antd/lib/layout/layout';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

export default function App() {
  return (
    <Router>

<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
      </Menu>
    </Header>


      <div>
    
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/customer">
            <CustomerPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home : FC = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

const About= () => {
  return <h2>About</h2>;
}

const Users = () => {
  return <h2>Users</h2>;
}