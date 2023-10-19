import * as FetchUtils from '@/utils/fetch';

import { AxiosRequestConfig, AxiosRequestHeaders } from '@/utils/fetch/type'

const defaultConfig = {
  headers: {} as AxiosRequestHeaders
}

export const fetchHomeInfo = (params: object = {}, config: AxiosRequestConfig = defaultConfig) =>
  FetchUtils.fetchPost(`http://localhost:3000/v1/home/info`, params, config);