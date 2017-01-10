var common = require('../utils/utils.common.js');
new Vue({
	el:"#mall-container",
	data:{
//		listindex:[
//		{"ico":"&#xe61d;","text":"特辑"},
//		{"ico":"&#xe7a3;","text":"商城"},
//		{"ico":"&#xe60e;","text":"想逛"},
//		{"ico":"&#xe6ce;","text":"我的"}
//		],
		lbList:[],
		mewPro1:[],
		mewPro2:[],
		mallSale:[],
		mallClass:[],
		mallMore:[]
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
})

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