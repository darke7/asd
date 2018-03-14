<template>
	<div class="tab">
		<router-link tag="div" to="/recommand" class="tab-item">
			<span>推荐</span>
		</router-link>
		<router-link tag="div" to="/singer" class="tab-item">
			<span>歌手</span>
		</router-link>
		<router-link tag="div" to="/rank" class="tab-item">
			<span>排行</span>
		</router-link>
		<router-link tag="div" to="/search" class="tab-item">
			<span>搜索</span>
		</router-link>	
	</div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style lang="stylus">
	@import "~assets/stylus/variable"
	.tab
		display:flex;
		height:44px;
		line-height:44px;
		font-size:$font-size-medium;
		.tab-item
			flex:1;
			text-align:center;
			span
				color:$color-text-l;
			&.router-link-active
				color:$color-theme;
				border-bottom:2px solid $color-theme;
</style>