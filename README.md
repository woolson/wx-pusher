# WxPusher SDK NodeJS版本

## 安装 Install

```shell
npm install -S @woolson/wx-pusher
```

## 使用 Usage

```typescript
import { WxPusher } from '@woolson/wx-pusher';

const PUSHER_TEST_TOKEN = '<PRIVATE_TOKEN>';
const TEST_TOPIC = <PRIVATE_TOPIC>;

(async function main() {
  const { data: sendMsgSimpleRes } = await WxPusher.sendMessageSimple({
    appToken: PUSHER_TEST_TOKEN,
    content: '测试内容',
    summary: '测试',
    topicId: TEST_TOPIC,
  });
  console.log('发送信息简化版', sendMsgSimpleRes.data, '\n\n');

  const { data: sendMsgRes } = await WxPusher.sendMessageSimple({
    appToken: PUSHER_TEST_TOKEN,
    content: '测试推送内容内容',
    summary: '测试标题',
    topicId: TEST_TOPIC,
  });
  console.log('发送信息', sendMsgRes.data, '\n\n');

  const { data: messageStatus } = await WxPusher.getMessageStatus(71126666)
  console.log('获取信息状态', messageStatus.data, '\n\n');

  const qrcodeRes = await WxPusher.createQrcode({
    appToken: PUSHER_TEST_TOKEN,
    extra: 'Test_Code',
  })
  console.log('创建二维码', qrcodeRes.data, '\n\n');

  const { data: userList } = await WxPusher.getUserList({
    appToken: PUSHER_TEST_TOKEN,
    page: 1,
    pageSize: 10,
  })
  console.log('查询用户列表', userList.data, '\n\n');
})();
```