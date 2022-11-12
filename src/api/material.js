import axios from '@/libs/api.request'

export const queryFiles = () => {
  return axios.request({
    url: 'files/queryFiles',
    method: 'get'
  })
}
export const uploadManuscripts = (data) => {
  return axios.request({
    url: 'files/uploadManuscripts',
    method: 'post',
    data
  })
}
