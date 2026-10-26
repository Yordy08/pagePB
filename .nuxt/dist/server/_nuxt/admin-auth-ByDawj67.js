import { e as defineNuxtRouteMiddleware, n as navigateTo } from "../server.mjs";
import { u as useCookie } from "./cookie-nggpa9hC.js";
import "vue";
import "C:/Users/Yordy/pagePB/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/Yordy/pagePB/node_modules/hookable/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/unctx/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Yordy/pagePB/node_modules/defu/dist/defu.mjs";
import "C:/Users/Yordy/pagePB/node_modules/ufo/dist/index.mjs";
import "vue/server-renderer";
import "C:/Users/Yordy/pagePB/node_modules/cookie-es/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/destr/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/ohash/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/klona/dist/index.mjs";
const adminAuth = defineNuxtRouteMiddleware((to) => {
  const session = useCookie("bp-admin-demo-session");
  const role = useCookie("bp-admin-demo-role");
  const path = to.path.replace(/\/+$/, "");
  const hasSession = session.value === "admin-demo";
  const canOpenDashboard = role.value === "admin";
  const canOpenRevision = role.value === "admin" || role.value === "revision";
  if (!hasSession || path === "/dasbuard" && !canOpenDashboard || path === "/revision" && !canOpenRevision) {
    return navigateTo({ path: "/login", query: { next: to.fullPath } });
  }
});
export {
  adminAuth as default
};
//# sourceMappingURL=admin-auth-ByDawj67.js.map
