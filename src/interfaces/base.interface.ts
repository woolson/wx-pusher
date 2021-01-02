/* 接口列表 */
export enum SendApis {
  /** 发送信息 */
  MsgSend = '/api/send/message',
  /** 获取发送信息状态 */
  MsgStatusGet = '/api/send/query',
  /** 创建带参数二维码 */
  QrcodeCreate = '/api/fun/create/qrcode',
  /** 获取用户列表，分页 */
  UserListGet = '/api/fun/wxuser',
  /** 获取用户列表V2，分页 */
  UserListGetV2 = '/api/fun/wxuser/v2',
  /** 删除用户 */
  UserRemove = '/api/fun/remove',
  /** 拉黑用户 */
  UserReject = '/api/fun/reject'
}

/** 请求返回统一结构 */
export interface ResBase<T> {
  /** 请求状态码 */
  code: ResultCode
  /** 请求信息 */
  msg: string
  /** 请求返回数据 */
  data: T
  /** 请求状态 */
  success: boolean
}

/** 用户来源 */
export enum UserSource {
  /** 表示扫码关注 */
  Scan = 'scan',
  /** 表示链接关注 */
  Link = 'link',
  /** 通过消息关注应用 */
  Command = 'command'
}

/** 用户关注类型 */
export enum UserSubscribeType {
  /** 关注应用 */
  Application,
  /** 关注topic */
  Topic
}

/** 翻页通用部分 */
export interface PaginationBase {
  /** 请求数据的页码 */
  page: number
  /** 分页大小 */
  pageSize: number
}

/** 接口返回编码 */
export enum ResultCode {
  /** 成功 */
  Success = 1000,
  /** 业务异常错误 */
  BizFail = 1001,
  /** 未认证 */
  Unauthorized = 1002,
  /** 签名错误 */
  SignFail = 1003,
  /** 接口不存在 */
  NotFound = 1004,
  /** 服务器内部错误 */
  InternalServerError = 1005,
  /** 和微信交互的过程中发生异常 */
  WeixinError = 1006,
  /** 等待用户扫码登录 */
  BizWaitScanLogin = 10000,
}