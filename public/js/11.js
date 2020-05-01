(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/project/ProjectDetail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/project/ProjectDetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProjectDetail",
  computed: {
    sortedVersions: function sortedVersions() {
      if (this.project && this.project.versions) {
        return _.orderBy(this.project.versions, 'end_date', 'asc');
      }
    }
  },
  data: function data() {
    return {
      project: null,
      loading: false,
      projectStatusOptions: [],
      taskStatusOptions: [],
      taskPriorityOptions: [],
      modalSchemaEditProject: {
        form: {
          url: '/api/projects/' + this.$route.params.slug,
          method: 'put',
          fields: [],
          hiddenFields: [],
          config: {}
        },
        modalRef: 'editProject',
        modalTitle: this.$t('project.edit.title.modal'),
        okBtnTitle: this.$t('modal.edit.btn')
      },
      modalSchemaAddTask: {
        form: {
          url: '/api/tasks',
          method: 'post',
          fields: [{
            label: this.$t('task.title'),
            required: true,
            name: 'title',
            input: 'text',
            type: 'text',
            value: '',
            config: {}
          }, {
            label: this.$t('task.description'),
            required: true,
            name: 'description',
            input: 'textarea',
            type: 'textarea',
            value: '',
            config: {}
          }],
          hiddenFields: [],
          config: {}
        },
        modalRef: 'addTask',
        modalTitle: this.$t('project.task.add.title.modal'),
        okBtnTitle: this.$t('modal.add.btn')
      }
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      this.loading = true;
      this.axios.get('/api/projects/' + this.$route.params.slug).then(function (response) {
        _this.project = response.data.data;
        _this.projectStatusOptions = response.data.meta.projectStatusOptions;
        _this.taskStatusOptions = response.data.meta.taskStatusOptions;
        _this.taskPriorityOptions = response.data.meta.taskPriorityOptions;
        _this.loading = false;
      });
    },
    editProjectModal: function editProjectModal() {
      this.modalSchemaEditProject.form.fields = [{
        label: this.$t('project.title'),
        required: true,
        name: 'title',
        input: 'text',
        type: 'text',
        value: this.project.title,
        config: {}
      }, {
        label: this.$t('project.status'),
        required: true,
        name: 'status',
        input: 'select',
        type: 'text',
        value: this.project.status,
        config: {
          options: this.projectStatusOptions
        }
      }, {
        label: this.$t('project.start_date'),
        required: true,
        name: 'start_date',
        input: 'date',
        type: 'date',
        value: this.project.start_date,
        config: {}
      }, {
        label: this.$t('project.end_date'),
        required: false,
        name: 'end_date',
        input: 'date',
        type: 'date',
        value: this.project.end_date,
        config: {}
      }];
      this.$refs['editProjectModal'].openModal();
    },
    editProject: function editProject(response) {
      this.project = response.data.data;
    },
    addTaskModal: function addTaskModal() {
      var _this$modalSchemaAddT;

      var versionOptions = [{
        'text': this.$t('task.version.no_version'),
        'value': null
      }];

      if (this.sortedVersions && this.sortedVersions.length > 0) {
        for (var i = 0; i < this.sortedVersions.length; i++) {
          versionOptions.push({
            'text': this.sortedVersions[i].title,
            'value': this.sortedVersions[i].id
          });
        }
      }

      var selectFields = [{
        label: this.$t('task.start_date'),
        required: true,
        name: 'start_date',
        input: 'date',
        type: 'date',
        value: '',
        config: {
          min: this.project.start_date,
          max: this.project.end_date ? this.project.end_date : null
        }
      }, {
        label: this.$t('task.end_date'),
        required: true,
        name: 'end_date',
        input: 'date',
        type: 'date',
        value: '',
        config: {
          min: this.project.start_date,
          max: this.project.end_date ? this.project.end_date : null
        }
      }, {
        label: this.$t('task.priority'),
        required: true,
        name: 'priority',
        input: 'select',
        type: 'select',
        value: '',
        config: {
          options: this.taskPriorityOptions,
          disabledOption: true
        }
      }, {
        label: this.$t('task.version'),
        required: false,
        name: 'version_id',
        input: 'select',
        type: 'select',
        value: null,
        config: {
          options: versionOptions,
          disabledOption: false
        }
      }];

      (_this$modalSchemaAddT = this.modalSchemaAddTask.form.fields).push.apply(_this$modalSchemaAddT, selectFields);

      this.modalSchemaAddTask.form.hiddenFields = [{
        name: 'project_id',
        value: this.project.id
      }];
      this.$refs['addTaskModal'].openModal();
    },
    addTask: function addTask(response) {
      console.log(response.data);
      var task = response.data.data;
      this.$router.push({
        name: 'tasks.show',
        params: {
          id: task.id
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/project/ProjectDetail.vue?vue&type=template&id=37f8689b&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/project/ProjectDetail.vue?vue&type=template&id=37f8689b& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-primary",
                      on: { click: _vm.editProjectModal }
                    },
                    [_vm._v(_vm._s(_vm.$t("project.edit.btn")))]
                  )
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
                        _vm._v(_vm._s(_vm.project.status))
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
                  _c("div", { staticClass: "card-header" }, [
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(_vm._s(_vm.$t("project.team")))
                    ])
                  ]),
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
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col d-flex align-items-center" },
                        [
                          _c("h5", { staticClass: "mb-0" }, [
                            _vm._v(_vm._s(_vm.$t("project.show.tasks")))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col text-right" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-primary btn-sm",
                            on: { click: _vm.addTaskModal }
                          },
                          [_vm._v(_vm._s(_vm.$t("project.task.add.btn")))]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _vm.project.tasks && _vm.project.tasks.length > 0
                        ? _vm._l(_vm.sortedVersions, function(version, index) {
                            return _c(
                              "div",
                              {
                                key: version.id,
                                staticClass: "card",
                                class: {
                                  "mb-4":
                                    index < _vm.project.versions.length - 1
                                }
                              },
                              [
                                _c("div", { staticClass: "card-header" }, [
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col d-flex align-items-center"
                                      },
                                      [
                                        _c("h5", { staticClass: "mb-0" }, [
                                          _vm._v(
                                            _vm._s(version.title) +
                                              " (" +
                                              _vm._s(
                                                _vm._f("date")(
                                                  new Date(version.end_date),
                                                  "DD.MM.YYYY"
                                                )
                                              ) +
                                              ")"
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col text-right" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-outline-primary btn-sm",
                                            on: {
                                              click: function($event) {
                                                return _vm.editVersionModal(
                                                  version
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "project.version.edit.btn"
                                                )
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-outline-danger btn-sm",
                                            on: {
                                              click: function($event) {
                                                return _vm.deleteVersionModal(
                                                  version
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "project.version.delete.btn"
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "card-body" },
                                  [
                                    version.tasks && version.tasks.length > 0
                                      ? void 0
                                      : [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm.$t("version.task.no_tasks")
                                              ) +
                                              "\n                                    "
                                          )
                                        ]
                                  ],
                                  2
                                )
                              ]
                            )
                          })
                        : [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.$t("project.task.no_tasks")) +
                                "\n                        "
                            )
                          ]
                    ],
                    2
                  )
                ])
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _c("custom-modal", {
          ref: "editProjectModal",
          attrs: { modalSchema: _vm.modalSchemaEditProject },
          on: { ok: _vm.editProject }
        }),
        _vm._v(" "),
        _c("custom-modal", {
          ref: "addTaskModal",
          attrs: { modalSchema: _vm.modalSchemaAddTask },
          on: { ok: _vm.addTask }
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/project/ProjectDetail.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/project/ProjectDetail.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectDetail_vue_vue_type_template_id_37f8689b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectDetail.vue?vue&type=template&id=37f8689b& */ "./resources/js/pages/project/ProjectDetail.vue?vue&type=template&id=37f8689b&");
/* harmony import */ var _ProjectDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectDetail.vue?vue&type=script&lang=js& */ "./resources/js/pages/project/ProjectDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProjectDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectDetail_vue_vue_type_template_id_37f8689b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProjectDetail_vue_vue_type_template_id_37f8689b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/project/ProjectDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/project/ProjectDetail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/project/ProjectDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/project/ProjectDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/project/ProjectDetail.vue?vue&type=template&id=37f8689b&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/project/ProjectDetail.vue?vue&type=template&id=37f8689b& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDetail_vue_vue_type_template_id_37f8689b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectDetail.vue?vue&type=template&id=37f8689b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/project/ProjectDetail.vue?vue&type=template&id=37f8689b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDetail_vue_vue_type_template_id_37f8689b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDetail_vue_vue_type_template_id_37f8689b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);