(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/project/Gantt.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/project/Gantt.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var frappe_gantt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frappe-gantt */ "./node_modules/frappe-gantt/src/index.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Gannt",
  data: function data() {
    return {
      gantt: null,
      loading: false,
      errorCode: 0,
      project: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.fetchData().then(function () {
      var tasks = _this.transformTasks(_this.project.tasks);

      if (tasks.length > 0) {
        _this.gantt = new frappe_gantt__WEBPACK_IMPORTED_MODULE_0__["default"](_this.$refs['gantt'], tasks, {
          custom_popup_html: function custom_popup_html(task) {
            return '';
          },
          is_draggable: false
        });
      }
    });
  },
  methods: {
    fetchData: function fetchData() {
      var _this2 = this;

      this.loading = true;
      return this.axios.get('/api/projects/' + this.$route.params.slug + "/gantt").then(function (response) {
        _this2.project = response.data.data;
        _this2.loading = false;
      })["catch"](function (error) {
        console.log(error);
        _this2.errorCode = error.response.status;
        _this2.loading = false;
      });
    },
    transformTasks: function transformTasks(tasks) {
      var result = [];

      for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        result.push({
          id: task.id.toString(),
          name: task.title,
          start: task.start_date,
          end: task.end_date,
          progress: 100,
          dependencies: _.join(_.map(task.dependencies, 'id'), ', ')
        });
      }

      return result;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/project/Gantt.vue?vue&type=template&id=0d0b87b6&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/project/Gantt.vue?vue&type=template&id=0d0b87b6& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "project-gantt" }, [
    _c(
      "div",
      { staticClass: "row" },
      [
        _vm.loading
          ? [
              _c(
                "div",
                { staticClass: "col-12" },
                [
                  _c(
                    "content-placeholders",
                    { staticClass: "mb-4" },
                    [
                      _c("content-placeholders-heading"),
                      _vm._v(" "),
                      _c("content-placeholders-text", { attrs: { lines: 20 } })
                    ],
                    1
                  )
                ],
                1
              )
            ]
          : _vm.errorCode === 403
          ? [_c("div", { staticClass: "col-12" }, [_c("error-forbidden")], 1)]
          : _vm.errorCode === 404
          ? [_c("div", { staticClass: "col-12" }, [_c("error-not-found")], 1)]
          : [
              _vm.project
                ? _c(
                    "div",
                    { staticClass: "col-12 mb-4" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-outline-primary btn-sm",
                          attrs: {
                            to: {
                              name: "projects.show",
                              params: { slug: _vm.project.slug }
                            }
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("project.overview.back_to_project"))
                          )
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 mb-4" }, [
                _c("h2", [_vm._v(_vm._s(_vm.$t("project.show.gantt")))])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
                _c("svg", { ref: "gantt", attrs: { id: "gantt" } }),
                _vm._v(" "),
                _vm.project &&
                _vm.project.tasks &&
                _vm.project.tasks.length === 0
                  ? _c("p", [_vm._v(_vm._s(_vm.$t("project.gantt.no_tasks")))])
                  : _vm._e()
              ])
            ]
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/project/Gantt.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/project/Gantt.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gantt_vue_vue_type_template_id_0d0b87b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gantt.vue?vue&type=template&id=0d0b87b6& */ "./resources/js/pages/project/Gantt.vue?vue&type=template&id=0d0b87b6&");
/* harmony import */ var _Gantt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gantt.vue?vue&type=script&lang=js& */ "./resources/js/pages/project/Gantt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Gantt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Gantt_vue_vue_type_template_id_0d0b87b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Gantt_vue_vue_type_template_id_0d0b87b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/project/Gantt.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/project/Gantt.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/project/Gantt.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gantt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Gantt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/project/Gantt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gantt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/project/Gantt.vue?vue&type=template&id=0d0b87b6&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/project/Gantt.vue?vue&type=template&id=0d0b87b6& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gantt_vue_vue_type_template_id_0d0b87b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Gantt.vue?vue&type=template&id=0d0b87b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/project/Gantt.vue?vue&type=template&id=0d0b87b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gantt_vue_vue_type_template_id_0d0b87b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gantt_vue_vue_type_template_id_0d0b87b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);