import React, { Component } from 'react'
import uuid from 'uuid';
import PropTypes from 'prop-types';

export default class FormDb extends Component {
    constructor() {
        super();
         this.state = {
            newDb:{}
        }
    }

    static defaultProps = {
        categories: ['Makanan', 'Minuman', 'Elektronik']
    }

    handleSubmit(e) {
        if(this.refs.n_bar.value === '' || this.refs.h_bar.value === '' || this.refs.opsi.value === '') {
            alert('Data Required');
        } else {
            this.setState({
               newDb:  {
                id : uuid.v4(),
                nama_barang : this.refs.n_bar.value,
                harga_barang : this.refs.h_bar.value,
                kategori_barang : this.refs.opsi.value,
                time : (new Date()).getTime()
            }}, function() {
                this.props.addData(this.state.newDb)
            }
        );
        }
        e.preventDefault();
    }

  render() {
      let categoryOption = this.props.categories.map(category => {
          return (<option key={category} value={category}>{category}</option>)
      });

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} className="form">
            <div className="form-group">
                <input type="text" ref="n_bar" className="form-control" placeholder="Nama Barang" />
            </div>
            <div className="form-group">
                <input type="text" ref="h_bar" className="form-control" placeholder="Harga Barang" />
            </div>
            <div className="form-group col-md-4 offset-col">
                <select ref="opsi" className="form-control">
                    <option>Kategory</option>
                    {categoryOption}
                </select>
            </div>
            <div className="form-group">
                <input type="submit" value="submit" className="btn btn-primary"/>
            </div>
        </form>
      </div>
    )
  }
}
FormDb.propTypes = {
    categories: PropTypes.array,
    addData: PropTypes.func
}
