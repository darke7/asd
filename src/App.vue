<template>
  <div id="app">
	<m-header></m-header>
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import MHeader from "components/m-header/m-header.vue"
import Tab from "components/tab/tab.vue"

export default {
  components:{
  	MHeader,
  	Tab
  }
}
</script>

<style lang='stylus'>

</style>
