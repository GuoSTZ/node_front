import axios from 'axios';
import { AxiosRequestConfig } from './type'

const instance = axios.create({
  headers: {},
})

// 设置请求拦截器
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if(token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    console.log(`request2 ${error}`)
    return Promise.reject(error);
  }
);

// 设置响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    console.table(response)
    const res = response.data;
    switch(res?.code) {
      case 302:
        res?.data?.url && (window.location.href = res.data.url);
    }
    return response;
  },
  error => {
    // 对响应错误做点什么
    console.log(`response2 ${error}`)
    return Promise.reject(error);
  }
);

export const fetchPost = async (url: string, params: object, config: AxiosRequestConfig<object>) => {
  return await instance.post(url, params, config).then(res => res.data).catch(error => error);
}

export const fetchGet = async (url: string, params: object, config: AxiosRequestConfig<object>) => {
  return await instance.get(url, Object.assign({}, config, { params })).then(res => res.data).catch(error => error);
}

export const fetchBatch = (funcs: (Function | Promise<Function>)[], callback: () => unknown) => {
  return axios.all(funcs).then(axios.spread(callback)).catch(error => error);
}

export const fetchUpload = async (url: string, params: object, config: AxiosRequestConfig<object>) => {
  return await instance.post(url, params, { ...config, headers: { ...config.headers, 'Content-Type': 'multipart/form-data' } }).then(res => res.data).catch(error => error);
}