import React, { useState } from 'react';
import { Input, Button, Row, Col, Layout, Form, message } from 'antd';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import AuthAPIClient from '../services/AuthAPIClient';
import Footer from '../../../core/components/Footer';
import { COMMON_ERROR } from '../../../core/constants';
import '../style/auth.scss';
import logo from '../../../assets/images/logo.jpeg';

function Login(props) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isProcessLogin, setIsProcessLogin] = useState(false);

  const validationRules = {
    username: [{required: true, message: 'Tên người dùng không được bỏ trống'}],
    password: [{required: true, message: 'Mật khẩu không được bỏ trống'}]
  }

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const login = async () => {
    try {
      setIsProcessLogin(true);
      const response = await AuthAPIClient.login({ username, password });

      if (response.data && response.data.token) {
        props.setToken(response.data.token);
        Cookies.set('token', response.data.token);
        props.history.push('/');
      } else {
        message.error('Không có token');
      }
    } catch (error) {
      message.error(error.message || COMMON_ERROR);
    } finally {
      setIsProcessLogin(false);
    }
  }

  return (
    <Layout className="auth-container">
      <Layout.Content>
        <Row justify="center">
          <Col span={8}>
            <img className="logo" src={logo} />
          </Col>
        </Row>
        <Row justify="space-around" align="middle">
          <Col span={8}>
            <h1 className="auth-title">Đăng nhập để tham gia trò chơi</h1>
            <Form name="loginForm" onFinish={login}>
              <Form.Item name="username" rules={validationRules.username}>
                <Input
                  placeholder="Tên người dùng"
                  size="large"
                  onChange={onChangeUsername}
                  value={username}
                />
              </Form.Item>
              <Form.Item name="password" rules={validationRules.password}>
                <Input.Password
                  placeholder="Mật khẩu"
                  size="large"
                  onChange={onChangePassword}
                  value={password}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={isProcessLogin} block>
                  Đăng nhập
                </Button>
                <div className="register-link">Hoặc <Link to="/register">đăng ký ngay</Link> nếu bạn chưa có tài khoản!</div>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

const mapState = (state) => ({
  token: state.auth.token
})

const mapDispatch = (dispatch) => ({
  setToken: dispatch.auth.setToken
});

export default connect(mapState, mapDispatch)(Login);
