
import axios from '@/libs/api.request'

export const getReport = (params) => {
  return axios.request({
    url: 'subjectTest/getReport',
    method: 'get',
    params
  })
}
