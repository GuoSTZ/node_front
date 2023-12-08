import * as Api from './api';
import { message } from 'antd';

export const fetchUploadFile = (params: any) => {
  Api.fetchUploadFile(params)
    .then(res => {
      if (res.code === 0) {
      } else {
        message.error(res?.message);
      }
    })
    .catch(console.error);
}