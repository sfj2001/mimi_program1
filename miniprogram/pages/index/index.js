// index.js

var position;
var word ;
Page({
  data:{
    position:"fornt",
    word:"预览"
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
        
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  //换摄像头方向
  change_camear_device_position:function()
  {
    if(this.data.position=="front")
    {
      this.setData({
        position:"back"
      })
    }
    if(this.data.position =="back")
    {
      this.setData({
        position: "front"
      })
    }
    this.setData({
      position: "front"
    })
  },
  //换字符
  changeword:function(e)
  {
    if(this.data.word === "预览")
    {
      this.setData({
        word: "yulan"
      })
    }
    else if(this.data.word === "yulan")
    {
      this.setData({
        word: "预览"
      })
    }
    }
  }
  
)
