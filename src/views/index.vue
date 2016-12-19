<template>
	<alloy-finger
    v-on:touch-move="onMove"
    v-on:tap="onTap"
  	>
	  	<div class="index">

			<headerC></headerC>
			<div class="category">
				<swipe class="my-swipe" :speed="600" :auto="0">
				  	<swipe-item class="slide1 box">
				  		<template v-for="(item,index) in shopfeat">
					  		<div class="item" v-if="index<8">
					  			<a class="item__img"><img :src=item.src alt=""></a>
					  			<div class="item__title">{{item.title}}</div>
					  		</div>
				  		</template>
				 	</swipe-item>
				  	<swipe-item class="slide2 box">
				  		<template v-for="(item,index) in shopfeat">
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
			
				<alloy-finger class="shop-item" v-if="" v-for="(item,index) in shopArray" @tap="toGo(index)">
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
					
				</alloy-finger>
			</section>
			<alloy-finger v-on:tap="toTop">
				<div class="toTop" id="toTop">
					<span>顶部</span>
				</div>
			</alloy-finger>
		</div>
	</alloy-finger>
	
</template>
<script>

	import headerC from '../components/index-head'
	import { Swipe, SwipeItem } from 'vue-swipe'
	import {mapState} from 'vuex'
	import {getShopItemList,getFeatItemList} from '../vuex/shopitem/siActions'

	export default{
		name:'index',
		data(){
			return {
				shopArray:[],
				shopfeat:[]
			}
		},
		components: {
		    headerC,
		    'swipe': Swipe,
		    'swipe-item': SwipeItem
		  },
		created:function(){
		},
		computed:{
			
		},
		computed:mapState({

		}),
		beforeMount(){

		},
		mounted(){
			this.getListData()
			.then(()=>{
				this.shopArray=this.$store.getters.getList.slice(0,6)
			})
			this.getFeatData()
			.then(()=>{
				this.shopfeat=this.$store.getters.getFeat
			})
		},
		methods: {
      		loadMore: function () {
  				if(this.shopArray.length!==0){
  					var shopitem=[]
			  	for(var i=0;i<4;i++){
				    shopitem.push(this.$store.getters.getList[_.random(0, 59)])
				}
				this.shopArray=this.shopArray.concat(shopitem)
  				}
			  	
		    },
		    onTap:function(e){
		    },
		    onMove:function(){
		    	var top = document.documentElement.scrollTop || document.body.scrollTop;  
		    	var header=document.getElementsByClassName("header")[0];
		    	if(top>0){
		    		header.style.position="fixed";
		    		document.getElementById("toTop").style.display='block'
		    	}else{
		    		header.style.position="absolute";
		    		document.getElementById("toTop").style.display='none'
		    	}
		    },
		    toTop:function(){
		    	if(document.documentElement.scrollTop)document.documentElement.scrollTop=0
		    	else document.body.scrollTop=0
				document.getElementById("toTop").style.display='none'
		    },
			toGo:function(index){

				this.$router.push({ name: 'detail', params: { id: index }})
			},
			getShopItemList,getFeatItemList,
			getListData() {
                return this.getShopItemList()
                    .then((data) => {
                        this.$store.dispatch('setList',data)
                    })
                    .catch((err) => {
                         console.log(123132132)
                    })
            },
            getFeatData(){
            	return this.getFeatItemList()
                    .then((data) => {
                        this.$store.dispatch('setFeat',data)
                    })
                    .catch((err) => {
                         console.log(123132132)
                    })
            }
    	}

	}
	
	
</script>
<style lang="scss" scoped>

		.toTop{
			position: fixed;
			bottom: 2rem;
			right: .4rem;
			width: 1.133333rem;
			height: 1.133333rem;
			border:1px solid #aaa;
			border-radius:100%;
			text-align: center;
			color: #aaa;
			display: none;
			background:rgba(255,255,255,.5);
			box-shadow: 0 0 10px ;
			span{
				line-height: 1.6rem;
				font-size: 0.2rem;
			}
			span::before{
				content: "^";
				position:absolute;
				top:-0.32rem;
				left: 0.31rem;
				font-size:.8rem; 
			}
		}
	.index{
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
			&>a{
				display: flex;
				width: 100%;
				height: 100%;
			}
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
		    line-height: .4rem;
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