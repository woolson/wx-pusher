/* 内容类型 */
export enum MsgContentType {
  /* 文字 */
  Text = 1,
  /* html */
  Html,
  /* markdown */
  Markdown
}

/* 通知消息请求体 */
export interface MsgSendReqBase {
  /* 消息内容 */
  content?: string
  /* 消息摘要 */
  summary?: string
  /* 原文链接，可选参数 */
  url?: string
}

/* 简单发送消息请求参数 */
export interface MsgSendReqParams extends MsgSendReqBase {
  /* 应用的标志 */
  appToken: string
  /* 群发目标的topicId */
  topicId?: string | number
  /* 发送目标的UID */
  uid?: string
}

/* 全功能发送消息请求体 */
export interface MsgSendReqBody extends MsgSendReqBase {
  /* 应用的标志 */
  appToken: string
  /* 内容类型 */
  contentType?: MsgContentType
  /* 群发目标的topicId */
  topicIds?: number[]
  /* 发送目标的UID */
  uids?: string[]
}

/**
 * 发送消息响应内容项
 */
export interface MsgSendResDataItem {
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