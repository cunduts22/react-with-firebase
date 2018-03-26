import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class ViewMyDb extends Component {
  render() {
    return (
      <div>
        <li>{this.props.view.id} </li>
        <li>{this.props.view.barang.nama_barang} </li>
        <li>{this.props.view.barang.harga_barang} </li>
      </div>
    )
  }
}

ViewMyDb.propTypes = {
    view: PropTypes.object
}