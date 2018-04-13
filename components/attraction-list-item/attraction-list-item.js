// component/attraction-list-Item/attraction-list-Item.js
var clickCollectionIcon = false;
var clickLikeIcon = false;
var clickCollectionNum = 0;
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
    collectionNum: 0,
    likeNum: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickImage() {
      this.triggerEvent('clickItem', this.data.dataSource);
    },
    clickCollection(){
      clickCollectionIcon = !clickCollectionIcon;
      if (clickCollectionIcon){
        clickCollectionNum++;
        this.setData({     
          collectionNum: clickCollectionNum //怎样不需要设置变量就直接可以
        })
      }else{
        clickCollectionNum--;
        this.setData({
          collectionNum: clickCollectionNum //怎样不需要设置变量就直接可以
        })
      }
      this.setData({
        collection: clickCollectionIcon //怎样不需要设置变量就直接可以
      })
    },
    clickLike() {
      clickLikeIcon = !clickLikeIcon;
      if (clickLikeIcon) {
        clickLikeNum++;
        this.setData({
          likeNum: clickLikeNum //怎样不需要设置变量就直接可以
        })
      } else {
        clickLikeNum--;
        this.setData({
          likeNum: clickLikeNum //怎样不需要设置变量就直接可以
        })
      }
      this.setData({
        like: clickLikeIcon //怎样不需要设置变量就直接可以
      })
    }
  }
})
