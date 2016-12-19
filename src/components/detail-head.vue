<template>
	<div>
		<div class="dhead" v-finger:tap="tap" >
		<div class="shopheader-main">
			<img class="shopheader-logo" src="https://fuss10.elemecdn.com/9/0c/948c1f6578c4bb879e7ebf718de63jpeg.jpeg" alt="">
			<div class="shopheader-content">
				<h2 class="shopheader-name">必胜宅急送（奥克斯店）</h2>
				<p class="shopheader-servercontent">
					<span class="shopheader-server">商家配送</span>
					<span class="shopheader-server">55分钟送达</span>
					<span class="shopheader-server">配送费9元</span>
				</p>
				<div class="shopheader-activities">
					<ul>
						<li>
							<div class="activity-wrap wrap"> 
								<i class="activity-icon">减</i> 
								<span class="activity-description" > 
									<span >满50减20（限在线支付）</span> 
									<span >(APP专享)</span> 
								</span> 
							</div>
						</li>
						<li>
							<div class="activity-wrap wrap"> 
								<i class="activity-icon">7</i> 
								<span class="activity-description" > 
									<span >满50减20（限在线支付）</span> 
									<span >(APP专享)</span> 
								</span> 
							</div>
						</li>
						<li>
							<div class="activity-wrap wrap"> 
								<i class="activity-icon">减</i> 
								<span class="activity-description" > 
									<span >暖暖冬日7折比萨，温暖你的胃ㄟ(▔▽▔)ㄏ(不与其它活动同享)</span> 
									<span >(APP专享)</span> 
								</span> 
							</div>
						</li>
					</ul>
					<div class="shopheader-activity-count">
						6个活动
						<span class="arrow"></span>
					</div>
				</div>
			</div>
		</div>
		<div class="shopheader-notice"> 
			<span>品质无终点，本色始如一。</span> <span class="arrow" style="float:right"></span>
		</div>
		
	</div>
	<div class="fixed"  v-show="show">
			<div class="content">
				<div class="shopheader-noticemodal">
					<h2 class="shopheader-noticemodal-name">必胜宅急送（奥克斯店）</h2>
					<h3><span>优惠信息</span></h3>
					<ul class="shopheader-activity">
						<li> 
							<div class="activity-wrap wrap"> 
								<i class="activity-icon"style="background-color: rgb(240, 115, 115); color: rgb(255, 255, 255); border-color: rgb(240, 115, 115);"> 减 </i> 
								<span class="activity-description"> 
									<span>满50减15（限在线支付）</span> 
									<span>(APP专享)</span> 
								</span> 
							</div> 
						</li>
						<li> 
							<div class="activity-wrap wrap"> 
								<i class="activity-icon"style="background-color: rgb(240, 115, 115); color: rgb(255, 255, 255); border-color: rgb(240, 115, 115);"> 减 </i> 
								<span class="activity-description"> 
									<span>满50减15（限在线支付）</span> 
									<span>(APP专享)</span> 
								</span> 
							</div> 
						</li>
						<li> 
							<div class="activity-wrap wrap"> 
								<i class="activity-icon"style="background-color: rgb(240, 115, 115); color: rgb(255, 255, 255); border-color: rgb(240, 115, 115);"> 减 </i> 
								<span class="activity-description"> 
									<span>满50减15（限在线支付）</span> 
									<span>(APP专享)</span> 
								</span> 
							</div> 
						</li>
						<li> 
							<div class="activity-wrap wrap"> 
								<i class="activity-icon" style="background-color: rgb(241, 136, 79); color: rgb(255, 255, 255); border-color: rgb(241, 136, 79);"> 特 </i> 
								<span class="activity-description"> 
									<span>圣诞暖暖两人餐，下单立减32元(不与其它活动同享)</span> 
								<span>(APP专享)</span> 
								</span> 
							</div> 
						</li>
					</ul>
					<h3><span>商家公告</span></h3>
					<div class="shopheader-noticemodal-notice">本餐厅不使用饿了么配送，由必胜宅急送官方品牌配送，会员用户无法享受免配送费服务</div>
				</div>
				<div class="shopheader-noticemodal-close" v-finger:tap="close"> 
				 	x
				</div>
			</div>
		</div>
	</div>
	
</template>
<script>
	export default{
		data(){
			return{
				show:false,
			}
		},
		methods:{
			tap:function(){
				this.show=true
				console.log(1)
			},
			close:function(e){
				console.log(2)
				console.log(e)
				this.show=false
			}
		}
	}
</script>
<style lang="scss">
	
	i{
		font-style: normal;
	}
	ul{
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
 	p,dl{
 		margin: 0;
 	}
	.dhead {
		width: 100%;
		height: 6rem;
		position: relative;
		color: #fff;
		font-size: .293333rem;
		background: #159951 url("https://fuss10.elemecdn.com/9/0c/948c1f6578c4bb879e7ebf718de63jpeg.jpeg?imageMogr/quality/80/format/webp/thumbnail/!40p/blur/50x40/");
	}
	.shopheader-logo{
	    width: 1.546667rem;
	    height: 1.546667rem;
	    border: 1px solid #fff;
	    border-radius: .186667rem;
	    margin: 0 .266667rem 0 .466667rem;
	}
	.shopheader-main{
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    height: 2.4rem;
	    padding-top: .266667rem;
	    position: fixed;
	    top: 0;
	    width: 100%;
	    will-change: opacity;
	}
	.shopheader-content {
	    -webkit-box-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    display: block;
	    width: 0;
	    height: 100%;
	    padding-right: .133333rem;
	}
	.shopheader-name{
	    margin: 0;
	    font-size: .466667rem;
	    line-height: .466667rem;
	    font-weight: 700;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.shopheader-servercontent{
	    white-space: nowrap;
	    height: .666667rem;
	    line-height: .72rem;
	}
	.shopheader-server{
	    line-height: .32rem;
	}
	.shopheader-server:not(:last-child):after {
	    content: ' / ';
	    opacity: .5;
	}
	.shopheader-activities{
		position: relative;
    	padding-right: 1.6rem;
	}
	.shopheader-activity-count{
	    position: absolute;
	    top: 0;
	    right: 0;
	    height: .48rem;
	    line-height: .506667rem;
	    padding: 0 .1rem 0 .106667rem;
	    background-color: rgba(0,0,0,.15);
	    border-radius: .266667rem;
	}
	.arrow::after{
	    content: "\276F"
	}
	.activity-wrap{
	    line-height: .426667rem;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	}
	.activity-wrap.wrap .activity-icon{
	    margin-top: .04rem;
	    margin-right: .133333rem;
	    font-size: .266667rem;
	    font-style: normal;
	    line-height: 1;
	    height: .346667rem;
	    padding: .04rem;
	    display: inline-block;
	    box-sizing: border-box;
	    text-align: center;
	    border: 1px solid;
	    border-radius: .04rem;
	    background-color: rgb(240, 115, 115); 
	    color: rgb(255, 255, 255); 
	    border-color: rgb(240, 115, 115);
	}
	.shopheader-activities li{
	    margin-bottom: .2rem;
	    -webkit-transition: opacity .2s;
	    transition: opacity .2s;
	}
	.activity-description{
	    -webkit-box-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    display: block;
	    width: 0;
	}
	.shopheader-notice{
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    padding: 0 .533333rem 0 .266667rem;
	    height: .533333rem;
	    line-height: .533333rem;
	    background-color: rgba(0,0,0,.15);
	    color: hsla(0,0%,100%,.8);
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.shopheader-notice:before {
	    content: '\516C\544A';
	    display: inline-block;
	    padding: 0 .053333rem;
	    height: .346667rem;
	    line-height: .373333rem;
	    background-color: hsla(0,0%,100%,.8);
	    color: #666;
	    border-radius: .053333rem;
	    margin-right: .133333rem;
	}

	.fixed{
		font-size: 0.32rem;
		width: 100vw;
		height: 100vh;
		position:fixed;
		left: 0;
		top:0;
		bottom: 0;
		z-index: 999;
		background:rgba(0,0,0,.9);
		transition: all 1s;
	}
	.content{
	    padding-top: 1.333333rem;
	    height: 100%;
	    box-sizing: border-box;
	    overflow: auto;
	    -webkit-overflow-scrolling: touch;
	}
	.shopheader-noticemodal{
		    position: absolute;
	    top: 0;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    border: .8rem solid transparent;
	    border-top-width: 1.066667rem;
	    border-bottom-width: 2.4rem;
	    overflow: auto;
	    background-color: #262626;
	    color: #fff;
	    -webkit-backdrop-filter: saturate(500%) blur(.666667rem);
	    backdrop-filter: saturate(500%) blur(.666667rem);
	}
	.shopheader-noticemodal-close{
	    position: fixed;
	    left: 0;
	    right: 0;
	    bottom: .666667rem;
	    margin: auto;
	    width: 1.2rem;
	    height: 1.2rem;
	    border: 1px solid #888;
	    border-radius: 50%;
	    font-size: .9rem;
	    font-weight: 400;
	    text-align: center;
	    color: #fff;
	}
	.shopheader-noticemodal h2 {
	    text-align: center;
	    font-size: 1.5em;
	}
	.shopheader-noticemodal h3 {
	    text-align: center;
	    margin: .8rem 0 .533333rem;
	    background-image: -webkit-gradient(linear,left top,right top,from(#555));
	    // background-image: -webkit-linear-gradient(left,#555);
	    // background-image: linear-gradient(90deg,#555);
	    background-position: 50%;
	    background-size: 100% 1px;
	    background-repeat: no-repeat;
	}
	.shopheader-noticemodal h3 span{
	    font-size: .32rem;
	    padding: .133333rem .266667rem;
	    border-radius: .666667rem;
	    border: 1px solid #555;
	    background-color: #262626;
	}
	.shopheader-activity li {
	    margin-bottom: .333333rem;
	}
	.activity-wrap {
	    line-height: .426667rem;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	}
	.activity-wrap.wrap .activity-icon{
	    margin-top: .04rem;
	}
	.activity-description {
	    -webkit-box-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    display: block;
	    width: 0;
	}
</style>