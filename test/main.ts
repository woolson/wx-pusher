import { WxPusher } from '../src';

const PUSHER_TEST_TOKEN = '<Token>';
const TEST_TOPIC = '<Topic>';

(async function main() {
  // const { data: sendMsgSimpleRes } = await WxPusher.msgSendSimple({
  //   appToken: PUSHER_TEST_TOKEN,
  //   content: '测试内容',
  //   summary: '测试',
  //   topicId: TEST_TOPIC,
  // });
  // console.log('发送信息简化版', sendMsgSimpleRes.data, '\n\n');

  // const { data: sendMsgRes } = await WxPusher.msgSend({
  //   appToken: PUSHER_TEST_TOKEN,
  //   content: '测试内容',
  //   summary: '测试',
  //   topicIds: [TEST_TOPIC],
  // });
  // console.log('发送信息', sendMsgRes.data, '\n\n');

  // const { data: messageStatus } = await WxPusher.msgStatusGet(71126666);
  // console.log('获取信息状态', messageStatus.data, '\n\n');

  // const qrcodeRes = await WxPusher.qrcodeCreate({
  //   appToken: PUSHER_TEST_TOKEN,
  //   extra: 'Test_Code',
  // });
  // console.log('创建二维码', qrcodeRes.data, '\n\n');

  // const { data: userListV1 } = await WxPusher.userListGet({
  //   appToken: PUSHER_TEST_TOKEN,
  //   page: 1,
  //   pageSize: 10,
  // });
  // console.log('查询用户列表V1', userListV1.data, '\n\n');

  // const { data: userListV2 } = await WxPusher.userListGetV2({
  //   appToken: PUSHER_TEST_TOKEN,
  //   page: 1,
  //   pageSize: 10,
  // });
  // console.log('查询用户列表V2', userListV2.data, '\n\n');

  // const { data: rejectResult } = await WxPusher.userReject({
  //   appToken: PUSHER_TEST_TOKEN,
  //   id: 52056,
  //   reject: true,
  // });
  // console.log('拉黑用户', rejectResult, '\n\n');
})();