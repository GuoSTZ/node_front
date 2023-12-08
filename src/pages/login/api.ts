import * as FetchUtils from '@/utils/fetch';

import { AxiosRequestConfig, AxiosRequestHeaders } from '@/utils/fetch/type'

const defaultConfig = {
  headers: {} as AxiosRequestHeaders
}

export const fetchEncryptionConfig = (params: object = {}, config: AxiosRequestConfig = defaultConfig) =>
  FetchUtils.fetchGet(`http://localhost:3000/v1/user/encryptionConfig`, params, config);

export const fetchLogin = (params: object = {}, config: AxiosRequestConfig = defaultConfig) =>
  FetchUtils.fetchPost(`http://localhost:3000/v1/user/login`, params, config);

export const fetchRegister = (params: object = {}, config: AxiosRequestConfig = defaultConfig) =>
  FetchUtils.fetchPost(`http://localhost:3000/v1/user/register`, params, config);