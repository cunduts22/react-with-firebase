import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
export default class Login extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       user: {
//         username: 'admin',
//         passwod: 'admin'
//       },
//       referers: false
//     }
//   }

//   handleSubmit(e) {
//     if(this.state.user.username === this.refs.use1.value && this.state.user.passwod === this.refs.pas1.value) {
//       console.log('success');
// this
//   .props
//   .history
//   .push('/auth/home');
//     } else {
//       alert('Login Fail');
//     }
//     e.preventDefault();
//   }

  render() {
    return (
      <div className="container">
      <h3 className="display-3 lead">Please Login</h3>
        <form onSubmit={this.handleSubmit.bind(this)} className="form">
          <div className="form-group">
            <input type="text" ref="use1" className="form-control" name="usernamed" placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="password" ref="pas1" className="form-control" name="passwd" placeholder="Password" />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Login" />
          </div>
        </form>
        </div>
    );
  }
}