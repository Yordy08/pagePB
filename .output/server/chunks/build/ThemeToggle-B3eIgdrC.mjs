import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { d as useSiteTheme } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-Dsv-b7lp.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThemeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme } = useSiteTheme();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "theme-toggle",
        type: "button",
        "aria-label": unref(theme) === "day" ? "Activar modo nocturno" : "Activar modo d\xEDa",
        title: unref(theme) === "day" ? "Modo nocturno" : "Modo d\xEDa"
      }, _attrs))} data-v-e5a5b3fa><span class="theme-icon" data-v-e5a5b3fa>${ssrInterpolate(unref(theme) === "day" ? "\u263E" : "\u2600")}</span><span class="theme-label" data-v-e5a5b3fa>${ssrInterpolate(unref(theme) === "day" ? "Noche" : "D\xEDa")}</span></button>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThemeToggle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e5a5b3fa"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=ThemeToggle-B3eIgdrC.mjs.map
