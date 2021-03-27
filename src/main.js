import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './login';
import Logout from './logout';
import App from './App'
// import Signup from '../pages/Signup';

const Main = () => {
    {/* The Switch decides which component to show based on the current URL.*/ }
    return (
        <Switch>
            <Route exact path='/login'   component={Login}></Route>
            <Route exact path='/logout'  component={Logout}></Route>
            <Route exact path='/getData' component={App}></Route>
            {/* <Route exact path='/signup' component={Signup}></Route> */}
        </Switch>
    );
}

export default Main;