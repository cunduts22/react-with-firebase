import React, { Component } from 'react'
import TodosApi from '../utils/Todosapi.jsx';
import $ from 'jquery';


export default class Home extends React.Component {
constructor() {
  super();
  this.state = {
    todos: []
  }
}

getTodos() {
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    dataType: 'json',
    cache: false,
    success: function (data) {
      this
        .setState({
          todos: data
        }, function () {
          console.log(this.state);
        });
    }.bind(this),
    error: function (xhr, status, err) {
      console.log(err);
    }
  });
}

componentWillMount() {
  this.getTodos();
}

componentDidMount() {
  this.getTodos();
}
  render() {
    return (
      <div> 
        <TodosApi todos={this.state.todos}/>
      </div>
    )
  }
}
