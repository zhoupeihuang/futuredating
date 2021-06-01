import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/hywing/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/hywing/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/hywing/user/logout',
    method: 'post'
  })
}
