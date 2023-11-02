import * as Api from './api';
import { message } from 'antd';

export const fetchUserInfo = (params: any, callback?: Function) => {
  Api.fetchUserInfo(params)
    .then(res => {
      if (res.code === 0) {
        callback?.(res?.data)
      } else {
        message.error(res?.message);
      }
    })
    .catch(console.error);
}

export const fetchLogout = () => {
  Api.fetchLogout({})
    .then(res => {
      if (res.code === 0) {
        message.success(res?.message);
        
      } else {
        message.error(res?.message);
      }
    })
    .catch(console.error);
}