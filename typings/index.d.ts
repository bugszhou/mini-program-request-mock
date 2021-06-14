declare class RequestMock {
  private reqData;
  private resData;
  private errData;
  get(reqData: any): this;
  getErrData(): any;
  getReqData(): any;
  getResData(): any;
  success(resData: any): this;
  fail(errData: any): this;
}

export default RequestMock;
