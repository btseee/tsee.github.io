"use strict";
(self["webpackChunkbtseee_github_io"] =
  self["webpackChunkbtseee_github_io"] || []).push([
  [176],
  {
    5677: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return Z;
          },
        });
      var a = i(3396);
      const r = {
        class:
          "container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10",
      };
      function s(e, t, i, s, l, n) {
        const o = (0, a.up)("ContactForm"),
          c = (0, a.up)("ContactDetails");
        return (
          (0, a.wg)(),
          (0, a.iD)("div", r, [
            (0, a.Wm)(o),
            (0, a.Wm)(c, { contacts: e.contacts }, null, 8, ["contacts"]),
          ])
        );
      }
      var l = i(8164),
        n = i.n(l),
        o = i(9242);
      const c = { class: "w-full md:w-1/2" },
        d = {
          class:
            "leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left",
        },
        u = (0, a._)(
          "p",
          {
            class:
              "font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8",
          },
          " Гадаадад байгаа тул үүнийг бөглөнө үү би тантай холбогдоно ",
          -1,
        );
      function m(e, t, i, r, s, l) {
        const n = (0, a.up)("FormInput"),
          m = (0, a.up)("FormTextarea"),
          p = (0, a.up)("Button");
        return (
          (0, a.wg)(),
          (0, a.iD)("div", c, [
            (0, a._)("div", d, [
              u,
              (0, a._)(
                "form",
                {
                  onSubmit:
                    t[0] ||
                    (t[0] = (0, o.iM)(
                      (...e) => l.submitForm && l.submitForm(...e),
                      ["prevent"],
                    )),
                  class: "font-general-regular space-y-7",
                },
                [
                  (0, a.Wm)(
                    n,
                    { label: "Нэр", inputIdentifier: "name", ref: "name" },
                    null,
                    512,
                  ),
                  (0, a.Wm)(
                    n,
                    {
                      label: "Имэйл",
                      inputIdentifier: "email",
                      inputType: "email",
                      ref: "email",
                    },
                    null,
                    512,
                  ),
                  (0, a.Wm)(
                    n,
                    {
                      label: "Гарчиг",
                      inputIdentifier: "subject",
                      ref: "subject",
                    },
                    null,
                    512,
                  ),
                  (0, a.Wm)(
                    m,
                    {
                      label: "Тайлбар",
                      textareaIdentifier: "message",
                      ref: "message",
                    },
                    null,
                    512,
                  ),
                  (0, a._)("div", null, [
                    (0, a.Wm)(p, {
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
          ])
        );
      }
      var p = i(4294),
        g = i(4899),
        f = i(1607),
        b = i(2775),
        x = {
          components: { Button: g.Z, FormInput: f.Z, FormTextarea: b.Z },
          methods: {
            async submitForm() {
              const e = {
                name: this.$refs.name.value,
                email: this.$refs.email.value,
                subject: this.$refs.subject.value,
                message: this.$refs.message.value,
              };
              try {
                const t = await p.ZP.send(
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
        },
        h = i(89);
      const j = (0, h.Z)(x, [["render", m]]);
      var v = j,
        w = i(7139);
      const y = { class: "w-full md:w-1/2" },
        k = { class: "text-left max-w-xl px-6" },
        _ = (0, a._)(
          "h2",
          {
            class:
              "font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8",
          },
          " Холбоо барих ",
          -1,
        ),
        P = { class: "font-general-regular" },
        I = ["data-feather"],
        D = ["href"];
      function q(e, t, i, r, s, l) {
        return (
          (0, a.wg)(),
          (0, a.iD)("div", y, [
            (0, a._)("div", k, [
              _,
              (0, a._)("ul", P, [
                ((0, a.wg)(!0),
                (0, a.iD)(
                  a.HY,
                  null,
                  (0, a.Ko)(
                    i.contacts,
                    (e) => (
                      (0, a.wg)(),
                      (0, a.iD)("li", { class: "flex", key: e.id }, [
                        (0, a._)(
                          "i",
                          {
                            "data-feather": e.icon,
                            class: "w-5 text-gray-500 dark:text-gray-400 mr-4",
                          },
                          null,
                          8,
                          I,
                        ),
                        (0, a._)(
                          "a",
                          {
                            href: e.action + e.name,
                            class: (0, w.C_)([
                              "text-lg mb-4 text-ternary-dark dark:text-ternary-light",
                              "mail" === e.icon || "phone" === e.icon
                                ? "hover:underline cursor-pointer"
                                : "",
                            ]),
                            "aria-label": "Website and Phone",
                          },
                          (0, w.zw)(e.name),
                          11,
                          D,
                        ),
                      ])
                    ),
                  ),
                  128,
                )),
              ]),
            ]),
          ])
        );
      }
      var H = { props: ["contacts"] };
      const z = (0, h.Z)(H, [["render", q]]);
      var W = z,
        C = {
          components: { ContactForm: v, ContactDetails: W },
          data: () => ({
            contacts: [
              {
                id: 1,
                name: "Kelkheim, Frankfurt, Germany",
                icon: "map-pin",
                action:
                  "https://www.google.com/maps/d/viewer?mid=1w46KK4d-F5x767hCPljCGNsU2W8&hl=en&ll=50.129257053363574%2C8.453594999999972&z=15",
              },
              {
                id: 2,
                name: "bbattseren88@gmail.com",
                icon: "mail",
                action: "mailto:",
              },
            ],
          }),
          mounted() {
            n().replace();
          },
          updated() {
            n().replace();
          },
          methods: {},
        };
      const F = (0, h.Z)(C, [["render", s]]);
      var Z = F;
    },
    1805: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return d;
          },
        });
      var a = i(3396);
      const r = { class: "container mx-auto" };
      function s(e, t, i, s, l, n) {
        const o = (0, a.up)("ProjectsGrid");
        return (0, a.wg)(), (0, a.iD)("div", r, [(0, a.Wm)(o)]);
      }
      var l = i(7594),
        n = { name: "Projects", components: { ProjectsGrid: l.Z } },
        o = i(89);
      const c = (0, o.Z)(n, [["render", s]]);
      var d = c;
    },
    4868: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return se;
          },
        });
      var a = i(3396);
      const r = { class: "container mx-auto mt-10 sm:mt-20" };
      function s(e, t, i, s, l, n) {
        const o = (0, a.up)("ProjectHeader"),
          c = (0, a.up)("ProjectGallery"),
          d = (0, a.up)("ProjectInfo"),
          u = (0, a.up)("ProjectRelatedProjects");
        return (
          (0, a.wg)(),
          (0, a.iD)("div", r, [
            (0, a.Wm)(
              o,
              { singleProjectHeader: e.singleProjectHeader },
              null,
              8,
              ["singleProjectHeader"],
            ),
            (0, a.Wm)(c, { projectImages: e.projectImages }, null, 8, [
              "projectImages",
            ]),
            (0, a.Wm)(d, { projectInfo: e.projectInfo }, null, 8, [
              "projectInfo",
            ]),
            (0, a.Wm)(u, { relatedProject: e.relatedProject }, null, 8, [
              "relatedProject",
            ]),
          ])
        );
      }
      var l = i(8164),
        n = i.n(l),
        o = i(7139);
      const c = {
          class:
            "font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7",
        },
        d = { class: "flex" },
        u = { class: "flex items-center mr-10" },
        m = (0, a._)(
          "i",
          {
            "data-feather": "clock",
            class: "w-4 h-4 text-ternary-dark dark:text-ternary-light",
          },
          null,
          -1,
        ),
        p = {
          class:
            "font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light",
        },
        g = { class: "flex items-center" },
        f = (0, a._)(
          "i",
          {
            "data-feather": "tag",
            class: "w-4 h-4 text-ternary-dark dark:text-ternary-light",
          },
          null,
          -1,
        ),
        b = {
          class:
            "font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light",
        };
      function x(e, t, i, r, s, l) {
        return (
          (0, a.wg)(),
          (0, a.iD)("div", null, [
            (0, a._)(
              "p",
              c,
              (0, o.zw)(i.singleProjectHeader.singleProjectTitle),
              1,
            ),
            (0, a._)("div", d, [
              (0, a._)("div", u, [
                m,
                (0, a._)(
                  "span",
                  p,
                  (0, o.zw)(i.singleProjectHeader.singleProjectDate),
                  1,
                ),
              ]),
              (0, a._)("div", g, [
                f,
                (0, a._)(
                  "span",
                  b,
                  (0, o.zw)(i.singleProjectHeader.singleProjectTag),
                  1,
                ),
              ]),
            ]),
          ])
        );
      }
      var h = { props: ["singleProjectHeader"] },
        j = i(89);
      const v = (0, j.Z)(h, [["render", x]]);
      var w = v;
      const y = { class: "grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12" },
        k = ["src"];
      function _(e, t, i, r, s, l) {
        return (
          (0, a.wg)(),
          (0, a.iD)("div", y, [
            ((0, a.wg)(!0),
            (0, a.iD)(
              a.HY,
              null,
              (0, a.Ko)(
                i.projectImages,
                (e) => (
                  (0, a.wg)(),
                  (0, a.iD)("div", { class: "mb-10 sm:mb-0", key: e.id }, [
                    (0, a._)(
                      "img",
                      {
                        src: e.img,
                        class:
                          "rounded-xl cursor-pointer shadow-lg sm:shadow-none",
                        alt: "{{ projectImage.title }}",
                      },
                      null,
                      8,
                      k,
                    ),
                  ])
                ),
              ),
              128,
            )),
          ])
        );
      }
      var P = { props: ["projectImages"] };
      const I = (0, j.Z)(P, [["render", _]]);
      var D = I;
      const q = { class: "block sm:flex gap-0 sm:gap-10 mt-14" },
        H = { class: "w-full sm:w-1/3 text-left" },
        z = { class: "mb-7" },
        W = {
          class:
            "font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2",
        },
        C = { class: "leading-loose" },
        F = { class: "mb-7" },
        Z = {
          class:
            "font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2",
        },
        $ = {
          class:
            "font-general-regular text-primary-dark dark:text-ternary-light",
        },
        K = { class: "mb-7" },
        S = {
          class:
            "font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2",
        },
        L = {
          class:
            "font-general-regular text-primary-dark dark:text-ternary-light",
        },
        T = {
          class:
            "font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2",
        },
        U = { class: "flex items-center gap-3 mt-5" },
        Y = ["href"],
        G = ["data-feather"],
        M = { class: "w-full sm:w-2/3 text-left mt-10 sm:mt-0" },
        N = {
          class:
            "font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7",
        };
      function A(e, t, i, r, s, l) {
        return (
          (0, a.wg)(),
          (0, a.iD)("div", q, [
            (0, a._)("div", H, [
              (0, a._)("div", z, [
                (0, a._)("p", W, (0, o.zw)(i.projectInfo.clientHeading), 1),
                (0, a._)("ul", C, [
                  ((0, a.wg)(!0),
                  (0, a.iD)(
                    a.HY,
                    null,
                    (0, a.Ko)(
                      i.projectInfo.companyInfos,
                      (e) => (
                        (0, a.wg)(),
                        (0, a.iD)(
                          "li",
                          {
                            key: e,
                            class:
                              "font-general-regular text-ternary-dark dark:text-ternary-light",
                          },
                          [
                            (0, a._)(
                              "span",
                              null,
                              (0, o.zw)(e.title) + ": ",
                              1,
                            ),
                            (0, a._)(
                              "a",
                              {
                                href: "#",
                                class: (0, o.C_)(
                                  "Website" == e.title || "Phone" == e.title
                                    ? "hover:underline cursor-pointer"
                                    : "",
                                ),
                                "aria-label": "Project Website and Phone",
                              },
                              (0, o.zw)(e.details),
                              3,
                            ),
                          ],
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
              (0, a._)("div", F, [
                (0, a._)("p", Z, (0, o.zw)(i.projectInfo.objectivesHeading), 1),
                (0, a._)("p", $, (0, o.zw)(i.projectInfo.objectivesDetails), 1),
              ]),
              (0, a._)("div", K, [
                (0, a._)(
                  "p",
                  S,
                  (0, o.zw)(i.projectInfo.technologies[0].title),
                  1,
                ),
                (0, a._)(
                  "p",
                  L,
                  (0, o.zw)(i.projectInfo.technologies[0].techs.join(", ")),
                  1,
                ),
              ]),
              (0, a._)("div", null, [
                (0, a._)(
                  "p",
                  T,
                  (0, o.zw)(i.projectInfo.socialSharingsHeading),
                  1,
                ),
                (0, a._)("div", U, [
                  ((0, a.wg)(!0),
                  (0, a.iD)(
                    a.HY,
                    null,
                    (0, a.Ko)(
                      i.projectInfo.socialSharings,
                      (e) => (
                        (0, a.wg)(),
                        (0, a.iD)(
                          "a",
                          {
                            key: e.id,
                            href: e.url,
                            target: "__blank",
                            "aria-label": "Share Project",
                            class:
                              "bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500",
                          },
                          [
                            (0, a._)(
                              "i",
                              {
                                "data-feather": e.icon,
                                class: "w-4 lg:w-5 h-4 lg:h-5",
                              },
                              null,
                              8,
                              G,
                            ),
                          ],
                          8,
                          Y,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
            ]),
            (0, a._)("div", M, [
              (0, a._)(
                "p",
                N,
                (0, o.zw)(i.projectInfo.projectDetailsHeading),
                1,
              ),
              ((0, a.wg)(!0),
              (0, a.iD)(
                a.HY,
                null,
                (0, a.Ko)(
                  i.projectInfo.projectDetails,
                  (e) => (
                    (0, a.wg)(),
                    (0, a.iD)(
                      "p",
                      {
                        key: e.id,
                        class:
                          "font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light",
                      },
                      (0, o.zw)(e.details),
                      1,
                    )
                  ),
                ),
                128,
              )),
            ]),
          ])
        );
      }
      var R = {
        props: ["projectInfo"],
        mounted() {
          n().replace();
        },
        updated() {
          n().replace();
        },
      };
      const E = (0, j.Z)(R, [["render", A]]);
      var B = E;
      const O = {
          class:
            "mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark",
        },
        J = {
          class:
            "font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left",
        },
        Q = { class: "grid grid-cols-1 sm:grid-cols-4 gap-10" },
        V = ["src", "alt"];
      function X(e, t, i, r, s, l) {
        return (
          (0, a.wg)(),
          (0, a.iD)("div", O, [
            (0, a._)(
              "p",
              J,
              (0, o.zw)(i.relatedProject.relatedProjectsHeading),
              1,
            ),
            (0, a._)("div", Q, [
              ((0, a.wg)(!0),
              (0, a.iD)(
                a.HY,
                null,
                (0, a.Ko)(
                  i.relatedProject.relatedProjects,
                  (e) => (
                    (0, a.wg)(),
                    (0, a.iD)("div", { key: e.id }, [
                      (0, a._)(
                        "img",
                        {
                          src: e.img,
                          class: "rounded-xl cursor-pointer",
                          alt: e.title,
                        },
                        null,
                        8,
                        V,
                      ),
                    ])
                  ),
                ),
                128,
              )),
            ]),
          ])
        );
      }
      var ee = { props: ["relatedProject"] };
      const te = (0, j.Z)(ee, [["render", X]]);
      var ie = te,
        ae = {
          name: "Projects",
          components: {
            ProjectHeader: w,
            ProjectGallery: D,
            ProjectInfo: B,
            ProjectRelatedProjects: ie,
          },
          data: () => ({
            singleProjectHeader: {
              singleProjectTitle: "Pasdfasdfads",
              singleProjectDate: "Jul 26, 2021",
              singleProjectTag: "Mobile Application",
            },
            projectImages: [
              { id: 1, title: "asdgasdg", img: i(2035) },
              { id: 2, title: "asdgasdg", img: i(7294) },
              { id: 3, title: "Kabul Project Management UI", img: i(8687) },
            ],
            projectInfo: {
              clientHeading: "Харилцагчийн тухай",
              companyInfos: [
                { id: 1, title: "Нэр", details: "SendMN" },
                {
                  id: 2,
                  title: "Үйлчилгээ",
                  details: "UI Design & Frontend Development",
                },
                { id: 3, title: "Вебсайт", details: "https://www.send.mn" },
                { id: 4, title: "Утас", details: "+976" },
              ],
              objectivesHeading: "Oasdgasdg",
              objectivesDetails:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
              technologies: [
                {
                  title: "asdgasd",
                  techs: ["Flutter", "Gitlab", "Ci/CD", "C#", ".NET"],
                },
              ],
              projectDetailsHeading: "Casd",
              projectDetails: [
                {
                  id: 1,
                  details:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
                },
                {
                  id: 2,
                  details:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
                },
                {
                  id: 3,
                  details:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
                },
                {
                  id: 4,
                  details:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
                },
              ],
              socialSharingsHeading: "Share This",
              socialSharings: [
                {
                  id: 1,
                  name: "Twitter",
                  icon: "twitter",
                  url: "https://twitter.com/realstoman",
                },
                {
                  id: 2,
                  name: "Instagram",
                  icon: "instagram",
                  url: "https://instagram.com/realstoman",
                },
                {
                  id: 3,
                  name: "Facebook",
                  icon: "facebook",
                  url: "https://facebook.com/",
                },
                {
                  id: 4,
                  name: "LinkedIn",
                  icon: "linkedin",
                  url: "https://linkedin.com/",
                },
                {
                  id: 5,
                  name: "Youtube",
                  icon: "youtube",
                  url: "https://www.youtube.com/c/StomanStudio",
                },
              ],
            },
            relatedProject: {
              relatedProjectsHeading: "Related Projects",
              relatedProjects: [
                { id: 1, title: "Mobile UI", img: i(2725) },
                { id: 2, title: "Web Application", img: i(4600) },
                { id: 3, title: "UI Design", img: i(7034) },
                { id: 4, title: "Kabul Mobile App UI", img: i(8687) },
              ],
            },
          }),
          mounted() {
            n().replace();
          },
          updated() {
            n().replace();
          },
          methods: {},
        };
      const re = (0, j.Z)(ae, [["render", s]]);
      var se = re;
    },
    2725: function (e, t, i) {
      e.exports = i.p + "img/mobile-project-1.8b4f9e2f.jpg";
    },
    8687: function (e, t, i) {
      e.exports = i.p + "img/mobile-project-2.9bd76372.jpg";
    },
    2035: function (e, t, i) {
      e.exports = i.p + "img/ui-project-1.96e7f21e.jpg";
    },
    7034: function (e, t, i) {
      e.exports = i.p + "img/ui-project-2.afd87ce7.jpg";
    },
    4600: function (e, t, i) {
      e.exports = i.p + "img/web-project-1.d1debdf5.jpg";
    },
    7294: function (e, t, i) {
      e.exports = i.p + "img/web-project-2.ecd6c182.jpg";
    },
  },
]);
//# sourceMappingURL=projects.529e5be4.js.map
