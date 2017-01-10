	<template>
		<div id="mall-box">
			<header>
				<span>商城</span>
			</header>
			<section  id="mall-container">
				<div id="scrollWrap">
					 <div class="head hide">
			              <img src="/images/arrow.png" width="40" height="40"/>
			              <span>下拉刷新...</span>
			         </div>
					<div class="swiper-container" id="mall-lb">
					  <div class="swiper-wrapper">
					    <div class="swiper-slide" v-for='item in lbList'>
					    	<img :src="item.imgsrc"/>
					    </div>
					  </div>
					   <div class="swiper-pagination"></div>
					</div>
					<h3>线下门店尖货上新</h3>
					<div class="swiper-container" id="mall-new">
					  <div class="swiper-wrapper">
					   	<ul  class="swiper-slide">
					   		<li v-for="item in mewPro1">
					   			<router-link :to="'/detail/'+item.id">
					   				<img :src="item.imgsrc" alt="" />
						   			<i>{{item.title}}</i>
						   			<b v-html="item.price"></b>
					   			</router-link>
					   			
					   		</li>
					   	</ul>
					   	<ul  class="swiper-slide">
					   		<li v-for="item in mewPro2">
					   			<router-link :to="'/detail/'+item.id">
						   			<img :src="item.imgsrc" alt="" />
						   			<i>{{item.title}}</i>
						   			<b v-html="item.price"></b>
					   			</router-link>
					   		</li>
					   	</ul>
					  </div>
					   <div class="swiper-pagination"></div>
					</div>
					<h3>门店优品限量惠</h3>
					<div class="mall-sale">
							<ul class="sale-content">
								<li class="sale-item" v-for="item in mallSale">
									<router-link :to="'/detail/'+item.id">
									<img :src="item.imgsrc" alt="" /><i>{{item.title}}</i><i>{{item.titleSub}}</i><b>{{item.price}}</b>
									</router-link>
								</li>
							</ul>		
					</div>
					<section class="lt"  v-for="cl in mallClass">
						<img class="titleImg" :src="cl.titleImg"/>
						<div class="mall-part" >
							<ul class="part-content">
								<li class="part-item"  v-for="item in cl.content">
									<router-link :to="'/detail/'+item.id">
									<img :src="item.imgsrc" alt="" /><i>{{item.title}}</i><i>{{item.titleSub}}</i><b>{{item.price}}</b>
									</router-link>
								</li>
							</ul>		
						</div>
					</section>
			
					<div class="foot hide">
			            <img src="/images/arrow.png" width="40" height="40"/>
			            <span>上拉加载更多...</span>
			        </div>
				</div>
			</section>
		</div>
	</template>
	<script>
var common=	require("../utils/utils.common.js");
		module.exports = {
			data:function(){
				return{
					lbList:[],
					mewPro1:[],
					mewPro2:[],
					mallSale:[],
					mallClass:[],
					mallMore:[]
				}
			},
			mounted : function () { 
                    //在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。
                    //但是还没有开始 DOM 编译，$el 还不存在,但是实例存在,即this.a存在,可打印出来 。
		    		var that = this;
					 fetch('api/list').then(response => response.json())
							.then(res =>{
								this.lbList = res;
								console.log(this.lbList);
							}).then(() =>{
								var mySwiper = new Swiper('#mall-lb', {
								autoplay: 5000,//可选选项，自动滑动
								pagination : '.swiper-pagination',
								color:'red'
								})
							})
							.catch(e => console.log("Oops, error", e));		
					fetch('api/new').then(response => response.json())
							.then(res =>{
								res.forEach(function(item,index,array){
									if(array[index].id == "new1"){
										this.mewPro1 = array[index].content;
									}
									if(array[index].id == "new2"){
										this.mewPro2 = array[index].content;
									}
								},that)
								
							}).then(()=>{
								var mySwiper = new Swiper('#mall-new', {
										pagination : '.swiper-pagination',
										effect : 'coverflow',
										slidesPerView: 1,
										centeredSlides: true,
										coverflow: {
										            rotate: 30,
										            stretch: 10,
										            depth: 10,
										            modifier: 2,
										            slideShadows : true
										        }
									})
							})
					/**/
				
					 fetch('api/mallSale').then(response => response.json())
							.then(res =>{
								this.mallSale = res;
							})
							.catch(e => console.log("Oops, error", e))
						
					  fetch('api/mallClass').then(response => response.json())
							.then(res =>{
								this.mallClass = res;
								console.log(this.mallClass);
							})
							.catch(e => console.log("Oops, error", e));         
		           	common.isAllLoaded("#scrollWrap",function(){
		           		common.scroll(that);
		           	})
			}
		}
		
		
	</script>
		
