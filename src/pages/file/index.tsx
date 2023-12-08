import React from 'react';
import { Button, Form } from 'antd';
import UploadFile from '@/components/UploadFile';
import * as actions from './actions';

const onFinish = (values: any) => {
  actions.fetchUploadFile(values)
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  file: File;
};

const App: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="项目任务文件"
      name="file"
      rules={[{ required: true, message: "请上传Excel文件" }]}
    >
      <UploadFile uploadText='文件上传' />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        提交
      </Button>
    </Form.Item>
  </Form>
);

export default App;