import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';
import './Header.css';

import Navigation from '../Navigation';

import appConfig from '../../config/app';

const { navs } = appConfig;

const Header = () => {
  return (
    <header className="header">
      <Row>
        <Col xs={24} sm={24} md={5} lg={4}>
          <a className="logo" href="/">
            <img
              alt="logo"
              src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg"
            />
            <span>Ant Design</span>
          </a>
        </Col>
        <Col xs={0} sm={0} md={19} lg={20}>
          <Button
            type="button"
            className="ant-btn lang ant-btn-ghost ant-btn-sm"
          >
            <span>EN</span>
          </Button>
          <Navigation navs={navs} />
        </Col>
      </Row>
    </header>
  );
};

Header.propTypes = {
  session: PropTypes.object
};

export default Header;
