<template>
	<div>
		<dhead></dhead>
		<div class="detail">
			<div class="content">
			<div class="buttons-tab">

				<router-link to="/detail">第一页</router-link>
			</div>
			asdsd
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	import dhead from '../components/detail-head'
	

	export default{
		name:'about',
		components:{
			dhead
		}
	}
</script>
<style lang="scss">
	.detail{
		
	}
</style>