import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Fordb from './dababes/fordb.jsx';




export default class Body extends Component {


  render() {
    return (
        // <Router>
        //   <div className="container">
        //     <Header />
        //       <Route path="/Auth/home" component={Home} />
        //       <Route path="/Auth/about" compo nent={About} />              
        //     </div>
        // </Router>
        <div className="container">
          <Router>
            <div>
            <Header />        
              <Route path='/home' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/database' component={Fordb}/>                                      
            </div>
          </Router>
        </div>
      // <div>
      //   <p className="lead">Hello World</p>
      // </div>
    )
  }
}
