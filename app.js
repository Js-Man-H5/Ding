/*
 * @Author: jack.hai
 * @Date: 2022-08-27 12:15:55
 * @LastEditTime: 2022-11-03 15:08:28
 * @Description: 
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyparser = require('body-parser');
var indexRouter = require('./routes/index');

const json = express.json({type: '*/json'});
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(json)
app.use(bodyparser.urlencoded({extended:false}))
app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
var debug = require('debug')('my-application'); // debug模块
app.set('port', process.env.PORT || 3000); // 设定监听端口

//启动监听
// var server = app.listen(app.get('port'), function () {
//   debug('Express server listening on port ' + server.address().port);
// });
// 这是 4.x 默认的配置，分离了 app 模块,将它注释即可，上线时可以重新改回来
module.exports = app;
