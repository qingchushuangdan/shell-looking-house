// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/image/swiper1.jpg',
      '/image/swiper2.jpg',
      '/image/swiper3.jpg'
    ],
    interval: '3000',
    duration: '800',
    newHouse:{
      newHouseOne:{
        name: '绿滋肴庙街',
        area: '40m²',
        price: '7500元/m²'
      },
      newHouseTwo:{
        name: '鸿海城',
        area: '88-103m²',
        price: '11000元/m²'
      },
      newHouseThree:{
        name: '鸿海水岸之城',
        area: '88-100m²',
        price: '10200元/m²'
      }   
    },
    secondHouse:{
      secondHouseOne:{
        name: '恒大时代名都',
        area: '2室1厅/86m²',
        price: '88.9万'
      },
      secondHouseTwo:{
        name: '联泰香域滨江',
        area: '3室2厅/95m²',
        price: '142万'
      },
      secondHouseThree:{
        name: '南天阳光',
        area: '3室2厅/106m²',
        price: '107万'
      },  
    }
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