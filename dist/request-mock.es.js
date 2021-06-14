var requestMap = {};
var Request = /** @class */ (function () {
    function Request() {
        this.reqData = null;
        this.resData = null;
        this.errData = null;
    }
    Request.prototype.get = function (reqData) {
        this.reqData = reqData;
        requestMap[JSON.stringify(this.reqData)] = this;
        return this;
    };
    Request.prototype.getErrData = function () {
        return this.errData;
    };
    Request.prototype.getReqData = function () {
        return this.reqData;
    };
    Request.prototype.getResData = function () {
        return this.resData;
    };
    Request.prototype.success = function (resData) {
        this.resData = resData;
        return this;
    };
    Request.prototype.fail = function (errData) {
        this.errData = errData;
        return this;
    };
    return Request;
}());
global.wx.request = jest.fn().mockImplementation(function (reqData) {
    var mockObj = requestMap[JSON.stringify(reqData)];
    if (mockObj.getErrData()) {
        reqData.fail(mockObj.getErrData());
    }
    return reqData.success(mockObj.getResData());
});

export { Request };
//# sourceMappingURL=request-mock.es.js.map
