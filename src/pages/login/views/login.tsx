import React from 'react';
import { Button, Form, Input, Image } from 'antd';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { encryptionConfigAtom } from '../atom';
import * as actions from '../actions';
import { encrypt } from '@/utils/encrypt';
import PinCodeInput from '@/components/PinCodeInput';
import './index.less';

type FieldType = {
  username: string;
  password: string;
  pinCode: string;
};

export default () => {
  actions.useEncryptionConfigAtom();
  const {pinCode, refresh} = actions.usePinCodeAtom();
  const [encryptionConfig] = useAtom(encryptionConfigAtom);
  const navigate = useNavigate();

  const onLogin = async (values: any) => {
    values.password = encrypt(values.password, encryptionConfig.publicKey);
    actions.fetchLogin(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="login"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onLogin}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input autoComplete='off' placeholder='用户名'/>
      </Form.Item>

      <Form.Item<FieldType>
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password autoComplete='new-password' placeholder='密码' />
      </Form.Item>

      <Form.Item<FieldType>
        wrapperCol={{ offset: 8, span: 16 }}
        // label="密码"
        name="pinCode"
        rules={[{ required: true, message: '请输入验证码' }]}
      >
        <PinCodeInput 
          placeholder='验证码'
          imgProps={{
            src: pinCode,
            onClick: refresh
          }}
        />
      </Form.Item>

      <div className='login-tip'>
        <a onClick={() => navigate('/register')}>注册用户</a>
      </div>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}