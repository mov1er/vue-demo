<template>
	<alloy-finger
    v-on:touch-move="onMove"
    v-on:tap="onTap"
  	>
	  	<div class="detail">

			<headerC></headerC>
			<div class="category">
				<swipe class="my-swipe" :speed="600" :auto="0">
				  	<swipe-item class="slide1 box">
				  		<template v-for="(item,index) in name">
					  		<div class="item" v-if="index<8">
					  			<a class="item__img"><img :src=item.src alt=""></a>
					  			<div class="item__title">{{item.title}}</div>
					  		</div>
				  		</template>
				 	</swipe-item>
				  	<swipe-item class="slide2 box">
				  		<template v-for="(item,index) in name">
					  		<div class="item" v-if="index>7">
					  			<a class="item__img"><img :src=item.src alt=""></a>
					  			<div class="item__title">{{item.title}}</div>
					  		</div>
				  		</template>
				  	</swipe-item>
				</swipe>
			</div>
			<div class="index-title">
				<i class="icon icon-home"></i><span>附近商家</span>
			</div>
			<section class="shop-list" 
				v-infinite-scroll="loadMore"
	     		infinite-scroll-disabled="busy"
	     		infinite-scroll-distance="60"
	     		>
    		
			
				<section class="shop-item" v-for="item in shopArray">
					<!-- <router-link to="/detail"> -->
    					<div class="new"><span>新店</span></div>
						<div class="left-cont">
							<img v-bind:src="item.shopimg" alt="">
						</div>
						<div class="right-cont">
							<div class="line">
								<div class="shopname brand">{{item.shopname}}</div>
								<div class="support">
									<div class="activity">
										<i class="activity-icon" v-for="act in item.shopsup">{{act}}</i>
									</div>
								</div>
							</div>
							<div class="line">
								<div class="rate-wrap">
									<span class="rate">{{item.shoprate}}</span>
									<span>月售{{item.shopsale}}单</span>
								</div>
								<div class="delivery-wrap">
									<div class="bird">蜂鸟专送</div>
									<div class="ontime">准时达</div>
								</div>
							</div>
							<div class="line">
								<div class="money-wrap">
									<span>${{item.shopfee}}起送</span>
									<span>配送费{{item.delifee}}元</span>
								</div>
								<div class="time-wrap">
									<span>{{item.distance}}</span>
									<span>{{item.time}}分钟</span>
								</div>
							</div>
						</div>
    				<!-- </router-link> -->
					
				</section>
			</section>
		</div>
	</alloy-finger>
	
</template>
<script>

	import headerC from './header-component'
	import fc from './footer-component'
	import { Swipe, SwipeItem } from 'vue-swipe'
	import {mapState} from 'vuex'

	export default{
		name:'detail',
		data(){
			return {
				shopitem:{
					shopimg:'http://c2.hoopchina.com.cn/uploads/star/event/images/161201/6a22114507f860d25b8f659a63f5f96442ce4ba2.jpg',
						shopname:'Coco（成都奥克斯店）',
						shopsup:[
							'票','保'
						],
						shoprate:4.8,
						shopsale:888,
						shopdeli:[
							"蜂鸟专送","准时达"
						],
						shopfee:8,
						delifee:10,
						distance:"885m",
						time:38
				},
				shopArray:[]

			}
		},
		components: {
		    headerC,
		    'swipe': Swipe,
		    'swipe-item': SwipeItem
		  },
		created:function(){
			this.$http.get('./static/1.json').then((response) => {
				this.shopArray=response.body.slice(0,6)
		    // success callback
		  	}, (response) => {
		    // error callback
		  	});
		},
		computed:{
			
		},
		computed:mapState({
			name:state=>state.count
		}),
		methods: {
      		loadMore: function () {
      			this.$http.get('./static/1.json').then((response) => {
			    // success callback
			    console.log(response.body.slice(0,2))
			    this.shopitem=response.body.slice(0,2)
				this.shopArray=this.shopArray.concat(this.shopitem);
			  	}, (response) => {
			    // error callback
			  	});
      			
		    },
		    onTap:function(e){
		    },
		    onMove:function(){
		    	var top = document.documentElement.scrollTop || document.body.scrollTop;  
		    	var header=document.getElementsByClassName("header")[0];
		    	if(top>0){
		    		header.style.position="fixed";
		    	}else{
		    		header.style.position="absolute";
		    	}
		    },
		    onclick:function(){
		    	
		    }    
    	},

	}
	
	
</script>
<style lang="scss" scoped>
	.detail{
		padding-top: 1.16rem;
		.my-swipe {
		  height: 4.72rem;
		  color: #fff;
		}
		.category{
			height: 4.72rem;
			border-bottom: 1px solid #ddd;
    		text-align: center;
    		background: #fff;
		}
		.item{
		  		width: 25%;
				float: left;
				color: #666;
				height: 2.2rem;
				display: block;
				padding-top: 0.2rem;
				.item__img{
					width: 1.2rem;
					height: 1.2rem;
					display: inline-block;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.item__title{
					font-size: 0.32rem;
				}
		  	}
		.index-title{
			margin-top: 0.266667rem;
			border-bottom:1px solid #F7F7F7;
			line-height: 0.906667rem;
			color: #999;
			font-size: .346667rem;
			text-align: left;
			padding-left: .4rem;
    		background: #fff;
    		i{
    			font-size: .42rem;
    			padding:.1rem;
    		}
		}
		.shop-item{
			position:relative;
			padding:.4rem .266667rem;
			background:#fff;
			border-bottom: 1px solid #eee;
			display: flex;
			justify-content:space-between;
			.left-cont{
				width: 1.6rem;
				height: 1.6rem;
				margin-right: 0.266667rem;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.right-cont{
				flex-grow:1;
				font-size: .293333rem;
				color: #666;
			}
		}
	}
	.line{
		    display: flex;
		    justify-content:space-between;
		    text-align: left;
		    .activity-icon{
				color: rgb(153, 153, 153);
    			border:1px solid #ccc;
    			font-style: normal;
    			border-radius:1px;
		    }
		    .activity-icon:nth-child(2){
		    	margin-left: 0.1rem;
		    }
		    span:nth-of-type(2):before{
			    margin: 0 .08rem;
		    color: #ddd;
		    content: '/';
		}
	}
	.line:nth-child(2){
		margin-top: .2rem;
	}
	.line:nth-child(3){
		margin-top: 0.226667rem;
		line-height: .32rem;
	}
	.shopname{
		    overflow: hidden;
		    margin: 0;
		    padding: 0;
		    max-width: 5rem;
		    color: #333;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    font-weight: 700;
		    font-size: .4rem;
		    line-height: .426667rem;
	}
	.brand:before{
		    margin-right: .133333rem;
		    padding: 0 .066667rem;
		    height: .4rem;
		    border-radius: .053333rem;
		    background-color: #ffd930;
		    color: #52250a;
		    content: "\54C1\724C";
		    vertical-align: top;
		    text-align: center;
		    font-weight: 700;
		    font-size: .293333rem;
		    line-height: .4rem;
	}
	.rate{
		color: #ff6000;
		margin: 0 .106667rem;
	}
	.delivery-wrap{
		display: flex;
		div{
			padding: 0 .053333rem;
		    border: 1px solid #44a5ff;
		    border-radius: .053333rem;
		    background-color: #fff;
		    color: #2395ff;
		    font-size: .266667rem;
		    line-height: .346667rem;
		}
		.bird{
			margin-right: .08rem;
			background-color: #2395ff;
    		color: #fff;
		}
	}
	.money-wrap{
		span:nth-of-type(2) {
		    max-width: 3.333333rem;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		}
	}
	.time-wrap{
		span:nth-of-type(1){
			color: #999;
		}
		span:nth-of-type(2){
			color: #2395ff;
		}
	}
	.new{
		width: 0.853333rem;
		height: 0.853333rem;
		position:absolute;
		top: 0;
		left: 0;
		background:linear-gradient(135deg,#26ce61,#26ce61 50%,transparent 0);
		z-index: 100;
		text-align: center;
		span{
			color: #fff;
			line-height: 0.3rem;
			transform: rotate(-45deg) translateX(-.2rem);
			display: block;
			font-size: 0.24rem;
			font-weight: 700;
		}
	}
</style>