<template>
 	<div class="m-header">
 		<div class="img"><img src="" alt="x"></div>
 		<h1 class="text">Chiken Music</h1>
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

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~assets/stylus/variable"
	@import "~assets/stylus/mixin"
	
	.m-header
		position:relative;
		height:44px;
		text-align:center;
		color:$color-theme;
		font-size:0;
		.img
			display:inline-block;
			vertical-align:middle;
		.text
			display:inline-block;
			vertical-align:middle;
			line-height:44px;
			font-size:12px;
		
</style>