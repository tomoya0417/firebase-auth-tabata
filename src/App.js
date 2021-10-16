import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import Main from './pages/Main';

const App = () =>{

  return (
    <Router>
      <Switch>
           <Route path="/" exact component={Login} />
           <Route path="/CreateUser" exact component={CreateUser} />
           <Route path="/Main" exact component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
