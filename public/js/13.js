(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/task/TaskDetail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/task/TaskDetail.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "TaskDetail",
  computed: _objectSpread({
    sortedVersions: function sortedVersions() {
      if (this.task && this.task.project.versions) {
        return _.orderBy(this.task.project.versions, 'end_date', 'asc');
      }

      return [];
    },
    sortedComments: function sortedComments() {
      if (this.task && this.task.comments) {
        return _.orderBy(this.task.comments, 'created_at', 'asc');
      }

      return [];
    },
    sumTimeTracking: function sumTimeTracking() {
      if (this.task && this.task.timeTracking) {
        return _.sumBy(this.task.timeTracking, function (item) {
          return Number(item.time);
        });
      }

      return 0;
    },
    groupedTimeTrackingByDate: function groupedTimeTrackingByDate() {
      if (this.task && this.task.timeTracking) {
        return _(this.task.timeTracking).groupBy(function (x) {
          return x.date;
        }).map(function (value, key) {
          return {
            date: key,
            timeTracking: value
          };
        }).value();
      }

      return [];
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['isSenior', 'isClient', 'userId'])),
  data: function data() {
    return {
      task: null,
      loading: false,
      modalSchemaEditTask: {
        form: {
          url: '/api/tasks/' + this.$route.params.id,
          method: 'put',
          fields: [],
          hiddenFields: [],
          config: {}
        },
        modalRef: 'editTask',
        modalTitle: this.$t('task.edit.title.modal'),
        okBtnTitle: this.$t('modal.edit.btn')
      },
      taskPriorityOptions: [],
      taskStatusOptions: [],
      commentTypeOptions: [],
      modalSchemaAddComment: {
        form: {
          url: '/api/comments',
          method: 'post',
          fields: [],
          hiddenFields: [],
          config: {}
        },
        modalRef: 'addComment',
        modalTitle: this.$t('comment.add.title.modal'),
        okBtnTitle: this.$t('modal.add.btn')
      },
      modalSchemaAddTimeTracking: {
        form: {
          url: '/api/time-tracking',
          method: 'post',
          fields: [],
          hiddenFields: [],
          config: {}
        },
        modalRef: 'addTimeTracking',
        modalTitle: this.$t('time_tracking.add.title.modal'),
        okBtnTitle: this.$t('modal.add.btn')
      },
      removeTimeTrackingMessageBoxOptions: {
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
      this.axios.get('/api/tasks/' + this.$route.params.id).then(function (response) {
        _this.task = response.data.data;
        _this.taskStatusOptions = response.data.meta.taskStatusOptions;
        _this.taskPriorityOptions = response.data.meta.taskPriorityOptions;
        _this.commentTypeOptions = response.data.meta.commentTypeOptions;
        _this.loading = false;
      });
    },
    editTask: function editTask(response) {
      this.task = response.data.data;
    },
    editTaskModal: function editTaskModal() {
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

      var teamOptions = [{
        'text': this.$t('task.assignee.no_assignee'),
        'value': null
      }];

      for (var _i = 0; _i < this.task.project.users.length; _i++) {
        teamOptions.push({
          'text': this.task.project.users[_i].fullName,
          'value': this.task.project.users[_i].id
        });
      }

      this.modalSchemaEditTask.form.fields = [{
        label: this.$t('task.assignee'),
        required: true,
        name: 'assignee_id',
        input: 'select',
        type: 'select',
        value: this.task.assignee ? this.task.assignee.id : null,
        config: {
          options: teamOptions
        }
      }, {
        label: this.$t('task.title'),
        required: true,
        name: 'title',
        input: 'text',
        type: 'text',
        value: this.task.title,
        config: {}
      }, {
        label: this.$t('task.description'),
        required: true,
        name: 'description',
        input: 'textarea',
        type: 'textarea',
        value: this.task.description,
        config: {}
      }, {
        label: this.$t('task.priority'),
        required: true,
        name: 'priority',
        input: 'select',
        type: 'select',
        value: this.task.priority,
        config: {
          options: this.taskPriorityOptions
        }
      }, {
        label: this.$t('task.status'),
        required: true,
        name: 'status',
        input: 'select',
        type: 'select',
        value: this.task.status,
        config: {
          options: this.taskStatusOptions
        }
      }, {
        label: this.$t('task.start_date'),
        required: true,
        name: 'start_date',
        input: 'date',
        type: 'date',
        value: this.task.start_date,
        config: {
          min: this.task.project.start_date,
          max: this.task.project.end_date
        }
      }, {
        label: this.$t('task.end_date'),
        required: true,
        name: 'end_date',
        input: 'date',
        type: 'date',
        value: this.task.end_date,
        config: {
          min: this.task.project.start_date,
          max: this.task.project.end_date
        }
      }, {
        label: this.$t('task.version'),
        required: true,
        name: 'version_id',
        input: 'select',
        type: 'select',
        value: this.task.version ? this.task.version.id : null,
        config: {
          options: versionOptions
        }
      }];
      this.modalSchemaEditTask.form.hiddenFields = [{
        name: 'project_id',
        value: this.task.project.id
      }];
      this.$refs['editTaskModal'].openModal();
    },
    addCommentModal: function addCommentModal() {
      var selectFields = [];

      if (this.isClient) {
        this.modalSchemaAddComment.form.hiddenFields = [{
          name: 'task_id',
          value: this.task.id
        }, {
          name: 'type',
          value: 'all'
        }];
        selectFields = [{
          label: this.$t('comment.message'),
          required: true,
          name: 'message',
          input: 'textarea',
          type: 'textarea',
          value: '',
          config: {}
        }];
      } else {
        this.modalSchemaAddComment.form.hiddenFields = [{
          name: 'task_id',
          value: this.task.id
        }];
        selectFields = [{
          label: this.$t('comment.message'),
          required: true,
          name: 'message',
          input: 'textarea',
          type: 'textarea',
          value: '',
          config: {}
        }, {
          label: this.$t('comment.type'),
          required: true,
          name: 'type',
          input: 'select',
          type: 'select',
          value: 'all',
          config: {
            options: this.commentTypeOptions,
            disabledOption: false
          }
        }];
      }

      this.modalSchemaAddComment.form.fields = selectFields;
      this.$refs['addCommentModal'].openModal();
    },
    addComment: function addComment(response) {
      this.task.comments.push(response.data.data);
    },
    addTimeTrackingModal: function addTimeTrackingModal() {
      this.modalSchemaAddTimeTracking.form.fields = [{
        label: this.$t('time_tracking.date'),
        required: true,
        name: 'date',
        input: 'date',
        type: 'date',
        value: '',
        config: {
          min: this.task.start_date,
          max: this.task.end_date
        }
      }, {
        label: this.$t('time_tracking.time'),
        required: true,
        name: 'time',
        input: 'text',
        type: 'text',
        value: '',
        config: {}
      }];
      this.modalSchemaAddTimeTracking.form.hiddenFields = [{
        name: 'task_id',
        value: this.task.id
      }];
      this.$refs['addTimeTrackingModal'].openModal();
    },
    addTimeTracking: function addTimeTracking(response) {
      this.task.timeTracking.push(response.data.data);
    },
    removeTimeTracking: function removeTimeTracking(time) {
      var _this2 = this;

      this.$bvModal.msgBoxConfirm(this.$t('time_tracking.removeMessage'), this.removeTimeTrackingMessageBoxOptions).then(function (value) {
        if (value) {
          _this2.axios["delete"]('/api/time-tracking/' + time.id).then(function (response) {
            _this2.task.timeTracking = _.filter(_this2.task.timeTracking, function (timeElement) {
              return timeElement.id !== time.id;
            });
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/task/TaskDetail.vue?vue&type=template&id=7c97e6c7&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/task/TaskDetail.vue?vue&type=template&id=7c97e6c7& ***!
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
  return _c("div", { staticClass: "task-detail" }, [
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
                { staticClass: "col-md-8 col-12" },
                [
                  _vm._l(3, function(n) {
                    return _c(
                      "content-placeholders",
                      { key: "des-" + n, staticClass: "mb-4" },
                      [
                        _c("content-placeholders-heading"),
                        _vm._v(" "),
                        _c("content-placeholders-text", { attrs: { lines: 4 } })
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _vm._l(3, function(n) {
                    return _c(
                      "content-placeholders",
                      { key: "com-" + n, staticClass: "mb-4" },
                      [
                        _c("content-placeholders-heading"),
                        _vm._v(" "),
                        _c("content-placeholders-text", { attrs: { lines: 5 } })
                      ],
                      1
                    )
                  })
                ],
                2
              )
            ]
          : _vm.task
          ? [
              _c(
                "div",
                { staticClass: "col-12 mb-4 d-flex justify-content-between" },
                [
                  _c("h1", [_vm._v(_vm._s(_vm.task.title))]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-primary",
                      on: { click: _vm.editTaskModal }
                    },
                    [_vm._v(_vm._s(_vm.$t("task.edit.btn")))]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "card mb-4" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(_vm._s(_vm.$t("task.show.details")))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _vm._v(
                          _vm._s(_vm.$t("task.show.details.project")) + ":"
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-8" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "text-decoration-none",
                              attrs: {
                                to: {
                                  name: "projects.show",
                                  params: { slug: _vm.task.project.slug }
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.task.project.slug))]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _vm.task.version
                      ? _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-4" }, [
                            _vm._v(
                              _vm._s(_vm.$t("task.show.details.version")) + ":"
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-8" }, [
                            _vm._v(_vm._s(_vm.task.version.title))
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _vm._v(_vm._s(_vm.$t("task.show.details.status")) + ":")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _vm._v(_vm._s(_vm._f("capitalize")(_vm.task.status)))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _vm._v(
                          _vm._s(_vm.$t("task.show.details.priority")) + ":"
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _vm._v(_vm._s(_vm._f("capitalize")(_vm.task.priority)))
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card mb-4" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(_vm._s(_vm.$t("task.show.people")))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "row mb-2" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _vm._v(
                          _vm._s(_vm.$t("task.show.people.assignee")) + ":"
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _vm.task.assignee
                          ? _c("div", { staticClass: "d-flex" }, [
                              _c("div", { staticClass: "pr-2 d-flex" }, [
                                _c("img", {
                                  staticClass: "avatar avatar-sm",
                                  attrs: {
                                    src: _vm.task.assignee.photo,
                                    alt: _vm.task.assignee.fullName
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "d-flex align-items-center" },
                                [
                                  _c("p", { staticClass: "mb-0" }, [
                                    _vm._v(_vm._s(_vm.task.assignee.fullName))
                                  ])
                                ]
                              )
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _vm._v(
                          _vm._s(_vm.$t("task.show.people.reporter")) + ":"
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("div", { staticClass: "d-flex" }, [
                          _c("div", { staticClass: "pr-2 d-flex" }, [
                            _c("img", {
                              staticClass: "avatar avatar-sm",
                              attrs: {
                                src: _vm.task.reporter.photo,
                                alt: _vm.task.reporter.fullName
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "d-flex align-items-center" },
                            [
                              _c("p", { staticClass: "mb-0" }, [
                                _vm._v(_vm._s(_vm.task.reporter.fullName))
                              ])
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card mb-4" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(_vm._s(_vm.$t("task.show.dates")))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _vm._v(
                          _vm._s(_vm.$t("task.show.dates.start_date")) + ":"
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("date")(
                              new Date(_vm.task.start_date),
                              "DD.MM.YYYY"
                            )
                          )
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _vm._v(_vm._s(_vm.$t("task.show.dates.end_date")) + ":")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("date")(
                              new Date(_vm.task.end_date),
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
                      staticClass:
                        "card-header d-flex justify-content-between align-items-center"
                    },
                    [
                      _c("h5", { staticClass: "mb-0" }, [
                        _vm._v(_vm._s(_vm.$t("task.show.time_tracking")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-outline-primary",
                          on: { click: _vm.addTimeTrackingModal }
                        },
                        [_vm._v(_vm._s(_vm.$t("task.add.time_tracking.btn")))]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _vm.task.timeTracking && _vm.task.timeTracking.length > 0
                        ? [
                            _vm._l(_vm.groupedTimeTrackingByDate, function(
                              item,
                              indexItem
                            ) {
                              return _c(
                                "div",
                                { key: "item-" + indexItem },
                                [
                                  _c("p", { staticClass: "mb-2" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("date")(
                                          new Date(item.date),
                                          "DD.MM.YYYY"
                                        )
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(item.timeTracking, function(
                                    time,
                                    index
                                  ) {
                                    return _c(
                                      "div",
                                      {
                                        key: "time-" + time.id,
                                        staticClass:
                                          "mb-2 d-flex justify-content-between"
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "d-flex align-items-center"
                                          },
                                          [
                                            _c("img", {
                                              staticClass:
                                                "avatar avatar-sm mr-2",
                                              attrs: {
                                                src: time.user.photo,
                                                alt: time.user.fullName
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("p", { staticClass: "mb-0" }, [
                                              _vm._v(
                                                _vm._s(time.user.fullName) +
                                                  " - " +
                                                  _vm._s(time.time)
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm.userId === time.user.id
                                          ? _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-outline-danger",
                                                on: {
                                                  click: function($event) {
                                                    return _vm.removeTimeTracking(
                                                      time
                                                    )
                                                  }
                                                }
                                              },
                                              [_vm._v("X")]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  })
                                ],
                                2
                              )
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "border-top pt-2 pb-2" }, [
                              _c("p", { staticClass: "mb-0" }, [
                                _vm._v(
                                  _vm._s(_vm.$t("task.time_tracking.total")) +
                                    ": " +
                                    _vm._s(_vm.sumTimeTracking)
                                )
                              ])
                            ])
                          ]
                        : [
                            _vm._v(
                              "\n                            " +
                                _vm._s(
                                  _vm.$t("task.time_tracking.no_time_tracking")
                                ) +
                                "\n                        "
                            )
                          ]
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card mb-4" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(_vm._s(_vm.$t("task.show.dependencies")))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8" }, [
                _c("div", { staticClass: "card mb-4" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(_vm._s(_vm.$t("task.show.description")))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(_vm._s(_vm.task.description))
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
                        _vm._v(_vm._s(_vm.$t("task.show.comments")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-outline-primary",
                          on: { click: _vm.addCommentModal }
                        },
                        [_vm._v(_vm._s(_vm.$t("task.add.comment.btn")))]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _vm.task.comments && _vm.task.comments.length > 0
                        ? _vm._l(_vm.sortedComments, function(comment, index) {
                            return _c(
                              "div",
                              {
                                key: comment.id,
                                staticClass: "p-3",
                                class: {
                                  "border-bottom":
                                    index < _vm.sortedComments.length - 1
                                }
                              },
                              [
                                _c("div", { staticClass: "d-flex mb-2" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "d-flex align-items-center"
                                    },
                                    [
                                      _c("img", {
                                        staticClass: "avatar avatar-sm mr-2",
                                        attrs: {
                                          src: comment.user.photo,
                                          alt: comment.user.fullName
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "mb-0" }, [
                                        _vm._v(
                                          _vm._s(comment.user.fullName) +
                                            " " +
                                            _vm._s(
                                              _vm.$t("comment.text.added")
                                            ) +
                                            " " +
                                            _vm._s(
                                              _vm._f("date")(
                                                new Date(comment.created_at),
                                                "DD.MM.YYYY HH:mm"
                                              )
                                            )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      comment.type === "intern"
                                        ? _c("p", { staticClass: "mb-0" }, [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t("comment.restricted_to")
                                              ) + " "
                                            ),
                                            _c(
                                              "span",
                                              { staticClass: "text-danger" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm._f("upper")(
                                                      comment.type
                                                    )
                                                  )
                                                )
                                              ]
                                            )
                                          ])
                                        : _vm._e()
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "mb-0" }, [
                                  _vm._v(_vm._s(comment.message))
                                ])
                              ]
                            )
                          })
                        : [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.$t("task.comments.no_comments")) +
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
          ref: "editTaskModal",
          attrs: { modalSchema: _vm.modalSchemaEditTask },
          on: { ok: _vm.editTask }
        }),
        _vm._v(" "),
        _c("custom-modal", {
          ref: "addCommentModal",
          attrs: { modalSchema: _vm.modalSchemaAddComment },
          on: { ok: _vm.addComment }
        }),
        _vm._v(" "),
        _c("custom-modal", {
          ref: "addTimeTrackingModal",
          attrs: { modalSchema: _vm.modalSchemaAddTimeTracking },
          on: { ok: _vm.addTimeTracking }
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/task/TaskDetail.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/task/TaskDetail.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskDetail_vue_vue_type_template_id_7c97e6c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskDetail.vue?vue&type=template&id=7c97e6c7& */ "./resources/js/pages/task/TaskDetail.vue?vue&type=template&id=7c97e6c7&");
/* harmony import */ var _TaskDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskDetail.vue?vue&type=script&lang=js& */ "./resources/js/pages/task/TaskDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskDetail_vue_vue_type_template_id_7c97e6c7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskDetail_vue_vue_type_template_id_7c97e6c7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/task/TaskDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/task/TaskDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/task/TaskDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TaskDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/task/TaskDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/task/TaskDetail.vue?vue&type=template&id=7c97e6c7&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/task/TaskDetail.vue?vue&type=template&id=7c97e6c7& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskDetail_vue_vue_type_template_id_7c97e6c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TaskDetail.vue?vue&type=template&id=7c97e6c7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/task/TaskDetail.vue?vue&type=template&id=7c97e6c7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskDetail_vue_vue_type_template_id_7c97e6c7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskDetail_vue_vue_type_template_id_7c97e6c7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);