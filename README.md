<!--
 * @Author: jack.hai
 * @Date: 2022-08-27 12:18:36
 * @LastEditTime: 2022-11-03 14:28:35
 * @Description: 
-->
# 启动项目
npm run dev

# 热启动 
nodemon app.js

# 线上启动
pm2 start ./bin/www

https://www.blog.fugen.fun/sentry-api/



//  restartable-设置重启模式
// ignore-设置忽略文件
// verbose-设置日志输出模式，true 详细模式
// execMap-设置运行服务的后缀名与对应的命令
// {
// “js”: “node –harmony”
// }
// 表示使用 nodemon 代替 node
// watch-监听哪些文件的变化，当变化的时候自动重启
// ext-监控指定的后缀文件名