(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/project/RoadMap.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/project/RoadMap.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "RoadMap",
  computed: _objectSpread({
    sortedVersions: function sortedVersions() {
      if (this.project && this.project.versions) {
        return _.orderBy(this.project.versions, 'end_date', 'asc');
      }
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['isSenior', 'userId'])),
  data: function data() {
    return {
      project: null,
      loading: false,
      errorCode: 0,
      modalSchemaAddVersion: {
        form: {
          url: '/api/versions',
          method: 'post',
          fields: [{
            label: this.$t('version.title'),
            required: true,
            name: 'title',
            input: 'text',
            type: 'text',
            value: '',
            config: {}
          }, {
            label: this.$t('version.end_date'),
            required: true,
            name: 'end_date',
            input: 'date',
            type: 'date',
            value: '',
            config: {}
          }],
          hiddenFields: [],
          config: {}
        },
        modalRef: 'addVersion',
        modalTitle: this.$t('project.version.add.title.modal'),
        okBtnTitle: this.$t('modal.add.btn')
      },
      modalSchemaEditVersion: {
        form: {
          url: '',
          method: 'put',
          fields: [],
          hiddenFields: [],
          config: {}
        },
        modalRef: 'editVersion',
        modalTitle: this.$t('project.version.edit.title.modal'),
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
      this.axios.get('/api/projects/' + this.$route.params.slug + "/roadmap").then(function (response) {
        _this.project = response.data.data;
        _this.loading = false;
      })["catch"](function (error) {
        _this.errorCode = error.response.status;
        _this.loading = false;
      });
    },
    sortedArray: function sortedArray(array, field) {
      return array.sort(function (a, b) {
        return a[field] - b[field];
      });
    },
    addVersionModal: function addVersionModal() {
      this.modalSchemaAddVersion.form.hiddenFields = [{
        name: 'project_id',
        value: this.project.id
      }];
      this.$refs['addVersionModal'].openModal();
    },
    addVersion: function addVersion(response) {
      if (!this.project.versions) {
        this.project.versions = [];
      }

      this.project.versions.push(response.data.data);
    },
    editVersionModal: function editVersionModal(version) {
      this.modalSchemaEditVersion.form.url = '/api/versions/' + version.id;
      this.modalSchemaEditVersion.form.fields = [{
        label: this.$t('version.title'),
        required: true,
        name: 'title',
        input: 'text',
        type: 'text',
        value: version.title,
        config: {}
      }, {
        label: this.$t('version.end_date'),
        required: true,
        name: 'end_date',
        input: 'date',
        type: 'date',
        value: version.end_date,
        config: {}
      }];
      this.$refs['editVersionModal'].openModal();
    },
    editVersion: function editVersion(response) {
      var version = response.data.data;
      var index = this.project.versions.findIndex(function (item) {
        return item.id === version.uid;
      });
      this.project.versions.splice(index, 1, version);
    },
    deleteVersionModal: function deleteVersionModal(version) {//
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/project/RoadMap.vue?vue&type=template&id=f0b260a6&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/project/RoadMap.vue?vue&type=template&id=f0b260a6& ***!
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
  return _c("div", { staticClass: "project-road-map" }, [
    _c(
      "div",
      { staticClass: "row" },
      [
        _vm.loading
          ? [
              _c(
                "div",
                { staticClass: "col-12" },
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
                { staticClass: "col-12 mb-4" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-outline-primary btn-sm",
                      attrs: {
                        to: {
                          name: "projects.show",
                          params: { slug: _vm.project.slug }
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("project.overview.back_to_project")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
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
                        _vm.isSenior
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-outline-primary btn-sm",
                                on: { click: _vm.addVersionModal }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$t("project.version.add.btn"))
                                )
                              ]
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
                      _vm.project.versions && _vm.project.versions.length > 0
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
                                        _vm.isSenior
                                          ? _c(
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
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.isSenior
                                          ? _c(
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
                                          : _vm._e()
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
                                _vm._s(_vm.$t("project.version.no_versions")) +
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
                ref: "addVersionModal",
                attrs: { modalSchema: _vm.modalSchemaAddVersion },
                on: { ok: _vm.addVersion }
              }),
              _vm._v(" "),
              _c("custom-modal", {
                ref: "editVersionModal",
                attrs: { modalSchema: _vm.modalSchemaEditVersion },
                on: { ok: _vm.editVersion }
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

/***/ "./resources/js/pages/project/RoadMap.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/project/RoadMap.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoadMap_vue_vue_type_template_id_f0b260a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoadMap.vue?vue&type=template&id=f0b260a6& */ "./resources/js/pages/project/RoadMap.vue?vue&type=template&id=f0b260a6&");
/* harmony import */ var _RoadMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoadMap.vue?vue&type=script&lang=js& */ "./resources/js/pages/project/RoadMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoadMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoadMap_vue_vue_type_template_id_f0b260a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoadMap_vue_vue_type_template_id_f0b260a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/project/RoadMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/project/RoadMap.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/project/RoadMap.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoadMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoadMap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/project/RoadMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoadMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/project/RoadMap.vue?vue&type=template&id=f0b260a6&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/project/RoadMap.vue?vue&type=template&id=f0b260a6& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoadMap_vue_vue_type_template_id_f0b260a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoadMap.vue?vue&type=template&id=f0b260a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/project/RoadMap.vue?vue&type=template&id=f0b260a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoadMap_vue_vue_type_template_id_f0b260a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoadMap_vue_vue_type_template_id_f0b260a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);