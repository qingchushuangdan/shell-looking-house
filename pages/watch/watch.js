// pages/watch/watch.js
// const pagenumber = 1
// const pagesize = 6
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIdx: 0,
    currentTab: 1,
    houseHeight: 870,
    height: 1050,
    tabItem: ['好房', '发现', '行情', '踩盘'],
    navData: [
      {
        title: '必看二手',
        classification: '精选房源',
        img: '../../image/goodHouse.png'
      },
      {
        title: '优选新房',
        classification: '热门好盘',
        img: '../../image/goodHouse1.png'
      },
      {
        title: '品质租房',
        classification: '整租合租',
        img: '../../image/goodHouse2.png'
      },
      {
        title: '海外好房',
        classification: '全球置业',
        img: '../../image/goodHouse3.png'
      }
  ],
    // loadMore: false, //"上拉加载"的变量，默认false，隐藏  
    loadAll: false, //“没有数据”的变量，默认false，隐藏  
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
        title: "百万婚房，安家黄家湖",
        author: '南昌大数据荐房',
        time: '5天前',
        img: '../../image/pic15.jpg',
        flameTime: '',
        signIcon: 'background-color: #ff0033',
        seeTime: ''
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
        signIcon: 'background-color: #ff0033',
        showImg: ''
      },
      {
        sign: '',
        title: "灵感家|这抹绿色绝了！开放式厨房、观景阳台、步入衣帽间大气优雅",
        author: '住范儿',
        time: '2天前',
        img: '../../image/pic11.jpg',
        flameTime: '471',
        signIcon: "background-color: #0066ff",
        showImg: ''
      },
      {
        sign: '政策',
        title: "有用！2020版安全标识标准图册",
        author: '豆丁施工',
        time: '19小时前',
        img: '../../image/pic3.jpg',
        flameTime: '347',
        signIcon: 'background-color: #ff0033',
        showImg: ''
      },
      {
        sign: '百科',
        title: "父母赠送房产给子女，免征契税",
        author: '俺家住楼房',
        time: '15小时前',
        img: '../../image/pic9.jpg',
        flameTime: '1993',
        signIcon: 'background-color: #ff0033',
        showImg: ''
      },
      {
        sign: '',
        title: "2020年1-10月房企销售目标完成率排行榜",
        author: '地产人言',
        time: '3天前',
        img: '../../image/pic12.jpg',
        flameTime: '1594',
        signIcon: "background-color: #0066ff",
        showImg: ''
      },
      {
        sign: '',
        title: "黄家湖新力帝泊湾，商业周边氛围",
        author: '南昌大数据荐房',
        time: '1天前',
        img: '../../image/pic14.jpg',
        flameTime: '',
        signIcon: 'background-color: #ff0033',
        seeTime: ''
      },
      {
        sign: '',
        title: "金秋十月购好房，7日新上，总价最低82万",
        author: '南昌有贝壳',
        time: '2020-10-16',
        img: '../../image/pic4.jpg',
        flameTime: '1.4万',
        signIcon: 'background-color: #ff0033',
        showImg: ''
      },
      {
        sign: '热门',
        title: "蚂蚁集团上市被叫停，人民日报等官媒集体力挺",
        author: '一见财经',
        time: '2020-11-05',
        img: '../../image/pic2.jpg',
        flameTime: '1.3万',
        signIcon: 'background-color: #ff0033',
        showImg: ''
      },
      {
        sign: '',
        title: "【装修专项】水槽怎么选？",
        author: '合肥飞墨设计',
        time: '18小时前',
        img: '../../image/pic13.jpg',
        flameTime: '591',
        signIcon: "background-color: #0066ff",
        showImg: ''
      },
      {
        sign: '市场',
        title: "房企被三道红线打回同一起跑线，“活下去” 3招，降价回款最关键",
        author: '光宇吐楼市',
        time: '17小时前',
        img: '../../image/pic6.jpg',
        flameTime: '700',
        signIcon: 'background-color: #ff0033',
        showImg: ''
      },
      {
        sign: '热门',
        title: "10月第四周|成交量总体趋稳，成交均价普遍下行",
        author: '现领观察',
        time: '2020-10-28',
        img: '../../image/pic7.jpg',
        flameTime: '8万',
        signIcon: 'background-color: #ff0033',
        showImg: ''
      },
      {
        sign: '',
        title: "39年来首次！这四个字眼消失，人口政策大逆转？",
        author: '国民经略',
        time: '2020-11-05',
        img: '../../image/pic8.jpg',
        flameTime: '10万+',
        signIcon: 'background-color: #ff0033',
        showImg: ''
      }
    ],
    quotation: [
      {
        title: "恒大终止重组深深房，释放了什么信号？",
        author: '国民经略',
        time: '14小时前',
        img: '../../image/pic1.jpg',
        flameTime: '2708',
      },
      {
        title: "燕郊物业 “向前看”",
        author: '地产更新',
        time: '5天前',
        img: '../../image/pic16.png',
        flameTime: '948',
      },
      {
        title: "5年内，房产税能出来吗？财政部：继续稳步推进，传递了啥信号",
        author: '光宇吐楼市',
        time: '1小时前',
        img: '../../image/pic18.png',
        flameTime: '572',
      },
      {
        title: "2020年10月北京住宅各区成交排名",
        author: '地产营销人',
        time: '2天前',
        img: '../../image/pic19.png',
        flameTime: '351',
      },
      {
        title: "十月热门小区出炉，你关注的是不是榜上有名",
        author: '北京好房',
        time: '1天前',
        img: '../../image/pic21.png',
        flameTime: '3429',
      },
      {
        title: "央行透露楼市玄机，全国各地银行已出手，对房地产有多少影响？",
        author: '光宇吐楼市',
        time: '2020-10-22',
        img: '../../image/pic22.png',
        flameTime: '10万+',
      },
      {
        title: "贝壳研究院：上周北京新房住宅市场成交面积16.8万平环比降",
        author: '中国网地产',
        time: '1天前',
        img: '../../image/pic23.png',
        flameTime: '314',
      },
      {
        title: "房价 “万元时代” 来了，你还在等着跌吗？",
        author: '楼市相对论',
        time: '2020-11-06',
        img: '../../image/pic24.png',
        flameTime: '10万+',
      }
    ],
    plate: [
      {
        title: "黑胡桃家具的搭配陷阱，99%的人中招，老曲教你如何避坑",
        author: '居住进化论',
        time: '19小时前',
        img: '../../image/pic25.png',
        flameTime: '1475',
      },
      {
        title: "服了！进门不做隔断柜，无玄关照样美上天！",
        author: '家居严选师',
        time: '2天前',
        img: '../../image/pic26.png',
        flameTime: '4590',
      },
      {
        title: "48平方米小户型的逆袭！塞下开放式厨房、储藏间，低甜度绿的清新",
        author: '改造宅',
        time: '2天前',
        img: '../../image/pic27.png',
        flameTime: '604',
      },
      {
        title: "隐形门的3个大坑，想要极简家没那么简单",
        author: '装个好房子',
        time: '2020-11-05',
        img: '../../image/pic28.png',
        flameTime: '4.6万',
      },
      {
        title: "现代摩登 多彩缤纷之家",
        author: '家居在线',
        time: '2020-11-09',
        img: '../../image/pic29.png',
        flameTime: '781',
      },
      {
        title: "留啥客房？书房、多功能房不香么？",
        author: '合肥飞墨设计',
        time: '2020-11-04',
        img: '../../image/pic30.png',
        flameTime: '1845',
      },
      {
        title: "看不到下午2点的太阳就算了，还让我对着马桶做饭 | 萌面户型",
        author: '搜狐焦点',
        time: '2020-10-30',
        img: '../../image/pic31.png',
        flameTime: '2514',
      },
      {
        title: "LOFT是一种生活方式，这个150平方米的极致设计颠覆你的感官",
        author: '筑客HOME',
        time: '2020-11-05',
        img: '../../image/pic32.png',
        flameTime: '1.7万',
      }
    ],
    houseMessage: [
      {
        img1: '../../image/goodHousePic4.jpg',
        img2: '../../image/goodHousePic5.jpg',
        img3: '../../image/goodHousePic6.jpg',
        address: '整租·凤凰苑',
        size: '2室2厅1卫',
        price: '2600元/月',
        houseAddress: '庐山南大道/82m²/距1号线-珠江站622m',
        desc: '精装修。距离最近公交站108m，可乘坐50路出行。朝南。新上房源、小区绿化率30.0%，适宜居住。民水民电，有电梯，适合有老人家的家庭居住',
        providerPic: '../../image/provider-pic.png',
        providerName: '段白云',
        providerTip: '房源详细信息找我咨询',
        say: '../../image/say.png',
        tel: '../../image/tel.png',
        url: '../viewHouse/viewHouse'
      },
      {
        img1: '../../image/goodHousePic1.jpg',
        img2: '../../image/goodHousePic2.jpg',
        img3: '../../image/goodHousePic3.jpg',
        address: '整租·联发君悦湖',
        size: '2室2厅1卫',
        price: '2200元/月',
        houseAddress: '艾溪湖东/93m²',
        desc: '距离最近公交站145米，可乘坐823路出行。新上房源。小区绿化率35.0%，适宜居住。民水民电。有电梯，适合有老人的家庭居住。朝南。精装修',
        providerPic: '../../image/provider-pic.png',
        providerName: '刘枝',
        providerTip: '房源详细信息找我咨询',
        say: '../../image/say.png',
        tel: '../../image/tel.png',
        url: '../viewHouse/viewHouse'
      },
      {
        img1: '../../image/goodHousePic1.jpg',
        img2: '../../image/goodHousePic2.jpg',
        img3: '../../image/goodHousePic3.jpg',
        address: '整租·联发君悦湖',
        size: '2室2厅1卫',
        price: '2200元/月',
        houseAddress: '艾溪湖东/93m²',
        desc: '距离最近公交站145米，可乘坐823路出行。新上房源。小区绿化率35.0%，适宜居住。民水民电。有电梯，适合有老人的家庭居住。朝南。精装修',
        providerPic: '../../image/provider-pic.png',
        providerName: '刘枝',
        providerTip: '房源详细信息找我咨询',
        say: '../../image/say.png',
        tel: '../../image/tel.png',
        url: '../viewHouse/viewHouse'
      },
      {
        img1: '../../image/goodHousePic1.jpg',
        img2: '../../image/goodHousePic2.jpg',
        img3: '../../image/goodHousePic3.jpg',
        address: '整租·联发君悦湖',
        size: '2室2厅1卫',
        price: '2200元/月',
        houseAddress: '艾溪湖东/93m²',
        desc: '距离最近公交站145米，可乘坐823路出行。新上房源。小区绿化率35.0%，适宜居住。民水民电。有电梯，适合有老人的家庭居住。朝南。精装修',
        providerPic: '../../image/provider-pic.png',
        providerName: '刘枝',
        providerTip: '房源详细信息找我咨询',
        say: '../../image/say.png',
        tel: '../../image/tel.png',
        url: '../viewHouse/viewHouse'
      },
      {
        img1: '../../image/goodHousePic1.jpg',
        img2: '../../image/goodHousePic2.jpg',
        img3: '../../image/goodHousePic3.jpg',
        address: '整租·联发君悦湖',
        size: '2室2厅1卫',
        price: '2200元/月',
        houseAddress: '艾溪湖东/93m²',
        desc: '距离最近公交站145米，可乘坐823路出行。新上房源。小区绿化率35.0%，适宜居住。民水民电。有电梯，适合有老人的家庭居住。朝南。精装修',
        providerPic: '../../image/provider-pic.png',
        providerName: '刘枝',
        providerTip: '房源详细信息找我咨询',
        say: '../../image/say.png',
        tel: '../../image/tel.png',
        url: '../viewHouse/viewHouse'
      },
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
    wx.showToast({
      title: '努力加载中...',
      icon: 'loading',
      duration: 500
    })
  },

  switchNav: function (e) {
    var cur = e.currentTarget.dataset.current
    if (this.data.currentIdx == cur) {
      return false
    } else {
      this.setData({
        currentIdx: cur
      })
    }
    wx.showToast({
      title: '努力加载中...',
      icon: 'loading',
      duration: 500
    })
  },

  swiperTab: function (e) {
    var that = this
    that.setData({
      currentTab: e.detail.current
    })
  },

  switchTab: function (e) {
    var cur = e.detail.current
    this.setData({
      currentIdx: cur
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
      if (item.flameTime == '') {
        let temp = "allFound[" + index + "].seeTime"
        this.setData({
          [temp]: 'display: none;',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.data.allFound.length)
    // let line = this.data.allFound.length
    // let len = this.data.houseMessage.length
    // this.setData({
    //   // height: 40 + 115 * line,
    //   height: 1050,
    //   // houseHeight: 90 + 350 * len 
    //   houseHeight: 870
    // })
    // console.log(this.data.height)
    this.changeColor()

    // let len = this.data.allFound.length
    // this.setData({
    //   houseHeight: 90 + 115 * len
    // })
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
    // console.log("上拉触底事件")
    // let that = this
    // if (!that.data.loadMore) {
    //   that.setData({
    //     loadMore: true, //加载中  
    //     loadAll: false //是否加载完所有数据
    //   });

    //   //加载更多，这里做下延时加载
    //   setTimeout(function() {
    //     that.getData()
    //   }, 2000)
    // }
    this.setData({
      // loadMore: false,
      loadAll: true
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})