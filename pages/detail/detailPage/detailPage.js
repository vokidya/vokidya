const attractionData = require('../../../data/attractions.js');

Page({

  data: {
    attractions: attractionData.attractions,
    detailInfo: {}
  },

  onLoad: function (options) {
    this.data.attractions.forEach(info => {
      if (info.id == options.id) {
        this.setData({
          detailInfo: info
        })
      }
    })
  }
})
