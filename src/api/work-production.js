
import axios from '@/libs/api.request'

export const subjectTestSubmit = (data) => {
  return axios.request({
    url: 'subjectTest/submit',
    method: 'post',
    data
  })
}
