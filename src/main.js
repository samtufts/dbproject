import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './login';
// import Signup from '../pages/Signup';

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Login}></Route>
            {/* <Route exact path='/signup' component={Signup}></Route> */}
        </Switch>
    );
}

export default Main;