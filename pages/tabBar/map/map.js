Page({
  data: {
    toView: '',
    scrollTop: 100,
    scale: 13,
    latitude: '',
    longitude: '',
    markers: [],
    controls: [{
      id: 1,
      iconPath: '../../../assets/images/icon-minus.png',
      position: {
        left: 310, 
        top: 100 - 50,
        width: 25,
        height: 25
      },
      clickable: true
    },
    {
      id: 2,
      iconPath: '../../../assets/images/icon-plus.png',
      position: {
        left: 340,
        top: 100 - 50,
        width: 25,
        height: 25
      },
      clickable: true
    }
    ],
    circles: []
  },
  controltap(e) {
    var that = this;
    if (e.controlId === 1) { //点击减号的时候触发
      that.setData({
        scale: --this.data.scale
      })
    } else { // 点击加号的时候触发
      that.setData({
        scale: ++this.data.scale
      })
    }
  },
  onLoad: function () {
    var _this = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            latitude: res.latitude,
            longitude: res.longitude,
            width: 50,
            height: 50,
            iconPath: '../../../assets/images/icon-location.png',
            title: 'location'
          }]
        })
      }
    })
  }
})
