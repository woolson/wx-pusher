import {
  AxiosResponse, default as Axios,
} from 'axios';
import {
  SendApis,
  SendMsgRequestBody,
  SendMsgRequestParams,
  CreateQrcodeRequestBody,
  GetUserListRequestParams,
  GetUserListResponseData,
  ResponseBase,
  SendMsgResponseDataItem,
  CreateQrcodeResponseData,
} from './interface';
import {
  SEND_BASE_URL,
} from './constant';

export class WxPusher {
  /**
   * 发送消息（简化版，只支持发送文字格式）
   * @param params 请求参数
   */
  static sendMessageSimple(
    params: SendMsgRequestParams
  ): Promise<AxiosResponse<ResponseBase<SendMsgResponseDataItem[]>>> {
    return Axios.request({
      baseURL: SEND_BASE_URL,
      url: SendApis.SendMessage,
      params,
    });
  }

  /**
   * 发送消息
   * @param data 请求参数
   */
  static sendMessage(data: SendMsgRequestBody) {
    return Axios.request<ResponseBase<SendMsgResponseDataItem[]>>({
      baseURL: SEND_BASE_URL,
      url: SendApis.SendMessage,
      method: 'POST',
      data,
    });
  }

  /**
   * 获取发送消息状态
   * @param messageId 信息的ID
   */
  static getMessageStatus(messageId: number) {
    return Axios.request<ResponseBase<string>>({
      baseURL: SEND_BASE_URL,
      url: `${SendApis.SendMessage}/${messageId}`,
    });
  }

  /**
   * 创建带参数二维码（二维码有效期最长30天）
   * @param data 创建二维码请求参数
   */
  static createQrcode(data: CreateQrcodeRequestBody) {
    return Axios.request<ResponseBase<CreateQrcodeResponseData>>({
      baseURL: SEND_BASE_URL,
      url: SendApis.CreateQrcode,
      method: 'POST',
      data,
    });
  }

  /** 查询应用用列表 */
  static getUserList(params: GetUserListRequestParams) {
    return Axios.request<ResponseBase<GetUserListResponseData>>({
      baseURL: SEND_BASE_URL,
      url: SendApis.GetUserList,
      params,
    })
  }
}