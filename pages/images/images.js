// pages/images/images.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrls: {},
    imagePool: ["04074f2c-8f04-4517-9f2d-5bc443a547b6-1505438929753.jpg",
      "20170804_095159_915558288.jpg",
      "20170916_202323_1535058717.jpg",
      "20170918_093405_742973139.jpg",
      "20170918_123519_1079600630.jpg",
      "20170918_124146_1649896563.jpg",
      "30000137895413306997786140712-52-59-_polarr.jpg",
      "DSC00006_polarr.jpg",
      "DSC00186_polarr.jpg",
      "DSC00218_polarr.jpg",
      "DSC00233_polarr.jpg",
      "DSC00250_polarr.jpg",
      "DSC00289_polarr.jpg",
      "DSC00303_polarr.jpg",
      "DSC00305_polarr.jpg",
      "DSC00312_polarr.jpg",
      "DSC00313_polarr.jpg",
      "DSC00314_1_polarr.jpg",
      "DSC00322_polarr.jpg",
      "DSC00334_polarr.jpg",
      "DSC00343_polarr.jpg",
      "DSC00357_polarr.jpg",
      "DSC00392_polarr.jpg",
      "DSC00410_polarr.jpg",
      "DSC00410_polarr_1.jpg",
      "DSC00411_polarr.jpg",
      "DSC00439_polarr.jpg",
      "DSC00445_polarr.jpg",
      "DSC00463_polarr.jpg",
      "DSC00464_1_polarr.jpg",
      "DSC00464_polarr.jpg",
      "DSC00471_polarr.jpg",
      "DSC00471_polarr_1.jpg",
      "DSC00476_polarr.jpg",
      "DSC00484_polarr.jpg",
      "DSC00485_polarr.jpg",
      "DSC00492_polarr.jpg",
      "DSC00493_polarr.jpg",
      "DSC00516_polarr.jpg",
      "DSC00518_1_polarr.jpg",
      "DSC00563_polarr.jpg",
      "DSC00591_polarr.jpg",
      "DSC00615_polarr.jpg",
      "DSC00618_polarr.jpg",
      "DSC00626_polarr.jpg",
      "DSC00676_polarr.jpg",
      "DSC00733_polarr.jpg",
      "DSC00737_polarr.jpg",
      "DSC00756_polarr.jpg",
      "DSC00763_polarr.jpg",
      "DSC00765_polarr.jpg",
      "DSC00770_polarr.jpg",
      "DSC00792_polarr.jpg",
      "DSC00858_polarr.jpg",
      "DSC00869_polarr.jpg",
      "DSC00877_polarr.jpg",
      "DSC00893_polarr.jpg",
      "DSC00921_polarr.jpg",
      "DSC00925_polarr.jpg",
      "DSC01734_polarr.jpg",
      "DSC01997_polarr.jpg",
      "DSC02007_polarr_1.jpg",
      "DSC02009_polarr_1.jpg",
      "DSC02013_polarr.jpg",
      "DSC02015_polarr.jpg",
      "DSC02015_polarr_1.jpg",
      "DSC02017_polarr.jpg",
      "DSC02026_polarr.jpg",
      "DSC02042_polarr.jpg",
      "DSC02060_polarr.jpg",
      "DSC02069_polarr.jpg",
      "DSC02147_polarr.jpg",
      "DSC02148_polarr.jpg",
      "DSC02148_polarr_1.jpg",
      "DSC02192_polarr.jpg",
      "DSC02232_polarr.jpg",
      "DSC02278_polarr.jpg",
      "DSC03123_polarr.jpg",
      "DSC03231_polarr.jpg",
      "DSC03237_polarr.jpg",
      "DSC03306_polarr.jpg",
      "DSC03310_polarr.jpg",
      "DSC03315_polarr.jpg",
      "DSC03317_polarr.jpg",
      "DSC03369_polarr.jpg",
      "DSC03371_polarr.jpg",
      "DSC03408_polarr.jpg",
      "DSC03498_polarr.jpg",
      "DSC03554_polarr.jpg",
      "DSC03579_polarr.jpg",
      "DSC03579_polarr_1.jpg",
      "DSC03616_polarr.jpg",
      "DSC03621_polarr.jpg",
      "DSC03630_polarr.jpg",
      "DSC03637_polarr.jpg",
      "DSC03638_polarr.jpg",
      "DSC03661_polarr.jpg",
      "DSC03665_polarr.jpg",
      "DSC03668_polarr.jpg",
      "DSC03700_polarr.jpg",
      "DSC03706_polarr.jpg",
      "DSC03706_polarr_1.jpg",
      "DSC03720_polarr.jpg",
      "DSC03724_polarr.jpg",
      "DSC03724_polarr_1.jpg",
      "DSC03726_polarr.jpg",
      "DSC03746_polarr.jpg",
      "DSC03756_polarr.jpg",
      "DSC03756_polarr_1.jpg",
      "DSC03769_polarr_1.jpg",
      "DSC03777_polarr.jpg",
      "DSC03782_polarr.jpg",
      "DSC03787_polarr.jpg",
      "DSC03796_polarr.jpg",
      "DSC03808_polarr.jpg",
      "DSC03817_polarr.jpg",
      "DSC03817_polarr_1.jpg",
      "DSC03939_polarr.jpg",
      "DSC03942_polarr.jpg",
      "DSC03986_polarr.jpg",
      "DSC03989_polarr_1.jpg",
      "DSC03996_polarr.jpg",
      "DSC04009_polarr.jpg",
      "DSC04021_polarr.jpg",
      "DSC04028_polarr.jpg",
      "DSC04033_polarr.jpg",
      "DSC04042_polarr.jpg",
      "DSC04048_polarr_1.jpg",
      "DSC04063_polarr.jpg",
      "DSC04067_polarr.jpg",
      "DSC04069_polarr.jpg",
      "DSC04070_polarr.jpg",
      "DSC04072_polarr.jpg",
      "DSC04078_polarr.jpg",
      "DSC04088_polarr.jpg",
      "DSC04090_polarr.jpg",
      "DSC04110_polarr.jpg",
      "DSC04315_polarr_1.jpg",
      "DSC04395_polarr.jpg",
      "DSC04647_polarr_1.jpg",
      "DSC04752_polarr_2.jpg",
      "DSC04874_polarr_1.jpg",
      "DSC04879_polarr.jpg",
      "DSC04903_polarr.jpg",
      "DSC04906_polarr.jpg",
      "DSC04907_polarr.jpg",
      "DSC04920_polarr_1.jpg",
      "DSC04925_polarr.jpg",
      "DSC04933_polarr.jpg",
      "DSC04965_polarr.jpg",
      "DSC05001_polarr_1.jpg",
      "DSC05343_polarr.jpg",
      "DSC05343_polarr_1.jpg",
      "DSC05347_polarr.jpg",
      "DSC05364_polarr.jpg",
      "DSC05387_polarr.jpg",
      "DSC05388_polarr.jpg",
      "DSC05391_polarr.jpg",
      "DSC05509_polarr.jpg",
      "DSC06628_polarr.jpg",
      "DSC06636_polarr.jpg",
      "DSC06674_1_polarr.jpg",
      "DSC06684_polarr.jpg",
      "DSC06758_polarr.jpg",
      "DSC06764_polarr.jpg",
      "DSC06773_polarr.jpg",
      "DSC06777_polarr.jpg",
      "DSC06820_1_polarr.jpg",
      "DSC06892_polarr.jpg",
      "DSC06923_polarr.jpg",
      "DSC06924_polarr.jpg",
      "DSC06925_polarr.jpg",
      "DSC06926_polarr.jpg",
      "DSC06929_polarr.jpg",
      "DSC06938_polarr.jpg",
      "DSC06979_polarr.jpg",
      "DSC07030_polarr.jpg",
      "DSC07037_polarr.jpg",
      "DSC07039_polarr.jpg",
      "DSC07069_polarr.jpg",
      "DSC07083_polarr.jpg",
      "DSC07094_polarr.jpg",
      "DSC07096_polarr.jpg",
      "DSC07102_polarr.jpg",
      "DSC07114_polarr.jpg",
      "DSC07138_polarr.jpg",
      "DSC07170_polarr.jpg",
      "DSC07184_polarr.jpg",
      "DSC07208_1_polarr.jpg",
      "DSC07213_polarr.jpg",
      "DSC07439_polarr.jpg",
      "DSC07448_polarr.jpg",
      "DSC07602_polarr.jpg",
      "DSC07623_polarr.jpg",
      "DSC07624_polarr.jpg",
      "DSC07639_1_polarr.jpg",
      "DSC07711_polarr.jpg",
      "DSC07840_polarr.jpg",
      "DSC07925_polarr.jpg",
      "DSC07935_polarr.jpg",
      "DSC08039_polarr.jpg",
      "DSC08044_polarr.jpg",
      "DSC08156_polarr.jpg",
      "DSC08182_polarr.jpg",
      "DSC08185_polarr.jpg",
      "DSC08328_polarr.jpg",
      "DSC08328_polarr_1.jpg",
      "DSC08495_polarr.jpg",
      "DSC08497_polarr.jpg",
      "DSC08551_polarr.jpg",
      "DSC08555_polarr.jpg",
      "DSC08560_polarr.jpg",
      "DSC08585_polarr.jpg",
      "DSC08855_polarr.jpg",
      "DSC08871_polarr.jpg",
      "DSC08872_polarr.jpg",
      "DSC08887_polarr.jpg",
      "DSC08896_polarr.jpg",
      "DSC08896_polarr_1.jpg",
      "DSC09305_polarr.jpg",
      "DSC09315_polarr.jpg",
      "DSC09318_polarr.jpg",
      "DSC09934_polarr.jpg",
      "DSC09939_polarr.jpg",
      "DSC09951_polarr.jpg",
      "DSC09957_polarr.jpg",
      "DSC09962_polarr.jpg",
      "DSC09966_polarr.jpg",
      "DSC09968_polarr.jpg",
      "DSC09970_polarr.jpg",
      "DSC09975_polarr.jpg",
      "DSC09976_polarr.jpg",
      "DSC09985_polarr.jpg",
      "DSC09989_polarr.jpg",
      "IMG_20171202_142540_polarr.jpg",
      "LRG_DSC08903_polarr.jpg",
      "mmexport1507780806242_polarr.jpg",
      "mmexport1507781054681_polarr.jpg",
      "mmexport1507781128234_polarr.jpg",
      "mmexport1507781128234_polarr_1.jpg",
      "mmexport1507781184089_polarr.jpg",
      "mmexport1507781423202_polarr.jpg",
      "mmexport1513227383445_polarr.jpg",
      "mmexport1513227383445_polarr_1.jpg"]
  
  },

  previewImage: function (e) {
    let currentImage = e.currentTarget.dataset.image;
    let index = this.data.imageUrls.indexOf(currentImage);
    let restImages = this.data.imageUrls.slice(index);

    wx.previewImage({
      current: currentImage,
      urls: restImages
    })
  },

  setImageUrls: function(e) {
    let imageUrls = this.data.imagePool.map(image => `http://owo7eevod.bkt.clouddn.com/${image}`);

    this.setData({
      imageUrls: imageUrls
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setImageUrls();
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