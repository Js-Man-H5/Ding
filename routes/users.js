/*
 * @Author: jack.hai
 * @Date: 2022-08-27 12:15:55
 * @LastEditTime: 2022-09-13 09:04:34
 * @Description: 
 */

var express = require('express');
var router = express.Router();
let fetch = require('node-fetch');
/* GET users listing. */
router.get('/',async  function  (req, res, next) {
  // console.log('我是req', req,)
  let url = 'https://oapi.dingtalk.com/robot/send?access_token=7fa1a143b948489fc1583baab3cbaddc78d30ab3ce3736213e52f3f51012a1bc'
  let params = {
    msgtype: 'text',
    "text": {
      "content":"我就是我, @XXX 是不一样的烟火"
  },
  // ngrok http 3000
}
  const response = await fetch(url, {method: 'POST', body: JSON.stringify(params) , headers: {'Content-Type': 'application/json;charset=utf-8'}});
    const data = await response.json();
    console.log('data', data)
  res.send('users');
});
// https://oapi.dingtalk.com/robot/send?access_token=7fa1a143b948489fc1583baab3cbaddc78d30ab3ce3736213e52f3f51012a1bc
router.post('/test', function (req, res, next) {
  console.log('req.body-test', req.body)
  
  let obj = {
    // 项目名称
    project: req.body.project,
    //
  }
  res.send('respond with a resource');
});

module.exports = router;
