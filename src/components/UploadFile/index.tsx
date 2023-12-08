import React, { useEffect, useState } from 'react';
import { Button, Upload, UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export interface UploadFileProps extends UploadProps {
  value?: any;
  onChange?: any;
  uploadText?: string;
}

const UploadFile = (props: UploadFileProps) => {
  const { onChange, uploadText, ...restProps } = props;
  const mergedFileList = props.value ? [props.value] : []
  const [fileList, setFileList] = useState(mergedFileList);

  useEffect(() => {
    setFileList(mergedFileList);
  }, [props.value])

  const beforeUpload = (file: any, fileList: any[]) => {
    onChange(file);
    return false;
  }

  const onRemove = () => {
    onChange(undefined);
  }

  return (
    <Upload
      {...restProps}
      fileList={fileList}
      beforeUpload={beforeUpload}
      onRemove={onRemove}>
      <Button>
        <UploadOutlined rev={""}/> {uploadText || '上传'}
      </Button>
    </Upload>
  )
}

export default UploadFile;
