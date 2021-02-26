//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  name: 'VsAlert',

  props: {
    type: {
      type: String,
      required: true,
    },
    showClose: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    noBg: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classList: function classList() {
      return [("vs-alert-" + (this.type)), { 'vs-alert--no-bg': this.noBg }];
    },
  },
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return function (id, style) { return addStyle(id, style); };
}
var HEAD;
var styles = {};
function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        var code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                { style.element.setAttribute('media', css.media); }
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            var index = style.ids.size - 1;
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index])
                { style.element.removeChild(nodes[index]); }
            if (nodes.length)
                { style.element.insertBefore(textNode, nodes[index]); }
            else
                { style.element.appendChild(textNode); }
        }
    }
}

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: ["vs-alert", _vm.classList] },
    [
      _c(
        "span",
        { staticClass: "vs-alert-icon__wrapper" },
        [
          _vm._t("icon", [
            _vm.type === "success"
              ? _c(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16"
                    }
                  },
                  [
                    _c("g", { attrs: { fill: "none", stroke: "#038153" } }, [
                      _c("path", {
                        attrs: {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M4 9l2.5 2.5 5-5"
                        }
                      }),
                      _vm._v(" "),
                      _c("circle", { attrs: { cx: "7.5", cy: "8.5", r: "7" } })
                    ])
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.type === "warning"
              ? _c(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        fill: "none",
                        stroke: "#ad5918",
                        "stroke-linecap": "round",
                        d:
                          "M.88 13.77L7.06 1.86c.19-.36.7-.36.89 0l6.18 11.91c.17.33-.07.73-.44.73H1.32c-.37 0-.61-.4-.44-.73zM7.5 6v3.5"
                      }
                    }),
                    _vm._v(" "),
                    _c("circle", {
                      attrs: { cx: "7.5", cy: "12", r: "1", fill: "#ad5918" }
                    })
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.type === "error"
              ? _c(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16"
                    }
                  },
                  [
                    _c("g", { attrs: { fill: "none", stroke: "#cc3340" } }, [
                      _c("circle", { attrs: { cx: "7.5", cy: "8.5", r: "7" } }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: { "stroke-linecap": "round", d: "M7.5 4.5V9" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("circle", {
                      attrs: { cx: "7.5", cy: "12", r: "1", fill: "#cc3340" }
                    })
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.type === "info"
              ? _c(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16"
                    }
                  },
                  [
                    _c("g", { attrs: { stroke: "#337fbd" } }, [
                      _c("circle", {
                        attrs: { cx: "7.5", cy: "8.5", r: "7", fill: "none" }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: { "stroke-linecap": "round", d: "M7.5 12.5V8" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("circle", {
                      attrs: { cx: "7.5", cy: "5", r: "1", fill: "#337fbd" }
                    })
                  ]
                )
              : _vm._e()
          ])
        ],
        2
      ),
      _vm._v(" "),
      _vm.title
        ? _c("div", { staticClass: "vs-alert__heading" }, [
            _vm._v(_vm._s(_vm.title))
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      _vm.showClose
        ? _c(
            "button",
            {
              class: ["vs-alert-button", _vm.type],
              on: {
                click: function($event) {
                  return _vm.$emit("close", true)
                }
              }
            },
            [
              _c(
                "svg",
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    focusable: "false",
                    role: "presentation"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      stroke: "currentColor",
                      "stroke-linecap": "round",
                      d: "M3 9l6-6m0 6L3 3"
                    }
                  })
                ]
              )
            ]
          )
        : _vm._e()
    ],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-fd565b66_0", { source: ".vs-alert {\n  position: relative;\n  border-radius: 4px;\n  padding: 12px 30px;\n  line-height: 1.42857;\n  font-size: 14px;\n}\n.vs-alert-icon__wrapper svg {\n  position: absolute;\n  left: 8px;\n  margin-top: 1px;\n}\n.vs-alert__heading {\n  font-weight: 600;\n}\n.vs-alert-button {\n  display: block;\n  position: absolute;\n  top: 8px;\n  right: 4px;\n  transition: background-color 0.1s ease-in-out 0s, color 0.25s ease-in-out 0s;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  padding: 0px;\n  width: 28px;\n  height: 28px;\n  overflow: hidden;\n  color: #333333;\n  font-size: 0px;\n  user-select: none;\n}\n.vs-alert-button.success {\n  color: #186146;\n}\n.vs-alert-button.warning {\n  color: #ad5918;\n}\n.vs-alert-button.error {\n  color: #8c232c;\n}\n.vs-alert-button.info {\n  color: #1f73b7;\n}\n.vs-alert-success {\n  border: 1px solid #aecfc2;\n  background-color: #edf8f4;\n  color: #186146;\n}\n.vs-alert-warning {\n  border: 1px solid #fed6a8;\n  background-color: #fff7ed;\n  color: #ad5918;\n}\n.vs-alert-error {\n  border: 1px solid #f5b5ba;\n  background-color: #fff0f1;\n  color: #8c232c;\n}\n.vs-alert-info {\n  border: 1px solid #adcce4;\n  background-color: #edf7ff;\n  color: #1f73b7;\n}\n.vs-alert--no-bg {\n  background-color: transparent;\n  border-color: transparent;\n  padding: 0 22px;\n  font-size: 13px;\n}\n.vs-alert--no-bg .vs-alert-icon__wrapper svg {\n  left: 0;\n  margin-top: 0;\n}\n.vs-alert--no-bg.vs-alert-success {\n  color: #038153;\n}\n.vs-alert--no-bg.vs-alert-warning {\n  color: #ad5918;\n}\n.vs-alert--no-bg.vs-alert-error {\n  color: #cc3340;\n}\n.vs-alert--no-bg.vs-alert-info {\n  color: #337fbd;\n}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

// Import vue component

// Declare install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component('VsAlert', __vue_component__);
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default __vue_component__;
export { install };