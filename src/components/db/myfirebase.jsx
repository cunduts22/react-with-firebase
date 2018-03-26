import React, { Component } from 'react'
import * as firebase from 'firebase';
import uuid from 'uuid';
import ViewDb from './viewdb.jsx';
export default class Myfirebase extends Component {

    constructor() {
        super();

        // this.db = firebase.initializeApp({
        //     apiKey : "AIzaSyDssl_QLAs6z4fMcYx8Kmorm12JbVU0IQQ",
        //     authDomain : "beginners-af3a8.firebaseapp.com",
        //     databaseURL : "https://beginners-af3a8.firebaseio.com",
        //     projectId : "beginners-af3a8",
        //     storageBucket : "beginners-af3a8.appspot.com",
        //     messagingSenderId : "71141430148"
        // })
        // this.mydb = this.db.database().ref().child('data');
        // this.db2 = this.db.database().ref('data');
        // .child('L8RDirOxy4qoeDEHyvB')
        this.state = {
            mydata: [],
            view: [],
            vida: []
        }
    }


    handleSubmit(e) {
        this.setState({
            mydata: {
                id: uuid.v4(),
                barang: {
                    nama_barang: this.refs.satu.value,
                    harga_barang: this.refs.tiga.value               
                },
                
                jenis_barang: this.refs.dua.value
            }
        });
        
        this.mydb.push().set(this.state.mydata);
        e.preventDefault();

    }

    componentDidMount() {
        this.mydb.on('value', snap => {
            console.log(snap.val());
            this.setState({
                view: snap.val()
            });                             
        });
                // this.state.view.map((view)=>{
                //     console.log(view.jenis_barang);
                // });
        
        this.db2.orderByValue().on('value', snap => {
            snap.forEach((data) => {
                this.setState({
                    vida: data.val()
                });
            });
        });
    }

    handleClear(e) {
        setTimeout(() => {
            this.setState({
                mydata: []
            });
        }, 3000);
        e.preventDefault();
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} className="form">
            <div className="form-group">
                <input type="text" ref="satu" className="form-control" placeholder="Add Nama Barang"/>
            </div>
            <div className="form-group">
                <input type="text" ref="dua" className="form-control" placeholder="Add Jenis Barang"/>
            </div>
                <div className="form-group">
                <input type="text" ref="tiga" className="form-control" placeholder="Add Harga Barang"/>
            </div>
            <div className="form-group">
                <input type="submit" value="submit" className="btn btn-primary"/>
            </div>
        </form>
        <div className="container">
            <ViewDb view={this.state.view}/>
        </div>
      </div>
    )
  }
}
