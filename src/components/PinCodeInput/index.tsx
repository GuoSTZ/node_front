import React from 'react';
import { Input, InputProps } from 'antd';
import styles from './index.module.less';

export interface PinCodeInputProps extends InputProps {
  imgProps: React.ImgHTMLAttributes<HTMLImageElement>;
}

const PinCodeInput = (props: PinCodeInputProps) => {
  const { imgProps, ...restProps} = props;
  return (
    <div className={styles['pinCode-input']}>
      <Input {...restProps} />
      <img {...imgProps} />
    </div>
  )
}

export default PinCodeInput;