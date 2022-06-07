"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["src_views_product_List_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/product/List.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/product/List.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tools_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tools/config.js */ \"./src/tools/config.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  props: [\"query\", \"id\"],\n\n  data() {\n    return {\n      // types,\n      list: []\n    };\n  },\n\n  // 监听路由变化\n  watch: {\n    $route() {\n      // 根据路由请求数据的函数\n      console.log(this.$route);\n      this.getData();\n    }\n\n  },\n  methods: {\n    getType(type) {\n      return _tools_config_js__WEBPACK_IMPORTED_MODULE_0__.types.find(item => {\n        if (item.id == type) {\n          return item;\n        }\n      }).text || \"其他\";\n    },\n\n    // 定义获取数据的共方法，可以复用\n    getData() {\n      let {\n        params\n      } = this.$route;\n      console.log(\"当前页面路由\", this.$route);\n      this.$http.get(\"/admin/product/list\", {\n        // 第一个参数是一个对象传递query数据\n        params\n      }).then(({\n        data\n      }) => {\n        console.log(data);\n\n        if (data.code == 1) {\n          this.list = data.data;\n        } // if (data) {\n        //   console.log(\"\", data);\n        //   data.forEach(element => {\n        //     if(element.id== params.id)\n        //       this.data = element;\n        //   });\n        //\n        // }\n\n      }, err => console.log(err));\n    },\n\n    del(e, item) {\n      this.$confirm(`此操作将删除商品:《${item.title}》, 是否继续?`, \"提示\", {\n        confirmButtonText: \"确定\",\n        cancelButtonText: \"取消\",\n        type: \"error\"\n      }).then(() => {\n        this.$http.post(\"/admin/product/remove\", {\n          id: item.id\n        }).then(({\n          data\n        }) => {\n          if (data.code == 1) {\n            console.log(\"删除id\", data.msg);\n            this.$message({\n              type: \"success\",\n              message: `\"${item.title}\"的${data.msg}删除成功!`,\n              duration: 2000\n            }); //删除成功后刷新,让后用户看到效果\n\n            setTimeout(() => {// this.$router.go(0)\n            }, 1000);\n          } else {\n            this.$message({\n              type: \"error\",\n              message: `${data.msg}删除失败！`,\n              duration: 2000\n            });\n          }\n        }, err => {\n          this.$message({\n            type: \"error\",\n            message: `请求错误`,\n            duration: 2000\n          });\n        });\n      }).catch(() => {\n        this.$message(\"取消成功\");\n      });\n    }\n\n  },\n\n  created() {\n    this.getData();\n  }\n\n});\n\n//# sourceURL=webpack://demo/./src/views/product/List.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/tools/config.js":
/*!*****************************!*\
  !*** ./src/tools/config.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"types\": () => (/* binding */ types)\n/* harmony export */ });\nlet types = [{\n  id: 1,\n  text: \"美食\",\n  img: \"01.png\"\n}, {\n  id: 2,\n  text: \"电影\",\n  img: \"02.png\"\n}, {\n  id: 3,\n  text: \"酒店\",\n  img: \"03.png\"\n}, {\n  id: 4,\n  text: \"休闲\",\n  img: \"04.png\"\n}, {\n  id: 5,\n  text: \"外卖\",\n  img: \"05.png\"\n}, {\n  id: 6,\n  text: \"KTV\",\n  img: \"06.png\"\n}, {\n  id: 7,\n  text: \"丽人\",\n  img: \"07.png\"\n}, {\n  id: 8,\n  text: \"小吃\",\n  img: \"08.png\"\n}, {\n  id: 9,\n  text: \"周边游\",\n  img: \"09.png\"\n}, {\n  id: 10,\n  text: \"火车票\",\n  img: \"10.png\"\n}];\n\n//# sourceURL=webpack://demo/./src/tools/config.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/product/List.vue?vue&type=style&index=0&id=2079f3f8&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/product/List.vue?vue&type=style&index=0&id=2079f3f8&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://demo/./src/views/product/List.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/product/List.vue?vue&type=style&index=0&id=2079f3f8&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/product/List.vue?vue&type=style&index=0&id=2079f3f8&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_2079f3f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=style&index=0&id=2079f3f8&scoped=true&lang=scss& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/product/List.vue?vue&type=style&index=0&id=2079f3f8&scoped=true&lang=scss&\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_2079f3f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_2079f3f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_2079f3f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_2079f3f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://demo/./src/views/product/List.vue?./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/views/product/List.vue":
/*!************************************!*\
  !*** ./src/views/product/List.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _List_vue_vue_type_template_id_2079f3f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=2079f3f8&scoped=true& */ \"./src/views/product/List.vue?vue&type=template&id=2079f3f8&scoped=true&\");\n/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ \"./src/views/product/List.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _List_vue_vue_type_style_index_0_id_2079f3f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.vue?vue&type=style&index=0&id=2079f3f8&scoped=true&lang=scss& */ \"./src/views/product/List.vue?vue&type=style&index=0&id=2079f3f8&scoped=true&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n;\n\n\n/* normalize component */\n\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _List_vue_vue_type_template_id_2079f3f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n  _List_vue_vue_type_template_id_2079f3f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  \"2079f3f8\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/product/List.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://demo/./src/views/product/List.vue?");

/***/ }),

/***/ "./src/views/product/List.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/views/product/List.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/product/List.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://demo/./src/views/product/List.vue?");

/***/ }),

/***/ "./src/views/product/List.vue?vue&type=style&index=0&id=2079f3f8&scoped=true&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./src/views/product/List.vue?vue&type=style&index=0&id=2079f3f8&scoped=true&lang=scss& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_2079f3f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=style&index=0&id=2079f3f8&scoped=true&lang=scss& */ \"./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/product/List.vue?vue&type=style&index=0&id=2079f3f8&scoped=true&lang=scss&\");\n\n\n//# sourceURL=webpack://demo/./src/views/product/List.vue?");

/***/ }),

/***/ "./src/views/product/List.vue?vue&type=template&id=2079f3f8&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/views/product/List.vue?vue&type=template&id=2079f3f8&scoped=true& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_2079f3f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_2079f3f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_2079f3f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=template&id=2079f3f8&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/product/List.vue?vue&type=template&id=2079f3f8&scoped=true&\");\n\n\n//# sourceURL=webpack://demo/./src/views/product/List.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/product/List.vue?vue&type=template&id=2079f3f8&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/product/List.vue?vue&type=template&id=2079f3f8&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"page-product-lsit\" }, [\n    _c(\"h1\", [_vm._v(\"商品列表\")]),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"products\" },\n      _vm._l(_vm.list, function (item) {\n        return _c(\n          \"el-card\",\n          { key: item.id },\n          [\n            _c(\"img\", {\n              staticClass: \"image\",\n              attrs: { width: \"100%\", src: item.img },\n            }),\n            _vm._v(\" \"),\n            _c(\"p\", { staticClass: \"title\" }, [_vm._v(_vm._s(item.title))]),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"center\" }, [\n              _c(\"span\", [_vm._v(\"￥\" + _vm._s(item.price))]),\n              _vm._v(\" \"),\n              _c(\"span\", [_vm._v(_vm._s(_vm.getType(item.type)))]),\n            ]),\n            _vm._v(\" \"),\n            _c(\"p\", { staticClass: \"sales\" }, [\n              _vm._v(\"已销售\" + _vm._s(item.sales) + \"份\"),\n            ]),\n            _vm._v(\" \"),\n            _c(\n              \"el-row\",\n              [\n                _c(\n                  \"router-link\",\n                  {\n                    staticClass: \"el-button--success el-button--mini\",\n                    attrs: {\n                      to: \"/product/edit/\" + item.id,\n                      tag: \"el-button\",\n                      type: \"button\",\n                    },\n                  },\n                  [_vm._v(\"修改\\n        \")]\n                ),\n                _vm._v(\" \"),\n                _c(\n                  \"el-button\",\n                  {\n                    attrs: { size: \"mini\", type: \"danger\" },\n                    on: {\n                      click: function ($event) {\n                        return _vm.del($event, item)\n                      },\n                    },\n                  },\n                  [_vm._v(\"删除\")]\n                ),\n              ],\n              1\n            ),\n          ],\n          1\n        )\n      }),\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"list-btns\" },\n      [\n        _c(\n          \"el-row\",\n          [\n            _c(\n              \"router-link\",\n              {\n                attrs: {\n                  tag: \"el-button\",\n                  to: \"/product/list/\" + (_vm.id > 1 ? _vm.id - 1 : 1),\n                  type: \"primary\",\n                  round: \"\",\n                },\n              },\n              [_vm._v(\"← 上一页\")]\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"router-link\",\n              {\n                attrs: {\n                  tag: \"el-button\",\n                  to: \"/product/list/\" + (_vm.id + 1),\n                  type: \"primary\",\n                  round: \"\",\n                },\n              },\n              [_vm._v(\"下一页 →\")]\n            ),\n          ],\n          1\n        ),\n      ],\n      1\n    ),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://demo/./src/views/product/List.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

}]);