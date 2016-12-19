//browser-sync start --proxy "http://localhost:8080/"
import './js/rem.js'
// import mui from'./js/mui.js';
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Index from './views/index'
import Detail from './views/detail'
import About from './views/about'
// import bbb from './components/b'
import 'vue-swipe/dist/vue-swipe.css'
import infiniteScroll  from 'vue-infinite-scroll'
import Vuex from 'vuex'
import _ from 'lodash'
import store from './vuex/store'
// import alloy_finger from '../static/alloy_finger'
import AlloyFingerVue from '../static/AlloyFingerVue'



Vue.use(AlloyFingerVue)
Vue.use(Vuex)
Vue.use(infiniteScroll)
Vue.use(VueRouter)
Vue.use(VueResource)

// const store=new Vuex.Store({
// 	state:{
// 		count:
//     [{"src":"//fuss10.elemecdn.com/c/9f/a554483439d086d496ee78ee268f6jpeg.jpeg","title":"美食"},{"src":"//fuss10.elemecdn.com/6/58/4adf7fbde50492ec2a75655a6b969jpeg.jpeg","title":"甜品饮品"},{"src":"//fuss10.elemecdn.com/a/cd/5129b224cd8908c8ce3bcde94feedjpeg.jpeg","title":"商店超市"},{"src":"//fuss10.elemecdn.com/e/fc/cc899d646bfd1537c054ba08183e4jpeg.jpeg","title":"果蔬生鲜"},{"src":"//fuss10.elemecdn.com/0/7e/10dbce038faf79b685af9a75a744djpeg.jpeg","title":"新店特惠"},{"src":"//fuss10.elemecdn.com/7/8d/2a0d373872db4a92647fa77159f43jpeg.jpeg","title":"准时达"},{"src":"//fuss10.elemecdn.com/2/97/d99ffd1cc910d67c09bbcfdaa5a5fjpeg.jpeg","title":"简餐"},{"src":"//fuss10.elemecdn.com/a/69/64c32a93abf3dd6d2fc5d7bbe798djpeg.jpeg","title":"土豪推荐"},{"src":"//fuss10.elemecdn.com/1/5e/5edb8efad47cfb0141bfcd972d1d1jpeg.jpeg","title":"鲜花蛋糕"},{"src":"//fuss10.elemecdn.com/9/37/bed65a67bf2982d6cab32d8a0003fjpeg.jpeg","title":"汉堡炸鸡"},{"src":"//fuss10.elemecdn.com/7/a4/8d646785afa3953d7f84db53f8cf6jpeg.jpeg","title":"日韩料理"},{"src":"//fuss10.elemecdn.com/b/79/5d1097c246927ad73fa50dc7c7b47jpeg.jpeg","title":"麻辣烫"},{"src":"//fuss10.elemecdn.com/1/ea/24dd1b5f54e2eb85960017ba22d6djpeg.jpeg","title":"披萨意面"},{"src":"//fuss10.elemecdn.com/9/bb/e4d322fd794846fbb6dda7c2a84e7jpeg.jpeg","title":"川湘菜"},{"src":"//fuss10.elemecdn.com/e/1b/e10f13396dfa4de42ac2bc1050bb1jpeg.jpeg","title":"包子粥店"}]
// 	}
// })

// definition
var AlloyFinger = Vue.extend({
	template: '<div v-on:touchstart="_handleTouchStart" v-on:touchmove="_handleTouchMove" v-on:touchcancel="_handleTouchCancel" v-on:touchend="_handleTouchEnd"><slot></slot></div>',
	data: function() {
		return {
			preV: { x: null, y: null },
      pinchStartLen: null,
      scale: 1,
      isDoubleTap: false,
      delta: null,
      last: null,
      now: null,
      tapTimeout: null,
      longTapTimeout: null,
      swipeTimeout: null,
      x1: null,
      x2: null,
      y1: null,
      y2: null,
      preTapPosition: { x: null, y: null },
		}
	},
	methods: {
		getLen: function(v) {
      return Math.sqrt(v.x * v.x + v.y * v.y);
    },

   	dot: function(v1, v2) {
      return v1.x * v2.x + v1.y * v2.y;
    },

    getAngle: function(v1, v2) {
      var mr = getLen(v1) * getLen(v2);
      if (mr === 0) return 0;
      var r = dot(v1, v2) / mr;
      if (r > 1) r = 1;
      return Math.acos(r);
    },

    cross: function(v1, v2) {
      return v1.x * v2.y - v2.x * v1.y;
    },

    getRotateAngle: function(v1, v2) {
      var angle = getAngle(v1, v2);
      if (cross(v1, v2) > 0) {
        angle *= -1;
      }

      return angle * 180 / Math.PI;
    },

    _handleTouchStart: function(evt) {
      var emit = this.$dispatch || this.$emit;

      emit.call(this, 'touch-start', evt);

			this.now = Date.now();
			this.x1 = evt.touches[0].pageX;
			this.y1 = evt.touches[0].pageY;
			this.delta = this.now - (this.last || this.now);
			if(this.preTapPosition.x!==null){
				this.isDoubleTap = (this.delta > 0 && this.delta <= 250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30);
			}
			this.preTapPosition.x=this.x1;
			this.preTapPosition.y=this.y1;
			this.last = this.now;
     	var preV = this.preV,
      		len = evt.touches.length;
     	if (len > 1) {
				var v = { x: evt.touches[1].pageX - this.x1, y: evt.touches[1].pageY - this.y1 };
				preV.x = v.x;
				preV.y = v.y;
				this.pinchStartLen = getLen(preV);
				emit.call(this, 'multipoint-start', evt);
     	}
     	this.longTapTimeout = setTimeout(function(){
        emit.call(this, 'long-tap', evt);
     	}.bind(this), 750);
    },

    _handleTouchMove: function(evt){
      var emit = this.$dispatch || this.$emit;

      emit.call(this, 'touch-move', evt);

      var preV = this.preV,
	        len = evt.touches.length,
	        currentX = evt.touches[0].pageX,
	        currentY = evt.touches[0].pageY;
      this.isDoubleTap=false;
      if (len > 1) {
        var v = { x: evt.touches[1].pageX - currentX, y: evt.touches[1].pageY - currentY };

        if (preV.x !== null) {
          if (this.pinchStartLen > 0) {
            evt.scale = getLen(v) / this.pinchStartLen;
            emit.call(this, 'pinch', evt);
          }

          evt.angle = getRotateAngle(v, preV);
          emit.call(this, 'rotate', evt);
        }
        preV.x = v.x;
        preV.y = v.y;
      } else {
        if (this.x2 !== null) {
          evt.deltaX = currentX - this.x2;
          evt.deltaY = currentY - this.y2;
        }else{
          evt.deltaX = 0;
          evt.deltaY = 0;
        }
        emit.call(this, 'press-move', evt);
      }
      this._cancelLongTap();
      this.x2 = currentX;
      this.y2 = currentY;
      if(len > 1) {
        evt.preventDefault();
      }
    },

    _handleTouchCancel: function(){
      emit.call(this, 'touch-cancel', evt);

      clearInterval(this.tapTimeout);
      clearInterval(this.longTapTimeout);
      clearInterval(this.swipeTimeout);
    },

    _handleTouchEnd: function(evt){
      var emit = this.$dispatch || this.$emit;

      emit.call(this, 'touch-end', evt);

      this._cancelLongTap();
      var self = this;
      if( evt.touches.length<2){
        emit.call(this, 'multipoint-end', evt);
      }

      if ((this.x2 && Math.abs(this.x1 - this.x2) > 30) ||
        (this.y2 && Math.abs(this.preV.y - this.y2) > 30)) {
        evt.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2);
        this.swipeTimeout = setTimeout(function () {
            emit.call(self, 'swipe', evt);
        }, 0)
      } else {
        this.tapTimeout = setTimeout(function () {
          emit.call(self, 'tap', evt);
          if (self.isDoubleTap) {
            emit.call(self, 'double-tap', evt);
            self.isDoubleTap = false;
          }
        }, 0)
      }

      this.preV.x = 0;
      this.preV.y = 0;
      this.scale = 1;
      this.pinchStartLen = null;
      this.x1 = this.x2 = this.y1 = this.y2 = null;
    },

    _cancelLongTap: function() {
      clearTimeout(this.longTapTimeout);
    },

    _swipeDirection: function(x1, x2, y1, y2) {
      return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
    }
	}
});

// register
Vue.component('alloy-finger', AlloyFinger);

// export
if(typeof module !== 'undefined' && typeof exports === 'object') {
  module.exports = AlloyFinger;
} else {
  window.AlloyFinger = AlloyFinger;
}

const router = new VueRouter({
	routes:[
  		{ path: '/', component: Index },
  		{ path: '/detail/:id',name:'detail', component: Detail },
      { path: '/about', component: About },
	],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 200}
  }
})

const app = new Vue({
	el: '#entry',
  	template: '<App/>',
  	components: { App },
  	router: router,
  	store
})

