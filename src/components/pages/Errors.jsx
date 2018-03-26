import React, { Component } from 'react'
export default class Errors extends React.Component {
  render() {
      let nama;
    return (
      <div>
        <p className="lead">
            <strong>{this.props.nama}</strong> <br />
            {this.props.pesan}
        </p>
      </div>
    )
  }
}
