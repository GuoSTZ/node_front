import { useEffect } from 'react';
import { useAtom } from 'jotai';
import * as Api from './api';
import { encryptionConfigAtom } from './atom';
import { message } from 'antd';

export const useEncryptionConfigAtom = (params: object = {}) => {
  const [encryptionConfig, setEncryptionConfig] = useAtom(encryptionConfigAtom)
  useEffect(() => {
    (async () => {
      const data = await Api.fetchEncryptionConfig(params);
      if (data?.code === 0) {
        setEncryptionConfig(data?.data)
      } else {
        message.error(data?.message)
      }
    })()
  }, [])
}

export const fetchLogin = (params: any) => {
  Api.fetchLogin(params)
    .then(res => {
      if (res?.code === 0) {
        message.success(res?.message);
        localStorage.setItem('token', res?.data?.token);
        res?.data?.url && (window.location.href = res.data.url);
      } else {
        message.error(res?.message);
      }
    })
    .catch(console.error);
}

export const fetchRegister = (params: any) => {
  Api.fetchRegister(params)
    .then(res => {
      if (res.code === 0) {
        message.success('注册成功')
      } else {
        message.error(res?.message);
      }
    })
    .catch(console.error);
}