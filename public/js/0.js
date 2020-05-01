(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserDetail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserDetail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var object_to_formdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-to-formdata */ "./node_modules/object-to-formdata/dist/index.mjs");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserDetail",
  methods: {
    update: function update() {
      this.form.post('/api/clients', {
        // Transform form data to FormData
        transformRequest: [function (data, headers) {
          return Object(object_to_formdata__WEBPACK_IMPORTED_MODULE_0__["objectToFormData"])(data);
        }]
      });
    },
    uploadFile: function uploadFile(event) {
      var result = event.target.files;

      if (result && result[0]) {
        this.form.logo = result[0];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/object-to-formdata/dist/index.mjs":
/*!********************************************************!*\
  !*** ./node_modules/object-to-formdata/dist/index.mjs ***!
  \********************************************************/
/*! exports provided: objectToFormData */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToFormData", function() { return s; });
var n=function(n){return void 0===n},e=function(n){return Array.isArray(n)},t=function(n){return n&&"number"==typeof n.size&&"string"==typeof n.type&&"function"==typeof n.slice},s=function(o,i,r,f){return(i=i||{}).indices=!n(i.indices)&&i.indices,i.nullsAsUndefineds=!n(i.nullsAsUndefineds)&&i.nullsAsUndefineds,i.booleansAsIntegers=!n(i.booleansAsIntegers)&&i.booleansAsIntegers,r=r||new FormData,n(o)?r:(null===o?i.nullsAsUndefineds||r.append(f,""):"boolean"!=typeof o?e(o)?o.length&&o.forEach(function(n,e){s(n,i,r,f+"["+(i.indices?e:"")+"]")}):o instanceof Date?r.append(f,o.toISOString()):o!==Object(o)||function(n){return t(n)&&"string"==typeof n.name&&("object"==typeof n.lastModifiedDate||"number"==typeof n.lastModified)}(o)||t(o)?r.append(f,o):Object.keys(o).forEach(function(n){var t=o[n];if(e(t))for(;n.length>2&&n.lastIndexOf("[]")===n.length-2;)n=n.substring(0,n.length-2);s(t,i,r,f?f+"["+n+"]":n)}):r.append(f,i.booleansAsIntegers?o?1:0:o),r)};
//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserDetail.vue?vue&type=template&id=2bd53287&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserDetail.vue?vue&type=template&id=2bd53287& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v(_vm._s(_vm.$t("client.add.logo")))]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "custom-file" },
        [
          _c("input", {
            staticClass: "custom-file-input",
            class: { "is-invalid": _vm.form.errors.has("logo") },
            attrs: { type: "file", id: "customFile" },
            on: { change: _vm.uploadFile }
          }),
          _vm._v(" "),
          _c(
            "label",
            { staticClass: "custom-file-label", attrs: { for: "customFile" } },
            [_vm._v("Choose file")]
          ),
          _vm._v(" "),
          _c("has-error", { attrs: { form: _vm.form, field: "logo" } })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/user/UserDetail.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/user/UserDetail.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserDetail_vue_vue_type_template_id_2bd53287___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDetail.vue?vue&type=template&id=2bd53287& */ "./resources/js/pages/user/UserDetail.vue?vue&type=template&id=2bd53287&");
/* harmony import */ var _UserDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDetail.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/UserDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserDetail_vue_vue_type_template_id_2bd53287___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserDetail_vue_vue_type_template_id_2bd53287___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/UserDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/UserDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/user/UserDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/UserDetail.vue?vue&type=template&id=2bd53287&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/user/UserDetail.vue?vue&type=template&id=2bd53287& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_template_id_2bd53287___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserDetail.vue?vue&type=template&id=2bd53287& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserDetail.vue?vue&type=template&id=2bd53287&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_template_id_2bd53287___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_template_id_2bd53287___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);