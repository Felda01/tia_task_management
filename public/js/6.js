(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/ClientList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/client/ClientList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
  name: "ClientList",
  data: function data() {
    return {
      loading: false,
      clients: null,
      form: new vform__WEBPACK_IMPORTED_MODULE_0___default.a({
        'name': '',
        'type': 'b',
        'email': '',
        'first_name': '',
        'last_name': ''
      }),
      clientTypeOptions: [{
        text: 'A',
        value: 'a'
      }, {
        text: 'B',
        value: 'b'
      }, {
        text: 'C',
        value: 'c'
      }],
      links: null,
      meta: null,
      loadingLoadMore: false
    };
  },
  created: function created() {
    this.fetchData();
  },
  computed: {
    showLoadButton: function showLoadButton() {
      return this.links && this.links.next;
    }
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      this.loading = true;
      this.axios.get('/api/clients').then(function (response) {
        _this.clients = response.data.data;
        _this.links = response.data.links;
        _this.meta = response.data.meta;
        _this.loading = false;
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
    addClient: function addClient(bvModalEvt) {
      var _this2 = this;

      bvModalEvt.preventDefault();
      this.form.post('/api/clients').then(function (response) {
        var newClient = response.data.data;

        _this2.$router.push({
          name: 'clients.show',
          params: {
            id: newClient.id
          }
        });
      });
    },
    addClientModal: function addClientModal() {
      this.$refs['addClient'].show();
    },
    resetAddClientModal: function resetAddClientModal() {
      this.form.reset();
    },
    loadMoreData: function loadMoreData() {
      var _this3 = this;

      this.loadingLoadMore = true;
      this.axios.get(this.links.next).then(function (response) {
        _this3.clients = _this3.clients.concat(response.data.data);
        _this3.links = response.data.links;
        _this3.meta = response.data.meta;
        _this3.loadingLoadMore = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/ClientList.vue?vue&type=template&id=8b383958&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/client/ClientList.vue?vue&type=template&id=8b383958& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "client-list" },
    [
      _vm.loading
        ? [
            _c("div", { staticClass: "row mb-4" }, [
              _c(
                "div",
                { staticClass: "col" },
                [
                  _c(
                    "content-placeholders",
                    { staticClass: "mb-4" },
                    [_c("content-placeholders-heading")],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row mb-4" },
              _vm._l(12, function(n) {
                return _c(
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
                    )
                  ],
                  1
                )
              }),
              0
            )
          ]
        : _vm.clients && _vm.clients.length > 0
        ? [
            _c("div", { staticClass: "card mb-4" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("div", { staticClass: "row" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "col d-flex align-items-center justify-content-end"
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-outline-primary btn-sm text-right",
                          on: { click: _vm.addClientModal }
                        },
                        [_vm._v(_vm._s(_vm.$t("client_list.add.client.btn")))]
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _vm._l(_vm.clients, function(client) {
                      return _c(
                        "div",
                        { staticClass: "col-lg-4 col-md-6 col-12" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "text-decoration-none",
                              attrs: {
                                to: {
                                  name: "clients.show",
                                  params: { id: client.id }
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "card mb-4" }, [
                                _c("div", { staticClass: "card-header" }, [
                                  _c("h5", { staticClass: "mb-0" }, [
                                    _c(
                                      "span",
                                      {
                                        class:
                                          "badge badge-" +
                                          _vm.badgeType(client.type) +
                                          " text-uppercase mr-2"
                                      },
                                      [_vm._v(_vm._s(client.type))]
                                    ),
                                    _vm._v(_vm._s(client.name))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "card-body" },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "font-weight-bold text-decoration-none text-black-50 mb-1"
                                      },
                                      [_vm._v("Projects:")]
                                    ),
                                    _vm._v(" "),
                                    client.active_projects &&
                                    client.active_projects.length > 0
                                      ? [
                                          _vm._l(
                                            client.active_projects,
                                            function(project) {
                                              return [
                                                _c(
                                                  "router-link",
                                                  {
                                                    staticClass:
                                                      "text-decoration-none d-block",
                                                    attrs: {
                                                      to: {
                                                        name: "projects.show",
                                                        params: {
                                                          slug: project.slug
                                                        }
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(project.slug) +
                                                        ": " +
                                                        _vm._s(project.title)
                                                    )
                                                  ]
                                                )
                                              ]
                                            }
                                          )
                                        ]
                                      : _vm._e()
                                  ],
                                  2
                                )
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    }),
                    _vm._v(" "),
                    _vm.showLoadButton
                      ? _c("div", { staticClass: "col-12 text-center" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { disabled: _vm.loadingLoadMore },
                              on: { click: _vm.loadMoreData }
                            },
                            [
                              _vm.loadingLoadMore
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
                                "\n                            " +
                                  _vm._s(_vm.$t("load_more_btn")) +
                                  "\n                        "
                              )
                            ]
                          )
                        ])
                      : _vm._e()
                  ],
                  2
                )
              ])
            ])
          ]
        : [
            _c("div", { staticClass: "card mb-4" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("div", { staticClass: "row" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "col text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary text-right",
                        on: { click: _vm.addClientModal }
                      },
                      [_vm._v(_vm._s(_vm.$t("client_list.add.client.btn")))]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("p", [_vm._v(_vm._s(_vm.$t("client.no_clients")))])
              ])
            ])
          ],
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "addClient",
          attrs: { title: _vm.$t("client.add.title") },
          on: {
            show: _vm.resetAddClientModal,
            hidden: _vm.resetAddClientModal,
            ok: _vm.addClient
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
                      attrs: { disabled: _vm.form.busy },
                      on: {
                        click: function($event) {
                          return ok()
                        }
                      }
                    },
                    [
                      _vm.form.busy
                        ? _c("span", {
                            staticClass:
                              "spinner-border spinner-border-sm mr-2",
                            attrs: { role: "status", "aria-hidden": "true" }
                          })
                        : _vm._e(),
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("modal.add.btn")) +
                          "\n            "
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
                  return _vm.form.onKeydown($event)
                }
              }
            },
            [
              _c("alert-error", { attrs: { form: _vm.form } }),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v(_vm._s(_vm.$t("client.name")) + " *")]),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.name,
                          expression: "form.name"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("name") },
                      attrs: { type: "text", name: "name" },
                      domProps: { value: _vm.form.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "name" }
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
                  _c("label", [_vm._v(_vm._s(_vm.$t("client.type")) + " *")]),
                  _vm._v(" "),
                  _c("b-form-select", {
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.form.errors.has("type") },
                    attrs: { options: _vm.clientTypeOptions },
                    model: {
                      value: _vm.form.type,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "type", $$v)
                      },
                      expression: "form.type"
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", { attrs: { form: _vm.form, field: "type" } })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("client.user.email")) + " *")
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
                          value: _vm.form.email,
                          expression: "form.email"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("email") },
                      attrs: { type: "email", name: "email" },
                      domProps: { value: _vm.form.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "email", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "email" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("client.user.first_name")) + " *")
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
                          value: _vm.form.first_name,
                          expression: "form.first_name"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "is-invalid": _vm.form.errors.has("first_name")
                      },
                      attrs: { type: "text", name: "first_name" },
                      domProps: { value: _vm.form.first_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "first_name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "first_name" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("client.user.last_name")) + " *")
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
                          value: _vm.form.last_name,
                          expression: "form.last_name"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("last_name") },
                      attrs: { type: "text", name: "last_name" },
                      domProps: { value: _vm.form.last_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "last_name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "last_name" }
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
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h1", { staticClass: "mb-0" }, [_vm._v("Clients")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [_c("h1", [_vm._v("Clients")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/client/ClientList.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/client/ClientList.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClientList_vue_vue_type_template_id_8b383958___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientList.vue?vue&type=template&id=8b383958& */ "./resources/js/pages/client/ClientList.vue?vue&type=template&id=8b383958&");
/* harmony import */ var _ClientList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientList.vue?vue&type=script&lang=js& */ "./resources/js/pages/client/ClientList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClientList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClientList_vue_vue_type_template_id_8b383958___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ClientList_vue_vue_type_template_id_8b383958___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/client/ClientList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/client/ClientList.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/client/ClientList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/ClientList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/client/ClientList.vue?vue&type=template&id=8b383958&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/client/ClientList.vue?vue&type=template&id=8b383958& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientList_vue_vue_type_template_id_8b383958___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientList.vue?vue&type=template&id=8b383958& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/ClientList.vue?vue&type=template&id=8b383958&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientList_vue_vue_type_template_id_8b383958___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientList_vue_vue_type_template_id_8b383958___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);