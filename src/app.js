require('./styles/usage/app.scss');
var layout = require('./scripts/tpls/layout.string');
var common = require('./scripts/utils/utils.common.js');

common.render(layout);

import index from './scripts/components/index.vue';
import mall from './scripts/components/mall.vue';
import detail from './scripts/components/detail.vue';
import special from './scripts/components/special.vue';
import xiang from './scripts/components/xiang.vue';
import my from './scripts/components/my.vue';

const routes = [{
	path:'/',
	component:index,
	children:[{
		path:'/',
		component:mall
	},{
		path:'/special',
		component:special
	},{
		path:'/xiang',
		component:xiang
	},{
		path:'/my',
		component:my
	}
	]
},{
	path:'/detail/:id',
	component:detail
}]

const router = new VueRouter({
	routes
})
const app = new Vue({
	router
}).$mount("#app")

