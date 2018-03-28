import Vue from "vue"
import DetailsHeader from "../src/components/st-header/details_header.vue"
import Particulars from "../src/components/details/index.vue"
import DetailsFooter from "../src/components/st-footer/details_footer.vue"
import Popup from "../src/components/st-popup/index.vue"
import Layer from "../src/components/st-popup/layer.vue"
require('swiper/dist/css/swiper.css')
export default {
  components:{
    DetailsHeader,
    Particulars,
    DetailsFooter,
    Popup,
    Layer
  },
  data(){
    return {
      product:{},
      //swiper 参数设置
      swiperOption: {
        notNextTick: true,
        speed: 300,
        autoplayDisableOnInteraction:false,
        pagination: {
          el: '.swiper-pagination',
        }
      },
      productDetailImgsList:[],
      productSkuList:{},
      FenxiangPrice:[],
      SkuList:[],
      productDescription:"",
      pingjia:0,
      pjlength:0,
      list:[],
      counter: 1,
      skuprice:0,
      Stock:0,
      shophref:"",
      kefuhref:'',
      type:0,
      index:0
    }
  },
  computed:{
    reversedMessage:function () {
      var pirce = (this.counter*this.skuprice).toFixed(2)
      console.log(this.skuprice)
      return pirce
    }
  },
  created() {
    this.AjaxDetails()
    window.share_success = this.share_success
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": ["AjaxDetails"]
  },
  methods:{
    Return:function () {
      window.location.href = "https://chat.yggx.com/back"
    },
    Specifications:function (event) {
      var that = this
      $(event.target).parents('body').find('.popup').fadeIn(100)
      $('.popup-fixed-2').css({marginTop:-($('.popup-fixed-2').height()/2)+'px'})

      for (var i=0;i<that.SkuList.length;i++){
        Vue.set(that.SkuList[i],'isDiscount',0)
      }
      this.skuprice = this.SkuList[0].price
      that.product.suggestedPrice = (that.productSkuList.discountedPrice).toFixed(2)
      that.index = 0
      console.log(that.index)
    },
    popupfadeout:function (event) {
      $(event.target).parents('body').find('.popup').fadeOut(100)
    },
    //商品详情
    AjaxDetails:function () {
      var that = this
      var url = 'https://chat.yggx.com/index.php/product/showProductInfoJsonp.html'
      var pramits = {
        token:that.$route.query.token,
        id:that.$route.query.id,
        Callback:'jsonp'
      }
      function htmlspecialchars_decode(str){
        str = str.replace(/&amp;/g, '&');
        str = str.replace(/&lt;/g, '<');
        str = str.replace(/&gt;/g, '>');
        str = str.replace(/&quot;/g, '"');
        str = str.replace(/&#039;/g, "'");
        return str;
      }
      $.ajax({
        url:url,
        data:pramits,
        type:"post",
        dataType:"jsonp",
        success:function (res) {
          if(res.code == "SUCCESS"){
            res.data.product.mainPicPath = unescape(res.data.product.mainPicPath)
            res.data.product.displayPrice = (res.data.product.displayPrice).toFixed(2)
            that.product = res.data.product
            for (var i=0;i<res.data.productDetailImgsList.length;i++){
              res.data.productDetailImgsList[i].url = unescape(res.data.productDetailImgsList[i].url)
            }
            that.productDetailImgsList = res.data.productDetailImgsList
            that.productSkuList = res.data.productSkuList[0]
            for (var i=0;i<res.data.productSkuList.length;i++){
              Vue.set(res.data.productSkuList[i],"active",false)
              Vue.set(res.data.productSkuList[0],"active",true)
              //判断是否有分享价
              if(res.data.productSkuList[i].discountedPrice == 0){
                $('.reight-button a:first-child').css({display:'none'})
              }else {
                $('.reight-button a:first-child').css({display:'block'})
              }
            }
            that.Stock = res.data.productSkuList[0].stockNum
            that.skuprice = res.data.productSkuList[0].price
            that.SkuList = res.data.productSkuList
            that.product.suggestedPrice = (res.data.productSkuList[0].discountedPrice).toFixed(2)

            var description = htmlspecialchars_decode(res.data.productDescription.description);
            that.productDescription = description
            //店铺跳转
            that.shophref = 'https://chat.yggx.com/Public/node/#/node/shop/home'+'?shopId='+that.product.shopId+'&token='+that.$route.query.token+'&uid='+that.product.uid
            //客服
            that.kefuhref = '/wannp?uid='+that.product.uid
            //综合评价
            var Attitude = 0
            var Description = 0
            var Quality = 0
            var pinjia = {
              sellerId:that.product.uid,
              productId:that.$route.query.id,
              Callback:'jsonp'
            }
            $.ajax({
              url:'https://chat.yggx.com/index.php/shop/select_evaluation.html',
              data:pinjia,
              type:'post',
              dataType:"jsonp",
              success:function (resb) {
                if (resb.code=='SUCCESS'){
                  for(var i=0;i<resb.data.rows.length;i++){
                    Attitude+=resb.data.rows[i].evaAttitude
                    Description+=resb.data.rows[i].evaDescription
                    Quality+=resb.data.rows[i].evaQuality
                  }
                  that.pingjia = (Quality/resb.data.rows.length+Description/resb.data.rows.length+Attitude/resb.data.rows.length)/5*100
                  that.pjlength = resb.data.rows.length
                }
              }
            })
            var url2 = 'https://chat.yggx.com/index.php/Shop/select_product.html'
            var params = {
              showPage:1,
              shopId:that.product.shopId,//that.$route.query.shopId
              showLimit:100,
              showSort:'id',
              showOrder:'desc',
              storeCategoryId:'',
              stockNum:that.$route.query.stockNum,//库存
              Callback:'jsonp'
            }
            //热卖推荐
            $.ajax({
              url:url2,
              data:params,
              type:'post',
              dataType:'JSONP',
              success:function (res) {
                if(res.code=='SUCCESS'){
                  var $push = new Array()
                  var json={};
                  for(var i = 0;i<res.data.rows.length;i++){
                    res.data.rows[i].mainPicPath = unescape(res.data.rows[i].mainPicPath) //url解码
                  }
                  //店铺取随机数　不重复
                  for(var j = 0;j<4;j++){
                    var ranNum = Math.floor(Math.random()*res.data.rows.length)
                    for(var n = 0 ; n < $push.length; n++){
                      if($push[n] === ranNum){
                        ranNum = Math.floor(Math.random()*res.data.rows.length)
                      }
                    }
                    $push.push(ranNum)
                  }
                  var details = '/node/details'+
                    '?token='+that.$route.query.token+'&Callback=jsonp'
                  var list = new Array()
                  for (var p=0;p<$push.length;p++){
                    var l = $push[p]
                    Vue.set(res.data.rows[l],"href",'https://chat.yggx.com/Public/node/#'+details+'&id='+res.data.rows[l].id)
                    list.push(res.data.rows[l])
                  }
                  that.list = list
                }
              },
              error:function (res) {
                alert('请求失败:')
              }
            })
            $('.st-pingjia-huise').css({width:$('.st-pingjia-huise .imgwidth').width()+'px'})
            $('.st-pingjia-huise i').css({width:$('.st-pingjia-huise .imgwidth').width()+'px'})
            $('.st-pingjia-huise a').css({width:that.pingjia+'%'})
          }else {
            console.log('请求失败！')
          }
        }
      })
    },
    //分享价
    share_success:function() {
      var that = this
      this.$layer.msg("分享成功!");
      var url = 'https://chat.yggx.com/index.php/product/showProductInfoJsonp.html'
      var pramits = {
        token:that.$route.query.token,
        id:that.$route.query.id,//7064
        Callback:'jsonp'
      }
      $.ajax({
        url:url,
        data:pramits,
        type:"post",
        dataType:"jsonp",
        success:function (res) {
          if(res.code == "SUCCESS"){
            console.log(res.data.product)
            res.data.product.mainPicPath = unescape(res.data.product.mainPicPath)
            res.data.product.displayPrice = (res.data.product.displayPrice).toFixed(2)
            Vue.set(that,'product',res.data.product)
            console.log(res.data.productSkuList)
            for (var i=0;i<res.data.productSkuList.length;i++){
              Vue.set(res.data.productSkuList[i],"active",false)
              Vue.set(res.data.productSkuList[0],"active",true)
              Vue.set(res.data.productSkuList[i],'isDiscount',1)
              if(res.data.productSkuList[i].discountedPrice!==0){
                that.skuprice = res.data.productSkuList[0].discountedPrice
                that.SkuList = res.data.productSkuList
                that.product.suggestedPrice = (res.data.productSkuList[0].discountedPrice).toFixed(2)
                that.type = 1
                that.index = 1
                $('body .layui-m-layer').fadeOut()
                setTimeout(function () {
                  $('body').find('.popup').fadeIn()
                  $('.popup-fixed-2').css({marginTop:-($('.popup-fixed-2').height()/2)+'px'})
                },1000)
              }else {
                that.skuprice = res.data.productSkuList[0].price
                $('body .layui-m-layer').fadeOut()
              }
            }
          }else {
            console.log('请求失败！')
          }
        }
      })
    },
    //加入购物车
    ShoppingCart:function (event) {
      var that = this
      var url = 'https://chat.yggx.com/ShoppingCar/addGridShoppingCar'
      var pramit = {
        token:that.$route.query.token,
        sellerShopId:that.product.shopId,
        sellerShopName:that.product.shopName,
        skuId:$(event.target).parents('.popup-fixed-2').find('.active').attr('data-skuid'),
        productId:$(event.target).parents('.popup-fixed-2').find('.active').attr('data-productid'),
        productName:that.product.productName,
        showPrice:$(event.target).parents('.popup-fixed-2').find('.active').attr('data-price'),
        skuRule:$(event.target).parents('.popup-fixed-2').find('.active').attr('data-skuRule'),
        skuRuleName:$(event.target).parents('.popup-fixed-2').find('.active').attr('data-skuRuleName'),
        amount:that.counter,
        mainPicPath:that.product.mainPicPath,
        Callback:'jsonp'
      }
      if($(event.target).parents('.popup-fixed-2').find('.active').attr('data-Stock') == 0 ) {
        that.$layer.msg('抱歉！此规格商品已经没有库存...')
      }else {
        $.ajax({
          url:url,
          data:pramit,
          type:'post',
          dataType:'jsonp',
          success:function (res) {
            that.$layer.msg("已为您入购物车!");
          },
          error:function (res) {
            that.$layer.msg("加入购物车失败!");
          }
        })
      }
    },
    //添加收藏
    Collection:function () {
      var that = this
      var url = 'https://chat.yggx.com/index.php/product/addCollectProduct.html'
      var pramit = {
        token:that.$route.query.token,
        productId:that.product.id,
        Callback:'jsonp'
      }
      $.ajax({
        url:url,
        data:pramit,
        type:'post',
        dataType:'jsonp',
        success:function () {
          that.$layer.msg("收藏成功 ^_^");
        },
        error:function () {
          that.$layer.msg("收藏失败 (╯︵╰)");
        }
      })
    },
    //头部分享
    DetailsCliskHeader:function (event) {
      var paramete =
        '?{"shareid":'+'"'+this.product.id+'"'+
        ',"shareName":'+'"'+this.product.productName+'"'+
        ',"shareUrl":'+'"'+this.product.mainPicPath+'"'+
        ',"address":'+'"'+this.product.shopName+'"'+
        ',"type":2}'
      $.each($(event.target).parents('body').find('#layerdetails .sharebox p a'),function (i) {
        var t = $(this).attr('href')
        $(this).attr('href',$(this).attr('href').split('?')[0]+encodeURI(paramete))
      })
      $(event.target).parents('body').find('#layerdetails').slideDown()
    },
    //分享
    DetailsClisk:function (event) {
      var that=this
      if (this.type==0){
        var paramete =
          '?{"shareid":'+'"'+this.product.id+'"'+
          ',"shareName":'+'"'+this.product.productName+'"'+
          ',"shareUrl":'+'"'+this.product.mainPicPath+'"'+
          ',"address":'+'"'+this.product.shopName+'"'+
          ',"type":2}'
        $.each($(event.target).parents('body').find('#layerdetails .sharebox p a'),function (i) {
          var t = $(this).attr('href')
          $(this).attr('href',$(this).attr('href').split('?')[0]+encodeURI(paramete))
        })
        $(event.target).parents('body').find('#layerdetails').slideDown()
      }else {
        that.index = 1
        console.log(that.index)
        //已经分享过
        $(event.target).parents('body').find('.popup').fadeIn()
        $('.popup-fixed-2').css({marginTop:-($('.popup-fixed-2').height()/2)+'px'})
        for (var i=0;i<that.SkuList.length;i++){
          Vue.set(that.SkuList[i],'isDiscount',1)
        }
        that.skuprice = that.SkuList[0].discountedPrice
      }
    },
    DetailsCliskclose:function (event) {
      $(event.target).parents('.layui-m-layer').fadeOut()
    },
    //数量加
    Increase:function (event) {
      if(this.counter<this.Stock){
        this.counter = parseInt(this.counter) + 1;
        $(event.target).parents('.button').find('b.Reduce').css({background:"#0bb20c"})
        $(event.target).parents('.button').find('b.Increase').css({background:"#0bb20c"})
      }else {
        $(event.target).parents('.button').find('b.Increase').css({background:"#ccc"})
      }
    },
    //数量减
    Reduce:function (event) {
      if (this.counter>=2){
        this.counter = parseInt(this.counter) - 1;
        $(event.target).parents('.button').find('b.Reduce').css({background:"#0bb20c"})
        $(event.target).parents('.button').find('b.Increase').css({background:"#0bb20c"})
      }else {
        $(event.target).parents('.button').find('b.Reduce').css({background:"#ccc"})
      }
    },
    //立即购买
    Purchase:function (event) {
      var that = this
      var url = 'https://chat.yggx.com/buy/'
      var pramit = '{"skuId":"'+$(event.target).parents('.popup-fixed-2').find('.active').attr('data-skuid')+'",' +
        '"buyAmount":"'+$(event.target).parents('.popup-fixed-2').find('.popup-button .button input').val()+'",' +
        '"freightItemId":'+$(event.target).parents('.popup-fixed-2').find('.active').attr('data-freightTemplateId')+',' +
        '"shopId":'+$(event.target).parents('.popup-fixed-2').find('.active').attr('data-shopId')+',' +
        '"isDiscount":'+$(event.target).parents('.popup-fixed-2').find('.active').attr('data-isDiscount')+'}'
      if($(event.target).parents('.popup-fixed-2').find('.active').attr('data-Stock') == 0 ) {
        that.$layer.msg('抱歉！此规格商品已经没有库存...')
      }else {
        window.location.href=url+pramit
      }
    },
    //选择规格
    selectStyle(item, index,event) {
      this.$nextTick(function () {
        this.SkuList.forEach(function (item) {
          Vue.set(item, 'active', false);
        });
        Vue.set(item, 'active', true);
      });
      //底部显示分享价
      $(event.target).parents('.popup-fixed-2').find('.choice').hide()
      this.Stock = item.stockNum
      if(this.type==0){
        this.skuprice = item.price
      }else {
        this.product.suggestedPrice = Number(item.discountedPrice).toFixed(2)
        if(this.index==0){
          this.skuprice = item.price
        }else {
          this.skuprice = item.discountedPrice
        }
      }
      if(item.stockNum===0){
        $(event.target).parents('.popup-fixed-2').find('.popup-button a').addClass('grayness')
      }else {
        $(event.target).parents('.popup-fixed-2').find('.popup-button a').removeClass('grayness')
      }
      this.counter = 1
      if(this.counter<this.Stock){
        $(event.target).parents('.popup-fixed-2').find('b.Reduce').css({background:"#0bb20c"})
        $(event.target).parents('.popup-fixed-2').find('b.Increase').css({background:"#0bb20c"})
      }else {
        $(event.target).parents('.popup-fixed-2').find('b.Increase').css({background:"#ccc"})
      }
      if (this.counter>=2){
        $(event.target).parents('.popup-fixed-2').find('b.Reduce').css({background:"#0bb20c"})
        $(event.target).parents('.popup-fixed-2').find('b.Increase').css({background:"#0bb20c"})
      }else {
        $(event.target).parents('.popup-fixed-2').find('b.Reduce').css({background:"#ccc"})
      }
    },
    ProductStatus:function () {
      if(this.product.status==0){
        $('.product_status').html('<s></s><b>该商品已下架!</b><s></s>')
      }
    }
  }
}
