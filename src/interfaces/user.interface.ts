/** 查询用户列表 */
export interface UserListGetReqParams {
  /** 应用密钥标志 */
  appToken: string
  /** 请求数据的页码 */
  page: number
  /** 分页大小 */
  pageSize: number
  /** 用户的uid，可选，如果不传就是查询所有用户，传uid就是查某个用户的信息 */
  uid?: string
}

/** 获取用户列表响应内容 */
export interface UserListGetResData {
  /** 当前数据页码 */
  page: number
  /** 当前页码大小  */
  pageSize: number
  /** 用户信息数组 */
  records: UserListGetResDataItem[]
  /** 所有的用户数量 */
  total: number
}

/** 获取用户列表响应用户信息 */
export interface UserListGetResDataItem {
  /** 用户关注时间 */
  createTime: number
  /** 是否可用，也就是用户是否开启接收消息 */
  enable: boolean
  /** 用户头像 */
  headImg: string
  /** 用户昵称 */
  nickName: string
  /** 用户的UID */
  uid: string
}