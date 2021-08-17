import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Layout, Dropdown, Menu } from 'antd';
import { LogoutOutlined, DownOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';
import '../../assets/style/header.scss';
import logo from '../../assets/images/logo.jpeg';
import UserInfo from './UserInfo';

export default function Header() {
  const [currentUser] = useState({});
  const history = useHistory();

  const handleClickMenu = (e) => {
    if (e.key === 'logout') {
      Cookies.remove('token');
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
      <UserInfo/>
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
