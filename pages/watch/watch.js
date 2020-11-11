// pages/watch/watch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 1,
    height: '',
    allFound: [
      {
        sign: '',
        title: "2020最具高级感的饰面，不是实木，不是石材，而是来自西班牙的...",
        author: '筑客HOME',
        time: '2天前',
        img: '../../image/pic10.jpg',
        flameTime: '5033',
        signIcon: 'background-color: #ff0033'
      },
      // {
      //   sign: '',
      //   title: "人生的第一个10万，该如何理财",
      //   author: '菜鸟理财',
      //   time: '13小时前',
      //   img: '',
      //   flameTime: '3826',
      //   signIcon: 'background-color: #ff0033'
      // },
      // {
      //   sign: '百科',
      //   title: "信用卡太多也会导致房贷被拒？对，这5种 “正确” 用卡行为也不行",
      //   author: '眼里只有房',
      //   time: '12小时前',
      //   img: '',
      //   flameTime: '4224',
      //   signIcon: 'background-color: #ff0033'
      // },
      {
        sign: '市场',
        title: "恒大终止重组深深房，释放了什么信号？",
        author: '国民经略',
        time: '14小时前',
        img: '../../image/pic1.jpg',
        flameTime: '2708',
        signIcon: 'background-color: #ff0033'
      },
      {
        sign: '',
        title: "【装修专项】水槽怎么选？",
        author: '合肥飞墨设计',
        time: '18小时前',
        img: '../../image/pic5.jpg',
        flameTime: '591',
        signIcon: "background-color: #0066ff"
      },
      {
        sign: '热门',
        title: "蚂蚁集团上市被叫停，人民日报等官媒集体力挺",
        author: '一见财经',
        time: '2020-11-05',
        img: '../../image/pic2.jpg',
        flameTime: '1.3万',
        signIcon: 'background-color: #ff0033'
      },
      {
        sign: '',
        title: "灵感家|这抹绿色绝了！开放式厨房、观景阳台、步入衣帽间大气优雅",
        author: '住范儿',
        time: '2天前',
        img: '../../image/pic11.jpg',
        flameTime: '471',
        signIcon: "background-color: #0066ff"
      },
      {
        sign: '政策',
        title: "有用！2020版安全标识标准图册",
        author: '豆丁施工',
        time: '19小时前',
        img: '../../image/pic3.jpg',
        flameTime: '347',
        signIcon: 'background-color: #ff0033'
      },
      {
        sign: '百科',
        title: "父母赠送房产给子女，免征契税",
        author: '俺家住楼房',
        time: '15小时前',
        img: '../../image/pic9.jpg',
        flameTime: '1993',
        signIcon: 'background-color: #ff0033'
      },
      {
        sign: '',
        title: "2020年1-10月房企销售目标完成率排行榜",
        author: '地产人言',
        time: '3天前',
        img: '../../image/pic12.jpg',
        flameTime: '1594',
        signIcon: "background-color: #0066ff"
      },
      {
        sign: '',
        title: "金秋十月购好房，7日新上，总价最低82万",
        author: '南昌有贝壳',
        time: '2020-10-16',
        img: '../../image/pic4.jpg',
        flameTime: '1.4万',
        signIcon: 'background-color: #ff0033'
      },
      {
        sign: '热门',
        title: "蚂蚁集团上市被叫停，人民日报等官媒集体力挺",
        author: '一见财经',
        time: '2020-11-05',
        img: '../../image/pic2.jpg',
        flameTime: '1.3万',
        signIcon: 'background-color: #ff0033'
      },
      {
        sign: '',
        title: "【装修专项】水槽怎么选？",
        author: '合肥飞墨设计',
        time: '18小时前',
        img: '../../image/pic13.jpg',
        flameTime: '591',
        signIcon: "background-color: #0066ff"
      },
      {
        sign: '市场',
        title: "房企被三道红线打回同一起跑线，“活下去” 3招，降价回款最关键",
        author: '光宇吐楼市',
        time: '17小时前',
        img: '../../image/pic6.jpg',
        flameTime: '700',
        signIcon: 'background-color: #ff0033'
      },
      {
        sign: '热门',
        title: "10月第四周|成交量总体趋稳，成交均价普遍下行",
        author: '现领观察',
        time: '2020-10-28',
        img: '../../image/pic7.jpg',
        flameTime: '8万',
        signIcon: 'background-color: #ff0033'
      },
      {
        sign: '',
        title: "39年来首次！这四个字眼消失，人口政策大逆转？",
        author: '国民经略',
        time: '2020-11-05',
        img: '../../image/pic8.jpg',
        flameTime: '10万+',
        signIcon: 'background-color: #ff0033'
      }
    ]
  },

  clickTab: function (e) {
    let that = this
    if (this.data.currentTab === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  swiperTab: function (e) {
    var that = this
    that.setData({
      currentTab: e.detail.current
    })
  },

  changeColor: function (e) {
    var that = this 
    let arr = that.data.allFound
    arr.forEach((item, index) => {
      // console.log(item.sign)
      if (item.sign == '市场') {
        let temp = "allFound[" + index + "].signIcon"
        this.setData({
          [temp]: 'background-color: #ff8800'
        })
      }
      if (item.sign == '百科') {
        let temp = "allFound[" + index + "].signIcon"
        this.setData({
          [temp]: 'background-color: #0066ff'
        })
      }
      if (item.sign == '政策') {
        let temp = "allFound[" + index + "].signIcon"
        this.setData({
          [temp]: 'background-color: #66cc33'
        })
      }
      if (item.sign == '') {
        let temp = "allFound[" + index + "].signIcon"
        this.setData({
          [temp]: 'display: none'
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.data.allFound.length)
    let line = this.data.allFound.length
    this.setData({
      height: 40 + 115 * line
    })
    // console.log(this.data.height)
    this.changeColor()
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