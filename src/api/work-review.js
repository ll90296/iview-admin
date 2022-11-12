
import axios from '@/libs/api.request'

export const auditList = (params) => {
  return axios.request({
    url: 'subjectTest/auditList',
    method: 'get',
    params
  })
}
export const auditResult = (params) => {
  return axios.request({
    url: 'subjectTest/auditResult',
    method: 'get',
    params
  })
}
export const querScore = (params) => {
  return axios.request({
    url: 'files/querScore',
    method: 'get',
    params
  })
}
export const workersScore = (data) => {
  return axios.request({
    url: 'files/workersScore',
    method: 'post',
    data
  })
}
export const queryComment = (workesId) => {
  return axios.request({
    url: 'files/queryComment',
    method: 'get',
    params: { workesId }
  })
}
export const createComment = (data) => {
  return axios.request({
    url: 'files/createComment',
    method: 'post',
    data
  })
}
