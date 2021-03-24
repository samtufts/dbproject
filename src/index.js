import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { render } from 'react-dom'
import Login from './login';
import Logout from './logout';
import { BrowserRouter } from 'react-router-dom';

// const Root = () => (
//   <>
//     {/* <Login /> */}
//     <App />
//     {/* <Logout /> */}

//   </>
    
  
// )

// render(
//   <Root />, document.getElementById('root')
// )

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));