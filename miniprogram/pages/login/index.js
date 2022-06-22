// index.js


Page({
  data:{
    name:"",
    code:""
  },
  submit:function(e)
  {
    let u = e.detail.value;
    let name =u.name;
    let code =u.code;
    if(name!="" || code!=""){

    }
    console.log(u);
    wx.cloud.
      callFunction({
        name:"quickstartFunctions",
        data:{
          type:"logdata",
          u:u
        },success: function(res) {
          console.log(res.result.user_id)
        }
    })
  },

  error(e) {
    console.log(e.detail)
  },


   
})
