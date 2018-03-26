import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Login from './components/login/Login.jsx';
import Body from './components/Body.jsx';
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
class Main extends Component {
    render() {
        return (
            // <Router>
            //     <div>
            //         <Route exact path="/" component={Login} />
            //         <Route path="/auth" component={Body} />                   
            //     </div>
            // </Router>
            <div>
                <div className="container">
                <Body />
                </div>
            </div>
            // <div>
            //     <Header />
            //     <p className="lead">Home</p>
            // </div>
        );
    }
}

export default Main;


