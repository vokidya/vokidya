const attractionData = require('../../../data/attractions.js');
var app = getApp();
var longitude;
var latitude;
var point = [];
Page({

  data: {
    attractions: attractionData.attractions,
    detailInfo: {},
    displayMap: false,
    markers: [{
      iconPath: "../../../assets/images/icon-location.png",
      id: 0,
      latitude: 31.2983400000,
      longitude: 120.5831900000,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 120.5831900000,
        latitude: 31.2983400000
      }, {
        longitude: 120.5831900000,
        latitude: 31.2983400000
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '../../../assets/images/icon-location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },

  onLoad: function (options) {
    this.data.attractions.forEach(info => {
      if (info.id == options.id) {
        latitude = info.latitude;
        longitude = info.longitude;
        this.setData({
          detailInfo: info
        })
      }
    })

    this.audioCtx = wx.createInnerAudioContext('myAudio');
  },


  getMap: function(){
    point = [{
      longitude: longitude,
      latitude: latitude
    }, {
      longitude: 120.5831900000,
      latitude: 31.2983400000
    }],
    this.setData({
      displayMap: !this.data.displayMap,
       polyline: [{
        points: point,
        color: "#FF0000DD",
        width: 2,
        dottedLine: true
      }],
       markers: [{
         iconPath: "../../../assets/images/icon-location.png",
         id: 0,
         latitude: 31.2983400000,
         longitude: 120.5831900000,
         width: 50,
         height: 50
       }, {
           iconPath: "../../../assets/images/like.png",
         id: 0,
         latitude: latitude,
         longitude: longitude,
         width: 50,
         height: 50
       }]
    })
  } 
})
