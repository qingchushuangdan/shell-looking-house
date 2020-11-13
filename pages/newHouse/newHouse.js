// pages/newHouse/newHouse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconHouse: [
      {
        image: '/image/11.png',
        text: '全部楼盘'
      },
      {
        image: '/image/new.png',
        text: '在售楼盘'
      },
      {
        image: '/image/iconhousenew.png',
        text: '优惠楼盘'
      },
      {
        image: '/image/day.png',
        text: '11.11活动'
      },
    ],
    imgUrls: [
      '/image/newhouseswiper.jpg',
      '/image/newhouseswiper2.jpg'
        ],
    interval: '3000',
    duration: '800',
    classfication: [
      {
        name: '区域',
        image: '/image/downArrow.png'
      },
      {
        name: '价格',
        image: '/image/downArrow.png'
      },
      {
        name: '房型',
        image: '/image/downArrow.png'
      },
      {
        name: '更多',
        image: '/image/downArrow.png'
      }
    ],
    label: [
      {
        name: '二室'
      },
      {
        name: '住宅'
      },
      {
        name: '优惠楼盘'
      },
      {
        name: '品牌房企'
      }
    ],
    newHouse: [
      {
        image: '/image/newhouse9.jpg',
        title: '华润昆仑御',
        labelcondition: '下期待开',
        address: '红谷滩-九龙湖',
        singleprice: '价格待定',
        area: '97-125',
        signIcon: 'background-color: #FD7A72;'
      },
      {
        image: '/image/newhouse10.jpg',
        title: '鸿海水岸之城沁园',
        labelcondition: '在售',
        address: '南昌县-银三角',
        singleprice: '10200元/m²',
        area: '88-100',
        signIcon: 'background-color: #2D75F1;'
      },
      {
        image: '/image/newhouse11.jpg',
        title: '绿滋肴庙街',
        labelcondition: '在售',
        address: '青山湖区-塘山广场',
        singleprice: '7500元/m²',
        area: '40',
        signIcon: 'background-color: #2D75F1;'
      },
      {
        image: '/image/newhouse12.jpg',
        title: '鸿海城',
        labelcondition: '在售',
        address: '新建区-红谷滩',
        singleprice: '11000元/m²',
        area: '88-103',
        signIcon: 'background-color: #2D75F1;'
      },
      {
        image: '/image/newhouse13.jpg',
        title: '嘉福新天地',
        labelcondition: '下期待开',
        address: '南昌县-象湖',
        singleprice: '价格待定',
        area: '89-109',
        signIcon: 'background-color: #FD7A72;'
      }
    ]
  },
  changeColor: function (e) {
    var that = this 
    let arr = that.data.newHouse
    arr.forEach((item, index) => {
      // console.log(item.sign)
      if (item.labelcondition == '下期待开') {
        let temp = "newHouse[" + index + "].signIcon"
        this.setData({
          [temp]: 'background-color: #ff8800'
        })
      }
      if (item.labelcondition == '在售') {
        let temp = "newHouse[" + index + "].signIcon"
        this.setData({
          [temp]: 'background-color: #0066ff'
        })
      }
    })
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