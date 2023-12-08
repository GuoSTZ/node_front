import * as FetchUtils from '@/utils/fetch';

import { AxiosRequestConfig, AxiosRequestHeaders } from '@/utils/fetch/type'

const defaultConfig = {
  headers: {} as AxiosRequestHeaders
}

export const fetchUploadFile = (params: object = {}, config: AxiosRequestConfig = defaultConfig) =>
  FetchUtils.fetchUpload(`http://localhost:3000/v1/file/excel/project`, params, config); 