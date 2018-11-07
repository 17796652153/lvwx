// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      image: "http://88853.s81i.faiusr.com/4/102/AFEIlbYFEAQYACD7mazWBSjFp6rsBjCKAjjHAUBm.png", name: "双飞文化北京十日行\n￥5600起"},
      {
        image: "http://88853.s81i.faiusr.com/4/102/AFEIlbYFEAQYACD8mazWBSjQqJnPAzCKAjjIAUBm.png", name: "印象日本富士山行\n￥4800起"
      },
      {
        image: "http://88853.s81i.faiusr.com/4/102/AFEIlbYFEAQYACD5mazWBSiUoZDwATCKAjjHAUBm.png", name: "最美山城重庆三日游\n￥3680起"
      }
      ],
      lista:[
        {
          image: "http://88853.s81i.faiusr.com/4/102/AFEIlbYFEAQYACDOmqzWBSiwnL6fAzDKAjjcAUBm.png", name: "马尔代付自由行攻略"
        },
        {
          image: "http://88853.s81i.faiusr.com/4/102/AFEIlbYFEAQYACDSmqzWBSig4OjwBjDKAjjcAUBm.png", name: "韩国文化之行攻略"
        },
        {
          image: "http://88853.s81i.faiusr.com/4/102/AFEIlbYFEAQYACDQmqzWBSju9d7RBTDKAjjcAUBm.png", name: "时间浪漫之都法国自由行攻略"
        },
        {
          image: "http://88853.s81i.faiusr.com/4/102/AFEIlbYFEAQYACDNmqzWBSjehN_uAzDKAjjcAUBm.png", name: "领悟武汉樱花之行攻略"
        },
      ]
  },
  send:function(){
    wx.reLaunch({
      url: '../tjxc/tjxc?id=1'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})