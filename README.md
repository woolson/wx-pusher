# WxPusher SDK NodeJS版本

## 特性 Feature

- 使用TS开发
- 完整的类型声明
- 完整的类型注释

## 安装 Install

```shell
npm install -S @woolson/wx-pusher
```

## 使用 Usage

### 引入

```typescript
import { WxPusher } from '@woolson/wx-pusher';
```

### 推送信息

```typescript
const PUSHER_TEST_TOKEN = '<PRIVATE_TOKEN>';
const TEST_TOPIC = <PRIVATE_TOPIC>;

/** 发送信息简化版 */
const {} data: sendMsgSimpleRes } = await WxPusher.sendMessageSimple({
  appToken: PUSHER_TEST_TOKEN,
  content: '测试内容',
  summary: '测试',
  topicId: TEST_TOPIC,
});
console.log('发送信息简化版', sendMsgSimpleRes.data, '\n\n');

/** 发送信息 */
const { data: sendMsgRes } = await WxPusher.sendMessageSimple({
  appToken: PUSHER_TEST_TOKEN,
  content: '测试推送内容内容',
  summary: '测试标题',
  topicId: TEST_TOPIC,
});
console.log('发送信息', sendMsgRes.data, '\n\n');
```

### 查询信息状态

```typescript
const { data: messageStatus } = await WxPusher.getMessageStatus(71126666)
console.log('获取信息状态', messageStatus.data, '\n\n');
```

### 创建二维码

```typescript
const { data: qrcodeRes } = await WxPusher.createQrcode({
  appToken: PUSHER_TEST_TOKEN,
  extra: 'Test_Code',
})
console.log('创建二维码', qrcodeRes.data, '\n\n');
```

### 查询用户列表

```typescript
const { data: userList } = await WxPusher.getUserList({
  appToken: PUSHER_TEST_TOKEN,
  page: 1,
  pageSize: 10,
})
console.log('查询用户列表', userList.data, '\n\n');

const { data: userList } = await WxPusher.getUserList({
  appToken: PUSHER_TEST_TOKEN,
  page: 1,
  pageSize: 10,
  uid: '<USER_ID>'
})
console.log('查询具体用户信息', userList[0].data, '\n\n');
```

## 类型声明 Type Declaration

``` typescript
/* 接口列表 */
export enum SendApis {}

/* 内容类型 */
export enum ContentType {}

/** 请求返回统一结构 */
export interface ResponseBase<T> {}

/* 通知消息请求体 */
export interface SendMsgRequestBase {}

/* 简单发送消息请求参数 */
export interface SendMsgRequestParams {}

/* 全功能发送消息请求体 */
export interface SendMsgRequestBody {}

/** 发送消息响应内容项 */
export interface SendMsgResponseDataItem {}

/** 创建二维码请求体 */
export interface CreateQrcodeRequestBody {}

/** 创建二维码响应内容 */
export interface CreateQrcodeResponseData {}

/** 查询用户列表 */
export interface GetUserListRequestParams {}

/** 获取用户列表响应内容 */
export interface GetUserListResponseData {}

/** 获取用户列表响应用户信息 */
interface GetUserListResponseDataItem {}

/** 公众号互动类型 */
export enum ActionType {}

/** 用户来源 */
export enum UserSource {}

/** 调用事件类型及相关数据 */
export interface EventData {}

/** 调用事件数据部分 */
export interface EventDataBase {}

/** 用户关注消息回调数据 */
export interface SubscribeEventData {}

/** 上行消息回调数据 */
export interface UpCmdEventData {}
```