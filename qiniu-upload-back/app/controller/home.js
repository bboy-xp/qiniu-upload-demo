'use strict';

const Controller = require('egg').Controller;
var qiniu = require("qiniu");

class HomeController extends Controller {
  async index() {
    //注意填写
    const accessKey = 'accessKey';
    const secretKey = 'secretKey';

    const bucket = 'qrcodes';
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

    const options = {
      scope: bucket,
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);

    this.ctx.body = uploadToken;
  }
}

module.exports = HomeController;
