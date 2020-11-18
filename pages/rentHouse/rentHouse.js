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
    SelectHouse: [
      {
        image: '/image/renthouse1.jpg',
        title: '整租 · 金涛御景花园 1室0厅',
        detail: '52m²/1室0厅1卫/南',
        desc: '精装',
        price: '1200',
        data: '元/月'
      },
      {
        image: '/image/renthouse2.jpg',
        title: '整租 · 凤凰世纪华城 3室1厅',
        detail: '52m²/1室0厅1卫/南',
        desc: '精装',
        price: '2500',
        data: '元/月'
      },
      {
        image: '/image/renthouse3.jpg',
        title: '整租 · 鸿宇锦绣天湖花园 3室2厅',
        detail: '52m²/1室0厅1卫/南',
        desc: '精装',
        price: '1500',
        data: '元/月'
      },
      {
        image: '/image/renthouse4.jpg',
        title: '独栋 · 凯旋豪门公寓 4室2厅',
        detail: '52m²/1室0厅1卫/南',
        desc: '精装',
        price: '3000',
        data: '元/月'
      },
      {
        image: '/image/renthouse5.jpg',
        title: '独栋 · 佳乐怡园 1室0厅',
        detail: '52m²/1室0厅1卫/南',
        desc: '精装',
        price: '1800',
        data: '元/月'
      },
      {
        image: '/image/secondHouse11.jpg',
        title: '整租 · 南方翡翠公园 1室0厅',
        detail: '52m²/1室0厅1卫/南',
        desc: '精装',
        price: '2200',
        data: '元/月'
      }
    ]
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