<template>
  <div class="main" id="fa">

    <ul class="menu-nav">

      <!-- <li> 
        <img class="category-icon" src="//fuss10.elemecdn.com/5/da/3872d782f707b4c82ce4607c73d1ajpeg.jpeg"> 
        <span class="category-name">热销榜</span>
      </li> -->
     <!--  <li class="active"> 
        <img class="category-icon" src="//fuss10.elemecdn.com/4/73/5c4342691749b8e1a531149a46117jpeg.jpeg"> 
        <span class="category-name">优惠</span>
      </li>  -->
      <li v-for="(item,index) in category" :class="isActive==index?'active':'noicon'">  
        <alloy-finger @tap="toggle1(index)" style='width:100%;height:100%;padding: .466667rem .2rem;'>
          <span class="category-name">{{item.name}}</span>
        </alloy-finger>
      </li>
     
    </ul>
    <section class="menu-list">
      <div class="scroller">
        <dl>
          <dt>
            <div class="category-title">
              <strong class="category-name">圣诞新年季</strong> 
              <span class="category-description"></span>
            </div>
            <div class="category-more">
              <alloy-finger class="icon" @tap="toggle">...</alloy-finger>
              <p class="popuper popuper-transition" v-show="showDetail">
                <span>圣诞新年季</span> 
                <span></span>
              </p>
            </div>
          </dt>
         
          <dd v-for="(item,index) in items">
            <span class="foodimg">
              <img src="//fuss10.elemecdn.com/5/ea/5a2518a9ef1a544caa469d17b6c09jpeg.jpeg">
            </span>
            <section class="foodinfo">
            <header class="foodtitle">
              <span>{{item.name}}</span>
            </header>
            <p class="fooddescription">{{item.specs}}</p>
            <p class="foodsales"> </p>
            <strong class="foodprice">
              <span>{{item.price}}</span>   
            </strong>
            <div class="cartbutton">
              <span> 
                <span class="entitybutton">
                  <template v-if="item.quantity>0">
                    <a href="javascript:" @click="decrement(index)">
                      <span class="svg minus">-</span>
                    </a> 
                    <span class="entityquantity">{{item.quantity}}</span>

                  </template>
                  
                  <a href="javascript:" @click="increment(index)" >
                    <span class="svg" @click="animate">+</span>
                  </a> 
                </span>
              </span>
            </div>
            </section>
          </dd>

       </dl>
      </div>
    </section>   
    <!-- <div class="svg" id="ball"></div> -->
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      showDetail: false,isActive:0,
      category:[{name:"主餐类"},{name:"主餐类1"},{name:"主餐类2"},{name:"主餐类3"},{name:"主餐类4"}],
      items:[
                {
                    "id": 183536506,
                    "quantity": 0,
                    "name": "超级外带全家桶",
                    "price": 115,
                    "packing_fee": 0,
                    "specs": "2个香辣鸡腿堡+1个新奥尔良烤鸡腿堡+3块吮指原味鸡+2块香辣鸡翅+4块新奥尔良烤翅+2份醇香土豆泥+2个红豆派+1瓶1.25升百事可乐",
                    "extra": {}
                },
                {
                    "id": 183536532,
                    "quantity": 0,
                    "name": "外带全家桶",
                    "price": 88,
                    "packing_fee": 0,
                    "specs": "2个香辣鸡腿堡+1个新奥尔良烤鸡腿堡+3块吮指原味鸡+2块香辣鸡翅+4块新奥尔良烤翅+2份醇香土豆泥+2个红豆派+1瓶1.25升百事可乐",
                    "extra": {}
                },
                {
                    "id": 87702534,
                    "quantity": 0,
                    "name": "香辣鸡腿堡",
                    "price": 16.5,
                    "packing_fee": 0,
                    "specs": "2个香辣鸡腿堡+1个新奥尔良烤鸡腿堡+3块吮指原味鸡+2块香辣鸡翅+4块新奥尔良烤翅+2份醇香土豆泥+2个红豆派+1瓶1.25升百事可乐",
                    "extra": {}
                }, {
                    "id": 175293537,
                    "quantity": 0,
                    "name": "A新奥尔良十翅天团",
                    "price": 70,
                    "packing_fee": 0,
                    "specs": "A新奥尔良十翅天团",
                    "extra": {}
                },{
                    "id": 183536532,
                    "quantity": 0,
                    "name": "外带全家桶",
                    "price": 88,
                    "packing_fee": 0,
                    "specs": "2个香辣鸡腿堡+1个新奥尔良烤鸡腿堡+3块吮指原味鸡+2块香辣鸡翅+4块新奥尔良烤翅+2份醇香土豆泥+2个红豆派+1瓶1.25升百事可乐",
                    "extra": {}
                },
                {
                    "id": 87702534,
                    "quantity": 0,
                    "name": "香辣鸡腿堡",
                    "price": 16.5,
                    "packing_fee": 0,
                    "specs": "2个香辣鸡腿堡+1个新奥尔良烤鸡腿堡+3块吮指原味鸡+2块香辣鸡翅+4块新奥尔良烤翅+2份醇香土豆泥+2个红豆派+1瓶1.25升百事可乐",
                    "extra": {}
                }, {
                    "id": 175293537,
                    "quantity": 0,
                    "name": "A新奥尔良十翅天团",
                    "price": 70,
                    "packing_fee": 0,
                    "specs": "A新奥尔良十翅天团",
                    "extra": {}
                }
            ],
      counter:0
    }
  },
  methods:{
    toggle(){
      this.showDetail=!this.showDetail
    },
    toggle1(e){
      this.isActive=e
      console.log(e)
    },
    increment: function (index) {
      this.items[index].quantity += 1
      this.$emit('increment')
    },
    decrement: function (index) {
      this.items[index].quantity -= 1
      this.$emit('decrement')
    },
    animate:function(e){
      e.preventDefault()
      function a(){
        return new Promise(function(r){
          var x=e.clientX
          var y=e.clientY
          var HEIGHT=(document.body.clientHeight)
          var div=document.createElement('div')
          div.className="svg"
          document.getElementsByClassName('main')[0].appendChild(div)
          div.style.left=x-30+'px'
          div.style.bottom=HEIGHT-y+'px'
          div.style.opacity=1
          var b=(parseInt(div.style.bottom)-100)


          var vX=8
          var vY=5
          var a=200
          var c=0.005
          var timer=setInterval(function(){
            // div.style.transform="translate(-0.1rem,"+-b/100+"rem)"
            // div.style.transform="translateX(-.1rem)"
            a-=1.5
            c+=0.0001

            div.style.left=parseInt(div.style.left)-8*75/100+'px'
            div.style.bottom=parseInt(div.style.bottom)-b/a+'px'
            div.style.opacity=div.style.opacity-c

            console.log(div.style.left)
          },1)


          // setTimeout(function(){
          //         div.style.transform="translate(-8rem,"+b+"rem)"
          //       },500)
          setTimeout(function(){
            document.getElementsByClassName('main')[0].removeChild(div)
            clearInterval(timer)
          },500)

        })
      }
      a()
      
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
  @keyframes move {
    
  }
  div.svg{
    position: fixed;
    z-index: 5555;
    // transform:translate(-8rem,50px);
    // transition: all 1s ease-in-out;
    -webkit-animation: move 5s 1s;
  }
  .main{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
  }
  .menu-nav {
    width: 2.266667rem;
    //height: 100%;
    overflow-y: auto;
    background-color: #f8f8f8;
    li {
      position: relative;
      // padding: .466667rem .2rem;
      border-bottom: 1px solid #ededed;
      font-size: .346667rem;
      color: #666;
    }
    li.active {
      background-color: #fff;
      border-right-color: #fff;
      font-weight: bolder;
    }
    li.active:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: .08rem;
      background-color: #3190e8;
    }
  }

  .menu-list{
    position: relative;
    height: 100%;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    .scroller{
      height: 100%;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  dt{
    position: relative;
    padding: .2rem .266667rem;
    background-color: #f1f1f1;
  }
  .category-title{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    overflow: hidden;
  }
  .category-title strong{
    margin-right: .133333rem;
    font-weight: 700;
    font-size: .373333rem;
    color: #666;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
  }
  .category-title span {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    color: #999;
    font-size: .266667rem;
    white-space: nowrap;
    overflow: hidden;
  }
  .category-more .icon{
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: .933333rem;
    z-index: 2;
    font-size: .56rem;
    text-align: center;
    color: #666;
  }
  .category-more .popuper{
    position: absolute;
    background-color: #39373a;
    opacity: .97;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: top right;
    transform-origin: top right;
    width: 63%;
    right: .133333rem;
    z-index: 3;
    color: #eee;
    font-size: .32rem;
    border-radius: .106667rem;
    padding: .24rem .266667rem;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    cursor: pointer;
  }
  .category-more:after {
    content: "";
    position: absolute;
  }
  .category-more .popuper span:first-child {
    color: #fff;
  }
  .category-more .popuper:before {
    content: "";
    position: absolute;
    top: 0;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    right: .266667rem;
    border: .133333rem solid transparent;
    border-bottom-color: #39373a;
  }
  dd {
    position: relative;
    background-color: #fff;
    margin: 0;
    padding: .4rem .266667rem;
    margin-bottom: 1px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-height: 2.933333rem;
  }
  dd:not(:last-child) {
    box-shadow: .4rem 1px 0 0 #ddd;
  }
  .foodimg {
    margin-right: 4%;
    -webkit-box-flex: 2;
    -webkit-flex: 2;
    -ms-flex: 2;
    flex: 2;
    display: block;
    width: 0;
    vertical-align: top;
  }
  .foodimg img{
    width: 100%;
    border-radius: .053333rem;
  }
  .foodinfo{
    position: relative;
    -webkit-box-flex: 8;
    -webkit-flex: 8;
    -ms-flex: 8;
    flex: 8;
    display: block;
    width: 0;
    padding-bottom: .666667rem;
  }
  .foodtitle {
    font-size: .4rem;
    font-weight: 700;
    line-height: 1.1;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .foodtitle span,.foodsales span{
    vertical-align: middle;
  }
  .fooddescription {
    margin: .133333rem 0;
    font-size: .253333rem;
    color: #999;
  }
  .foodsales{
    margin: .173333rem 0;
    color: #666;
    font-size: .293333rem;
    line-height: 1;
  }
  .foodsales>span:not(:first-child) {
    margin-left: .106667rem;
    vertical-align: middle;
  }
  .foodprice{
    position: absolute;
    left: 0;
    bottom: 0;
    font-weight: 700;
    font-size: .426667rem;
    line-height: .426667rem;
    color: #f60;
  }
  .foodprice:before {
    font-weight: 400;
    content: '\A5';
    font-size: .293333rem;
    display: inline-block;
  }
  .cartbutton{
    position: absolute;
    right: 0;
    bottom: -.066667rem;
  }
  .entitybutton{
    display: inline-block;
    font-size: .356164rem;
  }
  .entitybutton a {
    display: inline-block;
    padding: .09589rem ;
    vertical-align: middle;
    text-decoration: none;
  }
  
 .svg {
    width: 0.58rem;
    height: 0.58rem;
    background: #3190e8;
    display: block;
    border-radius: 100%;
    color: #fff;
    text-align: center;
    font-size: .6rem;
    line-height: .45rem;
  }
  .entitybutton .minus{
    background: #fff;
    color: #3190e8;
    border: 2px solid #3190e8;
  }
  .entityquantity{
    display: inline-block;
    text-align: center;
    color: #666;
    vertical-align: middle;
    font-size: .383562rem;
  }
 
</style>
