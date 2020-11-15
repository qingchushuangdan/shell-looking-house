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
    },
    LoveSecondHouse: [
      {
        image: '/image/secondHouse3.jpg',
        title: '新力金沙湾，3房，物业环境好，近新洪城一附院',
        detail: '3室2厅/99.29m²/南/新力金沙湾',
        allPrice: '120',
        singlePrice: '12085.8'
      },
      {
        image: '/image/secondHouse8.jpg',
        title: '诚意出售，新力小区，新力物业，管理规范',
        detail: '3室2厅/104.94m²/南 北/新力金沙湾',
        allPrice: '150',
        singlePrice: '14293.9'
      },
      {
        image: '/image/secondHouse9.jpg',
        title: '户型端正，视野开阔，房东诚心出售',
        detail: '3室2厅/105.1m²/南/新力帝泊湾',
        allPrice: '152',
        singlePrice: '14462.4'
      },
      {
        image: '/image/secondHouse6.jpg',
        title: '户型方正，视野开阔，电梯高层，房东诚信出售',
        detail: '3室2厅/99m²/南/恒大时代之光',
        allPrice: '125',
        singlePrice: '12626.3'
      },
      {
        image: '/image/secondHouse7.png',
        title: '精装3房，地铁口，小区管理严谨干净整洁',
        detail: '3室2厅/89.8m²/南/新力玲珑湾',
        allPrice: '106',
        singlePrice: '12000'
      },
    ],
    loveNewHouse: [
      {
        image: '/image/newhouse4.jpg',
        title: '富力首开·金禧璞瑅',
        address: '顺义-顺义其它',
        price: '均价620万/套'
      },
      {
        image: '/image/newhouse5.jpg',
        title: '利锦府府上',
        address: '朝阳-东坝',
        price: '均价60000元/m²'
      },
      {
        image: '/image/newhouse6.jpg',
        title: 'V7荷塘月色',
        address: '房山-房山其它',
        price: '均价28000元/m²'
      },
      {
        image: '/image/newhouse7.jpg',
        title: '丽景长安',
        address: '门头沟·冯村',
        price: '均价52000元/m²'
      },
      {
        image: '/image/newhouse8.jpg',
        title: '首创伊林郡',
        address: '东城-东城其它',
        price: '均价430万/套'
      },
    ],
    rentHouse: [
      {
        image: '/image/renthouse1.jpg',
        title: '整租·金涛御景花园',
        detail: '45m²/1室1厅/南',
        price: '1000'
      },
      {
        image: '/image/renthouse2.jpg',
        title: '合租·联泰香域中央',
        detail: '25m²/4室1厅2卫/拾居公寓',
        price: '1200'
      },
      {
        image: '/image/renthouse3.jpg',
        title: '整租·平安曼哈顿风情',
        detail: '39m²/1室1厅1卫/北',
        price: '1100'
      },
      {
        image: '/image/renthouse4.jpg',
        title: '合租·滨江豪园',
        detail: '30m²/4室1厅2卫/拾居公寓',
        price: '1200'
      },
      {
        image: '/image/renthouse5.jpg',
        title: '整租·船山新居住宅校区',
        detail: '78m²/2室2厅1卫/南',
        price: '1200'
      },
    ]
  },
  secondHouse:function(){
    wx.navigateTo({
      url: '../secondHouse/secondHouse'
    })
  },
  newHouse:function(){
    wx.navigateTo({
      url: '../newHouse/newHouse'
    })
  },
  sendHouse:function(){
    wx.navigateTo({
      url: '../sendHouse/sendHouse'
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