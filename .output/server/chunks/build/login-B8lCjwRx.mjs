import { a as useRoute, b as useRouter, _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderDynamicModel, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useSeoMeta } from './_plugin-vue_export-helper-Dsv-b7lp.mjs';
import { u as useCookie } from './cookie-nggpa9hC.mjs';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({ title: "Acceso editorial | Burbuja Pol\xEDtica", robots: "noindex, nofollow" });
    useRoute();
    useRouter();
    useCookie("bp-admin-demo-session", { maxAge: 60 * 60 * 8, sameSite: "lax" });
    useCookie("bp-admin-demo-role", { maxAge: 60 * 60 * 8, sameSite: "lax" });
    const username = ref("");
    const password = ref("");
    const showPassword = ref(false);
    const errorMessage = ref("");
    const isSubmitting = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "login-page" }, _attrs))} data-v-dccc24ad><div class="login-top" data-v-dccc24ad>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "login-public-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u2190 Volver al sitio`);
          } else {
            return [
              createTextVNode("\u2190 Volver al sitio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span data-v-dccc24ad>ACCESO EDITORIAL</span></div><section class="login-card" data-v-dccc24ad>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "login-brand",
        "aria-label": "Burbuja Pol\xEDtica"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="login-logo-art" role="img" aria-label="Logo de Burbuja Pol\xEDtica" data-v-dccc24ad${_scopeId}><span class="logo-ribbon logo-ribbon-left" data-v-dccc24ad${_scopeId}></span><span class="logo-center" data-v-dccc24ad${_scopeId}></span><span class="logo-ribbon logo-ribbon-right" data-v-dccc24ad${_scopeId}></span></span><span class="visually-hidden" data-v-dccc24ad${_scopeId}>Burbuja Pol\xEDtica</span>`);
          } else {
            return [
              createVNode("span", {
                class: "login-logo-art",
                role: "img",
                "aria-label": "Logo de Burbuja Pol\xEDtica"
              }, [
                createVNode("span", { class: "logo-ribbon logo-ribbon-left" }),
                createVNode("span", { class: "logo-center" }),
                createVNode("span", { class: "logo-ribbon logo-ribbon-right" })
              ]),
              createVNode("span", { class: "visually-hidden" }, "Burbuja Pol\xEDtica")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="login-kicker" data-v-dccc24ad>\xC1REA DE REDACCI\xD3N</span><h1 data-v-dccc24ad>Bienvenido</h1><p class="login-subtitle" data-v-dccc24ad>Inicia sesi\xF3n para administrar las publicaciones de Burbuja Pol\xEDtica.</p><form data-v-dccc24ad><label data-v-dccc24ad>Usuario<input${ssrRenderAttr("value", unref(username))} autocomplete="username" placeholder="Ingresa tu usuario" required data-v-dccc24ad></label><label data-v-dccc24ad>Contrase\xF1a<span class="password-field" data-v-dccc24ad><input${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(password), null)}${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} autocomplete="current-password" placeholder="Ingresa tu contrase\xF1a" required data-v-dccc24ad><button class="password-toggle" type="button"${ssrRenderAttr("aria-label", unref(showPassword) ? "Ocultar contrase\xF1a" : "Mostrar contrase\xF1a")}${ssrRenderAttr("aria-pressed", unref(showPassword))} data-v-dccc24ad>`);
      if (!unref(showPassword)) {
        _push(`<svg viewBox="0 0 24 24" aria-hidden="true" data-v-dccc24ad><path d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6-9.5-6-9.5-6Z" data-v-dccc24ad></path><circle cx="12" cy="12" r="2.7" data-v-dccc24ad></circle></svg>`);
      } else {
        _push(`<svg viewBox="0 0 24 24" aria-hidden="true" data-v-dccc24ad><path d="M3 3l18 18M10.6 6.2A10 10 0 0 1 12 6c6.1 0 9.5 6 9.5 6a16 16 0 0 1-3.2 3.7M6.2 6.3C3.8 8 2.5 12 2.5 12s3.4 6 9.5 6c1.2 0 2.3-.3 3.2-.7" data-v-dccc24ad></path><path d="M9.8 9.8a3.1 3.1 0 0 0 4.4 4.4" data-v-dccc24ad></path></svg>`);
      }
      _push(`</button></span></label>`);
      if (unref(errorMessage)) {
        _push(`<p class="login-error" role="alert" data-v-dccc24ad>${ssrInterpolate(unref(errorMessage))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="login-submit"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-dccc24ad>${ssrInterpolate(unref(isSubmitting) ? "Ingresando\u2026" : "Iniciar sesi\xF3n")} <span data-v-dccc24ad>\u2192</span></button></form><small class="login-footnote" data-v-dccc24ad>Acceso editorial \xB7 Burbuja Pol\xEDtica</small></section><footer class="login-footer" data-v-dccc24ad>\xA9 2026 Burbuja Pol\xEDtica \xB7 Sabemos de Pol\xEDtica</footer></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dccc24ad"]]);

export { login as default };
//# sourceMappingURL=login-B8lCjwRx.mjs.map
