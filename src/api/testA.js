import http from '../utils/request'

export function testApi () {
  return new Promise((resolve, reject) => {
    http.get('/api/test').then((res) => {
      console.log('/api/test', res.data)
      return resolve(res.data)
    }).catch((err) => {
      reject(err.data)
    })
  })
}
