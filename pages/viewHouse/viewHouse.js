// pages/viewHouse/viewHouse.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        height: 0,
        autoplay: true,
        swiperCurrent: 0,
        interval: 3000,
        duration: 500,
        circular: true,
        img: ['../../image/lunbo1.jpg', '../../image/lunbo2.jpg', '../../image/lunbo3.jpg', '../../image/lunbo4.jpg', '../../image/lunbo5.jpg', '../../image/lunbo6.jpg']
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.showToast({
            title: '努力加载中...',
            icon: 'loading',
            duration: 500
        })
        let src = this.data.img[0]
        // console.log(src)
        wx.getImageInfo({
          src: src,
          success: (res) => {
            let imgHeight = res.height / 2
            this.setData({
                height: imgHeight
            })
          }
        })
    },

    swiperChange: function(e) {
        this.setData({
            swiperCurrent: e.detail.current
        })
        // console.log(this.data.swiperCurrent + 1)
    },

    swiperClick: function(e) {
        let currentpage = this.data.swiperCurrent + 1
        let currentsrc = this.data.img[currentpage - 1]
        // console.log(currentpage, currentsrc)
        wx.previewImage({
          current: currentsrc,  // 当前显示图片的http链接
          urls: this.data.img // 需要预览的图片http链接列表
        })
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