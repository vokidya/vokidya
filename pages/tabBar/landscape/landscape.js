//index.js
const attractionData = require('../../../data/attractions.js');
var QQMapWX = require('../../../libs/qqmap-wx-jssdk.js');
var util = require("../../../utils/util.js");
var destination = [];
var specificDis = [];
var initSpecificDis = [];
var qqmapsdk;
//获取应用实例
const app = getApp()

Page({
  data: {
    attractions: attractionData.attractions,
    pageMode: "list", //list / detail
    selectedAttration: {
      name: "tetettet"
    },
    distanceData: [],
    motto: 'Hello World2',
    userInfo: {},
    hasUserInfo: false,
    collectionData: null,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  //事件处理函数
  onLoad: function () {
    this.getLatitudeAndLongitude(this.data.attractions);
    this.getSpecificDis();
    initSpecificDis = specificDis;
    var that = this;
    wx.getStorage({
      key: 'collections',
      success: function (res) {
        let collections = JSON.parse(res.data);
        that.setData({
          collectionData: collections
        })
      },
    })
    qqmapsdk = new QQMapWX({
      key: '6RSBZ-VYG6Q-MYS54-GACPQ-FWRP3-5SBRQ'
    });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  goDetailPage(data) {
    console.log(data.detail);
  },

  goBack: function (event) {
    this.setData({
      pageMode: "list"
    })
  },

  getLatitudeAndLongitude: function (data) {
    destination = [];
    var obj = {
      latitude: "",
      longitude: "",
      id: 0,
    }
    for (let i = 0; i < data.length; i++) {
      destination.push({
        latitude: data[i]['latitude'],
        longitude: data[i]['longitude'],
        id: data['id'],
      });
    }
  },

  goDetailPage(data) {
    wx.navigateTo({
      url: '/pages/detail/detailPage/detailPage?id=' + data.detail.id,
    })
  },

  getDistance: function (la1, lo1, la2, lo2) {
    var La1 = la1 * Math.PI / 180.0;
    var La2 = la2 * Math.PI / 180.0;
    var La3 = La1 - La2;
    var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));
    s = s * 6378.137; //地球半径
    s = (Math.round(s * 10000) / 10000 + 1).toFixed(1);
    return s;
  },

  getSpecificDis: function () {
    specificDis = [];
    for (var i = 0; i < destination.length; i++) {
      specificDis.push(this.getDistance(31.2983400000, 120.5831900000, destination[i].latitude, destination[i].longitude))
    }
    this.setData({
      distanceData: specificDis
    })
  },

  filterData(disValue) {
    var attractionsId = [];
    var filterAttractionData = [];
    for (var i = 0; i < initSpecificDis.length; i++) {
      if (Number(initSpecificDis[i]) > Number(disValue.currentTarget.dataset.dis)) {
        attractionsId.push(i + 1);
      }
    }
    console.log(attractionData.attractions);
    attractionData.attractions.forEach(info => {
      if (attractionsId.indexOf(Number(info.id)) !== -1) {
        filterAttractionData.push(info);
      }
    })
    this.setData({
      attractions: filterAttractionData
    })
    this.getLatitudeAndLongitude(filterAttractionData);
    this.getSpecificDis();
  }
})
