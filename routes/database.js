/*
 * @Author: jack.hai
 * @Date: 2022-08-27 12:20:26
 * @LastEditTime: 2022-09-08 11:46:58
 * @Description: 
 */
// database.js
// 连接Mysql

let mysql = require('mysql');

let pool = mysql.createPool({
    host: 'localhost',    // 数据库的地址
    user: 'develop',         // 数据库用户名
    password: '123456',     // 数据库密码
    database: 'admin'   // 数据库名称  
})

// 对数据库进行增删改查操作的基础
function query(sql, callback) {
    pool.getConnection((err, connection) => {
        connection.query(sql, (err, rows) => {
            callback(err, rows)
            connection.release()
        })
    })
}

exports.query = query

