import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from "./login/login"
import Forgotten from './forgotten/forgotten'
import MainPage from "./main-page/main-page"
function App() {
    return (
      <main>
        <Switch>
          <Route path = "/" component = {Login} exact>
          </Route>
          <Route path = "/forgotten" component = {Forgotten}>
          </Route>
          <Route path="/main-page" component = {MainPage}>
          </Route>
        </Switch>
      </main>
    );
  }
  
  export default App;