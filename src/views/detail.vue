<template>
	<div v-finger:touch-end="endTap">
		<dhead></dhead>
		<div class="detail">
				<div class="shopnav"> 
					<alloy-finger class="shopnav-tab" :class="{active:isActive==0}" v-on:tap="onTap(0)" > 
						<span class="shopnav-title">商品</span> 
					</alloy-finger>
					<alloy-finger class="shopnav-tab" :class="{active:isActive==1}" v-on:tap="onTap(1)" > 
						<span class="shopnav-title">商家</span> 
					</alloy-finger> 
				</div>
				<div class="menuview">
					<div class="menuview-main">
						<dmain @increment="incrementTotal" @decrement="decrementTotal"></dmain>
					</div>
				</div>
				<dfoot :message="total"></dfoot>
		</div>
	</div>
</template>
<script>
	import dhead from '../components/detail-head'
	import dmain from '../components/detail-main'
	import dfoot from '../components/detail-foot'

	export default{
		name:'a',
		components:{
			dhead,dmain,dfoot
		},
		mounted(){
			window.scrollTo(0,this.sticktH)
		},
		data(){
			return {
				isActive:0,
				total:0,
				sticktH:3.6*parseFloat(window.getComputedStyle(document.documentElement).fontSize)
			}
		},
		methods:{
			onTap:function(e){
				this.isActive=e
			},
			onTap2:function(e){
				this.isActive=false
			},
			endTap(){
	            var a=this.sticktH
				setTimeout(function(){
					var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
					if(scrollTop<a){
						var timer=setInterval(function(){
		                    document.documentElement.scrollTop=document.body.scrollTop+=10;
		                    scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		                    if(scrollTop>a-10){
		                    	clearInterval(timer) 
		                    	document.body.scrollTop=a
		                    }
		                },10)
					}
				},10)
			},
			incrementTotal: function () {
		      	this.total += 1
		    },
		    decrementTotal: function () {
		      	if(this.total>0)this.total -= 1
		    }
                
		}
	}
</script>
<style lang="scss">
	.detail{
		position: relative;
		min-height: 100vh;
		z-index: 55;
	}
	.shopnav{
		line-height: 1.2rem;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    background-color: #fff;
	}
	.shopnav-tab {
	    position: relative;
	    -webkit-box-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    display: block;
	    width: 0;
	    text-align: center;
	    font-size: .373333rem;
	    color: #666;
	    text-decoration: none;
	    border-bottom: 1px solid #ddd;
	}
	.shopnav-tab.active {
	    color: #3190e8;
	}
	.shopnav-tab.active .shopnav-title {
	    position: relative;
	}
	.shopnav-tab.active .shopnav-title:after {
	    content: "";
	    position: absolute;
	    bottom: -.16rem;
	    left: -.066667rem;
	    right: -.066667rem;
	    height: .053333rem;
	    background-color: #3190e8;
	    border-radius: .04rem;
	}
	.menuview {
	    color: #333;
	    height: 100%;
	    box-sizing: border-box;
	    -webkit-tap-highlight-color: rgba(0,0,0,0);
	    -webkit-tap-highlight-color: transparent;
	    font: .186667rem/1.2 Helvetica Neue,Microsoft Yahei,sans-serif;
	}
	.menuview-main{
	    height: 16.586667rem;
	    padding-bottom: 1.28rem;
	    background-color: #fff;
	}
</style>