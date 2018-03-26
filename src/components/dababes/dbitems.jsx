import React, { Component } from 'react'
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


export default class DbItems extends Component {
constructor(){
    super();
    this.state = {
        isi: []
    }
}
    deleteDb(id) {
        this.props.onDelete(id);
    }

  render() {
      let waktu = this.props.db2.time
      let showwaktu;
      waktu = new Date(waktu);
        showwaktu = waktu.toLocaleTimeString('en',{
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
       
    return (
      <tr scope="row">
        <td>{this.props.db2.id}</td>
        <td>{this.props.db2.nama_barang}</td>
        <td>{this.props.db2.harga_barang}</td>
        <td>{this.props.db2.kategori_barang}</td>       
        <td>{showwaktu}</td>
        <td><a href="javascript:void(0)" onClick={this.deleteDb.bind(this, this.props.db2.id)} >X</a></td>
      </tr>
    )
  }
}
DbItems.propTypes = {
    db2: PropTypes.object,
    onDelete: PropTypes.func
}
