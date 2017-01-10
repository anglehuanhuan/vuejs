/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(1);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _mall = __webpack_require__(3);
	
	var _mall2 = _interopRequireDefault(_mall);
	
	var _detail = __webpack_require__(7);
	
	var _detail2 = _interopRequireDefault(_detail);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(9);
	var layout = __webpack_require__(13);
	var common = __webpack_require__(5);
	
	common.render(layout);
	
	var routes = [{
		path: '/',
		component: _index2.default,
		children: [{
			path: '/',
			component: _mall2.default
		}]
	}, {
		path: '/detail/:id',
		component: _detail2.default
	}];
	
	var router = new VueRouter({
		routes: routes
	});
	var app = new Vue({
		router: router
	}).$mount("#app");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(2)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "m-index",
	    attrs: {
	      "id": "m_index"
	    }
	  }, [_c('router-view'), _vm._v(" "), _vm._m(0)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('footer', [_c('ul', [_c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _c('b', [_vm._v("商城")])]), _vm._v(" "), _c('li', {
	    staticClass: "active"
	  }, [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _c('b', [_vm._v("商城")])]), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _c('b', [_vm._v("想逛")])]), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _c('b', [_vm._v("我的")])])])])
	}]}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(4)
	
	/* template */
	var __vue_template__ = __webpack_require__(6)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	var common = __webpack_require__(5);
	module.exports = {
		data: function () {
			return {
				lbList: [],
				mewPro1: [],
				mewPro2: [],
				mallSale: [],
				mallClass: [],
				mallMore: []
			};
		},
		mounted: function () {
			//在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。
			//但是还没有开始 DOM 编译，$el 还不存在,但是实例存在,即this.a存在,可打印出来 。
			var that = this;
			fetch('api/list').then(response => response.json()).then(res => {
				this.lbList = res;
				console.log(this.lbList);
			}).then(() => {
				var mySwiper = new Swiper('#mall-lb', {
					autoplay: 5000, //可选选项，自动滑动
					pagination: '.swiper-pagination',
					color: 'red'
				});
			}).catch(e => console.log("Oops, error", e));
			fetch('api/new').then(response => response.json()).then(res => {
				res.forEach(function (item, index, array) {
					if (array[index].id == "new1") {
						this.mewPro1 = array[index].content;
					}
					if (array[index].id == "new2") {
						this.mewPro2 = array[index].content;
					}
				}, that);
			}).then(() => {
				var mySwiper = new Swiper('#mall-new', {
					pagination: '.swiper-pagination',
					effect: 'coverflow',
					slidesPerView: 1,
					centeredSlides: true,
					coverflow: {
						rotate: 30,
						stretch: 10,
						depth: 10,
						modifier: 2,
						slideShadows: true
					}
				});
			});
			/**/
	
			fetch('api/mallSale').then(response => response.json()).then(res => {
				this.mallSale = res;
			}).catch(e => console.log("Oops, error", e));
	
			fetch('api/mallClass').then(response => response.json()).then(res => {
				this.mallClass = res;
				console.log(this.mallClass);
			}).catch(e => console.log("Oops, error", e));
			common.isAllLoaded("#scrollWrap", function () {
				common.scroll(that);
			});
		}
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	var common = {
	    render: function render(str) {
	        var body = document.body;
	        body.innerHTML = str + body.innerHTML;
	    },
	    isAllLoaded: function isAllLoaded(scope, cb) {
	        var t_img; // 定时器
	        var isLoad = true; // 控制变量
	
	        // 判断图片加载状况，加载完成后回调
	        return isImgLoad(cb);
	
	        // 判断图片加载的函数
	        function isImgLoad(callback) {
	            // 查找所有图片，迭代处理
	            $(scope).find('img').each(function () {
	                // 找到为0就将isLoad设为false，并退出each
	                if (this.height === 0) {
	                    isLoad = false;
	                    return false;
	                }
	            });
	            // 为true，没有发现为0的。加载完毕
	            if (isLoad) {
	                clearTimeout(t_img); // 清除定时器
	                // 回调函数
	                callback();
	                // 为false，因为找到了没有加载完成的图，将调用定时器递归
	            } else {
	                isLoad = true;
	                t_img = setTimeout(function () {
	                    isImgLoad(callback); // 递归扫描
	                }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
	            }
	        }
	    },
	
	    scroll: function scroll(that) {
	        var myScroll = new IScroll('#mall-container', {
	            probeType: 3,
	            mouseWheel: true
	        });
	
	        var scrollHeight = 35;
	        $('.head.hide').removeClass('hide');
	        $('.foot.hide').removeClass('hide');
	        myScroll.scrollBy(0, -scrollHeight);
	
	        var head = $('.head img'),
	            topImgHasClass = head.hasClass('up');
	        var foot = $('.foot img'),
	            bottomImgHasClass = head.hasClass('down');
	        myScroll.on('scroll', function () {
	            var y = this.y,
	                maxY = this.maxScrollY - y;
	            if (y >= 0) {
	                !topImgHasClass && head.addClass('up');
	                return '';
	            }
	            if (maxY >= 0) {
	                !bottomImgHasClass && foot.addClass('down');
	                return '';
	            }
	        });
	
	        myScroll.on('scrollEnd', function () {
	            if (this.y >= -scrollHeight && this.y < 0) {
	                myScroll.scrollTo(0, -scrollHeight);
	                head.removeClass('up');
	            } else if (this.y >= 0) {
	                head.attr('src', '/images/ajax-loader.gif');
	                //TODO ajax下拉刷新数据
	
	                setTimeout(function () {
	                    myScroll.scrollTo(0, -scrollHeight);
	                    head.removeClass('up');
	                    head.attr('src', '/images/arrow.png');
	                }, 100);
	            }
	
	            var maxY = this.maxScrollY - this.y;
	            if (maxY > -scrollHeight && maxY < 0) {
	                var self = this;
	                myScroll.scrollTo(0, self.maxScrollY + scrollHeight);
	                foot.removeClass('down');
	            } else if (maxY >= 0) {
	                foot.attr('src', '/images/ajax-loader.gif');
	                //TODO ajax上拉加载数据
	                var self = this;
	                console.log(that);
	                fetch('/api/mallMore').then(function (response) {
	                    return response.json();
	                }).then(function (res) {
	                    that.mallClass = that.mallClass.concat(res);
	
	                    myScroll.refresh();
	
	                    //myScroll.scrollTo(0, self.y + scrollHeight);
	                    myScroll.scrollTo(0, self.maxScrollY - 60);
	
	                    foot.removeClass('down');
	                    foot.attr('src', '/images/arrow.png');
	                });
	            }
	        });
	    }
	};
	
	module.exports = common;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "mall-box"
	    }
	  }, [_vm._m(0), _vm._v(" "), _c('section', {
	    attrs: {
	      "id": "mall-container"
	    }
	  }, [_c('div', {
	    attrs: {
	      "id": "scrollWrap"
	    }
	  }, [_vm._m(1), _vm._v(" "), _c('div', {
	    staticClass: "swiper-container",
	    attrs: {
	      "id": "mall-lb"
	    }
	  }, [_c('div', {
	    staticClass: "swiper-wrapper"
	  }, _vm._l((_vm.lbList), function(item) {
	    return _c('div', {
	      staticClass: "swiper-slide"
	    }, [_c('img', {
	      attrs: {
	        "src": item.imgsrc
	      }
	    })])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "swiper-pagination"
	  })]), _vm._v(" "), _c('h3', [_vm._v("线下门店尖货上新")]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-container",
	    attrs: {
	      "id": "mall-new"
	    }
	  }, [_c('div', {
	    staticClass: "swiper-wrapper"
	  }, [_c('ul', {
	    staticClass: "swiper-slide"
	  }, _vm._l((_vm.mewPro1), function(item) {
	    return _c('li', [_c('router-link', {
	      attrs: {
	        "to": '/detail/' + item.id
	      }
	    }, [_c('img', {
	      attrs: {
	        "src": item.imgsrc,
	        "alt": ""
	      }
	    }), _vm._v(" "), _c('i', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('b', {
	      domProps: {
	        "innerHTML": _vm._s(item.price)
	      }
	    })])], 1)
	  })), _vm._v(" "), _c('ul', {
	    staticClass: "swiper-slide"
	  }, _vm._l((_vm.mewPro2), function(item) {
	    return _c('li', [_c('router-link', {
	      attrs: {
	        "to": '/detail/' + item.id
	      }
	    }, [_c('img', {
	      attrs: {
	        "src": item.imgsrc,
	        "alt": ""
	      }
	    }), _vm._v(" "), _c('i', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('b', {
	      domProps: {
	        "innerHTML": _vm._s(item.price)
	      }
	    })])], 1)
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-pagination"
	  })]), _vm._v(" "), _c('h3', [_vm._v("门店优品限量惠")]), _vm._v(" "), _c('div', {
	    staticClass: "mall-sale"
	  }, [_c('ul', {
	    staticClass: "sale-content"
	  }, _vm._l((_vm.mallSale), function(item) {
	    return _c('li', {
	      staticClass: "sale-item"
	    }, [_c('router-link', {
	      attrs: {
	        "to": '/detail/' + item.id
	      }
	    }, [_c('img', {
	      attrs: {
	        "src": item.imgsrc,
	        "alt": ""
	      }
	    }), _c('i', [_vm._v(_vm._s(item.title))]), _c('i', [_vm._v(_vm._s(item.titleSub))]), _c('b', [_vm._v(_vm._s(item.price))])])], 1)
	  }))]), _vm._v(" "), _vm._l((_vm.mallClass), function(cl) {
	    return _c('section', {
	      staticClass: "lt"
	    }, [_c('img', {
	      staticClass: "titleImg",
	      attrs: {
	        "src": cl.titleImg
	      }
	    }), _vm._v(" "), _c('div', {
	      staticClass: "mall-part"
	    }, [_c('ul', {
	      staticClass: "part-content"
	    }, _vm._l((cl.content), function(item) {
	      return _c('li', {
	        staticClass: "part-item"
	      }, [_c('router-link', {
	        attrs: {
	          "to": '/detail/' + item.id
	        }
	      }, [_c('img', {
	        attrs: {
	          "src": item.imgsrc,
	          "alt": ""
	        }
	      }), _c('i', [_vm._v(_vm._s(item.title))]), _c('i', [_vm._v(_vm._s(item.titleSub))]), _c('b', [_vm._v(_vm._s(item.price))])])], 1)
	    }))])])
	  }), _vm._v(" "), _vm._m(2)], 2)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('header', [_c('span', [_vm._v("商城")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "head hide"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/arrow.png",
	      "width": "40",
	      "height": "40"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("下拉刷新...")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "foot hide"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/arrow.png",
	      "width": "40",
	      "height": "40"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("上拉加载更多...")])])
	}]}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(8)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "detail-box"
	    }
	  }, [_c('header', [_c('router-link', {
	    attrs: {
	      "to": '/'
	    }
	  }, [_c('span', {
	    staticClass: "yo-ico back"
	  }, [_vm._v("")])]), _vm._v(" "), _c('span', {
	    staticClass: "title"
	  }, [_vm._v(" 详情页 ")])], 1), _vm._v(" "), _c('section', {
	    attrs: {
	      "id": "detail-content"
	    }
	  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.$route.params.id) + "\n\t\t\t\n\t\t")])])
	},staticRenderFns: []}

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div id=\"app\">	<router-view></router-view></div>"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map