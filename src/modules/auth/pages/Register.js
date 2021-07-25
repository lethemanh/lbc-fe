import React, { useState } from 'react';
import { Input, Button, Row, Col, Layout, Form } from 'antd';
import { Link } from 'react-router-dom';
import Footer from '../../../core/components/Footer';
import '../style/auth.scss';
import logo from '../../../assests/images/logo.jpeg';

function Register(props) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const validationRules = {}

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);

  const register = async () => {}

  return (
    <Layout className="auth-container">
      <Layout.Content>
        <Row justify="center">
          <Col span={8}>
            <img className="logo" src={logo} />
          </Col>
        </Row>
        <Row justify="center">
          <Col span={8}>
            <h1 className="auth-title">Chào mừng bạn đến với trò chơi lắc bầu cua</h1>
            <h2 className="auth-title">Đăng ký ngay để tham gia ngay!</h2>
            <Form name="loginForm" onFinish={register}>
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
              <Form.Item name="confirmPassword" rules={validationRules.confirmPassword}>
                <Input.Password
                  placeholder="Xác nhận mật khẩu"
                  size="large"
                  onChange={onChangeConfirmPassword}
                  value={confirmPassword}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Đăng ký
                </Button>
                <div className="login-link">Hoặc <Link to="/login">đăng nhập</Link> nếu bạn đã có tài khoản!</div>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default Register;
