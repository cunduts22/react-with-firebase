import React, { Component } from 'react';
import * as firebase from 'firebase';
import DbView from '../dababes/dbview.jsx';
export default class About extends Component {

  constructor() {
    super();

    this.state = {
      db: []
    }
  }

  componentWillMount() {
    let items;
    
  }

    

  render() {
    return (
      <div>
        <DbView db={this.state.db}/>
      </div>
    )
  }
}
