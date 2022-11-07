import axios from '@/libs/api.request'

export const beginExperiment = (data) => {
  return axios.request({
    url: '/user/beginExperiment',
    method: 'post',
    data
  })
}
