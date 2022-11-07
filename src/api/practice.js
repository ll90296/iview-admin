import axios from '@/libs/api.request'

export const getTestList = () => {
  return axios.request({
    url: 'subjectTest/getTestList',
    method: 'get'
  })
}
