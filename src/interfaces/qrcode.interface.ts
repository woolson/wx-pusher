/** 创建二维码请求体 */
export interface QrcodeCreateReqBody {
  /* 应用的标志 */
  appToken: string
  /** 二维码携带的参数，最长64位 */
  extra: string
  /** 二维码的有效期，默认30分钟，最长30天，单位是秒 */
  validTime?: number
}

/** 创建二维码响应内容 */
export interface QrcodeCreateResData {
  // code:'47xXNlpxI6iVvt6G1zBVjqu7jShUObr6KTLrXMHhlRBCL6MjyD866ejF5Mk5jA47'
  /** 未知 */
  code: string
  /** 二维码失效具体时间戳，毫秒级 */
  expires: number
  /** 二维码参数 */
  extra: string
  /** 二维码访问地址短链 */
  shortUrl: string
  /** 二维码访问地址 */
  url: string
}