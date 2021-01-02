import { AxiosResponse, default as Axios } from 'axios';
import { SendApis, ResBase } from './interfaces/base.interface';
import { SEND_BASE_URL } from './constant';
import {
  UserListGetReqParams,
  UserListGetResData,
  UserRemoveReqBody,
} from './interfaces/user.interface';
import {
  MsgSendReqParams,
  MsgSendResDataItem,
  MsgSendReqBody,
} from './interfaces/msg.interface';
import {
  QrcodeCreateReqBody,
  QrcodeCreateResData,
} from './interfaces/qrcode.interface';

export class WxPusher {
  /**
   * 发送消息（简化版，只支持发送文字格式）
   * @method GET
   * @params params [请求参数](https://wxpusher.zjiecode.com/docs/#/?id=发送消息-1)
   */
  static msgSendSimple(params: MsgSendReqParams) {
    return Axios.request<AxiosResponse<ResBase<MsgSendResDataItem[]>>>({
      baseURL: SEND_BASE_URL,
      url: SendApis.MsgSend,
      params,
    });
  }

  /**
   * 发送消息
   * @method POST
   * @params data [请求参数](https://wxpusher.zjiecode.com/docs/#/?id=发送消息-1)
   */
  static msgSend(data: MsgSendReqBody) {
    return Axios.request<ResBase<MsgSendResDataItem[]>>({
      baseURL: SEND_BASE_URL,
      url: SendApis.MsgSend,
      method: 'POST',
      data,
    });
  }

  /**
   * 获取发送消息状态
   * @method GET
   * @params messageId [信息的ID](https://wxpusher.zjiecode.com/docs/#/?id=查询状态)
   */
  static msgStatusGet(messageId: number) {
    return Axios.request<ResBase<string>>({
      baseURL: SEND_BASE_URL,
      url: `${SendApis.MsgStatusGet}/${messageId}`,
    });
  }

  /**
   * 创建带参数二维码（二维码有效期最长30天）
   * @method POST
   * @params data [创建二维码请求参数](https://wxpusher.zjiecode.com/docs/#/?id=创建参数二维码)
   */
  static qrcodeCreate(data: QrcodeCreateReqBody) {
    return Axios.request<ResBase<QrcodeCreateResData>>({
      baseURL: SEND_BASE_URL,
      url: SendApis.QrcodeCreate,
      method: 'POST',
      data,
    });
  }

  /**
   * 分页查询到所有关注你App的微信用户
   * @method GET
   * @params params [查询参数及分页信息](https://wxpusher.zjiecode.com/docs/#/?id=查询App的关注用户V1（已弃用）)
   * @deprecated 请使用getUserListV2
   */
  static userListGet(params: UserListGetReqParams) {
    return Axios.request<ResBase<UserListGetResData>>({
      baseURL: SEND_BASE_URL,
      url: SendApis.UserListGet,
      params,
    });
  }
}
