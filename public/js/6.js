(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/ClientDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/client/ClientDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['isSenior'])),
  data: function data() {
    return {
      client: null,
      loading: false,
      errorCode: 0,
      clientTypeOptions: [],
      modalSchemaEditClient: {
        form: {
          url: '/api/clients/' + this.$route.params.id,
          method: 'put',
          fields: [],
          hiddenFields: [],
          config: {}
        },
        modalRef: 'editClient',
        modalTitle: this.$t('client.edit.title'),
        okBtnTitle: this.$t('modal.edit.btn')
      },
      modalSchemaEditClientUser: {
        form: {
          url: '',
          method: 'put',
          fields: [],
          hiddenFields: [],
          config: {}
        },
        modalRef: 'editClientUser',
        modalTitle: this.$t('client.edit.user.title'),
        okBtnTitle: this.$t('modal.edit.btn')
      },
      modalSchemaAddProject: {
        form: {
          url: '/api/projects',
          method: 'post',
          fields: [{
            label: this.$t('project.title'),
            required: true,
            name: 'title',
            input: 'text',
            type: 'text',
            value: '',
            config: {}
          }, {
            label: this.$t('project.slug'),
            required: true,
            name: 'slug',
            input: 'text',
            type: 'text',
            value: '',
            config: {}
          }, {
            label: this.$t('project.start_date'),
            required: true,
            name: 'start_date',
            input: 'date',
            type: 'date',
            value: '',
            config: {}
          }, {
            label: this.$t('project.end_date'),
            required: false,
            name: 'end_date',
            input: 'date',
            type: 'date',
            value: '',
            config: {}
          }],
          hiddenFields: [],
          config: {}
        },
        modalRef: 'addProject',
        modalTitle: this.$t('client.project.add.title.modal'),
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
      this.axios.get('/api/clients/' + this.$route.params.id).then(function (response) {
        _this.client = response.data.data;
        _this.clientTypeOptions = response.data.meta.clientTypeOptions;
        _this.loading = false;
      })["catch"](function (error) {
        _this.errorCode = error.response.status;
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
    editClientModal: function editClientModal() {
      this.modalSchemaEditClient.form.fields = [{
        label: this.$t('client.name'),
        required: true,
        name: 'name',
        input: 'text',
        type: 'text',
        value: this.client.name,
        config: {}
      }, {
        label: this.$t('client.type'),
        required: true,
        name: 'type',
        input: 'select',
        type: 'select',
        value: this.client.type,
        config: {
          options: this.clientTypeOptions
        }
      }];
      this.$refs['editClientModal'].openModal();
    },
    editClient: function editClient(response) {
      this.client = response.data.data;
    },
    editClientUserModal: function editClientUserModal() {
      this.modalSchemaEditClientUser.form.url = '/api/users/' + this.client.user.id;
      this.modalSchemaEditClientUser.form.fields = [{
        label: this.$t('user.email'),
        required: true,
        name: 'email',
        input: 'text',
        type: 'email',
        value: this.client.user.email,
        config: {}
      }, {
        label: this.$t('user.first_name'),
        required: true,
        name: 'first_name',
        input: 'text',
        type: 'text',
        value: this.client.user.first_name,
        config: {}
      }, {
        label: this.$t('user.last_name'),
        required: true,
        name: 'last_name',
        input: 'text',
        type: 'text',
        value: this.client.user.last_name,
        config: {}
      }];
      this.$refs['editClientUserModal'].openModal();
    },
    editClientUser: function editClientUser(response) {
      this.client.user = response.data.data;
    },
    addProjectModal: function addProjectModal() {
      this.modalSchemaAddProject.form.hiddenFields = [{
        name: 'client_id',
        value: this.client.id
      }];
      this.$refs['addProjectModal'].openModal();
    },
    addProject: function addProject(response) {
      var newProject = response.data.data;
      this.$router.push({
        name: 'projects.show',
        params: {
          slug: newProject.slug
        }
      });
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
                { staticClass: "col-12" },
                [
                  _c(
                    "content-placeholders",
                    { staticClass: "mb-4" },
                    [
                      _c("content-placeholders-heading", {
                        attrs: { img: true }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-4 col-12" },
                [
                  _c(
                    "content-placeholders",
                    { staticClass: "mb-4" },
                    [
                      _c("content-placeholders-heading"),
                      _vm._v(" "),
                      _c("content-placeholders-text", { attrs: { lines: 4 } })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-8 col-12" },
                [
                  _c(
                    "content-placeholders",
                    { staticClass: "mb-4" },
                    [
                      _c("content-placeholders-heading"),
                      _vm._v(" "),
                      _c("content-placeholders-text", { attrs: { lines: 8 } })
                    ],
                    1
                  )
                ],
                1
              )
            ]
          : _vm.client
          ? [
              _c(
                "div",
                { staticClass: "col-12 mb-4 d-flex justify-content-between" },
                [
                  _c("h1", [
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
                  ]),
                  _vm._v(" "),
                  _vm.isSenior
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-primary",
                          on: { click: _vm.editClientModal }
                        },
                        [_vm._v(_vm._s(_vm.$t("client.edit.btn")))]
                      )
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4 col-12 mb-4" }, [
                _c("div", { staticClass: "card" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "card-header d-flex justify-content-between align-items-center"
                    },
                    [
                      _c("h5", { staticClass: "mb-0" }, [
                        _vm._v(_vm._s(_vm.$t("client.show.contact")))
                      ]),
                      _vm._v(" "),
                      _vm.client.user && _vm.isSenior
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-primary btn-sm",
                              on: { click: _vm.editClientUserModal }
                            },
                            [_vm._v(_vm._s(_vm.$t("client.edit.user.btn")))]
                          )
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _vm.client.user
                        ? [
                            _c("div", { staticClass: "d-flex" }, [
                              _vm.client.user.photo
                                ? _c("div", { staticClass: "pr-2" }, [
                                    _c("img", {
                                      staticClass: "avatar avatar-md",
                                      attrs: {
                                        src: _vm.client.user.photo,
                                        alt: _vm.client.user.fullName
                                      }
                                    })
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", [
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
                        : _vm._e()
                    ],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8 col-12 mb-4" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col d-flex align-items-center" },
                        [
                          _c("h5", { staticClass: "mb-0" }, [
                            _vm._v(_vm._s(_vm.$t("client.show.projects")))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col text-right" }, [
                        _vm.isSenior
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-outline-primary btn-sm",
                                on: { click: _vm.addProjectModal }
                              },
                              [_vm._v(_vm._s(_vm.$t("client.project.add.btn")))]
                            )
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _vm.client.projects && _vm.client.projects.length > 0
                        ? _vm._l(_vm.client.projects, function(project, index) {
                            return _c(
                              "router-link",
                              {
                                key: project.id,
                                staticClass: "text-decoration-none d-block",
                                class: {
                                  "mb-2": index < _vm.client.projects.length - 1
                                },
                                attrs: {
                                  to: {
                                    name: "projects.show",
                                    params: { slug: project.slug }
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
                          })
                        : [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.$t("client.project.no_projects")) +
                                "\n                        "
                            )
                          ]
                    ],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _c("custom-modal", {
                ref: "editClientModal",
                attrs: { modalSchema: _vm.modalSchemaEditClient },
                on: { ok: _vm.editClient }
              }),
              _vm._v(" "),
              _c("custom-modal", {
                ref: "editClientUserModal",
                attrs: { modalSchema: _vm.modalSchemaEditClientUser },
                on: { ok: _vm.editClientUser }
              }),
              _vm._v(" "),
              _c("custom-modal", {
                ref: "addProjectModal",
                attrs: { modalSchema: _vm.modalSchemaAddProject },
                on: { ok: _vm.addProject }
              })
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