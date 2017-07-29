import React from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';
import './Navigation.css';

class Navigation extends React.Component {
  state = {
    current: 'home'
  };

  onClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div className="nav">
        <Menu
          onClick={this.onClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="editor">
            <Link to="/editor">
              <Icon type="edit" />
              写文章
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navigation;
