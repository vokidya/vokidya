// component/attraction-list-Item/attraction-list-Item.js
var clickLikeIcon = false;
var clickLikeNum = 0;
var arrInfo = []
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: ''
    },

    index: {
      type: Number,
      value: 0
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
      this.data.collection = !this.data.collection;
      // 样式更换
      this.setData({
        collection: this.data.collection
      })
      var value = wx.getStorageSync('collectionObj');
      // 收藏
      if (!value && this.data.collection) {
        wx.setStorageSync('collectionObj', JSON.stringify([{"index":this.data.index, "name": this.data.name}]));
        arrInfo.push({ "index": this.data.index, "name": this.data.name });
        this.setData({
          arr: arrInfo
        })
      } else if (value && this.data.collection) {
        arrInfo.push({ "index": this.data.index, "name": this.data.name});
        this.setData({
          arr: arrInfo
        })
        wx.setStorageSync('collectionObj', JSON.stringify(this.data.arr));
      }

      // 取消收藏
      if (!this.data.collection) {
        var value = wx.getStorageSync('collectionObj');
        arrInfo = JSON.parse(value);
        this.setData({
          arr: arrInfo
        })
        for (var i = 0; i < arrInfo.length; i++){
          if (arrInfo[i].index === this.data.index){
            arrInfo.splice(i,1);
            this.setData({
              arr: arrInfo
            })
          }
        }
        wx.setStorageSync('collectionObj', JSON.stringify(this.data.arr));
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
