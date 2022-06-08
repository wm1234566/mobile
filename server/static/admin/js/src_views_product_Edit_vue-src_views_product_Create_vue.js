"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["src_views_product_Edit_vue-src_views_product_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/product/Edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/product/Edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create */ \"./src/views/product/Create.vue\");\n//\n//\n//\n//\n//\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  // 使用混合\n  mixins: [_Create__WEBPACK_IMPORTED_MODULE_0__[\"default\"]],\n\n  // 写数据\n  data() {\n    return {\n      // 修改数据请求地址\n      submitUrl: \"/admin/product/edit\",\n      title: \"修改商品信息\"\n    };\n  },\n\n  // 当页面创建完成获取数据\n  watch: {\n    $route() {\n      this.getData();\n    }\n\n  },\n  methods: {\n    getDate() {\n      let {\n        params\n      } = this.$route;\n      console.log(params);\n      $http.get(\"/admin/product/get\", {\n        params\n      }).then(({\n        data\n      }) => {\n        console.log(\"数据\", data);\n        this.data = data.data;\n        let imgname = data.data.img.split(\"/\"); //分割url\n\n        imgname = imgname[imgname.length - 1]; //通过最后一个数组下标获取图片名\n\n        this.fileList.push({\n          name: imgname,\n          url: data.data.img\n        }); // 添加图片\n\n        this.$set(this.data, id, params.id);\n      }, err => {\n        this.$message.error(\"请求错误\"); // 返回上一个页面\n\n        setTimeout(() => {\n          this.$router.back();\n        });\n      });\n    }\n\n  },\n\n  created() {\n    this.getDate();\n  }\n\n});\n\n//# sourceURL=webpack://demo/./src/views/product/Edit.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/views/product/Edit.vue":
/*!************************************!*\
  !*** ./src/views/product/Edit.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ \"./src/views/product/Edit.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\nvar render, staticRenderFns\n;\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/product/Edit.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://demo/./src/views/product/Edit.vue?");

/***/ }),

/***/ "./src/views/product/Edit.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/views/product/Edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/product/Edit.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://demo/./src/views/product/Edit.vue?");

/***/ })

}]);