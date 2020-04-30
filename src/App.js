import React, { Component } from 'react';
// import { Button } from 'antd';
import { HashRouter ,Switch ,Route } from 'react-router-dom';
// 路由
import Login from './pages/login/Login'
import Home from './pages/home/Home'

 class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route  path="/" component={Login} />
          <Route  path="/login" component={Login} />
          <Route  path="/home" component={Home} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App