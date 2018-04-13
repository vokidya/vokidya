//index.js
const attractionData = require('../../../data/attractions.js');
var QQMapWX = require('../../../libs/qqmap-wx-jssdk.js');
var util = require("../../../utils/util.js");
var qqmapsdk;
//获取应用实例
const app = getApp()

Page({
  data: {
    attractions: attractionData.attractions,
    pageMode: "list", //list / detail
    selectedAttration: { name: "tetettet" },
    distanceData: [],
    motto: 'Hello World2',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  //事件处理函数
  onLoad: function () {
    var that = this;
    qqmapsdk = new QQMapWX({

      key: '6RSBZ-VYG6Q-MYS54-GACPQ-FWRP3-5SBRQ'
    });

    // 调用接口
    qqmapsdk.calculateDistance({
      mode: 'walking',//步行，驾车为'driving'
      from: {
        latitude: "31.2983400000",
        longitude: "120.5831900000"
      },
      to: [
        {
          latitude: "31.3233400000",
          longitude: "120.6286200000"
        },
        {
          latitude: "31.3358300000",
          longitude: "120.5805700000"
        },
        {
          latitude: "31.3242800000",
          longitude: "120.6293400000"
        }
      ],
      success: function (res) {
        var data = [];
        for (var i = 0; i < res.result.elements.length; i++) {
          data.push(util.formatDistance(res.result.elements[i].distance));
        }
        that.setData({
          distanceData: data
        })
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
       
      }
    });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  goDetailPage(data) {
   console.log(data.detail);
  },

  selectAttraction: function(event) {
    this.setData({
      selectedAttration: event.detail,
      pageMode: "detail"
    })
  },

  goBack: function (event) {
    this.setData({
      pageMode: "list"
    })
  }

})
