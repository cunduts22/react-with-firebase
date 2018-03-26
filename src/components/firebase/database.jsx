import React, { Component } from 'react';
import firebase from 'firebase';
import ViewData from './viewdata.jsx';
export default class Databasis extends Component {
  constructor() {
      super();
     
      this.state = {
          dataku: {}
      }
  }

  items = {
    id:'1015',
    name: 'Edward Prestige'
  }
  
  handleSubmitted(e) {
    
        e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitted.bind(this)} className="form">
            <input type="text" className="form-control" ref="ganti" placeholder="Ganti Nama"/>
            <br />
            <input type="submit" className="btn btn-primary" value="submit"/>
        </form>
      </div>
    )
  }
}
