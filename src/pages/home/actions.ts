import * as Api from './api';
import { message } from 'antd';

export const fetchHomeInfo = (params: any) => {
  Api.fetchHomeInfo(params)
    .then(res => {
      if (res.code === 0) {
      } else {
        message.error(res?.message);
      }
    })
    .catch(console.error);
}