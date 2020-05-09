(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/project/Board.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/project/Board.vue?vue&type=script&lang=js& ***!
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
  name: "Board",
  data: function data() {
    return {
      project: null,
      loading: false,
      errorCode: 0
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/project/Board.vue?vue&type=template&id=0e7859b7&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/project/Board.vue?vue&type=template&id=0e7859b7& ***!
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
  return _c("div", { staticClass: "project-detail" }, [
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
              _c(
                "div",
                { staticClass: "col-lg-4 col-md-6 col-12" },
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
                  ),
                  _vm._v(" "),
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
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-8 col-12" },
                _vm._l(3, function(n) {
                  return _c(
                    "content-placeholders",
                    { key: n, staticClass: "mb-4" },
                    [
                      _c("content-placeholders-heading"),
                      _vm._v(" "),
                      _c("content-placeholders-text", { attrs: { lines: 3 } })
                    ],
                    1
                  )
                }),
                1
              )
            ]
          : _vm.project
          ? [
              _c(
                "div",
                { staticClass: "col-12 mb-4 d-flex justify-content-between" },
                [
                  _c("h1", [
                    _vm._v(
                      _vm._s(_vm.project.slug) +
                        ": " +
                        _vm._s(_vm.project.title)
                    )
                  ]),
                  _vm._v(" "),
                  _vm.isSenior
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-primary",
                          on: { click: _vm.editProjectModal }
                        },
                        [_vm._v(_vm._s(_vm.$t("project.edit.btn")))]
                      )
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4 col-12" }, [
                _c("div", { staticClass: "card mb-4" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(_vm._s(_vm.$t("project.show.details")))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-4 col-md-5" }, [
                        _vm._v(_vm._s(_vm.$t("project.client.name")) + ":")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-lg-8 col-md-7" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "text-decoration-none",
                              attrs: {
                                to: {
                                  name: "clients.show",
                                  params: { id: _vm.project.client.id }
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.project.client.name))]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-4" }, [
                        _vm._v(_vm._s(_vm.$t("project.status")) + ":")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-8 col-md-7" }, [
                        _vm._v(_vm._s(_vm._f("capitalize")(_vm.project.status)))
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card mb-4" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(_vm._s(_vm.$t("project.show.dates")))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-4 col-md-5" }, [
                        _vm._v(_vm._s(_vm.$t("project.start_date")) + ":")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-8 col-md-7" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("date")(
                              new Date(_vm.project.start_date),
                              "DD.MM.YYYY"
                            )
                          )
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-4 col-md-5" }, [
                        _vm._v(_vm._s(_vm.$t("project.end_date")) + ":")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-8 col-md-7" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("date")(
                              new Date(_vm.project.end_date),
                              "DD.MM.YYYY"
                            )
                          )
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card mb-4" }, [
                  _c(
                    "div",
                    {
                      staticClass: "card-header d-flex justify-content-between"
                    },
                    [
                      _c("h5", { staticClass: "mb-0" }, [
                        _vm._v(_vm._s(_vm.$t("project.team")))
                      ]),
                      _vm._v(" "),
                      _vm.isSenior
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-primary btn-sm",
                              on: { click: _vm.addUserToProjectModal }
                            },
                            [_vm._v(_vm._s(_vm.$t("project.team.add.btn")))]
                          )
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    _vm._l(_vm.project.users, function(user, index) {
                      return _c(
                        "div",
                        {
                          key: user.id,
                          staticClass: "d-flex",
                          class: {
                            "mb-2": index < _vm.project.users.length - 1
                          }
                        },
                        [
                          user.photo
                            ? _c("div", { staticClass: "pr-2 d-flex" }, [
                                _c("img", {
                                  staticClass: "avatar avatar-sm",
                                  attrs: { src: user.photo, alt: user.fullName }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "d-flex align-items-center" },
                            [
                              _c("p", { staticClass: "mb-0" }, [
                                _vm._v(_vm._s(user.fullName))
                              ])
                            ]
                          )
                        ]
                      )
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card mb-4" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(_vm._s(_vm.$t("project.overview")))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex justify-content-around" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-outline-primary btn-sm",
                            attrs: {
                              to: {
                                name: "projects.show.roadmap",
                                params: { slug: _vm.project.slug }
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.$t("project.overview.roadmap")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-outline-primary btn-sm",
                            attrs: {
                              to: {
                                name: "projects.show.board",
                                params: { slug: _vm.project.slug }
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.$t("project.overview.board")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-outline-primary btn-sm",
                            attrs: {
                              to: {
                                name: "projects.show.gantt",
                                params: { slug: _vm.project.slug }
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.$t("project.overview.gantt")))]
                        )
                      ],
                      1
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-8 col-12" }, [
                _c(
                  "div",
                  { staticClass: "row" },
                  [
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
                            ]),
                            _vm._v(" "),
                            _vm.isSenior
                              ? _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-outline-primary btn-sm",
                                    on: { click: _vm.addTaskModal }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.$t("project.task.add.btn"))
                                    )
                                  ]
                                )
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-body" }, [
                          _vm._v(
                            "\n                                Filter\n                            "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.filteredTasks.length > 0
                      ? _vm._l(_vm.filteredTasks, function(task) {
                          return _c(
                            "div",
                            { staticClass: "col-lg-6 col-12 mb-4" },
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
                                          task.assignee
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "d-flex align-items-center"
                                                },
                                                [
                                                  _c("img", {
                                                    staticClass:
                                                      "avatar avatar-md mr-2",
                                                    attrs: {
                                                      src: task.assignee.photo,
                                                      alt:
                                                        task.assignee.fullName
                                                    }
                                                  })
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
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
                                                _vm._f("capitalize")(
                                                  task.status
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "mb-0" }, [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("capitalize")(
                                                  task.priority
                                                )
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
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.$t("project.task.no_tasks")) +
                                "\n                        "
                            )
                          ])
                        ]
                  ],
                  2
                )
              ])
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

/***/ "./resources/js/pages/project/Board.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/project/Board.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Board_vue_vue_type_template_id_0e7859b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.vue?vue&type=template&id=0e7859b7& */ "./resources/js/pages/project/Board.vue?vue&type=template&id=0e7859b7&");
/* harmony import */ var _Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board.vue?vue&type=script&lang=js& */ "./resources/js/pages/project/Board.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Board_vue_vue_type_template_id_0e7859b7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Board_vue_vue_type_template_id_0e7859b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/project/Board.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/project/Board.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/project/Board.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Board.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/project/Board.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/project/Board.vue?vue&type=template&id=0e7859b7&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/project/Board.vue?vue&type=template&id=0e7859b7& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_template_id_0e7859b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Board.vue?vue&type=template&id=0e7859b7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/project/Board.vue?vue&type=template&id=0e7859b7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_template_id_0e7859b7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_template_id_0e7859b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);