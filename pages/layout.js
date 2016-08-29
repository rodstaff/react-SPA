import React from 'react';
import {Link} from 'react-router';

import Footer from '../components/layout/footer';
import Nnav from "../components/layout/nnav";

export default class Layout extends React.Component { 
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "100px"
    };
    return (
      
      <div>
        <Nnav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>WhaleNews.org</h1>
              {this.props.children}
            </div>
          </div>
            <Footer />
        </div>
      </div>
    );
  }
}
 

