import Mock from 'mockjs'

const data = {
  'id': '@guid',
  'name': '@cname'
}

Mock.mock('/api/test', 'get', data)

export default Mock
