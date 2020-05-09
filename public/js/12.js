(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/task/TaskDetail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/task/TaskDetail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    },
    groupedDependenciesByType: function groupedDependenciesByType() {
      if (this.task && this.task.dependencies) {
        return _(this.task.dependencies).groupBy(function (x) {
          return x.type;
        }).map(function (value, key) {
          return {
            type: key,
            dependencies: value
          };
        }).value();
      }

      return [];
    },
    availableTaskDependencies: function availableTaskDependencies() {
      if (this.task) {
        return _.differenceWith(this.task.project.tasks, [].concat(_toConsumableArray(this.task.dependencies), [this.task]), function (arrVal, othVal) {
          return arrVal.id === othVal.id;
        });
      }

      return [];
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['isSenior', 'isClient', 'userId', 'isEmployee'])),
  data: function data() {
    return {
      task: null,
      loading: false,
      errorCode: 0,
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
      taskDependenciesTypeOptions: [],
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
      },
      modalSchemaAddDependency: {
        form: {
          url: '',
          method: 'put',
          fields: [],
          hiddenFields: [],
          config: {}
        },
        modalRef: 'addDependency',
        modalTitle: this.$t('dependencies.add.title.modal'),
        okBtnTitle: this.$t('modal.add.btn')
      },
      removeDependencyMessageBoxOptions: {
        title: this.$t('modalWarning'),
        okVariant: 'success',
        cancelVariant: 'danger'
      },
      startConflicts: [],
      finishConflicts: []
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
        _this.taskDependenciesTypeOptions = response.data.meta.taskDependenciesTypeOptions;

        _this.checkDependenciesConflicts();

        _this.loading = false;
      })["catch"](function (error) {
        _this.errorCode = error.response.status;
        _this.loading = false;
      });
    },
    editTask: function editTask(response) {
      this.task = response.data.data;
      this.checkDependenciesConflicts();
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
    },
    addDependencyModal: function addDependencyModal() {
      this.modalSchemaAddDependency.form.url = '/api/tasks/' + this.$route.params.id + '/store-dependency';
      var tasks = [];

      for (var i = 0; i < this.availableTaskDependencies.length; i++) {
        var task = this.availableTaskDependencies[i];
        tasks.push({
          'text': task.title,
          'value': task.id
        });
      }

      this.modalSchemaAddDependency.form.fields = [{
        label: this.$t('dependency.task'),
        required: true,
        name: 'task_id',
        input: 'select',
        type: 'select',
        value: '',
        config: {
          options: tasks,
          disabledOption: true
        }
      }, {
        label: this.$t('dependency.type'),
        required: true,
        name: 'type',
        input: 'select',
        type: 'select',
        value: '',
        config: {
          options: this.taskDependenciesTypeOptions,
          disabledOption: true
        }
      }];
      this.$refs['addDependencyModal'].openModal();
    },
    addDependency: function addDependency(response) {
      this.task = response.data.data;
      this.checkDependenciesConflicts();
    },
    removeDependency: function removeDependency(dependency) {
      var _this3 = this;

      this.$bvModal.msgBoxConfirm(this.$t('dependency.removeMessage'), this.removeTimeTrackingMessageBoxOptions).then(function (value) {
        if (value) {
          _this3.axios.put('/api/tasks/' + _this3.task.id + '/destroy-dependency', {
            'task_id': dependency.id
          }).then(function (response) {
            _this3.task.dependencies = _.filter(_this3.task.dependencies, function (dependencyElement) {
              return dependencyElement.id !== dependency.id;
            });

            _this3.checkDependenciesConflicts();
          });
        }
      });
    },
    checkDependenciesConflicts: function checkDependenciesConflicts() {
      if (this.task && this.task.dependencies.length > 0) {
        this.startConflicts = [];
        this.finishConflicts = [];

        for (var i = 0; i < this.task.dependencies.length; i++) {
          var dependency = this.task.dependencies[i];

          switch (dependency.type) {
            case 'finish to start':
              {
                if (dependency.status !== 'completed') {
                  this.startConflicts.push(dependency);
                }

                break;
              }

            case 'finish to finish':
              {
                if (dependency.status !== 'completed') {
                  this.finishConflicts.push(dependency);
                }

                break;
              }

            case 'start to start':
              {
                if (dependency.status !== 'in progress') {
                  this.startConflicts.push(dependency);
                }

                break;
              }

            case 'start to finish':
              {
                if (dependency.status !== 'in progress') {
                  this.finishConflicts.push(dependency);
                }

                break;
              }

            default:
              {}
          }
        }
      }

      return false;
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
              _vm.task.status === "todo" && _vm.startConflicts.length > 0
                ? _c(
                    "div",
                    { staticClass: "col-12 mb-4" },
                    [
                      _c(
                        "b-alert",
                        { attrs: { show: "", variant: "danger" } },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("task.dependencies.warning.start"))
                          ),
                          _vm._l(_vm.startConflicts, function(
                            dependency,
                            index
                          ) {
                            return _c(
                              "span",
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass:
                                      "text-decoration-none alert-link",
                                    attrs: {
                                      to: {
                                        name: "tasks.show",
                                        params: { id: dependency.id }
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(dependency.title))]
                                ),
                                index < _vm.startConflicts.length - 1
                                  ? [_vm._v(", ")]
                                  : _vm._e()
                              ],
                              2
                            )
                          })
                        ],
                        2
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.task.status === "in progress" &&
              _vm.finishConflicts.length > 0
                ? _c(
                    "div",
                    { staticClass: "col-12 mb-4" },
                    [
                      _c(
                        "b-alert",
                        { attrs: { show: "", variant: "danger" } },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("task.dependencies.warning.finish"))
                          ),
                          _vm._l(_vm.finishConflicts, function(
                            dependency,
                            index
                          ) {
                            return _c(
                              "span",
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass:
                                      "text-decoration-none alert-link",
                                    attrs: {
                                      to: {
                                        name: "tasks.show",
                                        params: { id: dependency.id }
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(dependency.title))]
                                ),
                                index < _vm.finishConflicts.length - 1
                                  ? [_vm._v(", ")]
                                  : _vm._e()
                              ],
                              2
                            )
                          })
                        ],
                        2
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 mb-4 d-flex justify-content-between" },
                [
                  _c("h1", [_vm._v(_vm._s(_vm.task.title))]),
                  _vm._v(" "),
                  _vm.isEmployee
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-primary",
                          on: { click: _vm.editTaskModal }
                        },
                        [_vm._v(_vm._s(_vm.$t("task.edit.btn")))]
                      )
                    : _vm._e()
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
                      _vm.isEmployee
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-outline-primary",
                              on: { click: _vm.addTimeTrackingModal }
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("task.add.time_tracking.btn"))
                              )
                            ]
                          )
                        : _vm._e()
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
                                          "mb-2 d-flex justify-content-between align-items-center"
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
                  _c(
                    "div",
                    {
                      staticClass:
                        "card-header d-flex justify-content-between align-items-center"
                    },
                    [
                      _c("h5", { staticClass: "mb-0" }, [
                        _vm._v(_vm._s(_vm.$t("task.show.dependencies")))
                      ]),
                      _vm._v(" "),
                      _vm.isSenior && _vm.availableTaskDependencies.length > 0
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-outline-primary",
                              on: { click: _vm.addDependencyModal }
                            },
                            [_vm._v(_vm._s(_vm.$t("task.add.dependency.btn")))]
                          )
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _vm.task.dependencies && _vm.task.dependencies.length > 0
                        ? _vm._l(_vm.groupedDependenciesByType, function(
                            item,
                            indexItem
                          ) {
                            return _c(
                              "div",
                              { key: "dep-item-" + indexItem },
                              [
                                _c("p", { staticClass: "mb-2" }, [
                                  _vm._v(
                                    _vm._s(_vm._f("capitalize")(item.type))
                                  )
                                ]),
                                _vm._v(" "),
                                _vm._l(item.dependencies, function(
                                  dependency,
                                  index
                                ) {
                                  return _c(
                                    "div",
                                    {
                                      key: "dep-" + dependency.id,
                                      staticClass:
                                        "d-flex justify-content-between align-items-center",
                                      class: {
                                        "mb-2":
                                          indexItem <
                                            _vm.groupedDependenciesByType
                                              .length -
                                              1 ||
                                          index < item.dependencies.length - 1
                                      }
                                    },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "text-decoration-none",
                                          attrs: {
                                            to: {
                                              name: "tasks.show",
                                              params: { id: dependency.id }
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(dependency.title))]
                                      ),
                                      _vm._v(" "),
                                      _vm.isSenior
                                        ? _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-outline-danger",
                                              on: {
                                                click: function($event) {
                                                  return _vm.removeDependency(
                                                    dependency
                                                  )
                                                }
                                              }
                                            },
                                            [_vm._v("X")]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                })
                              ],
                              2
                            )
                          })
                        : [
                            _vm._v(
                              "\n                            " +
                                _vm._s(
                                  _vm.$t("task.dependencies.no_dependencies")
                                ) +
                                "\n                        "
                            )
                          ]
                    ],
                    2
                  )
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
              ]),
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
              }),
              _vm._v(" "),
              _c("custom-modal", {
                ref: "addDependencyModal",
                attrs: { modalSchema: _vm.modalSchemaAddDependency },
                on: { ok: _vm.addDependency }
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