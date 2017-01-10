<template>
	<div class="m-index" id="m_index">
	 <router-view></router-view>
	<footer>
			<ul>
				<li @click='changeNav(index)' :class="{active: index==navIndex}" v-for="(item,index) in listindex">
					<router-link :to='item.router'>
						<i class="yo-ico" v-html="item.ico"></i>
						<b >{{item.t}}</b>
					</router-link>
					
				</li>
			</ul>
	</footer>
	</div>
</template>
<script>
	module.exports={
		data:function(){
			return{
				navIndex:1,
				listindex:[
					{
						ico:'&#xe61d;',
					  t:'特辑',
					  router:'/special'
					},
					{ico:'&#xe7a3;', 
					t:'商城',
					router:'/'
					},
					{ico:'&#xe60e;',
					t:'想逛',
					router:'/xiang'
					},
					{ico:'&#xe6ce;',
					t:'我的',
					router:'/my'
					}
				]
			}
		},
		methods:{
			changeNav:function(index){
				this.navIndex = index;
			}
		}
	}
</script>
