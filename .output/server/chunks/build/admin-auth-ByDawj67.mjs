import { e as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import { u as useCookie } from './cookie-nggpa9hC.mjs';
import 'vue';
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
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

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

export { adminAuth as default };
//# sourceMappingURL=admin-auth-ByDawj67.mjs.map
