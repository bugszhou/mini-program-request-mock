const requestMap: any = {};

export default class RequestMock {
  private reqData: any = null;
  private resData: any = null;
  private errData: any = null;

  get(reqData: any) {
    this.reqData = reqData;
    requestMap[JSON.stringify(this.reqData)] = this;
    return this;
  }

  getErrData() {
    return this.errData;
  }

  getReqData() {
    return this.reqData;
  }

  getResData() {
    return this.resData;
  }

  success(resData: any) {
    this.resData = resData;
    return this;
  }

  fail(errData: any) {
    this.errData = errData;
    return this;
  }
}

global.wx.request = jest.fn().mockImplementation((reqData) => {
  const mockObj = requestMap[JSON.stringify(reqData)];

  if (mockObj.getErrData()) {
    reqData.fail(mockObj.getErrData());
  }
  return reqData.success(mockObj.getResData());
});
