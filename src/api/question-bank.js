
import axios from '@/libs/api.request'

export const addTest = (data) => {
  return axios.request({
    url: 'subjectTest/addTest',
    method: 'post',
    data
  })
}
export const deleteTest = (params) => {
  return axios.request({
    url: 'subjectTest/deleteTest',
    method: 'get',
    params
  })
}
