// index.js


Page({
  data:{
    username:"",
    userpswd:""
  },
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
