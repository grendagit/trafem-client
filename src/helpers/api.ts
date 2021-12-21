import axios from 'axios'
import type { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import * as R from 'ramda'

const defaultHeaders = {
  'Content-Type': 'application/json',
}

function getHTTPHeaders(headers?: AxiosRequestHeaders) {
  const HTTPheaders = {
    ...defaultHeaders,
    ...headers,
  }

  const filteredOutHeaders = R.reject(R.isNil)(HTTPheaders)

  return filteredOutHeaders as AxiosRequestHeaders
}

export async function request(axiosRequestConfig: AxiosRequestConfig) {
  const { headers } = axiosRequestConfig
  const requestConfig = {
    ...axiosRequestConfig,
    headers: getHTTPHeaders(headers),
  }

  try {
    const { data } = await axios(requestConfig)
    return data
  } catch (error) {
    if (axios.isCancel(error)) {
      return
    }
    throw error
  }
}

export async function get(
  axiosRequestConfig: Omit<AxiosRequestConfig, 'method'>
) {
  return await request({
    ...axiosRequestConfig,
    method: 'GET',
  })
}
