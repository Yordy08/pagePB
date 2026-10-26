import { a as useRoute, _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, createTextVNode, unref, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, u as useSeoMeta } from './_plugin-vue_export-helper-Dsv-b7lp.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const rawQuery = (key2) => typeof route.query[key2] === "string" ? route.query[key2] : "";
    const titleFromSlug = String(route.params.slug).split("-").filter(Boolean).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    const title = computed(() => rawQuery("title") || titleFromSlug);
    const category = computed(() => rawQuery("category") || "Actualidad");
    const image = computed(() => rawQuery("image") || "https://burbujapolitica.com/wp-content/uploads/2026/10/5116624690855218518_121-1024x576.jpg");
    const date = computed(() => {
      const value = rawQuery("date") || "26 oct 2026";
      const months = { ene: "enero", feb: "febrero", mar: "marzo", abr: "abril", may: "mayo", jun: "junio", jul: "julio", ago: "agosto", sep: "septiembre", oct: "octubre", nov: "noviembre", dic: "diciembre" };
      const match = value.match(/^(\d{1,2})\s+([a-záéíóú]+)\s+(\d{4})$/i);
      return match ? `${months[match[2].slice(0, 3).toLowerCase()] || match[2]} ${match[1]}, ${match[3]}` : value;
    });
    const summary = computed(() => rawQuery("summary") || `Conoce los detalles y el contexto de esta noticia de ${category.value}.`);
    const key = (value) => value.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-");
    const incomingBody = computed(() => {
      const body = rawQuery("body");
      if (!body) return [];
      try {
        const parsed = JSON.parse(body);
        if (Array.isArray(parsed)) return parsed.filter((paragraph) => typeof paragraph === "string" && !!paragraph.trim());
      } catch {
      }
      return body.split(/\n\s*\n/).filter(Boolean);
    });
    const bodyParagraphs = computed(() => incomingBody.value.length ? incomingBody.value : [
      summary.value,
      `La noticia forma parte de los temas de ${category.value.toLocaleLowerCase()} que tienen impacto en las comunidades y en la conversaci\xF3n p\xFAblica. Esta cobertura organiza los datos principales para ofrecer una lectura clara de lo ocurrido.`,
      "El seguimiento de esta informaci\xF3n incluye los antecedentes, las voces involucradas y los pr\xF3ximos pasos que se conozcan. Burbuja Pol\xEDtica continuar\xE1 actualizando el contexto conforme haya nuevos datos."
    ]);
    const categoryPath = computed(() => {
      const slug = key(category.value);
      const paths = {
        "politica-nacion": "/category/politica-nacion/",
        "politica-cordoba": "/category/politica-cordoba/",
        "politica-region": "/category/politica-region/",
        "politica-internacional": "/category/politica-internacional/",
        internacional: "/category/politica-internacional/",
        opinion: "/category/opinion/",
        ambiente: "/category/ambiente/",
        ambiental: "/category/ambiente/",
        boletines: "/category/boletines/",
        cronicas: "/category/cronicas/"
      };
      return paths[slug] || "/";
    });
    const articleLink = (story) => ({
      path: `/noticia/${key(story.title)}/`,
      query: { title: story.title, category: story.category, image: story.image, date: story.date, summary: story.summary, body: story.body ? JSON.stringify(story.body) : "" }
    });
    const categories = ["Ambiente", "Boletines", "Cr\xF3nicas", "Ojo a los medios", "Opini\xF3n", "Pol\xEDtica C\xF3rdoba", "Pol\xEDtica Internacional", "Pol\xEDtica Naci\xF3n", "Pol\xEDtica Regi\xF3n"];
    const archiveMonths = ["octubre 2026", "septiembre 2026", "agosto 2026", "julio 2026", "junio 2026", "mayo 2026", "abril 2026", "marzo 2026", "febrero 2026", "enero 2026", "diciembre 2025", "noviembre 2025"];
    const recentStories = [
      { title: "Con la presencia del vicepresidente Jos\xE9 Manuel Restrepo, el ICETEX lanzar\xE1 su nueva oferta de cr\xE9dito con beneficios especiales", category: "Pol\xEDtica Naci\xF3n", date: "26 oct 2026", summary: "La entidad presentar\xE1 nuevas alternativas de financiaci\xF3n y beneficios para estudiantes.", image: "https://burbujapolitica.com/wp-content/uploads/2026/10/5116624690855218518_121-1024x576.jpg" },
      { title: "Mindefensa confirma la llegada de militares de EE. UU. a Tolemaida para el entrenamiento Vanguardia del Sur 2026", category: "Pol\xEDtica Naci\xF3n", date: "26 oct 2026", summary: "El anuncio se integra a la agenda nacional de defensa y cooperaci\xF3n.", image: "https://burbujapolitica.com/wp-content/uploads/2026/10/opinion-1-1024x576.jpg" },
      { title: "ELN entrega a la Defensor\xEDa del Pueblo a menor retenida en zona rural del Cauca", category: "Pol\xEDtica Naci\xF3n", date: "26 oct 2026", summary: "La Defensor\xEDa acompa\xF1a el proceso y realiza seguimiento a la situaci\xF3n.", image: "https://burbujapolitica.com/wp-content/uploads/2026/10/Web-47_5-1024x576.jpg" },
      { title: "Joven universitaria muere en siniestro vial entre Ovejas y El Carmen de Bol\xEDvar", category: "Pol\xEDtica Regi\xF3n", date: "26 oct 2026", summary: "La comunidad expresa sus condolencias y las autoridades investigan el hecho.", image: "https://burbujapolitica.com/wp-content/uploads/2026/10/Web-45_5-1024x576.jpg" },
      { title: "La Polic\xEDa Nacional en Monter\xEDa evoc\xF3 el primer D\xEDa de la Mujer Polic\xEDa", category: "Boletines", date: "26 oct 2026", summary: "Una jornada reconoci\xF3 la vocaci\xF3n y el servicio de las mujeres polic\xEDas.", image: "https://burbujapolitica.com/wp-content/uploads/2026/10/image_2026-10-26_07-55-49-1024x768.jpg" }
    ];
    const relatedByCategory = {
      ambiente: [
        { title: "Monter\xEDa bajo el agua: precipitaciones dejan veh\xEDculos atrapados y afectaciones en conjuntos residenciales", category: "Ambiente", date: "24 oct 2026", image: "https://burbujapolitica.com/wp-content/uploads/2026/10/photo_2026-10-22_23-08-38-1024x689.jpg", summary: "Las lluvias dejan afectaciones en varios sectores de Monter\xEDa." },
        { title: "Gobernaci\xF3n de C\xF3rdoba hace un llamado a extremar precauciones durante las lluvias", category: "Ambiente", date: "24 oct 2026", image: "https://burbujapolitica.com/wp-content/uploads/2026/10/Web-45_5-1024x576.jpg", summary: "Las autoridades recomiendan seguir los pron\xF3sticos y atender las indicaciones preventivas." },
        { title: "Alcald\xEDa de Monter\xEDa advierte sobre posible reactivaci\xF3n de lluvias", category: "Ambiente", date: "22 oct 2026", image: "https://burbujapolitica.com/wp-content/uploads/2026/10/image_2026-10-26_07-55-49-1024x768.jpg", summary: "Se recomienda estar atentos a la evoluci\xF3n de las condiciones clim\xE1ticas." }
      ]
    };
    const moreStories = computed(() => relatedByCategory[key(category.value)] || (key(category.value) === "ambiental" ? relatedByCategory.ambiente : recentStories.slice(1, 4).map((story) => ({ ...story, summary: "Lee los detalles y el contexto de esta noticia." }))));
    const recommendedStories = [
      ...recentStories.slice(0, 4).map((story) => ({ ...story, summary: "Informaci\xF3n y contexto de la actualidad nacional y regional." })),
      { title: "La Polic\xEDa Nacional en Monter\xEDa evoc\xF3 el primer D\xEDa de la Mujer Polic\xEDa, exaltando su legado y vocaci\xF3n de servicio", category: "Boletines", date: "26 oct 2026", image: "https://burbujapolitica.com/wp-content/uploads/2026/10/image_2026-10-26_07-55-49-1024x768.jpg", summary: "Un reconocimiento a la trayectoria y el servicio de las mujeres polic\xEDas." }
    ];
    const searchTerm = ref("");
    const filteredRecentStories = computed(() => recentStories.filter((story) => story.title.toLocaleLowerCase().includes(searchTerm.value.toLocaleLowerCase())));
    computed(() => "");
    const copied = ref(false);
    useSeoMeta({
      title: () => `${title.value} | Burbuja Pol\xEDtica`,
      description: () => summary.value,
      ogTitle: () => title.value,
      ogDescription: () => summary.value,
      ogImage: () => image.value
    });
    function categoryUrl(name) {
      const paths = {
        ambiente: "/category/ambiente/",
        boletines: "/category/boletines/",
        cronicas: "/category/cronicas/",
        "ojo-a-los-medios": "/category/ojo-a-los-medios/",
        opinion: "/category/opinion/",
        "politica-cordoba": "/category/politica-cordoba/",
        "politica-internacional": "/category/politica-internacional/",
        "politica-nacion": "/category/politica-nacion/",
        "politica-region": "/category/politica-region/"
      };
      return paths[key(name)] || "/";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "wrap article-page" }, _attrs))} data-v-ed4f56a9><nav class="article-breadcrumb" aria-label="Migas de pan" data-v-ed4f56a9>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Inicio`);
          } else {
            return [
              createTextVNode("Inicio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span data-v-ed4f56a9>\u203A</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: unref(categoryPath) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(category))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(category)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span data-v-ed4f56a9>\u203A</span><span class="breadcrumb-current" data-v-ed4f56a9>Noticia</span></nav><div class="article-layout" data-v-ed4f56a9><article class="article-main" data-v-ed4f56a9><header class="article-header" data-v-ed4f56a9><span class="tag article-category" data-v-ed4f56a9>${ssrInterpolate(unref(category))}</span><h1 data-v-ed4f56a9>${ssrInterpolate(unref(title))}</h1><div class="article-byline" data-v-ed4f56a9><span class="author-avatar" data-v-ed4f56a9>BP</span><span data-v-ed4f56a9><b data-v-ed4f56a9>Redacci\xF3n Burbuja Pol\xEDtica</b><small data-v-ed4f56a9>${ssrInterpolate(unref(date))}</small></span></div></header><figure class="article-hero" data-v-ed4f56a9><img${ssrRenderAttr("src", unref(image))}${ssrRenderAttr("alt", unref(title))} data-v-ed4f56a9><figcaption data-v-ed4f56a9>${ssrInterpolate(unref(title))}</figcaption></figure><div class="article-body" data-v-ed4f56a9><!--[-->`);
      ssrRenderList(unref(bodyParagraphs), (paragraph, index) => {
        _push(`<p class="${ssrRenderClass({ "article-lead": index === 0 })}" data-v-ed4f56a9>${ssrInterpolate(paragraph)}</p>`);
      });
      _push(`<!--]--><div class="article-end" data-v-ed4f56a9><span data-v-ed4f56a9>\u2014</span><b data-v-ed4f56a9>Burbuja Pol\xEDtica</b><small data-v-ed4f56a9>Sabemos de pol\xEDtica</small></div></div><div class="article-share" data-v-ed4f56a9><b data-v-ed4f56a9>Compartir esta noticia</b><button class="share-x" aria-label="Compartir en Twitter" data-v-ed4f56a9>\u{1D54F} <span data-v-ed4f56a9>Twitter</span></button><button class="share-facebook" aria-label="Compartir en Facebook" data-v-ed4f56a9>f <span data-v-ed4f56a9>Facebook</span></button><button class="share-whatsapp" aria-label="Compartir por WhatsApp" data-v-ed4f56a9>\u25C9 <span data-v-ed4f56a9>WhatsApp</span></button><button class="share-copy" data-v-ed4f56a9>${ssrInterpolate(unref(copied) ? "\u2713 Copiado" : "\u2197 Copiar enlace")}</button></div><section class="more-stories" data-v-ed4f56a9><div class="related-heading" data-v-ed4f56a9><div data-v-ed4f56a9><span class="eyebrow" data-v-ed4f56a9>SIGUE LEYENDO</span><h2 data-v-ed4f56a9>M\xE1s historias</h2></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: unref(categoryPath) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(category))} \u2192`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(category)) + " \u2192", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--[-->`);
      ssrRenderList(unref(moreStories), (story) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: story.title,
          to: articleLink(story),
          class: "more-story-row"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", story.image)}${ssrRenderAttr("alt", story.title)} data-v-ed4f56a9${_scopeId}><div data-v-ed4f56a9${_scopeId}><span class="tag" data-v-ed4f56a9${_scopeId}>${ssrInterpolate(story.category)}</span><h3 data-v-ed4f56a9${_scopeId}>${ssrInterpolate(story.title)}</h3><p data-v-ed4f56a9${_scopeId}>${ssrInterpolate(story.summary)}</p><small data-v-ed4f56a9${_scopeId}>${ssrInterpolate(story.date)}</small></div>`);
            } else {
              return [
                createVNode("img", {
                  src: story.image,
                  alt: story.title
                }, null, 8, ["src", "alt"]),
                createVNode("div", null, [
                  createVNode("span", { class: "tag" }, toDisplayString(story.category), 1),
                  createVNode("h3", null, toDisplayString(story.title), 1),
                  createVNode("p", null, toDisplayString(story.summary), 1),
                  createVNode("small", null, toDisplayString(story.date), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></section></article><aside class="article-sidebar" data-v-ed4f56a9><section class="sidebar-widget search-widget" data-v-ed4f56a9><h2 data-v-ed4f56a9>Buscar</h2><form data-v-ed4f56a9><input${ssrRenderAttr("value", unref(searchTerm))} placeholder="Buscar \u2026" aria-label="Buscar noticias" data-v-ed4f56a9><button aria-label="Buscar" data-v-ed4f56a9>\u2315</button></form></section><section class="sidebar-widget" data-v-ed4f56a9><h2 data-v-ed4f56a9>Entradas recientes</h2><div class="recent-list" data-v-ed4f56a9><!--[-->`);
      ssrRenderList(unref(filteredRecentStories), (story) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: story.title,
          to: articleLink(story),
          class: "recent-item"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", story.image)}${ssrRenderAttr("alt", story.title)} data-v-ed4f56a9${_scopeId}><span data-v-ed4f56a9${_scopeId}><b data-v-ed4f56a9${_scopeId}>${ssrInterpolate(story.title)}</b><small data-v-ed4f56a9${_scopeId}>${ssrInterpolate(story.summary)}</small><small class="recent-date" data-v-ed4f56a9${_scopeId}>${ssrInterpolate(story.date)}</small></span>`);
            } else {
              return [
                createVNode("img", {
                  src: story.image,
                  alt: story.title
                }, null, 8, ["src", "alt"]),
                createVNode("span", null, [
                  createVNode("b", null, toDisplayString(story.title), 1),
                  createVNode("small", null, toDisplayString(story.summary), 1),
                  createVNode("small", { class: "recent-date" }, toDisplayString(story.date), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      if (!unref(filteredRecentStories).length) {
        _push(`<p class="sidebar-empty" data-v-ed4f56a9>No hay resultados para esa b\xFAsqueda.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><details class="sidebar-widget archive-widget" data-v-ed4f56a9><summary data-v-ed4f56a9>Archivos</summary><ul data-v-ed4f56a9><!--[-->`);
      ssrRenderList(archiveMonths, (month) => {
        _push(`<li data-v-ed4f56a9><a href="#" data-v-ed4f56a9>${ssrInterpolate(month)}</a></li>`);
      });
      _push(`<!--]--></ul><button class="archive-more" data-v-ed4f56a9>Ver m\xE1s archivos +</button></details><section class="sidebar-widget" data-v-ed4f56a9><h2 data-v-ed4f56a9>Categor\xEDas</h2><ul class="category-sidebar-list" data-v-ed4f56a9><!--[-->`);
      ssrRenderList(categories, (name) => {
        _push(`<li data-v-ed4f56a9>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: categoryUrl(name)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></section><section class="sidebar-widget sidebar-about" data-v-ed4f56a9><span class="about-bp" data-v-ed4f56a9>BP</span><b data-v-ed4f56a9>Burbuja Pol\xEDtica</b><p data-v-ed4f56a9>Informaci\xF3n, an\xE1lisis y voces del territorio.</p></section></aside></div><section class="recommended-section" data-v-ed4f56a9><div class="related-heading" data-v-ed4f56a9><div data-v-ed4f56a9><span class="eyebrow" data-v-ed4f56a9>M\xC1S ACTUALIDAD</span><h2 data-v-ed4f56a9>Te pueden interesar</h2></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ver portada \u2192`);
          } else {
            return [
              createTextVNode("Ver portada \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="recommended-grid" data-v-ed4f56a9><!--[-->`);
      ssrRenderList(recommendedStories, (story) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: story.title,
          to: articleLink(story),
          class: "recommended-card"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="recommended-image" data-v-ed4f56a9${_scopeId}><img${ssrRenderAttr("src", story.image)}${ssrRenderAttr("alt", story.title)} loading="lazy" data-v-ed4f56a9${_scopeId}><span class="tag" data-v-ed4f56a9${_scopeId}>${ssrInterpolate(story.category)}</span></div><div class="recommended-copy" data-v-ed4f56a9${_scopeId}><h3 data-v-ed4f56a9${_scopeId}>${ssrInterpolate(story.title)}</h3><p data-v-ed4f56a9${_scopeId}>${ssrInterpolate(story.summary)}</p><small data-v-ed4f56a9${_scopeId}>${ssrInterpolate(story.date)}</small></div>`);
            } else {
              return [
                createVNode("div", { class: "recommended-image" }, [
                  createVNode("img", {
                    src: story.image,
                    alt: story.title,
                    loading: "lazy"
                  }, null, 8, ["src", "alt"]),
                  createVNode("span", { class: "tag" }, toDisplayString(story.category), 1)
                ]),
                createVNode("div", { class: "recommended-copy" }, [
                  createVNode("h3", null, toDisplayString(story.title), 1),
                  createVNode("p", null, toDisplayString(story.summary), 1),
                  createVNode("small", null, toDisplayString(story.date), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/noticia/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ed4f56a9"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-BpfHhroR.mjs.map
