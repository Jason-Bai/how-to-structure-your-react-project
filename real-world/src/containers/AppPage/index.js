/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {

  componentWillMount() {
    // 此处检测是否登录
  }

  render() {
    const { children } = this.props
    return (
      <div className="app">
        <div className="app-wrapper">
          {children}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default connect(mapStateToProps)(App)
