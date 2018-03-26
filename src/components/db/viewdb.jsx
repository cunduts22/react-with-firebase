import React, { Component } from 'react';
import ViewMyDb from './viewmydb.jsx';
import PropTypes from 'prop-types';

export default class ViewDb extends React.Component {
  render() {
    //   let items;
    //   if(this.props.view) {
    //       items = this.props.view.map((views, i) => {
    //           return <ViewMyDb key={i} views={views.barang} />
    //       })
    //   }
    return (
      
        <ul>
              {/* {items} */}
        </ul>
      
    )
  }
}
ViewDb.propTypes = {
    views: PropTypes.array
}