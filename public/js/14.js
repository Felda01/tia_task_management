(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserList",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['role'])),
  data: function data() {
    return {
      loading: false,
      users: [],
      errorCode: 0,
      modalSchemaAddUser: {
        form: {
          url: '/api/users',
          method: 'post',
          fields: [],
          hiddenFields: [],
          config: {}
        },
        modalRef: 'addUser',
        modalTitle: this.$t('user.add.title'),
        okBtnTitle: this.$t('modal.register.btn')
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
      this.axios.get('/api/users').then(function (response) {
        _this.users = response.data.data;
        _this.usersTypeOptions = response.data.meta.usersTypeOptions;
        _this.loading = false;
      })["catch"](function (error) {
        _this.errorCode = error.response.status;
        _this.loading = false;
      });
    },
    addUserModal: function addUserModal() {
      this.modalSchemaAddUser.form.fields = [{
        label: this.$t('user.email'),
        required: true,
        name: 'email',
        input: 'text',
        type: 'email',
        value: '',
        config: {}
      }, {
        label: this.$t('user.first_name'),
        required: true,
        name: 'first_name',
        input: 'text',
        type: 'text',
        value: '',
        config: {}
      }, {
        label: this.$t('user.last_name'),
        required: true,
        name: 'last_name',
        input: 'text',
        type: 'text',
        value: '',
        config: {}
      }, {
        label: this.$t('user.type'),
        required: true,
        name: 'type',
        input: 'select',
        type: 'select',
        value: '',
        config: {
          options: this.usersTypeOptions,
          disabledOption: true
        }
      }];
      this.$refs['addUserModal'].openModal();
    },
    addUser: function addUser(response) {
      this.users.push(response.data.data);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserList.vue?vue&type=template&id=ec6b6858&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserList.vue?vue&type=template&id=ec6b6858& ***!
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
  return _c("div", { staticClass: "user-list" }, [
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
                        _c("content-placeholders-text", { attrs: { lines: 3 } })
                      ],
                      1
                    )
                  ],
                  1
                )
              })
            ]
          : _vm.users
          ? [
              _c(
                "div",
                { staticClass: "col-12 mb-4 d-flex justify-content-between" },
                [
                  _c("h1", [_vm._v(_vm._s(_vm.$t("user_list.users")))]),
                  _vm._v(" "),
                  _vm.role === "senior"
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-primary",
                          on: { click: _vm.addUserModal }
                        },
                        [_vm._v(_vm._s(_vm.$t("user_list.add.user.btn")))]
                      )
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _vm.users.length > 0
                ? _vm._l(_vm.users, function(user) {
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
                                name: "users.show",
                                params: { id: user.id }
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "card h-100" }, [
                              _c("div", { staticClass: "card-header" }, [
                                _c("h5", { staticClass: "mb-0" }, [
                                  _c("img", {
                                    staticClass: "avatar avatar-sm mr-2",
                                    attrs: {
                                      src: user.photo,
                                      alt: user.fullName
                                    }
                                  }),
                                  _vm._v(_vm._s(user.fullName))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-body" }, [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm._f("capitalize")(user.type)) +
                                    "\n                            "
                                )
                              ])
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("custom-modal", {
                ref: "addUserModal",
                attrs: { modalSchema: _vm.modalSchemaAddUser },
                on: { ok: _vm.addUser }
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

/***/ "./resources/js/pages/user/UserList.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/user/UserList.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserList_vue_vue_type_template_id_ec6b6858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList.vue?vue&type=template&id=ec6b6858& */ "./resources/js/pages/user/UserList.vue?vue&type=template&id=ec6b6858&");
/* harmony import */ var _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserList_vue_vue_type_template_id_ec6b6858___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserList_vue_vue_type_template_id_ec6b6858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/UserList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/UserList.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/user/UserList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/UserList.vue?vue&type=template&id=ec6b6858&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/user/UserList.vue?vue&type=template&id=ec6b6858& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_ec6b6858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=template&id=ec6b6858& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserList.vue?vue&type=template&id=ec6b6858&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_ec6b6858___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_ec6b6858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);