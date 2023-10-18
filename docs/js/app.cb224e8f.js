(function () {
  "use strict";
  var e = {
      1387: function (e, t, r) {
        var a = r(9242),
          o = r(3396),
          n = r(7139);
        const i = (0, o._)("i", { "data-feather": "chevron-up" }, null, -1);
        function l(e, t, r, l, s, d) {
          const m = (0, o.up)("AppHeader"),
            c = (0, o.up)("router-view"),
            u = (0, o.up)("back-to-top"),
            g = (0, o.up)("AppFooter"),
            p = (0, o.up)("VuePreloader");
          return (
            (0, o.wg)(),
            (0, o.iD)(
              "div",
              { class: (0, n.C_)([e.appTheme, "pt-0.5"]) },
              [
                (0, o.Wm)(m),
                e.isLoading
                  ? (0, o.kq)("", !0)
                  : ((0, o.wg)(),
                    (0, o.j4)(
                      a.uT,
                      { key: 0, name: "fade", mode: "out-in" },
                      {
                        default: (0, o.w5)(() => [
                          (0, o.Wm)(c, { theme: e.appTheme }, null, 8, [
                            "theme",
                          ]),
                        ]),
                        _: 1,
                      },
                    )),
                (0, o.Wm)(
                  u,
                  {
                    visibleoffset: "500",
                    right: "30px",
                    bottom: "20px",
                    class: "shadow-lg",
                  },
                  { default: (0, o.w5)(() => [i]), _: 1 },
                ),
                (0, o.Wm)(g),
                (0, o.Wm)(
                  p,
                  {
                    "background-color": "#303031",
                    color: "#f4f4f4",
                    "transition-type": "fade-up",
                    "loading-speed": 10,
                    "transition-speed": 1e3,
                    onLoadingIsOver: d.loadingIsOver,
                    onTransitionIsOver: d.transitionIsOver,
                  },
                  null,
                  8,
                  ["onLoadingIsOver", "onTransitionIsOver"],
                ),
              ],
              2,
            )
          );
        }
        var s = r(8164),
          d = r.n(s),
          m = r.p + "img/logo-dark.e46290dd.svg",
          c = r.p + "img/logo-light.a99743d3.svg";
        const u = { id: "nav", class: "sm:container sm:mx-auto" },
          g = {
            class:
              "z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6",
          },
          p = { class: "flex justify-between items-center px-4 sm:px-0" },
          h = { key: 0, src: m, class: "w-36", alt: "Dark Logo" },
          f = { key: 1, src: c, class: "w-36", alt: "Light Logo" },
          b = { class: "sm:hidden" },
          y = {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            class:
              "h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light",
          },
          v = {
            key: 0,
            "fill-rule": "evenodd",
            d: "M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z",
            "clip-rule": "evenodd",
          },
          x = {
            key: 1,
            "fill-rule": "evenodd",
            d: "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z",
          },
          w = {
            class:
              "hidden sm:flex justify-between items-center flex-col md:flex-row",
          },
          k = { class: "hidden md:block" };
        function _(e, t, r, a, n, i) {
          const l = (0, o.up)("router-link"),
            s = (0, o.up)("theme-switcher"),
            d = (0, o.up)("AppHeaderLinks"),
            m = (0, o.up)("Button"),
            c = (0, o.up)("HireMeModal");
          return (
            (0, o.wg)(),
            (0, o.iD)("nav", u, [
              (0, o._)("div", g, [
                (0, o._)("div", p, [
                  (0, o._)("div", null, [
                    (0, o.Wm)(
                      l,
                      { to: "/" },
                      {
                        default: (0, o.w5)(() => [
                          "light" === n.theme
                            ? ((0, o.wg)(), (0, o.iD)("img", h))
                            : ((0, o.wg)(), (0, o.iD)("img", f)),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  (0, o.Wm)(
                    s,
                    {
                      theme: n.theme,
                      onThemeChanged: i.updateTheme,
                      class:
                        "block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg",
                    },
                    null,
                    8,
                    ["theme", "onThemeChanged"],
                  ),
                  (0, o._)("div", b, [
                    (0, o._)(
                      "button",
                      {
                        onClick: t[0] || (t[0] = (e) => (n.isOpen = !n.isOpen)),
                        type: "button",
                        class: "focus:outline-none",
                        "aria-label": "Hamburger Menu",
                      },
                      [
                        ((0, o.wg)(),
                        (0, o.iD)("svg", y, [
                          n.isOpen
                            ? ((0, o.wg)(), (0, o.iD)("path", v))
                            : (0, o.kq)("", !0),
                          n.isOpen
                            ? (0, o.kq)("", !0)
                            : ((0, o.wg)(), (0, o.iD)("path", x)),
                        ])),
                      ],
                    ),
                  ]),
                ]),
                (0, o.Wm)(
                  d,
                  { showModal: i.showModal, isOpen: n.isOpen },
                  null,
                  8,
                  ["showModal", "isOpen"],
                ),
                (0, o._)("div", w, [
                  (0, o._)("div", k, [
                    (0, o.Wm)(m, {
                      title: "Захиалга Өгөх",
                      class:
                        "text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300",
                      onClick: t[1] || (t[1] = (e) => i.showModal()),
                      "aria-label": "Захиалга Өгөх",
                    }),
                  ]),
                  (0, o.Wm)(
                    s,
                    {
                      theme: n.theme,
                      onThemeChanged: i.updateTheme,
                      class:
                        "ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer",
                    },
                    null,
                    8,
                    ["theme", "onThemeChanged"],
                  ),
                ]),
              ]),
              (0, o.Wm)(
                c,
                {
                  showModal: i.showModal,
                  modal: n.modal,
                  categories: n.categories,
                  "aria-modal": "Hire Me Modal",
                },
                null,
                8,
                ["showModal", "modal", "categories"],
              ),
            ])
          );
        }
        const j = {
            key: 0,
            "data-feather": "moon",
            class:
              "text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5",
          },
          T = {
            key: 1,
            "data-feather": "sun",
            class: "text-gray-200 hover:text-gray-50 w-5",
          };
        function I(e, t, r, n, i, l) {
          return (
            (0, o.wg)(),
            (0, o.iD)(
              "a",
              {
                href: "#",
                onClick:
                  t[0] ||
                  (t[0] = (0, a.iM)(
                    (...e) => l.toggleTheme && l.toggleTheme(...e),
                    ["prevent"],
                  )),
                "aria-label": "Theme Switcher",
              },
              [
                "light" === r.theme
                  ? ((0, o.wg)(), (0, o.iD)("i", j))
                  : ((0, o.wg)(), (0, o.iD)("i", T)),
              ],
            )
          );
        }
        var C = {
            props: { theme: { type: String, required: !0 } },
            methods: {
              toggleTheme() {
                const e = "light" === this.theme ? "dark" : "light";
                localStorage.setItem("theme", e),
                  this.$emit("theme-changed", e),
                  this.$router.go();
              },
            },
          },
          S = r(89);
        const M = (0, S.Z)(C, [["render", I]]);
        var O = M;
        const D = (e) => (
            (0, o.dD)("data-v-5db32668"), (e = e()), (0, o.Cn)(), e
          ),
          P = { class: "font-general-regular fixed inset-0 z-30" },
          W = {
            class: "flex flex-col items-center justify-center h-full w-full",
          },
          A = { class: "modal-wrapper flex items-center z-30" },
          Z = {
            class:
              "modal max-w-md mx-5 md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative",
          },
          F = {
            class:
              "modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark",
          },
          B = D(() =>
            (0, o._)(
              "h5",
              { class: "text-primary-dark dark:text-primary-light text-xl" },
              " Та ямар ситем хийлгэмээр байна? ",
              -1,
            ),
          ),
          H = D(() => (0, o._)("i", { "data-feather": "x" }, null, -1)),
          L = [H],
          E = { class: "modal-body p-5 w-full h-full" },
          z = {
            class: "modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right",
          };
        function $(e, t, r, n, i, l) {
          const s = (0, o.up)("FormInput"),
            d = (0, o.up)("FormTextarea"),
            m = (0, o.up)("Button");
          return (
            (0, o.wg)(),
            (0, o.j4)(
              a.uT,
              { name: "fade" },
              {
                default: (0, o.w5)(() => [
                  (0, o.wy)(
                    (0, o._)(
                      "div",
                      P,
                      [
                        (0, o.wy)(
                          (0, o._)(
                            "div",
                            {
                              onClick: t[0] || (t[0] = (e) => r.showModal()),
                              class:
                                "bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20",
                            },
                            null,
                            512,
                          ),
                          [[a.F8, r.modal]],
                        ),
                        (0, o._)("main", W, [
                          (0, o.Wm)(
                            a.uT,
                            { name: "fade-up-down" },
                            {
                              default: (0, o.w5)(() => [
                                (0, o.wy)(
                                  (0, o._)(
                                    "div",
                                    A,
                                    [
                                      (0, o._)("div", Z, [
                                        (0, o._)("div", F, [
                                          B,
                                          (0, o._)(
                                            "button",
                                            {
                                              class:
                                                "px-4 text-primary-dark dark:text-primary-light",
                                              onClick:
                                                t[1] ||
                                                (t[1] = (e) => r.showModal()),
                                            },
                                            L,
                                          ),
                                        ]),
                                        (0, o._)("div", E, [
                                          (0, o._)(
                                            "form",
                                            {
                                              class: "max-w-xl m-4 text-left",
                                              onSubmit:
                                                t[2] ||
                                                (t[2] = (0, a.iM)(
                                                  (...e) =>
                                                    l.submitForm &&
                                                    l.submitForm(...e),
                                                  ["prevent"],
                                                )),
                                            },
                                            [
                                              (0, o.Wm)(
                                                s,
                                                {
                                                  label: "Нэр",
                                                  inputIdentifier: "name",
                                                  ref: "name",
                                                },
                                                null,
                                                512,
                                              ),
                                              (0, o.Wm)(
                                                s,
                                                {
                                                  label: "Имэйл",
                                                  inputIdentifier: "email",
                                                  inputType: "email",
                                                  ref: "email",
                                                },
                                                null,
                                                512,
                                              ),
                                              (0, o.Wm)(
                                                s,
                                                {
                                                  label: "Гарчиг",
                                                  inputIdentifier: "subject",
                                                  ref: "subject",
                                                },
                                                null,
                                                512,
                                              ),
                                              (0, o.Wm)(
                                                d,
                                                {
                                                  label: "Тайлбар",
                                                  textareaIdentifier: "message",
                                                  ref: "message",
                                                },
                                                null,
                                                512,
                                              ),
                                              (0, o._)("div", null, [
                                                (0, o.Wm)(m, {
                                                  title: "Илгээх",
                                                  class:
                                                    "px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500",
                                                  type: "submit",
                                                  "aria-label": "Send Message",
                                                }),
                                              ]),
                                            ],
                                            32,
                                          ),
                                        ]),
                                        (0, o._)("div", z, [
                                          (0, o.Wm)(m, {
                                            title: "Хаах",
                                            class:
                                              "px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500",
                                            onClick:
                                              t[3] ||
                                              (t[3] = (e) => r.showModal()),
                                            "aria-label": "Close Modal",
                                          }),
                                        ]),
                                      ]),
                                    ],
                                    512,
                                  ),
                                  [[a.F8, r.modal]],
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                      ],
                      512,
                    ),
                    [[a.F8, r.modal]],
                  ),
                ]),
                _: 1,
              },
            )
          );
        }
        var U = r(4899),
          N = r(1607),
          q = r(2775),
          V = r(4294),
          G = {
            props: ["showModal", "modal", "categories"],
            components: { Button: U.Z, FormInput: N.Z, FormTextarea: q.Z },
            data() {
              return {};
            },
            mounted() {
              d().replace();
            },
            updated() {
              d().replace();
            },
            methods: {
              async submitForm() {
                const e = {
                  name: this.$refs.name.value,
                  email: this.$refs.email.value,
                  subject: this.$refs.subject.value,
                  message: this.$refs.message.value,
                };
                try {
                  const t = await V.ZP.send(
                    "service_gywiv3a",
                    "template_ih3fybl",
                    {
                      from_name: e.name,
                      from_email: e.email,
                      subject: e.subject,
                      message: e.message,
                    },
                    "FnbIqVY58Re_62Izt",
                  );
                  console.log("Email sent:", t),
                    (this.$refs.name.value = ""),
                    (this.$refs.email.value = ""),
                    (this.$refs.subject.value = ""),
                    (this.$refs.message.value = "");
                } catch (t) {
                  (this.$refs.name.value = ""),
                    (this.$refs.email.value = ""),
                    (this.$refs.subject.value = ""),
                    (this.$refs.message.value = ""),
                    console.error("Error sending email:", t);
                }
              },
            },
          };
        const Y = (0, S.Z)(G, [
          ["render", $],
          ["__scopeId", "data-v-5db32668"],
        ]);
        var K = Y;
        const R = {
          class:
            "border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark",
        };
        function X(e, t, r, a, i, l) {
          const s = (0, o.up)("router-link");
          return (
            (0, o.wg)(),
            (0, o.iD)(
              "div",
              {
                class: (0, n.C_)([
                  r.isOpen ? "block" : "hidden",
                  "m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none",
                ]),
              },
              [
                (0, o.Wm)(
                  s,
                  {
                    to: "/projects",
                    class:
                      "font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2",
                    "aria-label": "Ажлууд",
                  },
                  { default: (0, o.w5)(() => [(0, o.Uk)("Ажлууд")]), _: 1 },
                ),
                (0, o.Wm)(
                  s,
                  {
                    to: "/about",
                    class:
                      "font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark",
                    "aria-label": "Миний тухай",
                  },
                  { default: (0, o.w5)(() => [(0, o.Uk)("Миний тухай")]), _: 1 },
                ),
                (0, o.Wm)(
                  s,
                  {
                    to: "/contact",
                    class:
                      "font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark",
                    "aria-label": "Холбоо Барих",
                  },
                  {
                    default: (0, o.w5)(() => [(0, o.Uk)("Холбоо Барих")]),
                    _: 1,
                  },
                ),
                (0, o._)("div", R, [
                  (0, o._)(
                    "button",
                    {
                      class:
                        "font-general-medium sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500",
                      onClick: t[0] || (t[0] = (e) => r.showModal()),
                      "aria-label": "Захиалга өгөх",
                    },
                    " Захиалга өгөх ",
                  ),
                ]),
              ],
              2,
            )
          );
        }
        var J = { props: ["showModal", "isOpen"] };
        const Q = (0, S.Z)(J, [["render", X]]);
        var ee = Q,
          te = {
            components: {
              ThemeSwitcher: O,
              HireMeModal: K,
              AppHeaderLinks: ee,
              Button: U.Z,
            },
            data() {
              return {
                isOpen: !1,
                theme: "",
                modal: !1,
                categories: [
                  { id: 1, value: "web", name: "Web Application" },
                  { id: 2, value: "mobile", name: "Mobile Application" },
                  { id: 3, value: "ui-ux", name: "UI/UX Design" },
                  { id: 4, value: "branding", name: "Branding & Anim" },
                ],
              };
            },
            created() {
              this.theme = localStorage.getItem("theme") || "light";
            },
            mounted() {
              d().replace(),
                (this.theme = localStorage.getItem("theme") || "light");
            },
            methods: {
              updateTheme(e) {
                this.theme = e;
              },
              showModal() {
                this.modal
                  ? (document
                      .getElementsByTagName("html")[0]
                      .classList.remove("overflow-y-hidden"),
                    (this.modal = !1))
                  : (document
                      .getElementsByTagName("html")[0]
                      .classList.add("overflow-y-hidden"),
                    (this.modal = !0));
              },
            },
            updated() {
              d().replace();
            },
          };
        const re = (0, S.Z)(te, [
          ["render", _],
          ["__scopeId", "data-v-1548b280"],
        ]);
        var ae = re;
        const oe = { class: "container mx-auto" },
          ne = {
            class:
              "pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark",
          },
          ie = {
            class: "flex flex-col justify-center items-center mb-12 sm:mb-20",
          },
          le = (0, o._)(
            "p",
            {
              class:
                "font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5",
            },
            " Надтай холбогдоно уу ",
            -1,
          ),
          se = { class: "flex gap-4 sm:gap-8" },
          de = ["href"],
          me = ["data-feather"];
        function ce(e, t, r, a, n, i) {
          const l = (0, o.up)("FooterCopyright");
          return (
            (0, o.wg)(),
            (0, o.iD)("div", oe, [
              (0, o._)("div", ne, [
                (0, o._)("div", ie, [
                  le,
                  (0, o._)("ul", se, [
                    ((0, o.wg)(!0),
                    (0, o.iD)(
                      o.HY,
                      null,
                      (0, o.Ko)(
                        n.socials,
                        (e) => (
                          (0, o.wg)(),
                          (0, o.iD)(
                            "a",
                            {
                              key: e.id,
                              href: e.url,
                              target: "__blank",
                              class:
                                "text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500",
                            },
                            [
                              (0, o._)(
                                "i",
                                {
                                  "data-feather": e.icon,
                                  class: "w-5 sm:w-8 h-5 sm:h-8",
                                },
                                null,
                                8,
                                me,
                              ),
                            ],
                            8,
                            de,
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                ]),
                (0, o.Wm)(l),
              ]),
            ])
          );
        }
        const ue = { class: "flex justify-center items-center text-center" },
          ge = {
            class:
              "font-general-regular text-lg text-ternary-dark dark:text-ternary-light",
          },
          pe = {
            href: "https://github.com/btseee/btseee.github.io",
            target: "__blank",
            class:
              "font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500",
          },
          he = {
            href: "https://btseee.github.io",
            target: "__blank",
            class:
              "font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500",
          };
        function fe(e, t, r, a, i, l) {
          return (
            (0, o.wg)(),
            (0, o.iD)("div", ue, [
              (0, o._)("div", ge, [
                (0, o.Uk)(" © " + (0, n.zw)(e.copyrightDate) + ". ", 1),
                (0, o._)("a", pe, (0, n.zw)(e.projectName), 1),
                (0, o.Uk)(" . Developed by "),
                (0, o._)("a", he, (0, n.zw)(e.author), 1),
              ]),
            ])
          );
        }
        var be = {
          data: () => ({
            copyrightDate: new Date().getFullYear(),
            projectName: "Portfolio",
            author: "Tsee",
          }),
        };
        const ye = (0, S.Z)(be, [["render", fe]]);
        var ve = ye;
        const xe = [
          {
            id: 1,
            name: "Website",
            icon: "globe",
            url: "https://www.tsee.mn/",
          },
          {
            id: 2,
            name: "GitHub",
            icon: "github",
            url: "https://github.com/btseee",
          },
          {
            id: 3,
            name: "Twitter",
            icon: "twitter",
            url: "https://twitter.com/b_tseee",
          },
          {
            id: 4,
            name: "LinkedIn",
            icon: "linkedin",
            url: "https://www.linkedin.com/in/btsee",
          },
          {
            id: 5,
            name: "YouTube",
            icon: "youtube",
            url: "https://www.youtube.com/@b_tsee",
          },
          {
            id: 6,
            name: "Facebook",
            icon: "facebook",
            url: "https://www.facebook.com/btseku1125/",
          },
          {
            id: 7,
            name: "Instagram",
            icon: "instagram",
            url: "https://www.instagram.com/b.tseee",
          },
        ];
        var we = {
          components: { FooterCopyright: ve },
          data() {
            return { socials: xe };
          },
          mounted() {
            d().replace();
          },
          updated() {
            d().replace();
          },
        };
        const ke = (0, S.Z)(we, [["render", ce]]);
        var _e = ke,
          je = r(9366),
          Te = {
            components: { AppHeader: ae, AppFooter: _e, VuePreloader: je.C },
            data: () => ({
              appTheme: localStorage.getItem("theme"),
              isLoading: !0,
            }),
            mounted() {
              d().replace(), (this.isLoading = !1);
            },
            methods: {
              loadingIsOver() {
                this.isLoading = !1;
              },
              transitionIsOver() {},
            },
          };
        const Ie = (0, S.Z)(Te, [["render", l]]);
        var Ce = Ie,
          Se = r(2483);
        const Me = { class: "container mx-auto" };
        function Oe(e, t, r, a, n, i) {
          const l = (0, o.up)("AppBanner"),
            s = (0, o.up)("ProjectsGrid");
          return (
            (0, o.wg)(),
            (0, o.iD)("div", Me, [
              (0, o.Wm)(l, { class: "mb-5 sm:mb-8" }),
              (0, o.Wm)(s),
            ])
          );
        }
        var De = r.p + "img/developer.87f3cd6e.png";
        const Pe = (e) => (
            (0, o.dD)("data-v-bdd56a90"), (e = e()), (0, o.Cn)(), e
          ),
          We = {
            class:
              "flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10",
          },
          Ae = { class: "w-full md:w-1/3 text-left" },
          Ze = {
            class:
              "font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light",
          },
          Fe = Pe(() => (0, o._)("span", null, ">", -1)),
          Be = (0, o.uE)(
            '<p class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400" data-v-bdd56a90> Би утасны апп, вебсайт болон програм хөгжүүлэх чадвартай бөгөөд танд туслахад бэлэн байна. </p><div class="flex justify-center sm:block" data-v-bdd56a90><a download="CV харах" href="https://resume.io/r/IlcOnPHGc" class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500" aria-label="CV харах" data-v-bdd56a90><i data-feather="eye" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100" data-v-bdd56a90></i><b class="text-sm sm:text-lg font-general-medium duration-100" data-v-bdd56a90>CV харах</b></a><div class="hidden md:block" data-v-bdd56a90></div></div>',
            2,
          ),
          He = Pe(() =>
            (0, o._)(
              "div",
              { class: "w-full md:w-1/2 text-right float-right" },
              [
                (0, o._)("img", {
                  src: De,
                  alt: "Developer",
                  class: "floating-animation",
                }),
              ],
              -1,
            ),
          );
        function Le(e, t, r, a, i, l) {
          return (
            (0, o.wg)(),
            (0, o.iD)("section", We, [
              (0, o._)("div", Ae, [
                (0, o._)("h1", Ze, [
                  (0, o.Uk)(" < Намайг "),
                  (0, o._)(
                    "span",
                    {
                      class: "uppercase font-general-bold",
                      style: (0, n.j5)({ color: e.randomColor }),
                    },
                    "Цээ",
                    4,
                  ),
                  (0, o.Uk)(" гэдэг /"),
                  Fe,
                ]),
                Be,
              ]),
              He,
            ])
          );
        }
        var Ee = {
          name: "Home",
          data: () => ({
            theme: "",
            randomColor: function () {
              return "#" + ((16777215 * Math.random()) << 0).toString(16);
            },
          }),
          created() {
            this.theme = localStorage.getItem("theme") || "light";
          },
          mounted() {
            d().replace(),
              (this.theme = localStorage.getItem("theme") || "light");
          },
          updated() {
            d().replace();
          },
          methods: {
            showModal() {
              this.modal
                ? (document
                    .getElementsByTagName("html")[0]
                    .classList.remove("overflow-y-hidden"),
                  (this.modal = !1))
                : (document
                    .getElementsByTagName("html")[0]
                    .classList.add("overflow-y-hidden"),
                  (this.modal = !0));
            },
          },
        };
        const ze = (0, S.Z)(Ee, [
          ["render", Le],
          ["__scopeId", "data-v-bdd56a90"],
        ]);
        var $e = ze,
          Ue = r(7594),
          Ne = {
            name: "Home",
            components: { AppBanner: $e, ProjectsGrid: Ue.Z },
          };
        const qe = (0, S.Z)(Ne, [["render", Oe]]);
        var Ve = qe;
        const Ge = [
            {
              path: "/",
              name: "Home",
              component: Ve,
              meta: { title: "Tsee - Home" },
            },
            {
              path: "/about",
              name: "About",
              component: () => r.e(443).then(r.bind(r, 9187)),
              meta: { title: "Tsee - About" },
            },
            {
              path: "/projects",
              name: "Projects",
              component: () => r.e(176).then(r.bind(r, 1805)),
              meta: { title: "Tsee - Projects" },
            },
            {
              path: "/projects/single-project",
              name: "Single Project",
              component: () => r.e(176).then(r.bind(r, 4868)),
              meta: { title: "Tsee - Single Project" },
            },
            {
              path: "/contact",
              name: "Contact",
              component: () => r.e(176).then(r.bind(r, 5677)),
              meta: { title: "Tsee - Contact" },
            },
          ],
          Ye = (0, Se.p7)({
            history: (0, Se.PO)("/"),
            routes: Ge,
            scrollBehavior() {
              document.getElementById("app").scrollIntoView();
            },
          });
        var Ke = Ye;
        Ye.beforeEach((e, t, r) => {
          const a = e.matched
              .slice()
              .reverse()
              .find((e) => e.meta && e.meta.title),
            o = e.matched
              .slice()
              .reverse()
              .find((e) => e.meta && e.meta.metaTags),
            n = t.matched
              .slice()
              .reverse()
              .find((e) => e.meta && e.meta.metaTags);
          if (
            (a
              ? (document.title = a.meta.title)
              : n && (document.title = n.meta.title),
            Array.from(
              document.querySelectorAll("[data-vue-router-controlled]"),
            ).map((e) => e.parentNode.removeChild(e)),
            !o)
          )
            return r();
          o.meta.metaTags
            .map((e) => {
              const t = document.createElement("meta");
              return (
                Object.keys(e).forEach((r) => {
                  t.setAttribute(r, e[r]);
                }),
                t.setAttribute("data-vue-router-controlled", ""),
                t
              );
            })
            .forEach((e) => document.head.appendChild(e)),
            r();
        });
        var Re = r(4901);
        const Xe = r(8164);
        Xe.replace(), (0, a.ri)(Ce).use(Ke).use(Re.Z).mount("#app");
        const Je = localStorage.getItem("theme");
        "dark" === Je &&
        document.querySelector("body").classList.contains("app-theme")
          ? document.querySelector("body").classList.add("bg-primary-dark")
          : document.querySelector("body").classList.add("bg-secondary-light");
      },
      7594: function (e, t, r) {
        r.d(t, {
          Z: function () {
            return D;
          },
        });
        var a = r(3396),
          o = r(7139);
        const n = { class: "pt-10 sm:pt-14" },
          i = { class: "text-center" },
          l = {
            class:
              "font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light",
          },
          s = { class: "mt-10 sm:mt-10" },
          d = {
            class:
              "font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4",
          },
          m = {
            class:
              "flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2",
          },
          c = {
            class:
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",
          };
        function u(e, t, r, u, g, p) {
          const h = (0, a.up)("ProjectsFilter"),
            f = (0, a.up)("ProjectSingle");
          return (
            (0, a.wg)(),
            (0, a.iD)("section", n, [
              (0, a._)("div", i, [
                (0, a._)("p", l, (0, o.zw)(e.projectsHeading), 1),
              ]),
              (0, a._)("div", s, [
                (0, a._)("h3", d, [
                  (0, a.Uk)(" Миний "),
                  (0, a._)("b", null, (0, o.zw)(e.year), 1),
                  (0, a.Uk)(" жилийн турш хамтран ажилласан төслүүд болно "),
                ]),
                (0, a._)("div", m, [
                  (0, a.Wm)(h, {
                    onFilter: t[0] || (t[0] = (t) => (e.selectedCategory = t)),
                  }),
                ]),
              ]),
              (0, a._)("div", c, [
                ((0, a.wg)(!0),
                (0, a.iD)(
                  a.HY,
                  null,
                  (0, a.Ko)(
                    p.filteredProjects,
                    (e) => (
                      (0, a.wg)(),
                      (0, a.j4)(f, { key: e.id, project: e }, null, 8, [
                        "project",
                      ])
                    ),
                  ),
                  128,
                )),
              ]),
            ])
          );
        }
        var g = r(8164),
          p = r.n(g),
          h = {
            props: {
              select: { type: String, default: "projects", required: !0 },
              selectOptions: {
                type: Array,
                default: () => [
                  "Web Application",
                  "Mobile Application",
                  "UI/UX Design",
                  "Branding & Anim",
                ],
              },
            },
          };
        const f = h;
        var b = f;
        const y = ["src", "alt"],
          v = { class: "text-center px-4 py-6" },
          x = {
            class:
              "font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2",
          },
          w = {
            class:
              "font-general-medium text-lg text-ternary-dark dark:text-ternary-light",
          };
        function k(e, t, r, n, i, l) {
          const s = (0, a.up)("router-link");
          return (
            (0, a.wg)(),
            (0, a.j4)(
              s,
              {
                to: "/",
                class:
                  "rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",
                "aria-label": "Single Project",
              },
              {
                default: (0, a.w5)(() => [
                  (0, a._)("div", null, [
                    (0, a._)(
                      "img",
                      {
                        src: r.project.img,
                        alt: r.project.title,
                        class: "rounded-t-xl border-none",
                      },
                      null,
                      8,
                      y,
                    ),
                  ]),
                  (0, a._)("div", v, [
                    (0, a._)("p", x, (0, o.zw)(r.project.title), 1),
                    (0, a._)("span", w, (0, o.zw)(r.project.category), 1),
                  ]),
                ]),
                _: 1,
              },
            )
          );
        }
        var _ = { props: ["project"] },
          j = r(89);
        const T = (0, j.Z)(_, [["render", k]]);
        var I = T;
        const C = [
          { id: 1, title: "SendMN V2.0", category: "Мобайл апп", img: r(73) },
          { id: 2, title: "TMS 4.0", category: "Дотоод систем", img: r(4133) },
          {
            id: 3,
            title: "Mongolian Properties",
            category: "Вебсайт",
            img: r(5831),
          },
          { id: 4, title: "Хуримын Ордон", category: "Вебсайт", img: r(4016) },
          { id: 5, title: "Caak.mn V2.0", category: "Вебсайт", img: r(1378) },
          { id: 6, title: "Etender", category: "Дотоод систем", img: r(6996) },
        ];
        var S = C,
          M = {
            components: { ProjectSingle: I, ProjectsFilter: b },
            data: () => {
              const e = (new Date().getFullYear() - 2020).toString();
              return {
                projects: S,
                projectsHeading: "Миний төслүүд",
                selectedCategory: "",
                searchProject: "",
                year: e,
              };
            },
            computed: {
              filteredProjects() {
                return this.selectedCategory
                  ? this.filterProjectsByCategory()
                  : this.searchProject
                  ? this.filterProjectsBySearch()
                  : this.projects;
              },
            },
            methods: {
              filterProjectsByCategory() {
                return this.projects.filter((e) => {
                  let t =
                    e.category.charAt(0).toUpperCase() + e.category.slice(1);
                  return console.log(t), t.includes(this.selectedCategory);
                });
              },
              filterProjectsBySearch() {
                let e = new RegExp(this.searchProject, "i");
                return this.projects.filter((t) => t.title.match(e));
              },
            },
            mounted() {
              p().replace();
            },
          };
        const O = (0, j.Z)(M, [["render", u]]);
        var D = O;
      },
      4899: function (e, t, r) {
        r.d(t, {
          Z: function () {
            return d;
          },
        });
        var a = r(3396),
          o = r(7139);
        function n(e, t, r, n, i, l) {
          return (0, a.wg)(), (0, a.iD)("button", null, (0, o.zw)(r.title), 1);
        }
        var i = { props: ["title"], data: () => ({}) },
          l = r(89);
        const s = (0, l.Z)(i, [["render", n]]);
        var d = s;
      },
      1607: function (e, t, r) {
        r.d(t, {
          Z: function () {
            return c;
          },
        });
        var a = r(3396),
          o = r(7139);
        const n = ["for"],
          i = ["id", "name", "placeholder", "aria-label", "value", "type"];
        function l(e, t, r, l, s, d) {
          return (
            (0, a.wg)(),
            (0, a.iD)("div", null, [
              (0, a._)(
                "label",
                {
                  class:
                    "block mb-2 text-lg text-primary-dark dark:text-primary-light",
                  for: r.label,
                },
                (0, o.zw)(r.label),
                9,
                n,
              ),
              (0, a._)(
                "input",
                (0, a.dG)(
                  {
                    class:
                      "w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",
                    id: r.inputIdentifier,
                    name: r.inputIdentifier,
                    placeholder: r.label,
                    "aria-label": r.inputIdentifier,
                    value: r.val,
                    type: r.inputType,
                  },
                  e.$attrs,
                  {
                    onInput:
                      t[0] ||
                      (t[0] = (t) => e.$emit("update:val", t.target.value)),
                    required: "",
                  },
                ),
                null,
                16,
                i,
              ),
            ])
          );
        }
        var s = {
            props: {
              label: { type: String, default: "" },
              inputIdentifier: { type: String, default: "" },
              val: { type: [String, Number], default: "" },
              inputType: { type: String, default: "text" },
            },
          },
          d = r(89);
        const m = (0, d.Z)(s, [["render", l]]);
        var c = m;
      },
      2775: function (e, t, r) {
        r.d(t, {
          Z: function () {
            return c;
          },
        });
        var a = r(3396),
          o = r(7139);
        const n = ["for"],
          i = ["id", "name", "aria-label", "placeholder"];
        function l(e, t, r, l, s, d) {
          return (
            (0, a.wg)(),
            (0, a.iD)("div", null, [
              (0, a._)(
                "label",
                {
                  class:
                    "block text-lg text-primary-dark dark:text-primary-light mb-2",
                  for: r.textareaIdentifier,
                },
                (0, o.zw)(r.label),
                9,
                n,
              ),
              (0, a._)(
                "textarea",
                (0, a.dG)(
                  {
                    class:
                      "w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",
                    id: r.textareaIdentifier,
                    name: r.textareaIdentifier,
                    "aria-label": r.textareaIdentifier,
                    placeholder: r.label,
                  },
                  e.$attrs,
                  {
                    onInput:
                      t[0] ||
                      (t[0] = (t) => e.$emit("update:val", t.target.value)),
                    cols: "14",
                    rows: "6",
                  },
                ),
                null,
                16,
                i,
              ),
            ])
          );
        }
        var s = {
            props: {
              label: { type: String, default: "" },
              textareaIdentifier: { type: String, default: "" },
              val: { type: [String, Number], default: "" },
            },
          },
          d = r(89);
        const m = (0, d.Z)(s, [["render", l]]);
        var c = m;
      },
      1378: function (e, t, r) {
        e.exports = r.p + "img/caak.bd0d20c7.png";
      },
      6996: function (e, t, r) {
        e.exports = r.p + "img/etender.9a99764a.png";
      },
      5831: function (e, t, r) {
        e.exports = r.p + "img/mongolian_properties.8791f7b5.png";
      },
      73: function (e, t, r) {
        e.exports = r.p + "img/sendmn.826d2783.png";
      },
      4133: function (e, t, r) {
        e.exports = r.p + "img/tms.981067f1.png";
      },
      4016: function (e, t, r) {
        e.exports = r.p + "img/wedding.c2fcda89.png";
      },
    },
    t = {};
  function r(a) {
    var o = t[a];
    if (void 0 !== o) return o.exports;
    var n = (t[a] = { exports: {} });
    return e[a].call(n.exports, n, n.exports, r), n.exports;
  }
  (r.m = e),
    (function () {
      var e = [];
      r.O = function (t, a, o, n) {
        if (!a) {
          var i = 1 / 0;
          for (m = 0; m < e.length; m++) {
            (a = e[m][0]), (o = e[m][1]), (n = e[m][2]);
            for (var l = !0, s = 0; s < a.length; s++)
              (!1 & n || i >= n) &&
              Object.keys(r.O).every(function (e) {
                return r.O[e](a[s]);
              })
                ? a.splice(s--, 1)
                : ((l = !1), n < i && (i = n));
            if (l) {
              e.splice(m--, 1);
              var d = o();
              void 0 !== d && (t = d);
            }
          }
          return t;
        }
        n = n || 0;
        for (var m = e.length; m > 0 && e[m - 1][2] > n; m--) e[m] = e[m - 1];
        e[m] = [a, o, n];
      };
    })(),
    (function () {
      r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return r.d(t, { a: t }), t;
      };
    })(),
    (function () {
      r.d = function (e, t) {
        for (var a in t)
          r.o(t, a) &&
            !r.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      };
    })(),
    (function () {
      (r.f = {}),
        (r.e = function (e) {
          return Promise.all(
            Object.keys(r.f).reduce(function (t, a) {
              return r.f[a](e, t), t;
            }, []),
          );
        });
    })(),
    (function () {
      r.u = function (e) {
        return (
          "js/" +
          { 176: "projects", 443: "about" }[e] +
          "." +
          { 176: "529e5be4", 443: "8b5b33e9" }[e] +
          ".js"
        );
      };
    })(),
    (function () {
      r.miniCssF = function (e) {};
    })(),
    (function () {
      r.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = {},
        t = "btseee.github.io:";
      r.l = function (a, o, n, i) {
        if (e[a]) e[a].push(o);
        else {
          var l, s;
          if (void 0 !== n)
            for (
              var d = document.getElementsByTagName("script"), m = 0;
              m < d.length;
              m++
            ) {
              var c = d[m];
              if (
                c.getAttribute("src") == a ||
                c.getAttribute("data-webpack") == t + n
              ) {
                l = c;
                break;
              }
            }
          l ||
            ((s = !0),
            (l = document.createElement("script")),
            (l.charset = "utf-8"),
            (l.timeout = 120),
            r.nc && l.setAttribute("nonce", r.nc),
            l.setAttribute("data-webpack", t + n),
            (l.src = a)),
            (e[a] = [o]);
          var u = function (t, r) {
              (l.onerror = l.onload = null), clearTimeout(g);
              var o = e[a];
              if (
                (delete e[a],
                l.parentNode && l.parentNode.removeChild(l),
                o &&
                  o.forEach(function (e) {
                    return e(r);
                  }),
                t)
              )
                return t(r);
            },
            g = setTimeout(
              u.bind(null, void 0, { type: "timeout", target: l }),
              12e4,
            );
          (l.onerror = u.bind(null, l.onerror)),
            (l.onload = u.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (function () {
      r.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      r.p = "/";
    })(),
    (function () {
      var e = { 143: 0 };
      (r.f.j = function (t, a) {
        var o = r.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) a.push(o[2]);
          else {
            var n = new Promise(function (r, a) {
              o = e[t] = [r, a];
            });
            a.push((o[2] = n));
            var i = r.p + r.u(t),
              l = new Error(),
              s = function (a) {
                if (r.o(e, t) && ((o = e[t]), 0 !== o && (e[t] = void 0), o)) {
                  var n = a && ("load" === a.type ? "missing" : a.type),
                    i = a && a.target && a.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + n + ": " + i + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = n),
                    (l.request = i),
                    o[1](l);
                }
              };
            r.l(i, s, "chunk-" + t, t);
          }
      }),
        (r.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, a) {
          var o,
            n,
            i = a[0],
            l = a[1],
            s = a[2],
            d = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (o in l) r.o(l, o) && (r.m[o] = l[o]);
            if (s) var m = s(r);
          }
          for (t && t(a); d < i.length; d++)
            (n = i[d]), r.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return r.O(m);
        },
        a = (self["webpackChunkbtseee_github_io"] =
          self["webpackChunkbtseee_github_io"] || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })();
  var a = r.O(void 0, [998], function () {
    return r(1387);
  });
  a = r.O(a);
})();
//# sourceMappingURL=app.cb224e8f.js.map
