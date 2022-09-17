/*
 * @Author: jack.hai
 * @Date: 2022-08-27 12:15:55
 * @LastEditTime: 2022-09-17 17:26:11
 * @Description: 
 */
var express = require('express');
var router = express.Router();
let fetch = require('node-fetch');
// 引入数据库配置文件
const db = require('./database')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express11' });
});
// router.get('/user', function (req, res, next) {
//   res.send('respond with a resource');
//   return
//   const sql = 'SELECT * FROM user';
//   db.query(sql, (err, result) => {
//     if (err) {
//       console.log('err ', err)
//       return;
//     }
//     console.log('result', result)
//     // res：API传数据
//     // result：返回的数据，需要转成JSON格式
//     res.json(result);
//   });
// });
router.post('/receiveHooks', async function  (req, res, next) {
  console.log('req', req.body)
  let url = 'https://oapi.dingtalk.com/robot/send?access_token=7fa1a143b948489fc1583baab3cbaddc78d30ab3ce3736213e52f3f51012a1bc';
  let link ='https://www.blog.fugen.fun/';
  let obj = {
    // 项目名称
    project: req.body?.project,
    level: req.body?.level,
    url: req.body?.url,
    value: req.body?.event.title||'-',
    request: req.body.event.request?.url,
    env:  req.body.event.environment ||req.body.event.request.env.ENV ,
    // value: req.body?.title,
    // request: req.body?.request?.url,
  }
  
  // https://www.blog.fugen.fun/
  let str = `> 项目名称：${obj.project.toUpperCase()}

> 当前环境：${obj.env.toUpperCase()}
  
> 错误级别：<font color='#660000'>${obj.level}</font>

> 详情地址：[点击查看](${obj.url})

> 错误内容：<font color='#660000'>${obj.value}</font>

> 项目请求路径：[点击查看](${obj.request})`
  let params = {
    msgtype: "markdown",
    markdown: {
      title: req.body.project + "项目通知",
      text: str,
    }
  }
  const response = await fetch(url, {method: 'POST', body: JSON.stringify(params) , headers: {'Content-Type': 'application/json;charset=utf-8'}});
  const data = await response.json();
  res.send('respond with a resource');
});

module.exports = router;
