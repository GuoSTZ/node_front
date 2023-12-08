import * as FetchUtils from '@/utils/fetch';

import { AxiosRequestConfig, AxiosRequestHeaders } from '@/utils/fetch/type'

const defaultConfig = {
  headers: {} as AxiosRequestHeaders
}

export const fetchUserInfo = (params: object = {}, config: AxiosRequestConfig = defaultConfig) =>
  FetchUtils.fetchPost(`http://localhost:3000/v1/user/info`, params, config);

export const fetchLogout = (params: object = {}, config: AxiosRequestConfig = defaultConfig) =>
  FetchUtils.fetchPost(`http://localhost:3000/v1/user/logout`, params, config);