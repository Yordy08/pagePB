import { u as useState, _ as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, computed, ref, mergeProps, withCtx, createVNode, toDisplayString, unref, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import "C:/Users/Yordy/pagePB/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/Yordy/pagePB/node_modules/hookable/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/unctx/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Yordy/pagePB/node_modules/defu/dist/defu.mjs";
import "C:/Users/Yordy/pagePB/node_modules/ufo/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const stories = [
      { category: "POLÍTICA NACIÓN", title: "Gobierno anuncia nuevas becas de tecnología y apoyo para emprendedores", summary: "Las medidas buscan ampliar la formación tecnológica, impulsar el empleo y respaldar nuevos proyectos productivos.", image: "https://burbujapolitica.com/wp-content/uploads/2026/10/5116624690855218518_121-1024x576.jpg", date: "26 oct 2026" },
      { category: "POLÍTICA REGIÓN", title: "Dos integrantes de agrupación vallenata fallecen en siniestro vial", summary: "La noticia enluta al folclor vallenato y a las comunidades de la región.", image: "https://burbujapolitica.com/wp-content/uploads/2026/10/Web-47_5-1024x576.jpg", date: "26 oct 2026" },
      { category: "CÓRDOBA", title: "Avanza la etapa final del acueducto regional del San Jorge", summary: "Las pruebas del sistema avanzan hacia la puesta en marcha para varios municipios cordobeses.", image: "https://burbujapolitica.com/wp-content/uploads/2026/10/image_2026-10-26_07-55-49-1024x768.jpg", date: "26 oct 2026" },
      { category: "ACTUALIDAD", title: "Montería le apuesta a la energía solar para reducir el gasto eléctrico", summary: "La iniciativa busca reducir costos de energía en sedes públicas y avanzar en sostenibilidad.", image: "https://burbujapolitica.com/wp-content/uploads/2026/10/photo_2026-10-22_23-08-38-1024x689.jpg", date: "22 oct 2026" },
      { category: "OPINIÓN", title: "La seguridad nacional no puede estar por encima de la Constitución", summary: "Una reflexión sobre el equilibrio entre las políticas de seguridad y las garantías constitucionales.", image: "https://burbujapolitica.com/wp-content/uploads/2026/10/opinion-1-1024x576.jpg", date: "8 oct 2026" },
      { category: "COMUNIDAD", title: "Una comunidad cordobesa se reúne para rendir homenaje a su patrullera", summary: "Habitantes y familiares se reunieron en un acto de reconocimiento, memoria y gratitud.", image: "https://burbujapolitica.com/wp-content/uploads/2026/10/Web-45_5-1024x576.jpg", date: "26 oct 2026" }
    ];
    const mostReadStories = [stories[0], stories[1], stories[2], stories[5], stories[3]];
    const politicalStories = [stories[0], stories[1], stories[2], stories[4], stories[3]];
    const searchTerm = useState("bp-search", () => "");
    const sessionPublications = useState("bp-demo-published", () => []);
    const visibleStories = computed(() => [
      ...sessionPublications.value.map((post) => ({ ...post, category: post.category.toUpperCase(), image: post.image || stories[0].image })),
      ...stories
    ]);
    const leadStory = computed(() => visibleStories.value[0]);
    const activeTab = ref("Recientes");
    const filteredStories = computed(() => visibleStories.value.filter((story) => story.title.toLowerCase().includes(searchTerm.value.toLowerCase())));
    const articleSlug = (title) => title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const articleLink = (story) => ({
      path: `/noticia/${articleSlug(story.title)}/`,
      query: { title: story.title, category: story.category, image: story.image || "", date: story.date || "", summary: story.summary || "", body: Array.isArray(story.body) ? JSON.stringify(story.body) : story.body || "" }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-layout" }, _attrs))}><aside class="home-news-rail most-read-rail" aria-label="Noticias más leídas"><h2>Top 5 más leídas</h2><!--[-->`);
      ssrRenderList(mostReadStories, (story, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: story.title,
          to: articleLink(story),
          class: "rail-news-card"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="rail-rank"${_scopeId}>0${ssrInterpolate(index + 1)}</span><img${ssrRenderAttr("src", story.image)}${ssrRenderAttr("alt", story.title)} loading="lazy"${_scopeId}><span class="tag"${_scopeId}>${ssrInterpolate(story.category)}</span><b${_scopeId}>${ssrInterpolate(story.title)}</b>`);
            } else {
              return [
                createVNode("span", { class: "rail-rank" }, "0" + toDisplayString(index + 1), 1),
                createVNode("img", {
                  src: story.image,
                  alt: story.title,
                  loading: "lazy"
                }, null, 8, ["src", "alt"]),
                createVNode("span", { class: "tag" }, toDisplayString(story.category), 1),
                createVNode("b", null, toDisplayString(story.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></aside><main class="wrap main-content"><div class="flash"><strong><span class="live-dot"></span> EN DESARROLLO</strong><div class="ticker"><span>Lo que pasa en Córdoba y Colombia, contado con contexto.   •   Información, análisis y voces del territorio.   •   Sigue conectado con la actualidad.</span></div></div><section class="lead-grid">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: articleLink(unref(leadStory)),
        class: "lead-story"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(leadStory).image)} alt="Noticia destacada"${_scopeId}><div class="lead-shade"${_scopeId}></div><div class="lead-copy"${_scopeId}><span class="tag"${_scopeId}>${ssrInterpolate(unref(leadStory).category)}</span><h1${_scopeId}>${ssrInterpolate(unref(leadStory).title)}</h1><p${_scopeId}>${ssrInterpolate(unref(leadStory).summary || "Conoce los anuncios y las decisiones que están marcando la agenda.")}</p><span class="story-date"${_scopeId}>${ssrInterpolate(unref(leadStory).date)} <b${_scopeId}>·</b> 5 min de lectura</span></div>`);
          } else {
            return [
              createVNode("img", {
                src: unref(leadStory).image,
                alt: "Noticia destacada"
              }, null, 8, ["src"]),
              createVNode("div", { class: "lead-shade" }),
              createVNode("div", { class: "lead-copy" }, [
                createVNode("span", { class: "tag" }, toDisplayString(unref(leadStory).category), 1),
                createVNode("h1", null, toDisplayString(unref(leadStory).title), 1),
                createVNode("p", null, toDisplayString(unref(leadStory).summary || "Conoce los anuncios y las decisiones que están marcando la agenda."), 1),
                createVNode("span", { class: "story-date" }, [
                  createTextVNode(toDisplayString(unref(leadStory).date) + " ", 1),
                  createVNode("b", null, "·"),
                  createTextVNode(" 5 min de lectura")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="side-leads"><!--[-->`);
      ssrRenderList(unref(visibleStories).slice(1, 3), (story) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: story.title,
          to: articleLink(story),
          class: "side-story"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", story.image)}${ssrRenderAttr("alt", story.title)}${_scopeId}><div class="side-shade"${_scopeId}></div><div class="side-copy"${_scopeId}><span class="tag"${_scopeId}>${ssrInterpolate(story.category)}</span><h2${_scopeId}>${ssrInterpolate(story.title)}</h2><p class="side-excerpt"${_scopeId}>${ssrInterpolate(story.summary)}</p><span class="story-date"${_scopeId}>${ssrInterpolate(story.date)}</span></div>`);
            } else {
              return [
                createVNode("img", {
                  src: story.image,
                  alt: story.title
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "side-shade" }),
                createVNode("div", { class: "side-copy" }, [
                  createVNode("span", { class: "tag" }, toDisplayString(story.category), 1),
                  createVNode("h2", null, toDisplayString(story.title), 1),
                  createVNode("p", { class: "side-excerpt" }, toDisplayString(story.summary), 1),
                  createVNode("span", { class: "story-date" }, toDisplayString(story.date), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section><section id="noticias" class="latest section-space"><div class="section-heading"><div><span class="eyebrow">LA AGENDA DEL DÍA</span><h2>Últimas noticias</h2></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/category/politica-nacion/",
        class: "more-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ver todas las noticias <span${_scopeId}>→</span>`);
          } else {
            return [
              createTextVNode("Ver todas las noticias "),
              createVNode("span", null, "→")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(filteredStories).length) {
        _push(`<div class="news-grid"><!--[-->`);
        ssrRenderList(unref(filteredStories), (story) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: story.title,
            to: articleLink(story),
            class: "news-card"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="card-image"${_scopeId}><img${ssrRenderAttr("src", story.image)}${ssrRenderAttr("alt", story.title)} loading="lazy"${_scopeId}><span class="tag"${_scopeId}>${ssrInterpolate(story.category)}</span></div><div class="card-copy"${_scopeId}><h3${_scopeId}>${ssrInterpolate(story.title)}</h3><p class="card-excerpt"${_scopeId}>${ssrInterpolate(story.summary)}</p><p class="story-date"${_scopeId}>${ssrInterpolate(story.date)} <b${_scopeId}>·</b> Redacción</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "card-image" }, [
                    createVNode("img", {
                      src: story.image,
                      alt: story.title,
                      loading: "lazy"
                    }, null, 8, ["src", "alt"]),
                    createVNode("span", { class: "tag" }, toDisplayString(story.category), 1)
                  ]),
                  createVNode("div", { class: "card-copy" }, [
                    createVNode("h3", null, toDisplayString(story.title), 1),
                    createVNode("p", { class: "card-excerpt" }, toDisplayString(story.summary), 1),
                    createVNode("p", { class: "story-date" }, [
                      createTextVNode(toDisplayString(story.date) + " ", 1),
                      createVNode("b", null, "·"),
                      createTextVNode(" Redacción")
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<p class="empty-state">No encontramos noticias que coincidan con “${ssrInterpolate(unref(searchTerm))}”.</p>`);
      }
      _push(`</section><section id="secciones" class="section-space region-section"><div class="section-heading"><div><span class="eyebrow">INFORMACIÓN CERCANA</span><h2>Desde el territorio</h2></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/category/politica-cordoba/",
        class: "more-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Política Córdoba <span${_scopeId}>→</span>`);
          } else {
            return [
              createTextVNode("Política Córdoba "),
              createVNode("span", null, "→")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="region-grid">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: articleLink(stories[3]),
        class: "region-feature"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", stories[3].image)}${ssrRenderAttr("alt", stories[3].title)}${_scopeId}><div${_scopeId}><span class="tag"${_scopeId}>${ssrInterpolate(stories[3].category)}</span><h3${_scopeId}>${ssrInterpolate(stories[3].title)}</h3><p${_scopeId}>${ssrInterpolate(stories[3].summary)}</p></div>`);
          } else {
            return [
              createVNode("img", {
                src: stories[3].image,
                alt: stories[3].title
              }, null, 8, ["src", "alt"]),
              createVNode("div", null, [
                createVNode("span", { class: "tag" }, toDisplayString(stories[3].category), 1),
                createVNode("h3", null, toDisplayString(stories[3].title), 1),
                createVNode("p", null, toDisplayString(stories[3].summary), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="region-list"><!--[-->`);
      ssrRenderList([stories[2], stories[1], stories[5]], (story) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: story.title,
          to: articleLink(story),
          class: "region-item"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", story.image)}${ssrRenderAttr("alt", story.title)} loading="lazy"${_scopeId}><div${_scopeId}><span class="tag"${_scopeId}>${ssrInterpolate(story.category)}</span><h3${_scopeId}>${ssrInterpolate(story.title)}</h3><p class="region-excerpt"${_scopeId}>${ssrInterpolate(story.summary)}</p><span class="story-date"${_scopeId}>${ssrInterpolate(story.date)}</span></div>`);
            } else {
              return [
                createVNode("img", {
                  src: story.image,
                  alt: story.title,
                  loading: "lazy"
                }, null, 8, ["src", "alt"]),
                createVNode("div", null, [
                  createVNode("span", { class: "tag" }, toDisplayString(story.category), 1),
                  createVNode("h3", null, toDisplayString(story.title), 1),
                  createVNode("p", { class: "region-excerpt" }, toDisplayString(story.summary), 1),
                  createVNode("span", { class: "story-date" }, toDisplayString(story.date), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="opinion section-space"><div class="section-heading"><div><span class="eyebrow">VOCES Y PERSPECTIVAS</span><h2>Opinión</h2></div><div class="tabs"><!--[-->`);
      ssrRenderList(["Recientes", "Destacados"], (tab) => {
        _push(`<button class="${ssrRenderClass({ selected: unref(activeTab) === tab })}">${ssrInterpolate(tab)}</button>`);
      });
      _push(`<!--]--></div></div><div class="opinion-grid"><!--[-->`);
      ssrRenderList(stories.filter((item) => item.category === "OPINIÓN"), (story) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: story.title,
          to: articleLink(story),
          class: "opinion-card"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="opinion-image"${ssrRenderAttr("src", story.image)}${ssrRenderAttr("alt", story.title)} loading="lazy"${_scopeId}><span class="opinion-mark"${_scopeId}>“</span><span class="tag"${_scopeId}>${ssrInterpolate(story.category)}</span><h3${_scopeId}>${ssrInterpolate(story.title)}</h3><p class="opinion-excerpt"${_scopeId}>${ssrInterpolate(story.summary)}</p><div class="byline"${_scopeId}><span class="avatar"${_scopeId}>BP</span><span${_scopeId}><b${_scopeId}>Redacción Burbuja</b><small${_scopeId}>${ssrInterpolate(unref(activeTab) === "Recientes" ? story.date : "Columna destacada")}</small></span></div>`);
            } else {
              return [
                createVNode("img", {
                  class: "opinion-image",
                  src: story.image,
                  alt: story.title,
                  loading: "lazy"
                }, null, 8, ["src", "alt"]),
                createVNode("span", { class: "opinion-mark" }, "“"),
                createVNode("span", { class: "tag" }, toDisplayString(story.category), 1),
                createVNode("h3", null, toDisplayString(story.title), 1),
                createVNode("p", { class: "opinion-excerpt" }, toDisplayString(story.summary), 1),
                createVNode("div", { class: "byline" }, [
                  createVNode("span", { class: "avatar" }, "BP"),
                  createVNode("span", null, [
                    createVNode("b", null, "Redacción Burbuja"),
                    createVNode("small", null, toDisplayString(unref(activeTab) === "Recientes" ? story.date : "Columna destacada"), 1)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section><section class="about-band"><div class="about-logo">BP</div><div><span class="eyebrow">SOBRE NOSOTROS</span><h2>Sabemos de Política</h2><p>Burbuja Política es un medio digital especializado en política, entendiendo que muchos de los temas que gravitan sobre el desarrollo de los territorios pasan por la ejecución de programas y proyectos políticos. Hacer visible acciones gubernamentales y de la sociedad civil hacen parte de nuestro norte informativo.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/quienes-somos/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Conócenos <span${_scopeId}>→</span>`);
          } else {
            return [
              createTextVNode("Conócenos "),
              createVNode("span", null, "→")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></main><aside class="home-news-rail politics-rail" aria-label="Ámbito político"><h2>Ámbito político</h2><!--[-->`);
      ssrRenderList(politicalStories, (story) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: story.title,
          to: articleLink(story),
          class: "rail-news-card"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", story.image)}${ssrRenderAttr("alt", story.title)} loading="lazy"${_scopeId}><span class="tag"${_scopeId}>${ssrInterpolate(story.category)}</span><b${_scopeId}>${ssrInterpolate(story.title)}</b>`);
            } else {
              return [
                createVNode("img", {
                  src: story.image,
                  alt: story.title,
                  loading: "lazy"
                }, null, 8, ["src", "alt"]),
                createVNode("span", { class: "tag" }, toDisplayString(story.category), 1),
                createVNode("b", null, toDisplayString(story.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></aside></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BuFWk7ER.js.map
