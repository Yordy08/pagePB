import { a as useRoute, b as useRouter, _ as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderDynamicModel, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "C:/Users/Yordy/pagePB/node_modules/hookable/dist/index.mjs";
import { a as useSeoMeta, _ as _export_sfc } from "./_plugin-vue_export-helper-Dsv-b7lp.js";
import { u as useCookie } from "./cookie-nggpa9hC.js";
import "C:/Users/Yordy/pagePB/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/Yordy/pagePB/node_modules/unctx/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Yordy/pagePB/node_modules/defu/dist/defu.mjs";
import "C:/Users/Yordy/pagePB/node_modules/ufo/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/@unhead/vue/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/cookie-es/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/destr/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/ohash/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/klona/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({ title: "Acceso editorial | Burbuja Política", robots: "noindex, nofollow" });
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
            _push2(`← Volver al sitio`);
          } else {
            return [
              createTextVNode("← Volver al sitio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span data-v-dccc24ad>ACCESO EDITORIAL</span></div><section class="login-card" data-v-dccc24ad>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "login-brand",
        "aria-label": "Burbuja Política"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="login-logo-art" role="img" aria-label="Logo de Burbuja Política" data-v-dccc24ad${_scopeId}><span class="logo-ribbon logo-ribbon-left" data-v-dccc24ad${_scopeId}></span><span class="logo-center" data-v-dccc24ad${_scopeId}></span><span class="logo-ribbon logo-ribbon-right" data-v-dccc24ad${_scopeId}></span></span><span class="visually-hidden" data-v-dccc24ad${_scopeId}>Burbuja Política</span>`);
          } else {
            return [
              createVNode("span", {
                class: "login-logo-art",
                role: "img",
                "aria-label": "Logo de Burbuja Política"
              }, [
                createVNode("span", { class: "logo-ribbon logo-ribbon-left" }),
                createVNode("span", { class: "logo-center" }),
                createVNode("span", { class: "logo-ribbon logo-ribbon-right" })
              ]),
              createVNode("span", { class: "visually-hidden" }, "Burbuja Política")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="login-kicker" data-v-dccc24ad>ÁREA DE REDACCIÓN</span><h1 data-v-dccc24ad>Bienvenido</h1><p class="login-subtitle" data-v-dccc24ad>Inicia sesión para administrar las publicaciones de Burbuja Política.</p><form data-v-dccc24ad><label data-v-dccc24ad>Usuario<input${ssrRenderAttr("value", unref(username))} autocomplete="username" placeholder="Ingresa tu usuario" required data-v-dccc24ad></label><label data-v-dccc24ad>Contraseña<span class="password-field" data-v-dccc24ad><input${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(password), null)}${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} autocomplete="current-password" placeholder="Ingresa tu contraseña" required data-v-dccc24ad><button class="password-toggle" type="button"${ssrRenderAttr("aria-label", unref(showPassword) ? "Ocultar contraseña" : "Mostrar contraseña")}${ssrRenderAttr("aria-pressed", unref(showPassword))} data-v-dccc24ad>`);
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
      _push(`<button class="login-submit"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-dccc24ad>${ssrInterpolate(unref(isSubmitting) ? "Ingresando…" : "Iniciar sesión")} <span data-v-dccc24ad>→</span></button></form><small class="login-footnote" data-v-dccc24ad>Acceso editorial · Burbuja Política</small></section><footer class="login-footer" data-v-dccc24ad>© 2026 Burbuja Política · Sabemos de Política</footer></main>`);
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
export {
  login as default
};
//# sourceMappingURL=login-B8lCjwRx.js.map
