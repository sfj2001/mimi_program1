const cloud = require('wx-server-sdk');

cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV
  });

const db = cloud.database();

exports.main= async(event) =>{
    let u =event.data;
    let opneid = cloud.getWXcontext().OPENID;
    // 创建集合
    await db.collection('data').add({
        // data 字段表示需新增的 JSON 数据
        data: {
        id: u.phone,
        pswd: u.code,
        opneid
        }
    });
    await db.collection('form').add({
        // data 字段表示需新增的 JSON 数据
        data: {
            id: u.phone,
            pswd: u.code,
            opneid
        }
    });
    return{
        success:true,
    }
}