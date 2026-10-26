import { u as useState, _ as __nuxt_component_0 } from './server.mjs';
import { _ as __nuxt_component_1 } from './ThemeToggle-B3eIgdrC.mjs';
import { defineComponent, computed, reactive, ref, watch, mergeProps, withCtx, createVNode, unref, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { u as useCookie } from './cookie-nggpa9hC.mjs';
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
  __name: "revision",
  __ssrInlineRender: true,
  setup(__props) {
    const entries = useState("bp-demo-entries", () => [
      { id: 1, title: "Avanza la etapa final del acueducto regional del San Jorge", category: "Pol\xEDtica C\xF3rdoba", date: "26 oct 2026", status: "Publicado", views: 2480, image: "https://burbujapolitica.com/wp-content/uploads/2026/10/image_2026-10-26_07-55-49-1024x768.jpg", summary: "Las pruebas del sistema avanzan hacia la puesta en marcha para varios municipios cordobeses." },
      { id: 2, title: "Dos integrantes de agrupaci\xF3n vallenata fallecen en siniestro vial", category: "Pol\xEDtica Regi\xF3n", date: "26 oct 2026", status: "Publicado", views: 1892, image: "https://burbujapolitica.com/wp-content/uploads/2026/10/Web-47_5-1024x576.jpg", summary: "La noticia enluta al folclor vallenato y a las comunidades de la regi\xF3n." },
      { id: 3, title: "Gobierno anuncia nuevas becas de tecnolog\xEDa y apoyo para emprendedores", category: "Pol\xEDtica Naci\xF3n", date: "26 oct 2026", status: "En revisi\xF3n", views: 0 },
      { id: 4, title: "La seguridad nacional no puede estar por encima de la Constituci\xF3n", category: "Opini\xF3n", date: "24 oct 2026", status: "Borrador", views: 0 },
      { id: 5, title: "Monter\xEDa le apuesta a la energ\xEDa solar para reducir el gasto el\xE9ctrico", category: "Ambiente", date: "22 oct 2026", status: "Publicado", views: 964 }
    ]);
    useState("bp-demo-published", () => []);
    const categories = useState("bp-demo-categories", () => ["Boletines", "Pol\xEDtica Naci\xF3n", "Pol\xEDtica C\xF3rdoba", "Pol\xEDtica Regi\xF3n", "Pol\xEDtica Internacional", "Ambiente", "Opini\xF3n", "Cr\xF3nicas", "Ojo a los medios"]);
    const todayLabel = new Intl.DateTimeFormat("es-CO", { day: "2-digit", month: "short", year: "numeric" }).format(/* @__PURE__ */ new Date()).toLocaleLowerCase().replace(/\s+de\s+/g, " ");
    const todayEntries = computed(() => entries.value.filter((entry) => entry.status === "Publicado" && (entry.date.toLocaleLowerCase() === todayLabel || entry.date === "Ahora")));
    const drafts = reactive({});
    const copiedId = ref(null);
    const sharedOnX = ref([]);
    const editingEntryId = ref(null);
    const editingEntry = computed(() => todayEntries.value.find((entry) => entry.id === editingEntryId.value) || null);
    const toast = ref("");
    useCookie("bp-admin-demo-session");
    useCookie("bp-admin-demo-role");
    watch(todayEntries, (items) => {
      for (const entry of items) {
        if (!drafts[entry.id]) drafts[entry.id] = { title: entry.title, category: entry.category, image: entry.image || "", summary: entry.summary || "", body: entry.body || "" };
      }
    }, { immediate: true });
    useSeoMeta({ title: "Revisi\xF3n de hoy | Burbuja Pol\xEDtica", description: "Revisa y actualiza las publicaciones del d\xEDa.", robots: "noindex, nofollow" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ThemeToggle = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "revision-page" }, _attrs))} data-v-6e5a6c04><header class="revision-topbar" data-v-6e5a6c04>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dasbuard",
        class: "revision-brand"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="revision-mark" data-v-6e5a6c04${_scopeId}>BP</span><span data-v-6e5a6c04${_scopeId}><b data-v-6e5a6c04${_scopeId}>Burbuja Pol\xEDtica</b><small data-v-6e5a6c04${_scopeId}>REVISI\xD3N EDITORIAL</small></span>`);
          } else {
            return [
              createVNode("span", { class: "revision-mark" }, "BP"),
              createVNode("span", null, [
                createVNode("b", null, "Burbuja Pol\xEDtica"),
                createVNode("small", null, "REVISI\xD3N EDITORIAL")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="revision-actions" data-v-6e5a6c04><span class="revision-date" data-v-6e5a6c04><i data-v-6e5a6c04></i> ${ssrInterpolate(unref(todayLabel))}</span>`);
      _push(ssrRenderComponent(_component_ThemeToggle, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dasbuard",
        class: "back-dashboard"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u2190 Volver al panel`);
          } else {
            return [
              createTextVNode("\u2190 Volver al panel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="logout-button" data-v-6e5a6c04>Cerrar sesi\xF3n</button></div></header><div class="revision-container" data-v-6e5a6c04><div class="revision-heading" data-v-6e5a6c04><div data-v-6e5a6c04><span class="revision-kicker" data-v-6e5a6c04>CONTROL DE PUBLICACIONES</span><h1 data-v-6e5a6c04>Revisi\xF3n del d\xEDa</h1><p data-v-6e5a6c04>Verifica los titulares, el contexto y las im\xE1genes antes de compartir cada noticia.</p></div><div class="revision-summary" data-v-6e5a6c04><b data-v-6e5a6c04>${ssrInterpolate(unref(todayEntries).length)}</b><span data-v-6e5a6c04>publicaciones<br data-v-6e5a6c04>de hoy</span></div></div>`);
      if (unref(todayEntries).length) {
        _push(`<div class="revision-list" data-v-6e5a6c04><!--[-->`);
        ssrRenderList(unref(todayEntries), (entry) => {
          _push(`<article class="${ssrRenderClass([{ "shared-x-card": unref(sharedOnX).includes(entry.id) }, "revision-card"])}" data-v-6e5a6c04><div class="revision-card-top" data-v-6e5a6c04><div data-v-6e5a6c04><span class="revision-live" data-v-6e5a6c04><i data-v-6e5a6c04></i> PUBLICADA</span><span class="revision-card-date" data-v-6e5a6c04>${ssrInterpolate(entry.date)}</span></div><div class="revision-top-meta" data-v-6e5a6c04><span class="revision-views" data-v-6e5a6c04>\u25C9 ${ssrInterpolate(entry.views.toLocaleString("es-CO"))} vistas</span>`);
          if (unref(sharedOnX).includes(entry.id)) {
            _push(`<span class="x-published-badge" data-v-6e5a6c04><b data-v-6e5a6c04>\u{1D54F}</b> PUBLICADO EN X</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><div class="revision-card-layout" data-v-6e5a6c04>`);
          if (entry.image) {
            _push(`<img class="revision-card-image"${ssrRenderAttr("src", entry.image)}${ssrRenderAttr("alt", entry.title)} data-v-6e5a6c04>`);
          } else {
            _push(`<div class="revision-card-image no-image" data-v-6e5a6c04><span data-v-6e5a6c04>\u25A7</span><small data-v-6e5a6c04>Sin imagen</small></div>`);
          }
          _push(`<div class="revision-card-content" data-v-6e5a6c04><span class="revision-category" data-v-6e5a6c04>${ssrInterpolate(entry.category)}</span><h2 data-v-6e5a6c04>${ssrInterpolate(entry.title)}</h2><p data-v-6e5a6c04>${ssrInterpolate(entry.summary || "Esta noticia a\xFAn no tiene un resumen. Puedes agregar contexto desde Editar noticia.")}</p><span class="revision-card-author" data-v-6e5a6c04>Redacci\xF3n Burbuja <i data-v-6e5a6c04>\xB7</i> ${ssrInterpolate(entry.date)}</span></div></div><div class="revision-card-footer" data-v-6e5a6c04><span class="session-hint" data-v-6e5a6c04>${ssrInterpolate(unref(sharedOnX).includes(entry.id) ? "Enlace y titular copiados \xB7 estado de X simulado" : "Vista previa de publicaci\xF3n \xB7 cambios temporales")}</span><div data-v-6e5a6c04><button class="delete-revision" data-v-6e5a6c04>Eliminar</button><button class="${ssrRenderClass([{ "copy-x-done": unref(sharedOnX).includes(entry.id) }, "copy-x"])}" data-v-6e5a6c04>${ssrInterpolate(unref(copiedId) === entry.id ? "\u2713 Copiado para X" : unref(sharedOnX).includes(entry.id) ? "\u{1D54F} Compartido en X" : "\u{1D54F} Copiar titular y enlace")}</button><button class="save-revision" data-v-6e5a6c04>Editar noticia</button></div></div></article>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<section class="revision-empty" data-v-6e5a6c04><span data-v-6e5a6c04>\u25A4</span><h2 data-v-6e5a6c04>No hay publicaciones para revisar hoy</h2><p data-v-6e5a6c04>Las entradas publicadas durante el d\xEDa aparecer\xE1n aqu\xED.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/dasbuard" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Ir a crear una entrada \u2192`);
            } else {
              return [
                createTextVNode("Ir a crear una entrada \u2192")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</section>`);
      }
      _push(`<p class="revision-demo-note" data-v-6e5a6c04>Panel de demostraci\xF3n \xB7 La edici\xF3n y la copia de enlaces funcionan durante esta sesi\xF3n.</p></div>`);
      if (unref(editingEntry)) {
        _push(`<div class="modal-backdrop" data-v-6e5a6c04><section class="edit-modal" role="dialog" aria-modal="true" aria-labelledby="edit-modal-title" data-v-6e5a6c04><header class="modal-header" data-v-6e5a6c04><div data-v-6e5a6c04><span class="revision-kicker" data-v-6e5a6c04>EDICI\xD3N DE CONTENIDO</span><h2 id="edit-modal-title" data-v-6e5a6c04>Editar noticia</h2></div><button class="modal-close" aria-label="Cerrar" data-v-6e5a6c04>\xD7</button></header><div class="modal-content" data-v-6e5a6c04><div class="modal-image-column" data-v-6e5a6c04><div class="modal-image" data-v-6e5a6c04>`);
        if (unref(drafts)[unref(editingEntry).id].image) {
          _push(`<img${ssrRenderAttr("src", unref(drafts)[unref(editingEntry).id].image)}${ssrRenderAttr("alt", unref(drafts)[unref(editingEntry).id].title)} data-v-6e5a6c04>`);
        } else {
          _push(`<div class="no-image" data-v-6e5a6c04><span data-v-6e5a6c04>\u25A7</span><small data-v-6e5a6c04>Sin imagen</small></div>`);
        }
        _push(`</div><input id="revision-modal-image" class="revision-file" type="file" accept="image/*" data-v-6e5a6c04><button class="image-change" data-v-6e5a6c04>\u21A5 Cambiar imagen</button></div><div class="revision-fields" data-v-6e5a6c04><label class="revision-label" data-v-6e5a6c04>Categor\xEDa<select data-v-6e5a6c04><!--[-->`);
        ssrRenderList(unref(categories), (category) => {
          _push(`<option data-v-6e5a6c04${ssrIncludeBooleanAttr(Array.isArray(unref(drafts)[unref(editingEntry).id].category) ? ssrLooseContain(unref(drafts)[unref(editingEntry).id].category, null) : ssrLooseEqual(unref(drafts)[unref(editingEntry).id].category, null)) ? " selected" : ""}>${ssrInterpolate(category)}</option>`);
        });
        _push(`<!--]--></select></label><label class="revision-label" data-v-6e5a6c04>Titular<textarea rows="2" maxlength="160" data-v-6e5a6c04>${ssrInterpolate(unref(drafts)[unref(editingEntry).id].title)}</textarea><small data-v-6e5a6c04>${ssrInterpolate(unref(drafts)[unref(editingEntry).id].title.length)}/160 caracteres</small></label><label class="revision-label" data-v-6e5a6c04>Contexto / descripci\xF3n<textarea rows="3" placeholder="A\xF1ade un fragmento del contexto de la noticia" data-v-6e5a6c04>${ssrInterpolate(unref(drafts)[unref(editingEntry).id].summary)}</textarea></label><label class="revision-label" data-v-6e5a6c04>Contenido completo<textarea rows="6" placeholder="Texto completo de la noticia" data-v-6e5a6c04>${ssrInterpolate(unref(drafts)[unref(editingEntry).id].body)}</textarea></label></div></div><footer class="modal-footer" data-v-6e5a6c04><span data-v-6e5a6c04>Los cambios se aplican durante esta sesi\xF3n.</span><div data-v-6e5a6c04><button class="modal-cancel" data-v-6e5a6c04>Cancelar</button><button class="save-revision" data-v-6e5a6c04>Guardar cambios</button></div></footer></section></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(toast)) {
        _push(`<div class="revision-toast" data-v-6e5a6c04>\u2713 ${ssrInterpolate(unref(toast))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/revision.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const revision = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6e5a6c04"]]);

export { revision as default };
//# sourceMappingURL=revision-y581LuHy.mjs.map
