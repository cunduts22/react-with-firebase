import React, { Component } from 'react'
import Todoitem from './TodoItem.jsx';
import PropTypes from 'prop-types';

class TodosApi extends Component {

  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return (<Todoitem todo={todo} key={todo.id} />);
      });
    }
    return (
      <div>
        <div className="todos">
                    <h3>Todo List</h3>
                    <div className="table-responsive">
                    <table className = "table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">User Id</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody className="bodylist">
                         {todoItems}
                    </tbody>
                    </table>
                    </div>
                </div>
      </div>
    )
  }

  
}
TodosApi.propTypes = {
  todos: PropTypes.array
}

export default TodosApi;