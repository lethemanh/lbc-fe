import React, { useState } from 'react';
import { Input, InputNumber, Button, Row, Col, Layout, Form, message } from 'antd';
import { Link } from 'react-router-dom';
import { checkConfirmPassword } from '../../../core/helper/validator';
import { COMMON_ERROR } from '../../../core/constants';
import AuthAPIClient from '../services/AuthAPIClient';
import Footer from '../../../core/components/Footer';
import '../style/auth.scss';
import logo from '../../../assets/images/logo.jpeg';

function Register(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isProcessingRegister, setIsProcessingRegister] = useState(false);

  const validationRules = {
    username: [{ required: true, message: 'Tên người dùng không được bỏ trống' }],
    email: [{ required: true, type: 'email', message: 'Email không hợp lệ' }],
    phoneNumber: [{
      required: true,
      min: 10,
      max: 11,
      pattern: new RegExp(/^[0-9]+$/),
      message: "Số điện thoại không hợp lệ"
    }],
    age: [
      { required: true, message: 'Tuổi không được bỏ trống' },
      { type: 'number', min: 18, message: 'Bạn phải trên 18 để tham gia' }
    ],
    password: [{ required: true, message: 'Mật khẩu không được bỏ trống' }],
    confirmPassword: [
      ({ getFieldValue }) => ({
        validator(_, value) {
          return checkConfirmPassword(value, getFieldValue('password'));
        },
      }),
    ]
  }

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePhoneNumber = (e) => setPhoneNumber(e.target.value);
  const onChangeAge = (age) => setAge(age);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);

  const register = async () => {
    try {
      setIsProcessingRegister(true);
      await AuthAPIClient.register({
        username,
        email,
        phoneNumber,
        age,
        password
      });
      props.history.push('/login');
    } catch (error) {
      message.error(error.message || COMMON_ERROR);
    } finally {
      setIsProcessingRegister(false);
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
        <Row justify="center">
          <Col span={8}>
            <h1 className="auth-title">Chào mừng bạn đến với trò chơi lắc bầu cua</h1>
            <h2 className="auth-title">Đăng ký để tham gia ngay!</h2>
            <Form name="loginForm" onFinish={register}>
              <Form.Item name="username" rules={validationRules.username}>
                <Input
                  placeholder="Tên người dùng"
                  size="large"
                  onChange={onChangeUsername}
                  value={username}
                />
              </Form.Item>
              <Form.Item name="email" rules={validationRules.email}>
                <Input
                  type="email"
                  placeholder="Email"
                  size="large"
                  onChange={onChangeEmail}
                  value={email}
                />
              </Form.Item>
              <Form.Item name="phoneNumber" rules={validationRules.phoneNumber}>
                <Input
                  placeholder="Số điện thoại"
                  size="large"
                  onChange={onChangePhoneNumber}
                  value={phoneNumber}
                />
              </Form.Item>
              <Form.Item name="age" rules={validationRules.age}>
                <InputNumber
                  className="w-100"
                  placeholder="Tuổi"
                  size="large"
                  onChange={onChangeAge}
                  value={age}
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
                <Button type="primary" htmlType="submit" loading={isProcessingRegister} block>
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
