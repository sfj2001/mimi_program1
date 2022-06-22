// index.js


Page({
  data:{
    username:"",
    userpswd:""
  },
  submit:function(e)
  {
    let u = e.detail.value;
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
