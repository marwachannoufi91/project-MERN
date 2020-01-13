import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Navbar from './components/navbar/navbar'
import Landing from './components/home/landing'
import Profile from './components/profile'
import Login from './components/login'
import Register from './components/register'


class App extends Component{
  render(){
    return(
      <Router>
        <div >
          <Navbar />
          <Route exact path='/' component={Landing} />
          <div className='container'>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={Profile} />

          </div>
        </div>


      </Router>
    )
  }
}

export default App;
