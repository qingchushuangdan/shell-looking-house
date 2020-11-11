// component/found/found.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        allFound: {
            type: Object,
            value: {}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        
    },

    /**
     * 组件的方法列表
     */
    methods: {
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
        }
    }
})
