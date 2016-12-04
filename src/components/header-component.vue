<template>
	<div class="header">
    	<a href="" class="icon icon-search header__srh"></a>
    	<div class="header__center">
    		<span>双流区天府大道南段325号南郡假日酒店</span>
    	</div>
    	<a href="" class="header__login">登录</a>
		<!-- <router-link to="/">第一页</router-link> -->
    <!-- <router-link to="/bbb">第三页</router-link> -->
	</div>
</template>
<script>
	
</script>

<style lang="scss" scoped>
$HEIGHT:1.16rem;
	.header{
		z-index: 555;
		width: 100%;
		height: $HEIGHT;
		background: #3190e8;
		position: absolute;
		font-size: 0.466667rem;
		color:#fff;
		top:0;
		line-height: $HEIGHT;
		z-index: 999;
		.header__srh{
			font-size: 0.6rem;
			color: #fff;
			float:left;
			padding-left: 0.4rem;
		}
		.header__center{
			position:absolute;
			left: 25%;
			width: 50%;
			text-align: left;
			white-space: nowrap;
			overflow: hidden;
			text-overflow:ellipsis;
		}
		.header__login{
			float: right;
			color: #fff;
			display: block;
			padding-right: 0.4rem;
		}
	}
</style>