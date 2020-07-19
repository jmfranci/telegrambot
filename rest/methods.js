const http = require("http");
function myGet(url, cb) {
  var options = {
    host: url,
    port: 80,
    path: "/",
    method: "GET",
  };
  http
    .request(options, function (res) {
      console.log("STATUS: " + res.statusCode);
      //console.log("HEADERS: " + JSON.stringify(res.headers));
      res.setEncoding("utf8");
      res.on("data", function (payload) {
        cb(payload);
      });
    })
    .end();
}

module.exports.myGet = myGet;
