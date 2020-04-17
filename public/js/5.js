(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/ClientDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/client/ClientDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ClientDetail",
  data: function data() {
    return {
      client: null,
      loading: false,
      formClient: null,
      formClientUser: null,
      clientTypeOptions: [{
        text: 'A',
        value: 'a'
      }, {
        text: 'B',
        value: 'b'
      }, {
        text: 'C',
        value: 'c'
      }]
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      this.loading = true;
      this.axios.get('/api/clients/' + this.$route.params.id).then(function (response) {
        _this.client = response.data.data;
        _this.loading = false;
        _this.formClient = new vform__WEBPACK_IMPORTED_MODULE_0___default.a({
          'name': _this.client.name,
          'type': _this.client.type
        });
        _this.formClientUser = new vform__WEBPACK_IMPORTED_MODULE_0___default.a({
          'email': _this.client.email,
          'first_name': _this.client.first_name,
          'last_name': _this.client.last_name
        });
      });
    },
    badgeType: function badgeType(type) {
      switch (type) {
        case 'a':
          return 'danger';

        case 'b':
          return 'primary';

        default:
          return 'success';
      }
    },
    editClient: function editClient(bvModalEvt) {
      var _this2 = this;

      bvModalEvt.preventDefault();
      this.formClient.put('/api/clients/' + this.$route.params.id).then(function (response) {
        _this2.client.name = response.data.data.name;
        _this2.client.type = response.data.data.type;
        _this2.formClient = new vform__WEBPACK_IMPORTED_MODULE_0___default.a({
          'name': _this2.client.name,
          'type': _this2.client.type
        });

        _this2.$nextTick(function () {
          _this2.$refs['editClient'].hide();
        });
      });
    },
    editClientModal: function editClientModal() {
      this.$refs['editClient'].show();
    },
    resetEditClientModal: function resetEditClientModal() {
      if (this.formClient) {
        this.formClient.reset();
      }
    },
    editClientUser: function editClientUser(bvModalEvt) {
      var _this3 = this;

      bvModalEvt.preventDefault();
      this.formClientUser.put('/api/users/' + this.client.user.id).then(function (response) {
        _this3.client.email = response.data.data.email;
        _this3.client.first_name = response.data.data.first_name;
        _this3.client.last_name = response.data.data.last_name;
        _this3.formClientUser = new vform__WEBPACK_IMPORTED_MODULE_0___default.a({
          'email': _this3.client.email,
          'first_name': _this3.client.first_name,
          'last_name': _this3.client.last_name
        });

        _this3.$nextTick(function () {
          _this3.$refs['editClientUser'].hide();
        });
      });
    },
    editClientUserModal: function editClientUserModal() {
      this.$refs['editClientUser'].show();
    },
    resetEditClientUserModal: function resetEditClientUserModal() {
      if (this.formClientUser) {
        this.formClientUser.reset();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/ClientDetail.vue?vue&type=template&id=c7322bf2&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/client/ClientDetail.vue?vue&type=template&id=c7322bf2& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "client-detail" }, [
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
                      _c("content-placeholders-heading", {
                        attrs: { img: true }
                      }),
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
                [
                  _c(
                    "content-placeholders",
                    { staticClass: "mb-4" },
                    [
                      _c("content-placeholders-heading"),
                      _vm._v(" "),
                      _c("content-placeholders-text", { attrs: { lines: 6 } })
                    ],
                    1
                  )
                ],
                1
              )
            ]
          : _vm.client
          ? [
              _c("div", { staticClass: "col-sm-4 col-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _c("h5", { staticClass: "mb-0" }, [
                      _c(
                        "span",
                        {
                          class:
                            "badge badge-" +
                            _vm.badgeType(_vm.client.type) +
                            " text-uppercase mr-2"
                        },
                        [_vm._v(_vm._s(_vm.client.type))]
                      ),
                      _vm._v(_vm._s(_vm.client.name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _vm.client.user
                        ? [
                            _c("p", { staticClass: "font-weight-bold" }, [
                              _vm._v(_vm._s(_vm.$t("client.show.contact")))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row no-gutters mb-4" }, [
                              _vm.client.user.photo
                                ? _c("div", { staticClass: "col-3 pr-2" }, [
                                    _c("img", {
                                      staticClass: "img-fluid rounded",
                                      attrs: {
                                        src: _vm.client.user.photo,
                                        alt: _vm.client.user.fullName
                                      }
                                    })
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", { staticClass: "col" }, [
                                _c("p", { staticClass: "mb-1" }, [
                                  _vm._v(_vm._s(_vm.client.user.fullName))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: "mailto:" + _vm.client.user.email
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.client.user.email))]
                                )
                              ])
                            ])
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              on: { click: _vm.editClientModal }
                            },
                            [_vm._v(_vm._s(_vm.$t("client.edit.btn")))]
                          ),
                          _vm._v(" "),
                          _vm.client.user
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  on: { click: _vm.editClientUserModal }
                                },
                                [_vm._v(_vm._s(_vm.$t("client.edit.user.btn")))]
                              )
                            : _vm._e()
                        ])
                      ])
                    ],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-8 col-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(_vm._s(_vm.$t("client.show.projects")))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _vm._v(
                      "\n                        test\n                    "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "b-modal",
                {
                  ref: "editClient",
                  attrs: { title: _vm.$t("client.edit.title") },
                  on: {
                    show: _vm.resetEditClientModal,
                    hidden: _vm.resetEditClientModal,
                    ok: _vm.editClient
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "modal-footer",
                      fn: function(ref) {
                        var ok = ref.ok
                        var cancel = ref.cancel
                        return [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { disabled: _vm.formClient.busy },
                              on: {
                                click: function($event) {
                                  return ok()
                                }
                              }
                            },
                            [
                              _vm.formClient.busy
                                ? _c("span", {
                                    staticClass:
                                      "spinner-border spinner-border-sm mr-2",
                                    attrs: {
                                      role: "status",
                                      "aria-hidden": "true"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("client.edit.ok")) +
                                  "\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger",
                              on: {
                                click: function($event) {
                                  return cancel()
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("cancel")))]
                          )
                        ]
                      }
                    }
                  ])
                },
                [
                  _c(
                    "form",
                    {
                      attrs: { enctype: "multipart/form-data" },
                      on: {
                        keydown: function($event) {
                          return _vm.formClient.onKeydown($event)
                        }
                      }
                    },
                    [
                      _c("alert-error", { attrs: { form: _vm.formClient } }),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(_vm._s(_vm.$t("client.name")))]),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.formClient.name,
                                  expression: "formClient.name"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.formClient.errors.has("name")
                              },
                              attrs: { type: "text", name: "name" },
                              domProps: { value: _vm.formClient.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.formClient,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.formClient, field: "name" }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v(_vm._s(_vm.$t("client..type")))]),
                          _vm._v(" "),
                          _c("b-form-select", {
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.formClient.errors.has("type")
                            },
                            attrs: { options: _vm.clientTypeOptions },
                            model: {
                              value: _vm.formClient.type,
                              callback: function($$v) {
                                _vm.$set(_vm.formClient, "type", $$v)
                              },
                              expression: "formClient.type"
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.formClient, field: "type" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "b-modal",
                {
                  ref: "editClientUser",
                  attrs: { title: _vm.$t("client.edit.user.title") },
                  on: {
                    show: _vm.resetEditClientUserModal,
                    hidden: _vm.resetEditClientUserModal,
                    ok: _vm.editClientUser
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "modal-footer",
                      fn: function(ref) {
                        var ok = ref.ok
                        var cancel = ref.cancel
                        return [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { disabled: _vm.formClientUser.busy },
                              on: {
                                click: function($event) {
                                  return ok()
                                }
                              }
                            },
                            [
                              _vm.formClientUser.busy
                                ? _c("span", {
                                    staticClass:
                                      "spinner-border spinner-border-sm mr-2",
                                    attrs: {
                                      role: "status",
                                      "aria-hidden": "true"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("client.edit.ok")) +
                                  "\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger",
                              on: {
                                click: function($event) {
                                  return cancel()
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("cancel")))]
                          )
                        ]
                      }
                    }
                  ])
                },
                [
                  _c(
                    "form",
                    {
                      attrs: { enctype: "multipart/form-data" },
                      on: {
                        keydown: function($event) {
                          return _vm.formClientUser.onKeydown($event)
                        }
                      }
                    },
                    [
                      _c("alert-error", {
                        attrs: { form: _vm.formClientUser }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [
                          _vm._v(_vm._s(_vm.$t("client.user.email")))
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.formClientUser.email,
                                  expression: "formClientUser.email"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.formClientUser.errors.has(
                                  "email"
                                )
                              },
                              attrs: { type: "email", name: "email" },
                              domProps: { value: _vm.formClientUser.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.formClientUser,
                                    "email",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: {
                                form: _vm.formClientUser,
                                field: "email"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [
                          _vm._v(_vm._s(_vm.$t("client.user.first_name")))
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.formClientUser.first_name,
                                  expression: "formClientUser.first_name"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.formClientUser.errors.has(
                                  "first_name"
                                )
                              },
                              attrs: { type: "text", name: "first_name" },
                              domProps: {
                                value: _vm.formClientUser.first_name
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.formClientUser,
                                    "first_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: {
                                form: _vm.formClientUser,
                                field: "first_name"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [
                          _vm._v(_vm._s(_vm.$t("client.user.last_name")))
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.formClientUser.last_name,
                                  expression: "formClientUser.last_name"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.formClientUser.errors.has(
                                  "last_name"
                                )
                              },
                              attrs: { type: "text", name: "last_name" },
                              domProps: { value: _vm.formClientUser.last_name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.formClientUser,
                                    "last_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: {
                                form: _vm.formClientUser,
                                field: "last_name"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ]
              )
            ]
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/client/ClientDetail.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/client/ClientDetail.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClientDetail_vue_vue_type_template_id_c7322bf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientDetail.vue?vue&type=template&id=c7322bf2& */ "./resources/js/pages/client/ClientDetail.vue?vue&type=template&id=c7322bf2&");
/* harmony import */ var _ClientDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientDetail.vue?vue&type=script&lang=js& */ "./resources/js/pages/client/ClientDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClientDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClientDetail_vue_vue_type_template_id_c7322bf2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ClientDetail_vue_vue_type_template_id_c7322bf2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/client/ClientDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/client/ClientDetail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/client/ClientDetail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/ClientDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/client/ClientDetail.vue?vue&type=template&id=c7322bf2&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/client/ClientDetail.vue?vue&type=template&id=c7322bf2& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientDetail_vue_vue_type_template_id_c7322bf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientDetail.vue?vue&type=template&id=c7322bf2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/ClientDetail.vue?vue&type=template&id=c7322bf2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientDetail_vue_vue_type_template_id_c7322bf2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientDetail_vue_vue_type_template_id_c7322bf2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);