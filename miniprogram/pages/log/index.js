// index.js


Page({
  data:{
    username:"",
    userpswd:""
  },
//   commond_pswd:function()
//   {
//     var phone=this.data.username;
    
//   },
  submit:function(e)
  {
 
    //console.log(e)
    let u = e.detail.value;
    wx.cloud.callFuction({
        name:"logdata",
        data:{
            type:"logdata",
            ...u,
        }
    })
    .then((res)=>{
        console.log(res);
    })

  },

  error(e) {
    console.log(e.detail)
  },


   
})
