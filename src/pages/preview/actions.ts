import * as Api from './api';
import { message } from 'antd';

export const fetchProject = (params: any, callback?: Function) => {
  Api.fetchProject(params)
    .then(res => {
      if (res.code === 0) {
        callback?.(res?.data)
      } else {
        message.error(res?.message);
      }
    })
    .catch(console.error);
}