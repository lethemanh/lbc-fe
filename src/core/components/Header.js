import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Layout, Dropdown, Menu } from 'antd';
import { LogoutOutlined, DownOutlined } from '@ant-design/icons';
import '../../assets/style/header.scss';
import logo from '../../assets/images/logo.jpeg';

export default function Header() {
  const [currentUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {});
  const history = useHistory();

  const handleClickMenu = (e) => {
    if (e.key === 'logout') {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      history.push('/login');
    }
  }

  const dropDownMenu = (
    <Menu onClick={handleClickMenu}>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  )

  return (
    <Layout.Header className="header__container">
      <Link to="/">
        <img className="logo" alt="logo" src={logo} />
      </Link>
      <span className="account">
        <Dropdown overlay={dropDownMenu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            {currentUser.username} <DownOutlined />
          </a>
        </Dropdown>
      </span>
    </Layout.Header>
  );
}
