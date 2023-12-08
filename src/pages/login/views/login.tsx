import React from 'react';
import { Button, Form, Input } from 'antd';
import { useAtom } from 'jotai';
import { encryptionConfigAtom } from '../atom';
import * as actions from '../actions';
import { encrypt } from '@/utils/encrypt';

type FieldType = {
  username?: string;
  password?: string;
};

export default () => {
  const [encryptionConfig] = useAtom(encryptionConfigAtom);

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
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input autoComplete='off' />
      </Form.Item>

      <Form.Item<FieldType>
        label="密码"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password autoComplete='new-password' />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}