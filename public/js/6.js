(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/ClientList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/client/ClientList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ClientList",
  data: function data() {
    return {
      loading: false,
      clients: null,
      clientTypeOptions: [],
      modalSchemaAddClient: {
        form: {
          url: '/api/clients',
          method: 'post',
          fields: [],
          hiddenFields: [],
          config: {}
        },
        modalRef: 'addClient',
        modalTitle: this.$t('client.add.title'),
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
      this.axios.get('/api/clients').then(function (response) {
        _this.clients = response.data.data;
        _this.links = response.data.links;
        _this.meta = response.data.meta;
        _this.clientTypeOptions = response.data.meta.clientTypeOptions;
        _this.loading = false;
      });
    },
    badgeType: function badgeType(type) {
      switch (type) {
        case 'A':
          return 'danger';

        case 'B':
          return 'primary';

        default:
          return 'success';
      }
    },
    addClient: function addClient(response) {
      var newClient = response.data.data;
      this.$router.push({
        name: 'clients.show',
        params: {
          id: newClient.id
        }
      });
    },
    addClientModal: function addClientModal() {
      this.modalSchemaAddClient.form.fields = [{
        label: this.$t('client.name'),
        required: true,
        name: 'name',
        input: 'text',
        type: 'text',
        value: '',
        config: {}
      }, {
        label: this.$t('client.type'),
        required: true,
        name: 'type',
        input: 'select',
        type: 'select',
        value: 'B',
        config: {
          options: this.clientTypeOptions
        }
      }, {
        label: this.$t('client.user.email'),
        required: true,
        name: 'email',
        input: 'text',
        type: 'email',
        value: '',
        config: {}
      }, {
        label: this.$t('client.user.first_name'),
        required: true,
        name: 'first_name',
        input: 'text',
        type: 'text',
        value: '',
        config: {}
      }, {
        label: this.$t('client.user.last_name'),
        required: true,
        name: 'last_name',
        input: 'text',
        type: 'text',
        value: '',
        config: {}
      }];
      this.$refs['addClientModal'].openModal();
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
                    { staticClass: "col-lg-4 col-md-6 col-12" },
                    [
                      _c(
                        "content-placeholders",
                        { staticClass: "mb-4" },
                        [
                          _c("content-placeholders-heading"),
                          _vm._v(" "),
                          _c("content-placeholders-text", {
                            attrs: { lines: 3 }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                })
              ]
            : _vm.clients
            ? [
                _c(
                  "div",
                  { staticClass: "col-12 mb-4 d-flex justify-content-between" },
                  [
                    _c("h1", [_vm._v(_vm._s(_vm.$t("client_list.clients")))]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-primary",
                        on: { click: _vm.addClientModal }
                      },
                      [_vm._v(_vm._s(_vm.$t("client_list.add.client.btn")))]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm.clients.length > 0
                  ? _vm._l(_vm.clients, function(client) {
                      return _c(
                        "div",
                        { staticClass: "col-lg-4 col-md-6 col-12 mb-4" },
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
                              _c("div", { staticClass: "card h-100" }, [
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
                    })
                  : [
                      _c("div", { staticClass: "col-12" }, [
                        _c("p", [_vm._v(_vm._s(_vm.$t("client.no_clients")))])
                      ])
                    ]
              ]
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c("custom-modal", {
        ref: "addClientModal",
        attrs: { modalSchema: _vm.modalSchemaAddClient },
        on: { ok: _vm.addClient }
      })
    ],
    1
  )
}
var staticRenderFns = []
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