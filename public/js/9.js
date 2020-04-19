(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/project/ProjectDetail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/project/ProjectDetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      project: null,
      loading: false,
      formEditProject: new vform__WEBPACK_IMPORTED_MODULE_0___default.a({
        'start_date': '',
        'end_date': null,
        'slug': '',
        'title': '',
        'client_id': ''
      }),
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
      modalSchemaAddVersion: {
        form: {
          url: '/api/versions/',
          method: 'post',
          fields: [],
          hiddenFields: [],
          config: {}
        },
        modalRef: 'editProject',
        modalTitle: this.$t('project.edit.title.modal'),
        okBtnTitle: this.$t('modal.edit.btn')
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
        label: this.$t('project.slug'),
        required: true,
        name: 'slug',
        input: 'text',
        type: 'text',
        value: this.project.slug,
        config: {}
      }, {
        label: this.$t('project.status'),
        required: true,
        name: 'status',
        input: 'select',
        type: 'text',
        value: this.project.status,
        config: {
          options: [{
            text: 'Active',
            value: 'active'
          }, {
            text: 'Finished',
            value: 'finished'
          }]
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
      console.log(response);
    },
    addVersionModal: function addVersionModal() {},
    editVersionModal: function editVersionModal() {},
    deleteVersionModal: function deleteVersionModal() {}
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
                { staticClass: "col-sm-4 col-12" },
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
                { staticClass: "col-sm-8 col-12" },
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
              _c("div", { staticClass: "col-md-4 col-12" }, [
                _c("div", { staticClass: "card mb-4" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(
                        _vm._s(_vm.project.slug) +
                          ": " +
                          _vm._s(_vm.project.title)
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "p",
                      { staticClass: "mb-1" },
                      [
                        _c("strong", [
                          _vm._v(_vm._s(_vm.$t("project.client.name")) + ":")
                        ]),
                        _vm._v(" "),
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
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-1" }, [
                      _c("strong", [
                        _vm._v(_vm._s(_vm.$t("project.status")) + ":")
                      ]),
                      _vm._v(" " + _vm._s(_vm.project.status))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-1" }, [
                      _c("strong", [
                        _vm._v(_vm._s(_vm.$t("project.start_date")) + ":")
                      ]),
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm.format(
                              _vm.parse(
                                _vm.project.start_date,
                                "Y.m.d",
                                new Date()
                              ),
                              "d.m.Y"
                            )
                          )
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c("strong", [
                        _vm._v(_vm._s(_vm.$t("project.end_date")) + ":")
                      ]),
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm.project.end_date ? _vm.project.end_date : "-"
                          )
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-primary btn-sm",
                            on: { click: _vm.editProjectModal }
                          },
                          [_vm._v(_vm._s(_vm.$t("project.edit.btn")))]
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card" }, [
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
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8 col-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col d-flex align-items-center" },
                        [
                          _c("h5", { staticClass: "mb-0" }, [
                            _vm._v(_vm._s(_vm.$t("project.show.versions")))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col text-right" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-primary btn-sm",
                            on: { click: _vm.addVersionModal }
                          },
                          [_vm._v(_vm._s(_vm.$t("project.version.add.btn")))]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _vm.project.versions && _vm.project.versions.length > 0
                        ? _vm._l(_vm.project.versions, function(version) {
                            return _c(
                              "div",
                              { key: version.id, staticClass: "card" },
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
                                          _vm._v(_vm._s(version.title))
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
                                            on: { click: _vm.editVersionModal }
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
                                              click: _vm.deleteVersionModal
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
                                    _vm.project.versions &&
                                    _vm.project.versions.length > 0
                                      ? void 0
                                      : [
                                          _vm._v(
                                            "\n\n                                        " +
                                              _vm._s(
                                                _vm.$t(
                                                  "project.version.no_versions"
                                                )
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
                              "\n\n                            " +
                                _vm._s(_vm.$t("project.version.no_versions")) +
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