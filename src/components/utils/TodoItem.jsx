import React, { Component } from 'react'
import PropTypes from 'prop-types';
class TodoItem extends Component {
  render() {
    return (
       <tr scope="row">
            <td>{this.props.todo.id}</td>
            <td>{this.props.todo.title}</td>
            <td>{this.props.todo.userId}</td>
        </tr>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object
}

export default TodoItem;