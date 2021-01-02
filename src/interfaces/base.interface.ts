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
  UserRemove = '/api/fun/remove'
}

/** 请求返回统一结构 */
export interface ResBase<T> {
  /** 请求状态码 */
  code: number
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