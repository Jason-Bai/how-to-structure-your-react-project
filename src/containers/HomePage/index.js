/* eslint-disable no-undef */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';

class Home extends Component {
  render() {
    return <div>home page</div>;
  }
}

Home.propTypes = {};

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps)(Home);
