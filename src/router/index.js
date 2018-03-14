import Vue from 'vue'
import Router from 'vue-router'
import recommand from "components/recommand/recommand"
import rank from "components/rank/rank"
import search from "components/search/search"
import singer from "components/singer/singer"

Vue.use(Router)

export default new Router({
  routes:[
  	{
  		path:"/",
  		redirect:"recommand"
  	},
  	{
  		path:"/recommand",
  		component:recommand
  	},
  	{
  		path:"/rank",
  		component:rank
  	},
  	{
  		path:"/search",
  		component:search
  	},
  	{
  		path:"/singer",
  		component:singer
  	}
  ]
})
