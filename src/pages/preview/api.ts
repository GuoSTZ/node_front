import * as FetchUtils from '@/utils/fetch';

import { AxiosRequestConfig, AxiosRequestHeaders } from '@/utils/fetch/type'

const defaultConfig = {
  headers: {} as AxiosRequestHeaders
}

export const fetchProject = (params: object = {}, config: AxiosRequestConfig = defaultConfig) =>
  FetchUtils.fetchPost(`http://localhost:3000/v1/file/project`, params, config); 