(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/task/TaskList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/task/TaskList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TaskList",
  computed: {
    filteredTasks: function filteredTasks() {
      var _this = this;

      if (this.tasks && this.tasks.length > 0) {
        switch (this.taskSort) {
          case "normal-desc":
            {
              return _.orderBy(this.tasks, ['id'], ['desc']);
            }

          case "end-date-asc":
            {
              return _.orderBy(this.tasks, ['end_date'], ['asc']);
            }

          case "end-date-desc":
            {
              return _.orderBy(this.tasks, ['end_date'], ['desc']);
            }

          case "priority-asc":
            {
              return _.sortBy(this.tasks, function (e) {
                return _this.prioritySort(e.priority, false);
              });
            }

          case "priority-desc":
            {
              return _.sortBy(this.tasks, function (e) {
                return _this.prioritySort(e.priority, true);
              });
            }

          default:
            return this.tasks;
        }
      }

      return [];
    }
  },
  data: function data() {
    return {
      loading: false,
      tasks: [],
      errorCode: 0,
      taskSort: 'normal-asc',
      taskSortOptions: [{
        value: 'normal-asc',
        text: this.$t('task.filter.normal.asc')
      }, {
        value: 'normal-desc',
        text: this.$t('task.filter.normal.desc')
      }, {
        value: 'end-date-asc',
        text: this.$t('task.filter.endDate.asc')
      }, {
        value: 'end-date-desc',
        text: this.$t('task.filter.endDate.desc')
      }, {
        value: 'priority-asc',
        text: this.$t('task.filter.priority.asc')
      }, {
        value: 'priority-desc',
        text: this.$t('task.filter.priority.desc')
      }]
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      var _this2 = this;

      this.loading = true;
      this.axios.get('/api/tasks').then(function (response) {
        _this2.tasks = response.data.data;
        console.log(_this2.tasks);
        _this2.loading = false;
      })["catch"](function (error) {
        _this2.errorCode = error.response.status;
        _this2.loading = false;
      });
    },
    prioritySort: function prioritySort(priority, desc) {
      switch (priority) {
        case "none":
          {
            return desc ? 5 : 1;
          }

        case "low":
          {
            return desc ? 4 : 2;
          }

        case "normal":
          {
            return 3;
          }

        case "high":
          {
            return desc ? 2 : 4;
          }

        case "immediate":
          {
            return desc ? 1 : 5;
          }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/task/TaskList.vue?vue&type=template&id=2fa5dfd8&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/task/TaskList.vue?vue&type=template&id=2fa5dfd8& ***!
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
  return _c("div", { staticClass: "task-list" }, [
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
                    [_c("content-placeholders-heading")],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(12, function(n) {
                return _c(
                  "div",
                  { staticClass: "col-lg-4 col-12" },
                  [
                    _c(
                      "content-placeholders",
                      { staticClass: "mb-4" },
                      [
                        _c("content-placeholders-heading"),
                        _vm._v(" "),
                        _c("content-placeholders-text", { attrs: { lines: 3 } })
                      ],
                      1
                    )
                  ],
                  1
                )
              })
            ]
          : _vm.tasks
          ? [
              _c("div", { staticClass: "col-12 mb-4" }, [
                _c("h1", [_vm._v(_vm._s(_vm.$t("task.my_open_tasks")))])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 mb-4" }, [
                _c("div", { staticClass: "card" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "card-header d-flex justify-content-between align-items-center"
                    },
                    [
                      _c("h5", { staticClass: "mb-0" }, [
                        _vm._v(_vm._s(_vm.$t("project.show.tasks")))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "task-sort" } }, [
                          _vm._v(_vm._s(_vm.$t("task.sort")))
                        ]),
                        _vm._v(" "),
                        _c("b-form-select", {
                          staticClass: "form-control",
                          attrs: {
                            id: "task-sort",
                            options: _vm.taskSortOptions
                          },
                          model: {
                            value: _vm.taskSort,
                            callback: function($$v) {
                              _vm.taskSort = $$v
                            },
                            expression: "taskSort"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm.tasks.length > 0
                ? _vm._l(_vm.tasks, function(task) {
                    return _c(
                      "div",
                      { staticClass: "col-lg-4 col-12 mb-4" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "text-decoration-none",
                            attrs: {
                              to: {
                                name: "tasks.show",
                                params: { id: task.id }
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "card h-100" }, [
                              _c("div", { staticClass: "card-header" }, [
                                _c("h5", { staticClass: "mb-0" }, [
                                  _vm._v(_vm._s(task.title))
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "card-body d-flex justify-content-between"
                                },
                                [
                                  _c("div", { staticClass: "d-flex" }, [
                                    _c("div", [
                                      _c("p", { staticClass: "mb-0" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("date")(
                                              new Date(task.start_date),
                                              "DD.MM.YYYY"
                                            )
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "mb-0" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("date")(
                                              new Date(task.end_date),
                                              "DD.MM.YYYY"
                                            )
                                          )
                                        )
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", [
                                    _c("p", { staticClass: "mb-0" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("capitalize")(task.status)
                                        )
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "mb-0" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("capitalize")(task.priority)
                                        )
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  })
                : [
                    _c("div", { staticClass: "col-12" }, [
                      _c("p", [_vm._v(_vm._s(_vm.$t("task.no_open_tasks")))])
                    ])
                  ]
            ]
          : _vm.errorCode === 403
          ? [_c("div", { staticClass: "col-12" }, [_c("error-forbidden")], 1)]
          : _vm.errorCode === 404
          ? [_c("div", { staticClass: "col-12" }, [_c("error-not-found")], 1)]
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/task/TaskList.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/task/TaskList.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskList_vue_vue_type_template_id_2fa5dfd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskList.vue?vue&type=template&id=2fa5dfd8& */ "./resources/js/pages/task/TaskList.vue?vue&type=template&id=2fa5dfd8&");
/* harmony import */ var _TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskList.vue?vue&type=script&lang=js& */ "./resources/js/pages/task/TaskList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskList_vue_vue_type_template_id_2fa5dfd8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskList_vue_vue_type_template_id_2fa5dfd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/task/TaskList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/task/TaskList.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/task/TaskList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TaskList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/task/TaskList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/task/TaskList.vue?vue&type=template&id=2fa5dfd8&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/task/TaskList.vue?vue&type=template&id=2fa5dfd8& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_2fa5dfd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TaskList.vue?vue&type=template&id=2fa5dfd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/task/TaskList.vue?vue&type=template&id=2fa5dfd8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_2fa5dfd8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_2fa5dfd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);