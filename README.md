# mini-program-request-mock

小程序 request 接口 mock，在 jest 中是`mini-program-request-mock`模拟`request`。

- 依赖于 jest

## Usage

```javascript
import RequestMock from "mini-program-request-mock";

describe("request", () => {
  it("success", () => {
    new RequestMock({
      url: "http://baidu.com",
    }).success({
      statusCode: 200,
      data: { data: 123, msg: "success" },
      headers: "",
    });

    wx.request({
      url: "http://baidu.com",
      success(res) {
        console.log("success: ", res);
      },
    });
  });

  it("fail", () => {
    new RequestMock()
      .get({
        url: "http://baidu.com",
      })
      .success({
        statusCode: 200,
        data: { data: 555, msg: "success" },
        headers: "",
      });

    wx.request({
      url: "http://baidu.com",
      success(res) {
        console.log("success1: ", res);
      },
    });
  });
});
```
