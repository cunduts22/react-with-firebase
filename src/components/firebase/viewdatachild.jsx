import React, { Component } from 'react'

export default class ViewDataChild extends Component {
  render() {
      
    return (
      <div>
        <p className="lead">{this.props.data.id}</p>
        <p className="lead">{this.props.data.name}</p>
      </div>
    )
  }
}
