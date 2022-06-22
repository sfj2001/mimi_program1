const cloud = require('wx-server-sdk');

cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV,
  });

const db = cloud.database();
module.exports = async(event) =>{
    let u =event.u
    // let WXcontext =cloud.getWXcontext();
    // let opneid = WXcontext.OPENID;
    //用户id
    let res = await db.collection('data').count();
    let user_id = parseInt(res.total)+1;
    // 创建集合
    await db.collection('data').add({
        // data 字段表示需新增的 JSON 数据
        data: {
        id: u.name,
        pswd: u.code,
        // opneid,
        user_id,
        }
    });
    await db.collection('form').add({
        // data 字段表示需新增的 JSON 数据
        data: {
            id: u.name,
            pswd: u.code,
            // opneid,
            user_id,
        }
    });
    return{
        success:true,
        user_id,
    }

}