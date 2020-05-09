(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/project/ProjectDetail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/project/ProjectDetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _objectSpread({
    sortedVersions: function sortedVersions() {
      if (this.project && this.project.versions) {
        return _.orderBy(this.project.versions, 'end_date', 'asc');
      }
    },
    filteredTasks: function filteredTasks() {
      if (this.project.tasks && this.project.tasks.length > 0) {
        return this.project.tasks;
      }

      return [];
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['isSenior'])),
  data: function data() {
    return {
      project: null,
      loading: false,
      errorCode: 0,
      projectStatusOptions: [],
      taskStatusOptions: [],
      taskPriorityOptions: [],
      allUsers: [],
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
      },
      modalSchemaAddUserToProject: {
        form: {
          url: '/api/projects/' + this.$route.params.slug + '/assign-user',
          method: 'put',
          fields: [],
          hiddenFields: [],
          config: {}
        },
        modalRef: 'addUserToProject',
        modalTitle: this.$t('project.add.user.title.modal'),
        okBtnTitle: this.$t('modal.assign.btn')
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
        _this.allUsers = response.data.meta.allUsers.data;
        _this.loading = false;
      })["catch"](function (error) {
        _this.errorCode = error.response.status;
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
        config: {
          max: this.project.min_start_date
        }
      }, {
        label: this.$t('project.end_date'),
        required: false,
        name: 'end_date',
        input: 'date',
        type: 'date',
        value: this.project.end_date,
        config: {
          min: this.project.max_end_date
        }
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
    },
    availableUsersForProject: function availableUsersForProject() {
      var result = [];

      var availableUsers = _.differenceWith(this.allUsers, this.project.users, _.isEqual);

      for (var i = 0; i < availableUsers.length; i++) {
        result.push({
          'text': availableUsers[i].fullName,
          'value': availableUsers[i].id
        });
      }

      return result;
    },
    addUserToProjectModal: function addUserToProjectModal() {
      this.modalSchemaAddUserToProject.form.fields = [{
        label: this.$t('project.user'),
        required: false,
        name: 'user_id',
        input: 'select',
        type: 'select',
        value: null,
        config: {
          options: this.availableUsersForProject(),
          disabledOption: true
        }
      }];
      this.$refs['addUserToProjectModal'].openModal();
    },
    addUserToProject: function addUserToProject(response) {
      this.task.users = response.data.data;
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
              ]),
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
              }),
              _vm._v(" "),
              _c("custom-modal", {
                ref: "addUserToProjectModal",
                attrs: { modalSchema: _vm.modalSchemaAddUserToProject },
                on: { ok: _vm.addUserToProject }
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