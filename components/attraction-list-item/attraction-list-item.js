// component/attraction-list-Item/attraction-list-Item.js
var clickLikeIcon = false;
var clickLikeNum = 0;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: ''
    },

    coverImage: {
      type: String,
      value: ''
    },

    images: {
      type: Array,
      value: ''
    },

    rating: {
      type: String,
      value: ''
    },

    protectLevel: {
      type: String,
      value: ''
    },

    tags: {
      type: Array,
      value: ''
    },
    
    dataSource: {
      type: Object,
      value: {}
    },

    distance: {
      type: String,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    collection: false,
    like: false,
    likeNum: 0,
    arr: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickImage() {
      this.triggerEvent('clickItem', this.data.dataSource);
    },
    clickCollection() {
      var that = this;
      this.data.collection = !this.data.collection;
      // 样式更换
      this.setData({
        collection: this.data.collection //怎样不需要设置变量就直接可以
      })
      var value = wx.getStorageSync('collectionObj');
      // 收藏
      if (!value && this.data.collection) {
        wx.setStorageSync('collectionObj', '[{text: "太平天国忠王府"}]');
      } else if (value && this.data.collection) {
        console.log(that.data.arr);
        that.data.arr.push({text: "太平天国忠王府" })
        wx.setStorageSync('collectionObj', that.arr);
      }

      // 取消收藏
      if (!this.data.collection) {
        var value = wx.getStorageSync('collectionObj');
        console.log(this.data.arr)
        this.data.arr.unshift();
        wx.setStorageSync('collectionObj', this.data.arr);
      }
    },
    clickLike() {
      clickLikeIcon = !clickLikeIcon;
      if (clickLikeIcon) {
        clickLikeNum++;
        this.setData({
          likeNum: clickLikeNum
        })
      } else {
        clickLikeNum--;
        this.setData({
          likeNum: clickLikeNum
        })
      }
      this.setData({
        like: clickLikeIcon
      })
    }
  }
})
