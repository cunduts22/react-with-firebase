import React, { Component } from 'react'
import Formdb from './form_db.jsx';
import DbView from './dbview.jsx';
import * as firebase from 'firebase';
export default class Fordb extends Component {
    constructor() {
        super();

         this.db = firebase.initializeApp({
            apiKey : "AIzaSyDssl_QLAs6z4fMcYx8Kmorm12JbVU0IQQ",
            authDomain : "beginners-af3a8.firebaseapp.com",
            databaseURL : "https://beginners-af3a8.firebaseio.com",
            projectId : "beginners-af3a8",
            storageBucket : "beginners-af3a8.appspot.com",
            messagingSenderId : "71141430148"
        });
        this.db2 = this.db.database().ref().child('data');
        this.state = {
            db: [],
            db2: []
        }
    }


    handleAddDb(dbItem) {
        console.log(dbItem);
        let db = this.state.db;
        db.push(dbItem);
        this.setState({db:db});
        this.db2.push(dbItem);
    }

    handleDeleteDb(id) {
        let db = this.state.db;
        let index = db.findIndex(x => x.id === id);
        db.splice(index, 1);
        this.setState({db:db});
        this.db2.once('value', snap => {
            var fordb1 = [];
            snap.forEach(data => {
                let index = fordb2.findIndex(x => x.id === data.val().id);
                db2.remove(index, 1);
            })
        })
    }

    componentWillMount() {
        this.db2.once('value', snap => {
            var fordb1 = [];
            snap.forEach(data => {
             var fordb2 = {
                id: data.val().id,
                nama_barang: data.val().nama_barang,
                harga_barang: data.val().harga_barang,
                kategori_barang: data.val().kategori_barang,
                time: data.val().time
            }
            fordb1.push(fordb2);
            this.setState({db:fordb1});
            });
        });
    }

    componentDidMount() {
        this.db2.once('value', snap => {
        })
    }
  render() {
      return (
      <div>
        <p className="lead">This handle view Dababes</p>
        <Formdb addData={this.handleAddDb.bind(this)}/>
        <DbView db={this.state.db} onDelete={this.handleDeleteDb.bind(this)}/>
        
      </div>
    )
  }
}
