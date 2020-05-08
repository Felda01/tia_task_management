(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserDetail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserDetail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var object_to_formdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-to-formdata */ "./node_modules/object-to-formdata/dist/index.mjs");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserDetail",
  computed: _objectSpread({
    owner: function owner() {
      return this.user && this.user.id === this.userId;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['userId', 'isSenior'])),
  data: function data() {
    return {
      loading: false,
      user: null,
      modalSchemaEditUser: {
        form: {
          url: '/api/users/' + this.$route.params.id,
          method: 'post',
          fields: [],
          hiddenFields: [],
          config: {
            // Transform form data to FormData
            transformRequest: [function (data, headers) {
              return Object(object_to_formdata__WEBPACK_IMPORTED_MODULE_0__["objectToFormData"])(data);
            }],
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        },
        modalRef: 'editUser',
        modalTitle: this.$t('user.edit.title'),
        okBtnTitle: this.$t('modal.edit.btn')
      },
      modalSchemaEditUserType: {
        form: {
          url: '/api/users/' + this.$route.params.id + '/position',
          method: 'put',
          fields: [],
          hiddenFields: [],
          config: {}
        },
        modalRef: 'editUserType',
        modalTitle: this.$t('user.type.edit.title'),
        okBtnTitle: this.$t('modal.edit.btn')
      },
      removeUserMessageBoxOptions: {
        title: this.$t('modalWarning'),
        okVariant: 'success',
        cancelVariant: 'danger'
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
      this.axios.get('/api/users/' + this.$route.params.id).then(function (response) {
        _this.user = response.data.data;
        _this.usersTypeOptions = response.data.meta.usersTypeOptions;
        _this.loading = false;
      });
    },
    editUserModal: function editUserModal() {
      this.modalSchemaEditUser.form.fields = [{
        label: this.$t('user.email'),
        required: true,
        name: 'email',
        input: 'text',
        type: 'email',
        value: this.user.email,
        config: {}
      }, {
        label: this.$t('user.first_name'),
        required: true,
        name: 'first_name',
        input: 'text',
        type: 'text',
        value: this.user.first_name,
        config: {}
      }, {
        label: this.$t('user.last_name'),
        required: true,
        name: 'last_name',
        input: 'text',
        type: 'text',
        value: this.user.last_name,
        config: {}
      }, {
        label: this.$t('user.new.photo'),
        required: false,
        name: 'photo',
        input: 'file',
        type: 'file',
        value: null,
        config: {
          photo: this.user.photo
        }
      }];
      this.modalSchemaEditUser.form.hiddenFields = [{
        name: '_method',
        value: "PUT"
      }];
      this.$refs['editUserModal'].openModal();
    },
    editUser: function editUser(response) {
      this.user = response.data.data;
      this.$store.dispatch('getUser');
    },
    editUserTypeModal: function editUserTypeModal() {
      var options = [];
      var self = this;
      options = _.filter(this.usersTypeOptions, function (optionElement) {
        return optionElement.value !== self.user.type;
      });
      this.modalSchemaEditUserType.form.fields = [{
        label: this.$t('user.type'),
        required: true,
        name: 'type',
        input: 'select',
        type: 'select',
        value: 'senior',
        config: {
          options: options
        }
      }];
      this.$refs['editUserTypeModal'].openModal();
    },
    editUserType: function editUserType(response) {
      this.user = response.data.data;
      this.$store.dispatch('getUser');
    },
    removeUser: function removeUser() {
      var _this2 = this;

      this.$bvModal.msgBoxConfirm(this.$t('user.removeMessage'), this.removeUserMessageBoxOptions).then(function (value) {
        if (value) {
          _this2.axios["delete"]('/api/users/' + _this2.user.id).then(function (response) {
            _this2.$router.replace({
              name: 'users'
            });
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/object-to-formdata/dist/index.mjs":
/*!********************************************************!*\
  !*** ./node_modules/object-to-formdata/dist/index.mjs ***!
  \********************************************************/
/*! exports provided: objectToFormData */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToFormData", function() { return s; });
var n=function(n){return void 0===n},e=function(n){return Array.isArray(n)},t=function(n){return n&&"number"==typeof n.size&&"string"==typeof n.type&&"function"==typeof n.slice},s=function(o,i,r,f){return(i=i||{}).indices=!n(i.indices)&&i.indices,i.nullsAsUndefineds=!n(i.nullsAsUndefineds)&&i.nullsAsUndefineds,i.booleansAsIntegers=!n(i.booleansAsIntegers)&&i.booleansAsIntegers,r=r||new FormData,n(o)?r:(null===o?i.nullsAsUndefineds||r.append(f,""):"boolean"!=typeof o?e(o)?o.length&&o.forEach(function(n,e){s(n,i,r,f+"["+(i.indices?e:"")+"]")}):o instanceof Date?r.append(f,o.toISOString()):o!==Object(o)||function(n){return t(n)&&"string"==typeof n.name&&("object"==typeof n.lastModifiedDate||"number"==typeof n.lastModified)}(o)||t(o)?r.append(f,o):Object.keys(o).forEach(function(n){var t=o[n];if(e(t))for(;n.length>2&&n.lastIndexOf("[]")===n.length-2;)n=n.substring(0,n.length-2);s(t,i,r,f?f+"["+n+"]":n)}):r.append(f,i.booleansAsIntegers?o?1:0:o),r)};
//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserDetail.vue?vue&type=template&id=2bd53287&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserDetail.vue?vue&type=template&id=2bd53287& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "user-detail" }, [
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
                      _c("content-placeholders-text", { attrs: { lines: 2 } })
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
          : _vm.user
          ? [
              _c(
                "div",
                { staticClass: "col-12 mb-4 d-flex justify-content-between" },
                [
                  _c("h1", { staticClass: "d-flex align-items-center" }, [
                    _c("img", {
                      staticClass: "avatar avatar-md mr-2",
                      attrs: { src: _vm.user.photo, alt: _vm.user.fullName }
                    }),
                    _vm._v(_vm._s(_vm.user.fullName))
                  ]),
                  _vm._v(" "),
                  _vm.owner
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-primary",
                          on: { click: _vm.editUserModal }
                        },
                        [_vm._v(_vm._s(_vm.$t("user.edit.btn")))]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.owner && _vm.isSenior
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-danger",
                          on: { click: _vm.removeUser }
                        },
                        [_vm._v(_vm._s(_vm.$t("user.remove.btn")))]
                      )
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4 col-12" }, [
                _c("div", { staticClass: "card mb-4" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "card-header d-flex justify-content-between align-items-center"
                    },
                    [
                      _c("h5", { staticClass: "mb-0" }, [
                        _vm._v(_vm._s(_vm.$t("user.show.detail")))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-4 col-md-5" }, [
                        _vm._v(_vm._s(_vm.$t("user.full_name")) + ":")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-8 col-md-7" }, [
                        _vm._v(_vm._s(_vm.user.fullName))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-4 col-md-5" }, [
                        _vm._v(_vm._s(_vm.$t("user.email")) + ":")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-8 col-md-7" }, [
                        _vm._v(_vm._s(_vm.user.email))
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card mb-4" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "card-header d-flex justify-content-between align-items-center"
                    },
                    [
                      _c("h5", { staticClass: "mb-0" }, [
                        _vm._v(_vm._s(_vm.$t("user.show.position")))
                      ]),
                      _vm._v(" "),
                      _vm.user.type === "junior" && _vm.isSenior
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-primary",
                              on: { click: _vm.editUserTypeModal }
                            },
                            [_vm._v(_vm._s(_vm.$t("user.type.edit.btn")))]
                          )
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex justify-content-between" },
                      [
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm._f("capitalize")(_vm.user.type)))
                        ])
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-8 col-12" })
            ]
          : _vm._e(),
        _vm._v(" "),
        _c("custom-modal", {
          ref: "editUserTypeModal",
          attrs: { modalSchema: _vm.modalSchemaEditUserType },
          on: { ok: _vm.editUserType }
        }),
        _vm._v(" "),
        _c("custom-modal", {
          ref: "editUserModal",
          attrs: { modalSchema: _vm.modalSchemaEditUser },
          on: { ok: _vm.editUser }
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/user/UserDetail.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/user/UserDetail.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserDetail_vue_vue_type_template_id_2bd53287___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDetail.vue?vue&type=template&id=2bd53287& */ "./resources/js/pages/user/UserDetail.vue?vue&type=template&id=2bd53287&");
/* harmony import */ var _UserDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDetail.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/UserDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserDetail_vue_vue_type_template_id_2bd53287___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserDetail_vue_vue_type_template_id_2bd53287___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/UserDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/UserDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/user/UserDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/UserDetail.vue?vue&type=template&id=2bd53287&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/user/UserDetail.vue?vue&type=template&id=2bd53287& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_template_id_2bd53287___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserDetail.vue?vue&type=template&id=2bd53287& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserDetail.vue?vue&type=template&id=2bd53287&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_template_id_2bd53287___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_template_id_2bd53287___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);