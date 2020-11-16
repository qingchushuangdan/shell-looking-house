// pages/rentHouse/rentHouse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    house: [
      {
        image: '/image/secondhouse1.png',
        name: '整租'
      },
      {
        image: '/image/secondhouse2.png',
        name: '合租'
      },
      {
        image: '/image/apartment.png',
        name: '独栋公寓'
      },
      {
        image: '/image/calendar.png',
        name: '月租'
      }
    ],
    rent: [
      {
        image: '/image/navigation.png',
        name: '我要出租'
      },
      {
        image: '/image/commute.png',
        name: '通勤找房'
      },
      {
        image: '/image/remove.png',
        name: '搬家'
      },
      {
        image: '/image/underground.png',
        name: '近地铁'
      }
    ],
    resource: [
      {
        name: '附近房源',
        search: '附近推荐房源'
      },
      {
        name: '猜你喜欢',
        search: '根据搜索历史'
      },
      {
        name: '业主自荐',
        search: '业主力推房源'
      }
    ],
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