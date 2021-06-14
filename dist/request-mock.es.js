var requestMap = {};
var RequestMock = /** @class */ (function () {
    function RequestMock(reqData) {
        this.reqData = null;
        this.resData = null;
        this.errData = null;
        if (reqData) {
            this.get(reqData);
        }
    }
    RequestMock.prototype.get = function (reqData) {
        this.reqData = reqData;
        requestMap[JSON.stringify(this.reqData)] = this;
        return this;
    };
    RequestMock.prototype.getErrData = function () {
        return this.errData;
    };
    RequestMock.prototype.getReqData = function () {
        return this.reqData;
    };
    RequestMock.prototype.getResData = function () {
        return this.resData;
    };
    RequestMock.prototype.success = function (resData) {
        this.resData = resData;
        return this;
    };
    RequestMock.prototype.fail = function (errData) {
        this.errData = errData;
        return this;
    };
    return RequestMock;
}());
global.wx.request = jest.fn().mockImplementation(function (reqData) {
    var mockObj = requestMap[JSON.stringify(reqData)];
    if (mockObj.getErrData()) {
        reqData.fail(mockObj.getErrData());
    }
    return reqData.success(mockObj.getResData());
});

export default RequestMock;
//# sourceMappingURL=request-mock.es.js.map
