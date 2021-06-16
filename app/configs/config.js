
export const set = 'set$'
export const brandName = '管理后台' // slogan

// 开发环境默认配置
const _serverIp = 'https://demo.dsp.whitehorse.cn'
const _port = '8080'
const _baseURL = `${_serverIp}`
const _mockURL = 'http://localhost:1111/'

// if (process.env.NODE_ENV === 'testing') { // 测试环境
//   _mockURL = 'http://localhost:1111/'
//   _port = '1111'
//   _baseURL = `${_serverIp}:${_port}`
// }
// if (process.env.NODE_ENV === 'production') { // 发布环境
//   _port = '1111'
//   _serverIp = 'http://192.168.1.123'
//   _baseURL = `${_serverIp}:${_port}`
// }

export const serverIp = _serverIp
export const path = '/mock'
export const timeout = '15000' // 接口超时限制(ms)
export const baseURL = _baseURL
export const mockURL = _mockURL
