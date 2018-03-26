import React, { Component } from 'react';
import DbItems from './dbitems.jsx';
import PropTypes from 'prop-types';

export default class DbView extends Component {
    deleteDb(id) {
        this.props.onDelete(id);
    }
  render() {
      let dbItem;
      if (this.props.db) {
          dbItem = this.props.db.map((db2) => {
              return (<DbItems onDelete={this.deleteDb.bind(this)} key={db2.id} db2={db2} />);
          });
      }
    return (
      <div>
          <p className="lead">Show Db Items</p>
        <table className="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nama Barang</th>
                <th scope="col">Harga Barang</th>
                <th scope="col">Kategori</th>
                <th scope="col">Waktu</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {dbItem}
        </tbody>
        </table>
      </div>
    )
  }
}
DbView.propTypes = {
    db: PropTypes.array,
    onDelete : PropTypes.func
}

