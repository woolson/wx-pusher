import { UserSource } from './base.interface';

/** 公众号互动类型 */
export enum EventActionType {
  /** 用户关注应用回调 */
  AppSubscribe = 'app_subscribe',
  /** 上行消息回调 */
  SendUpCmd = 'send_up_cmd'
}

/** 调用事件类型及相关数据 */
export interface EventData {
  /** 动作 */
  action: EventActionType
  /** 动作相关数据 */
  data: EventSubscribeData | EventUpCmdData
}

/** 调用事件数据部分 */
export interface EventDataBase {
  /** 应用id */
  appId: number
  /** 废弃字段 */
  appKey: string
  /** 应用名称 */
  appName: string
  /** 用户uid */
  uid: string
  /** 用户昵称 */
  userName: string
  /** 用户头像，最后一个数值代表正方形头像大小（有0、46、64、96、132数值可选，0代表640*640正方形头像），用户没有头像时该项为空 */
  userHeadImg: string
  /** 消息发生时间 */
  time: number
}

/** 用户关注消息回调数据 */
export interface EventSubscribeData extends EventDataBase {
  /** 用户关注渠道，scan表示扫码关注，link表示链接关注，command表示通过消息关注应用，后期可能还会添加其他渠道。 */
  source: UserSource
  /** 用户扫描带参数的二维码，二维码携带的参数 */
  extra: string
}

/** 上行消息回调数据 */
export interface EventUpCmdData extends EventDataBase {
  /** 用户发送的内容 */
  content: string;
}