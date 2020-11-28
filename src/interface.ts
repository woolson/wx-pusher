/* 接口列表 */
export enum SendApis {
  /** 发送信息 */
  SendMessage = '/api/send/message',
  /** 获取发送信息状态 */
  GetMessageStatus = '/api/send/query',
  /** 创建带参数二维码 */
  CreateQrcode = '/api/fun/create/qrcode',
  /** 获取用户列表，分页 */
  GetUserList = '/api/fun/wxuser',
}

/* 内容类型 */
export enum ContentType {
  /* 文字 */
  Text = 1,
  /* html */
  Html,
  /* markdown */
  Markdown
}

/** 请求返回统一结构 */
export interface ResponseBase<T> {
  /** 请求状态码 */
  code: number
  /** 请求信息 */
  msg: string
  /** 请求返回数据 */
  data: T
  /** 请求状态 */
  success: boolean
}

/* 通知消息请求体 */
export interface SendMsgRequestBase {
  /* 消息内容 */
  content?: string
  /* 消息摘要 */
  summary?: string
  /* 原文链接，可选参数 */
  url?: string
}

/* 简单发送消息请求参数 */
export interface SendMsgRequestParams extends SendMsgRequestBase {
  /* 应用的标志 */
  appToken: string
  /* 群发目标的topicId */
  topicId?: string | number
  /* 发送目标的UID */
  uid?: string
}

/* 全功能发送消息请求体 */
export interface SendMsgRequestBody extends SendMsgRequestBase {
  /* 应用的标志 */
  appToken: string
  /* 内容类型 */
  contentType?: ContentType
  /* 群发目标的topicId */
  topicIds?: number[]
  /* 发送目标的UID */
  uids?: string[]
}

/**
 * 发送消息响应内容项
 */
export interface SendMsgResponseDataItem {
  /** 信息推送给的用户UID */
  uid: string | null
  /** 发送信息所属主题ID */
  topicId: string | null
  /** 当天推送信息ID */
  messageId: number
  /** 推送状态码 */
  code: number
  /** 推送状态 */
  status: string
}

/** 创建二维码请求体 */
export interface CreateQrcodeRequestBody {
  /* 应用的标志 */
  appToken: string
  /** 二维码携带的参数，最长64位 */
  extra: string
  /** 二维码的有效期，默认30分钟，最长30天，单位是秒 */
  validTime?: number
}

/** 创建二维码响应内容 */
export interface CreateQrcodeResponseData {
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

/** 查询用户列表 */
export interface GetUserListRequestParams {
  /** 应用密钥标志 */
  appToken: string,
  /** 请求数据的页码 */
  page: number,
  /** 分页大小 */
  pageSize: number,
  /** 用户的uid，可选，如果不传就是查询所有用户，传uid就是查某个用户的信息 */
  uid?: string,
}

/** 获取用户列表响应内容 */
export interface GetUserListResponseData {
  /** 当前数据页码 */
  page: number;
  /** 当前页码大小  */
  pageSize: number;
  /** 用户信息数组 */
  records: GetUserListResponseDataItem[];
  /** 所有的用户数量 */
  total: number;
}

/** 获取用户列表响应用户信息 */
interface GetUserListResponseDataItem {
  /** 用户关注时间 */
  createTime: number;
  /** 是否可用，也就是用户是否开启接收消息 */
  enable: boolean;
  /** 用户头像 */
  headImg: string;
  /** 用户昵称 */
  nickName: string;
  /** 用户的UID */
  uid: string;
}