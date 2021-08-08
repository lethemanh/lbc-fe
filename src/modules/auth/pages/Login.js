import React, { useState, useEffect } from 'react';
import { Input, Button, Row, Col, Layout, Form, message } from 'antd';
import AuthAPIClient from '../services/AuthAPIClient';
import Footer from '../../../core/components/Footer';
import logo from '../../../assets/images/logo.jpeg';

function Login(props) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isProcessLogin, setIsProcessLogin] = useState(false);

  const validationRules = {
    username: [{required: true, message: 'Username is required'}],
    password: [{required: true, message: 'Password is required'}]
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      props.history.push('/bookings');
    }
  }, []);

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const login = async () => {
    try {
      setIsProcessLogin(true);
      const response = await AuthAPIClient.login({ username, password });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      props.history.push('/bookings');
    } catch (error) {
      message.error(error.response.data.message);
    } finally {
      setIsProcessLogin(false);
    }
  }

  return (
    <Layout style={{ minHeight: '100vh', width: '100%', paddingTop: '50px' }}>
      <Layout.Content>
        <Row justify="center">
          <Col span={8}>
            <img style={{ width: '100%' }} src={logo} />
          </Col>
        </Row>
        <Row justify="space-around" align="middle">
          <Col span={8}>
            <h1 style={{ textAlign: 'center' }}>Login</h1>
            <Form
              name="loginForm"
              onFinish={login}
            >
              <Form.Item name="username" rules={validationRules.username}>
                <Input
                  placeholder="Username"
                  size="large"
                  onChange={onChangeUsername}
                  value={username}
                />
              </Form.Item>
              <Form.Item name="password" rules={validationRules.password}>
                <Input.Password
                  placeholder="Password"
                  size="large"
                  onChange={onChangePassword}
                  value={password}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={isProcessLogin} block>
                  Login
                </Button>
              </Form.Item>
            </Form>
            
          </Col>
        </Row>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}



export default Login;
