/* eslint-disable no-undef */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import './App.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

class AppPage extends Component {
  componentWillMount() {
    // 此处检测是否登录
  }

  render() {
    const { children } = this.props;
    return (
      <div className="page-wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Antd Design Demo</title>
        </Helmet>
        <Header />
        <div className="main-wrapper">
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}

AppPage.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps)(AppPage);
