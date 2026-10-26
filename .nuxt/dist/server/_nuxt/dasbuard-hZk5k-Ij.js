import { u as useState, _ as __nuxt_component_0 } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./ThemeToggle-B3eIgdrC.js";
import { defineComponent, ref, computed, reactive, watch, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle } from "vue/server-renderer";
import "sweetalert2";
import "C:/Users/Yordy/pagePB/node_modules/hookable/dist/index.mjs";
import { u as useCookie } from "./cookie-nggpa9hC.js";
import { a as useSeoMeta, _ as _export_sfc } from "./_plugin-vue_export-helper-Dsv-b7lp.js";
import "C:/Users/Yordy/pagePB/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/Yordy/pagePB/node_modules/unctx/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Yordy/pagePB/node_modules/defu/dist/defu.mjs";
import "C:/Users/Yordy/pagePB/node_modules/ufo/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/cookie-es/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/destr/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/ohash/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/klona/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dasbuard",
  __ssrInlineRender: true,
  setup(__props) {
    const entries = useState("bp-demo-entries", () => [
      { id: 1, title: "Avanza la etapa final del acueducto regional del San Jorge", category: "Política Córdoba", date: "26 oct 2026", status: "Publicado", views: 2480 },
      { id: 2, title: "Dos integrantes de agrupación vallenata fallecen en siniestro vial", category: "Política Región", date: "26 oct 2026", status: "Publicado", views: 1892 },
      { id: 3, title: "Gobierno anuncia nuevas becas de tecnología y apoyo para emprendedores", category: "Política Nación", date: "26 oct 2026", status: "En revisión", views: 0 },
      { id: 4, title: "La seguridad nacional no puede estar por encima de la Constitución", category: "Opinión", date: "24 oct 2026", status: "Borrador", views: 0 },
      { id: 5, title: "Montería le apuesta a la energía solar para reducir el gasto eléctrico", category: "Ambiente", date: "22 oct 2026", status: "Publicado", views: 964 }
    ]);
    useState("bp-demo-published", () => []);
    const categories = useState("bp-demo-categories", () => ["Boletines", "Política Nación", "Política Córdoba", "Política Región", "Política Internacional", "Ambiente", "Opinión", "Crónicas", "Ojo a los medios"]);
    const sections = [
      { id: "overview", label: "Resumen", icon: "▦" },
      { id: "all", label: "Todas las entradas", icon: "▤" },
      { id: "published", label: "Publicadas", icon: "◉" },
      { id: "drafts", label: "Borradores", icon: "▧" }
    ];
    const periodOptions = [
      { id: "today", label: "Hoy" },
      { id: "7days", label: "Últimos 7 días" },
      { id: "30days", label: "Últimos 30 días" }
    ];
    const analyticsByPeriod = {
      today: {
        periodLabel: "hoy",
        visits: 2847,
        pageViews: 5336,
        change: 12,
        chartTitle: "Visitas durante el día",
        chartSubtitle: "Lecturas por hora · hoy",
        axis: ["1.000", "750", "500", "250", "0"],
        chart: [{ label: "8 am", height: 28 }, { label: "10 am", height: 53 }, { label: "12 pm", height: 77 }, { label: "2 pm", height: 59 }, { label: "4 pm", height: 92 }, { label: "6 pm", height: 69 }, { label: "Ahora", height: 81 }],
        locations: [{ name: "Montería, Córdoba", visits: "1.194", share: 42 }, { name: "Bogotá, Colombia", visits: "598", share: 21 }, { name: "Sincelejo, Sucre", visits: "427", share: 15 }, { name: "Medellín, Antioquia", visits: "342", share: 12 }, { name: "Otras ciudades", visits: "286", share: 10 }],
        sources: [{ name: "Redes sociales", visits: "1.139", share: 40 }, { name: "Buscadores", visits: "996", share: 35 }, { name: "Acceso directo", visits: "484", share: 17 }, { name: "Otros sitios", visits: "228", share: 8 }],
        topStories: [{ views: "2.480", share: 100 }, { views: "1.892", share: 76 }, { views: "1.356", share: 55 }, { views: "964", share: 39 }]
      },
      "7days": {
        periodLabel: "en los últimos 7 días",
        visits: 18420,
        pageViews: 35286,
        change: 8.4,
        chartTitle: "Visitas de los últimos 7 días",
        chartSubtitle: "Lecturas por día · semana actual",
        axis: ["5.000", "3.750", "2.500", "1.250", "0"],
        chart: [{ label: "Lun", height: 46 }, { label: "Mar", height: 68 }, { label: "Mié", height: 54 }, { label: "Jue", height: 82 }, { label: "Vie", height: 62 }, { label: "Sáb", height: 92 }, { label: "Dom", height: 72 }],
        locations: [{ name: "Montería, Córdoba", visits: "7.728", share: 42 }, { name: "Bogotá, Colombia", visits: "3.868", share: 21 }, { name: "Sincelejo, Sucre", visits: "2.763", share: 15 }, { name: "Medellín, Antioquia", visits: "2.210", share: 12 }, { name: "Otras ciudades", visits: "1.851", share: 10 }],
        sources: [{ name: "Redes sociales", visits: "7.368", share: 40 }, { name: "Buscadores", visits: "6.447", share: 35 }, { name: "Acceso directo", visits: "3.131", share: 17 }, { name: "Otros sitios", visits: "1.474", share: 8 }],
        topStories: [{ views: "12.840", share: 100 }, { views: "9.614", share: 75 }, { views: "7.128", share: 56 }, { views: "5.306", share: 41 }]
      },
      "30days": {
        periodLabel: "en los últimos 30 días",
        visits: 72410,
        pageViews: 138592,
        change: -3.2,
        chartTitle: "Visitas de los últimos 30 días",
        chartSubtitle: "Lecturas · últimos 30 días",
        axis: ["20.000", "15.000", "10.000", "5.000", "0"],
        chart: [{ label: "1–5", height: 50 }, { label: "6–10", height: 62 }, { label: "11–15", height: 48 }, { label: "16–20", height: 75 }, { label: "21–25", height: 88 }, { label: "26–30", height: 67 }, { label: "Hoy", height: 81 }],
        locations: [{ name: "Montería, Córdoba", visits: "30.412", share: 42 }, { name: "Bogotá, Colombia", visits: "15.206", share: 21 }, { name: "Sincelejo, Sucre", visits: "10.861", share: 15 }, { name: "Medellín, Antioquia", visits: "8.689", share: 12 }, { name: "Otras ciudades", visits: "7.242", share: 10 }],
        sources: [{ name: "Redes sociales", visits: "28.964", share: 40 }, { name: "Buscadores", visits: "25.344", share: 35 }, { name: "Acceso directo", visits: "12.310", share: 17 }, { name: "Otros sitios", visits: "5.792", share: 8 }],
        topStories: [{ views: "42.615", share: 100 }, { views: "31.904", share: 75 }, { views: "23.192", share: 54 }, { views: "18.104", share: 42 }]
      }
    };
    const mostReadArticles = [
      { title: "Avanza la etapa final del acueducto regional del San Jorge", category: "Política Córdoba" },
      { title: "Dos integrantes de agrupación vallenata fallecen en siniestro vial", category: "Política Región" },
      { title: "Gobierno anuncia nuevas becas de tecnología y apoyo para emprendedores", category: "Política Nación" },
      { title: "Montería le apuesta a la energía solar para reducir el gasto eléctrico", category: "Ambiente" }
    ];
    const currentReaders = [
      { title: "Avanza la etapa final del acueducto regional del San Jorge", location: "Montería, Córdoba", time: "hace 12 s" },
      { title: "Últimas noticias de Política Nación", location: "Bogotá, Colombia", time: "hace 28 s" },
      { title: "La seguridad nacional y la Constitución", location: "Sincelejo, Sucre", time: "hace 41 s" }
    ];
    const activeView = ref("overview");
    const selectedPeriod = ref("today");
    const analytics = computed(() => analyticsByPeriod[selectedPeriod.value]);
    const mostReadStories = computed(() => mostReadArticles.map((story, index) => ({ ...story, ...analytics.value.topStories[index] })));
    const search = ref("");
    const categoryFilter = ref("Todas las categorías");
    const editorOpen = ref(false);
    const editingEntryId = ref(null);
    const openActionMenuId = ref(null);
    const toast = ref("");
    useCookie("bp-admin-demo-session");
    useCookie("bp-admin-demo-role");
    ref(null);
    ref(null);
    const selectedImageName = ref("");
    const uploadError = ref("");
    const editorMode = ref("visual");
    const slugIsCustom = ref(false);
    ref(false);
    const bodyJustified = ref(false);
    const seoTitleManual = ref(false);
    const seoDescriptionManual = ref(false);
    const keyphraseManual = ref(false);
    const addingCategory = ref(false);
    const newCategoryName = ref("");
    const categoryError = ref("");
    const form = reactive({ title: "", category: "", categories: [], summary: "", body: "", image: "", slug: "", visibility: "Pública", publishImmediately: true, publishAt: "", amp: true, focusKeyphrase: "", seoDescription: "", seoTitle: "" });
    const publishedCount = computed(() => entries.value.filter((entry) => entry.status === "Publicado").length);
    const draftCount = computed(() => entries.value.filter((entry) => entry.status === "Borrador").length);
    computed(() => entries.value.filter((entry) => entry.status === "En revisión").length);
    computed(() => entries.value.reduce((sum, entry) => sum + entry.views, 0));
    const hasStoryContext = computed(() => Boolean(form.body.trim() || form.summary.trim()));
    const publishChecklist = computed(() => [
      { label: "Titular", complete: Boolean(form.title.trim()) },
      { label: "Contexto", complete: hasStoryContext.value },
      { label: "Categoría", complete: form.categories.length > 0 },
      { label: "Imagen destacada", complete: Boolean(form.image) },
      ...!form.publishImmediately ? [{ label: "Fecha y hora", complete: Boolean(form.publishAt) }] : []
    ]);
    const publishProgress = computed(() => Math.round(publishChecklist.value.filter((item) => item.complete).length / publishChecklist.value.length * 100));
    const missingPublishItems = computed(() => publishChecklist.value.filter((item) => !item.complete).map((item) => item.label));
    const canPublish = computed(() => missingPublishItems.value.length === 0);
    const showMissingHighlights = computed(() => Boolean(form.title.trim() && form.summary.trim()));
    const liveVisitors = ref(18);
    const wordCount = computed(() => form.body.trim() ? form.body.trim().split(/\s+/).length : 0);
    const seoPreviewTitle = computed(() => form.seoTitle.trim() || form.title.trim() || "Título de la entrada");
    const seoPreviewDescription = computed(() => form.seoDescription.trim() || "Añade una meta description para mostrar un resumen de esta entrada en los resultados de búsqueda.");
    const pageTitle = computed(() => editorOpen.value ? editingEntryId.value ? "Editar entrada" : "Nueva entrada" : { overview: "Resumen editorial", all: "Todas las entradas", published: "Entradas publicadas", drafts: "Borradores" }[activeView.value] || "Resumen editorial");
    const filteredEntries = computed(() => entries.value.filter((entry) => {
      const matchesView = activeView.value === "published" ? entry.status === "Publicado" : activeView.value === "drafts" ? entry.status === "Borrador" : true;
      const matchesSearch = entry.title.toLowerCase().includes(search.value.toLowerCase());
      const matchesCategory = categoryFilter.value === "Todas las categorías" || entry.category === categoryFilter.value;
      return matchesView && matchesSearch && matchesCategory;
    }));
    useSeoMeta({ title: "Panel editorial | Burbuja Política", description: "Panel editorial de demostración de Burbuja Política.", robots: "noindex, nofollow" });
    function updateSlug() {
      if (slugIsCustom.value) return;
      form.slug = form.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    }
    watch(() => form.title, updateSlug);
    function updateSeoDefaults() {
      if (!seoTitleManual.value) form.seoTitle = form.title.trim();
      if (!keyphraseManual.value) form.focusKeyphrase = form.title.trim();
      if (!seoDescriptionManual.value) {
        const source = form.summary.trim() || firstParagraph(form.body).text;
        form.seoDescription = source.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 160);
      }
    }
    watch([() => form.title, () => form.summary, () => form.body], updateSeoDefaults);
    function firstParagraph(content) {
      const source = content.trim();
      if (!source) return { text: "", rest: "" };
      const htmlParagraph = source.match(/^<p\b[^>]*>([\s\S]*?)<\/p>/i);
      if (htmlParagraph) {
        return {
          text: htmlParagraph[1].replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
          rest: source.slice(htmlParagraph[0].length).trim()
        };
      }
      const paragraphs = source.split(/\n\s*\n/);
      if (paragraphs.length > 1) return { text: paragraphs[0].trim(), rest: paragraphs.slice(1).join("\n\n").trim() };
      const firstLineBreak = source.indexOf("\n");
      if (firstLineBreak >= 0) return { text: source.slice(0, firstLineBreak).trim(), rest: source.slice(firstLineBreak + 1).trim() };
      return { text: source, rest: "" };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ThemeToggle = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard" }, _attrs))} data-v-0d7b38be><aside class="sidebar" data-v-0d7b38be>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "dash-brand"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="brand-mark" data-v-0d7b38be${_scopeId}>BP</span><span class="brand-name" data-v-0d7b38be${_scopeId}>Burbuja <b data-v-0d7b38be${_scopeId}>Política</b><small data-v-0d7b38be${_scopeId}>PANEL EDITORIAL</small></span>`);
          } else {
            return [
              createVNode("span", { class: "brand-mark" }, "BP"),
              createVNode("span", { class: "brand-name" }, [
                createTextVNode("Burbuja "),
                createVNode("b", null, "Política"),
                createVNode("small", null, "PANEL EDITORIAL")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="workspace-label" data-v-0d7b38be>ESPACIO DE TRABAJO</div><nav class="side-nav" aria-label="Navegación del panel" data-v-0d7b38be><!--[-->`);
      ssrRenderList(sections, (item) => {
        _push(`<button class="${ssrRenderClass({ active: unref(activeView) === item.id && !unref(editorOpen) })}" data-v-0d7b38be><span class="nav-icon" data-v-0d7b38be>${ssrInterpolate(item.icon)}</span>${ssrInterpolate(item.label)}`);
        if (item.id === "drafts") {
          _push(`<span class="nav-count" data-v-0d7b38be>${ssrInterpolate(unref(draftCount))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      });
      _push(`<!--]--><button class="${ssrRenderClass({ active: unref(editorOpen) })}" data-v-0d7b38be><span class="nav-icon" data-v-0d7b38be>＋</span>Nueva entrada</button></nav>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/revision",
        class: "revision-shortcut"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-0d7b38be${_scopeId}>◉</span> Revisión de hoy`);
          } else {
            return [
              createVNode("span", null, "◉"),
              createTextVNode(" Revisión de hoy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="sidebar-bottom" data-v-0d7b38be><div class="private-note" data-v-0d7b38be><span class="lock-icon" data-v-0d7b38be>⌑</span><span data-v-0d7b38be><b data-v-0d7b38be>Área privada</b><small data-v-0d7b38be>Modo de demostración</small></span><i data-v-0d7b38be></i></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "back-site"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`↗ <span data-v-0d7b38be${_scopeId}>Volver al sitio</span>`);
          } else {
            return [
              createTextVNode("↗ "),
              createVNode("span", null, "Volver al sitio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="profile" data-v-0d7b38be><div class="profile-avatar" data-v-0d7b38be>BP</div><span data-v-0d7b38be><b data-v-0d7b38be>Editor</b><small data-v-0d7b38be>Redacción</small></span><button aria-label="Cerrar sesión" title="Cerrar sesión" data-v-0d7b38be>↪</button></div></div></aside><div class="dashboard-main" data-v-0d7b38be><header class="topbar" data-v-0d7b38be><div class="mobile-brand" data-v-0d7b38be><span class="brand-mark" data-v-0d7b38be>BP</span><b data-v-0d7b38be>Burbuja Política</b></div><div class="topbar-right" data-v-0d7b38be><span class="status-dot" data-v-0d7b38be></span><span class="online-label" data-v-0d7b38be>Panel editorial</span>`);
      _push(ssrRenderComponent(_component_ThemeToggle, null, null, _parent));
      _push(`<button class="topbar-icon" aria-label="Notificaciones" data-v-0d7b38be>♧<i data-v-0d7b38be></i></button><div class="top-avatar" data-v-0d7b38be>BP</div></div></header><main class="content-area" data-v-0d7b38be><div class="page-heading" data-v-0d7b38be><div data-v-0d7b38be><div class="breadcrumb" data-v-0d7b38be>Panel <span data-v-0d7b38be>/</span> ${ssrInterpolate(unref(pageTitle))}</div><h1 data-v-0d7b38be>${ssrInterpolate(unref(pageTitle))}</h1>`);
      if (!unref(editorOpen) && unref(activeView) === "overview") {
        _push(`<p data-v-0d7b38be>Analítica ilustrativa para la propuesta del panel.</p>`);
      } else if (!unref(editorOpen)) {
        _push(`<p data-v-0d7b38be>Administra el contenido y mantén al día a tus lectores.</p>`);
      } else {
        _push(`<p data-v-0d7b38be>Completa los datos para preparar una nueva publicación.</p>`);
      }
      _push(`</div>`);
      if (!unref(editorOpen)) {
        _push(`<button class="primary-button" data-v-0d7b38be><span data-v-0d7b38be>＋</span> Crear entrada</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!unref(editorOpen)) {
        _push(`<!--[-->`);
        if (unref(activeView) === "overview") {
          _push(`<!--[--><div class="metrics-grid" data-v-0d7b38be><article class="metric-card" data-v-0d7b38be><div class="metric-top" data-v-0d7b38be><span data-v-0d7b38be>Visitas ${ssrInterpolate(unref(analytics).periodLabel)}</span><span class="metric-icon red-icon" data-v-0d7b38be>↗</span></div><div class="metric-value" data-v-0d7b38be>${ssrInterpolate(unref(analytics).visits.toLocaleString("es-CO"))}</div><div class="metric-foot" data-v-0d7b38be><span class="${ssrRenderClass([{ "metric-trend-down": unref(analytics).change < 0 }, "metric-trend"])}" data-v-0d7b38be>${ssrInterpolate(unref(analytics).change >= 0 ? "↗" : "↘")} ${ssrInterpolate(Math.abs(unref(analytics).change))}%</span> vs. periodo anterior</div></article><article class="metric-card" data-v-0d7b38be><div class="metric-top" data-v-0d7b38be><span data-v-0d7b38be>Viendo ahora</span><span class="metric-icon red-icon live-metric-icon" data-v-0d7b38be><i data-v-0d7b38be></i>◉</span></div><div class="metric-value" data-v-0d7b38be>${ssrInterpolate(unref(liveVisitors))}</div><div class="metric-foot" data-v-0d7b38be><span class="live-caption-dot" data-v-0d7b38be></span> lectores activos en el sitio</div></article><article class="metric-card" data-v-0d7b38be><div class="metric-top" data-v-0d7b38be><span data-v-0d7b38be>Entradas publicadas</span><span class="metric-icon red-icon" data-v-0d7b38be>▤</span></div><div class="metric-value" data-v-0d7b38be>${ssrInterpolate(unref(publishedCount))}</div><div class="metric-foot" data-v-0d7b38be><span class="metric-trend" data-v-0d7b38be>↗ 3</span> esta semana</div></article><article class="metric-card" data-v-0d7b38be><div class="metric-top" data-v-0d7b38be><span data-v-0d7b38be>Páginas vistas</span><span class="metric-icon red-icon" data-v-0d7b38be>◷</span></div><div class="metric-value" data-v-0d7b38be>${ssrInterpolate(unref(analytics).pageViews.toLocaleString("es-CO"))}</div><div class="metric-foot" data-v-0d7b38be>${ssrInterpolate(unref(analytics).periodLabel)}</div></article></div><section class="panel-card activity-card" data-v-0d7b38be><div class="panel-heading" data-v-0d7b38be><div data-v-0d7b38be><h2 data-v-0d7b38be>${ssrInterpolate(unref(analytics).chartTitle)}</h2><p data-v-0d7b38be>${ssrInterpolate(unref(analytics).chartSubtitle)}</p></div><select class="period-select" aria-label="Seleccionar periodo" data-v-0d7b38be><!--[-->`);
          ssrRenderList(periodOptions, (period) => {
            _push(`<option${ssrRenderAttr("value", period.id)} data-v-0d7b38be${ssrIncludeBooleanAttr(Array.isArray(unref(selectedPeriod)) ? ssrLooseContain(unref(selectedPeriod), period.id) : ssrLooseEqual(unref(selectedPeriod), period.id)) ? " selected" : ""}>${ssrInterpolate(period.label)}</option>`);
          });
          _push(`<!--]--></select></div><div class="chart-area" data-v-0d7b38be><div class="chart-y" data-v-0d7b38be><!--[-->`);
          ssrRenderList(unref(analytics).axis, (mark) => {
            _push(`<span data-v-0d7b38be>${ssrInterpolate(mark)}</span>`);
          });
          _push(`<!--]--></div><div class="chart" data-v-0d7b38be><!--[-->`);
          ssrRenderList(unref(analytics).chart, (point, index) => {
            _push(`<div class="chart-column" data-v-0d7b38be><div class="${ssrRenderClass([{ today: index === unref(analytics).chart.length - 1 }, "chart-bar"])}" style="${ssrRenderStyle({ height: `${point.height}%` })}" data-v-0d7b38be></div><span data-v-0d7b38be>${ssrInterpolate(point.label)}</span></div>`);
          });
          _push(`<!--]--></div></div></section><div class="insights-grid" data-v-0d7b38be><section class="panel-card insight-card" data-v-0d7b38be><div class="panel-heading" data-v-0d7b38be><div data-v-0d7b38be><h2 data-v-0d7b38be>De dónde te visitan</h2><p data-v-0d7b38be>Ubicación aproximada · ${ssrInterpolate(unref(analytics).periodLabel)}</p></div><span class="insight-icon" data-v-0d7b38be>⌖</span></div><div class="location-list" data-v-0d7b38be><!--[-->`);
          ssrRenderList(unref(analytics).locations, (location) => {
            _push(`<div class="location-row" data-v-0d7b38be><div class="location-info" data-v-0d7b38be><span data-v-0d7b38be>${ssrInterpolate(location.name)}</span><b data-v-0d7b38be>${ssrInterpolate(location.visits)}</b></div><div class="location-track" data-v-0d7b38be><span style="${ssrRenderStyle({ width: `${location.share}%` })}" data-v-0d7b38be></span></div></div>`);
          });
          _push(`<!--]--></div><p class="insight-footnote" data-v-0d7b38be>Datos geográficos de ejemplo para esta demostración.</p></section><section class="panel-card insight-card" data-v-0d7b38be><div class="panel-heading" data-v-0d7b38be><div data-v-0d7b38be><h2 data-v-0d7b38be>Origen de las visitas</h2><p data-v-0d7b38be>Canales de llegada · ${ssrInterpolate(unref(analytics).periodLabel)}</p></div><span class="insight-icon" data-v-0d7b38be>⌁</span></div><div class="location-list" data-v-0d7b38be><!--[-->`);
          ssrRenderList(unref(analytics).sources, (source) => {
            _push(`<div class="location-row" data-v-0d7b38be><div class="location-info" data-v-0d7b38be><span data-v-0d7b38be>${ssrInterpolate(source.name)}</span><b data-v-0d7b38be>${ssrInterpolate(source.visits)}</b></div><div class="location-track" data-v-0d7b38be><span style="${ssrRenderStyle({ width: `${source.share}%` })}" data-v-0d7b38be></span></div></div>`);
          });
          _push(`<!--]--></div><p class="insight-footnote" data-v-0d7b38be>Porcentajes simulados por canal de adquisición.</p></section><section class="panel-card insight-card live-readers-card" data-v-0d7b38be><div class="panel-heading" data-v-0d7b38be><div data-v-0d7b38be><h2 data-v-0d7b38be>Lectores en tiempo real</h2><p data-v-0d7b38be>Actividad reciente en el sitio</p></div><span class="live-badge" data-v-0d7b38be><i data-v-0d7b38be></i> EN VIVO</span></div><div class="live-total" data-v-0d7b38be><b data-v-0d7b38be>${ssrInterpolate(unref(liveVisitors))}</b><span data-v-0d7b38be>personas están leyendo ahora</span></div><div class="reader-list" data-v-0d7b38be><!--[-->`);
          ssrRenderList(currentReaders, (reader) => {
            _push(`<div class="reader-row" data-v-0d7b38be><span class="reader-avatar" data-v-0d7b38be>◉</span><div data-v-0d7b38be><b data-v-0d7b38be>${ssrInterpolate(reader.title)}</b><small data-v-0d7b38be>${ssrInterpolate(reader.location)} · ${ssrInterpolate(reader.time)}</small></div></div>`);
          });
          _push(`<!--]--></div><p class="insight-footnote" data-v-0d7b38be>Contador animado de ejemplo; no representa visitantes reales.</p></section></div><section class="panel-card most-read-card" data-v-0d7b38be><div class="panel-heading" data-v-0d7b38be><div data-v-0d7b38be><h2 data-v-0d7b38be>Noticias más leídas</h2><p data-v-0d7b38be>Las entradas con más visitas acumuladas</p></div><span class="eyebrow" data-v-0d7b38be>TOP CONTENIDO</span></div><div class="most-read-list" data-v-0d7b38be><!--[-->`);
          ssrRenderList(unref(mostReadStories), (story, index) => {
            _push(`<div class="most-read-row" data-v-0d7b38be><span class="rank-number" data-v-0d7b38be>0${ssrInterpolate(index + 1)}</span><div class="most-read-title" data-v-0d7b38be><b data-v-0d7b38be>${ssrInterpolate(story.title)}</b><small data-v-0d7b38be>${ssrInterpolate(story.category)}</small><div class="read-track" data-v-0d7b38be><span style="${ssrRenderStyle({ width: `${story.share}%` })}" data-v-0d7b38be></span></div></div><strong data-v-0d7b38be>${ssrInterpolate(story.views)} <small data-v-0d7b38be>vistas</small></strong></div>`);
          });
          _push(`<!--]--></div></section><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(activeView) !== "overview") {
          _push(`<section class="panel-card entries-card" data-v-0d7b38be><div class="panel-heading entries-heading" data-v-0d7b38be><div data-v-0d7b38be><h2 data-v-0d7b38be>${ssrInterpolate(unref(activeView) === "published" ? "Entradas publicadas" : unref(activeView) === "drafts" ? "Borradores" : "Entradas recientes")}</h2><p data-v-0d7b38be>Consulta y administra el contenido del medio.</p></div><button class="text-button" data-v-0d7b38be>Ver todas <span data-v-0d7b38be>→</span></button></div><div class="table-tools" data-v-0d7b38be><label class="table-search" data-v-0d7b38be><span data-v-0d7b38be>⌕</span><input${ssrRenderAttr("value", unref(search))} placeholder="Buscar entrada..." data-v-0d7b38be></label><select aria-label="Filtrar por categoría" data-v-0d7b38be><option data-v-0d7b38be${ssrIncludeBooleanAttr(Array.isArray(unref(categoryFilter)) ? ssrLooseContain(unref(categoryFilter), null) : ssrLooseEqual(unref(categoryFilter), null)) ? " selected" : ""}>Todas las categorías</option><!--[-->`);
          ssrRenderList(unref(categories), (category) => {
            _push(`<option data-v-0d7b38be${ssrIncludeBooleanAttr(Array.isArray(unref(categoryFilter)) ? ssrLooseContain(unref(categoryFilter), null) : ssrLooseEqual(unref(categoryFilter), null)) ? " selected" : ""}>${ssrInterpolate(category)}</option>`);
          });
          _push(`<!--]--></select><button class="filter-button" data-v-0d7b38be>☷ <span data-v-0d7b38be>Filtros</span></button></div><div class="table-scroll" data-v-0d7b38be><table data-v-0d7b38be><thead data-v-0d7b38be><tr data-v-0d7b38be><th class="check-col" data-v-0d7b38be><input type="checkbox" aria-label="Seleccionar todas" data-v-0d7b38be></th><th data-v-0d7b38be>TÍTULO</th><th data-v-0d7b38be>CATEGORÍA</th><th data-v-0d7b38be>FECHA</th><th data-v-0d7b38be>ESTADO</th><th data-v-0d7b38be>VISTAS</th><th data-v-0d7b38be></th></tr></thead><tbody data-v-0d7b38be><!--[-->`);
          ssrRenderList(unref(activeView) === "overview" ? unref(filteredEntries).slice(0, 4) : unref(filteredEntries), (entry) => {
            _push(`<tr data-v-0d7b38be><td data-v-0d7b38be><input type="checkbox"${ssrRenderAttr("aria-label", `Seleccionar ${entry.title}`)} data-v-0d7b38be></td><td data-v-0d7b38be><div class="entry-cell" data-v-0d7b38be>`);
            if (entry.image) {
              _push(`<img class="table-thumb"${ssrRenderAttr("src", entry.image)}${ssrRenderAttr("alt", entry.title)} data-v-0d7b38be>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<div class="entry-title" data-v-0d7b38be>${ssrInterpolate(entry.title)}<small data-v-0d7b38be>Por Redacción Burbuja</small></div></div></td><td data-v-0d7b38be><span class="category-pill" data-v-0d7b38be>${ssrInterpolate(entry.category)}</span></td><td class="date-cell" data-v-0d7b38be>${ssrInterpolate(entry.date)}</td><td data-v-0d7b38be><span class="${ssrRenderClass([entry.status === "Publicado" ? "published" : entry.status === "Borrador" ? "draft" : "review", "status-pill"])}" data-v-0d7b38be><i data-v-0d7b38be></i>${ssrInterpolate(entry.status)}</span></td><td class="views-cell" data-v-0d7b38be>${ssrInterpolate(entry.views ? entry.views.toLocaleString("es-CO") : "—")}</td><td class="action-cell" data-v-0d7b38be><div class="entry-action-wrap" data-v-0d7b38be><button class="row-menu"${ssrRenderAttr("aria-label", `Acciones de ${entry.title}`)}${ssrRenderAttr("aria-expanded", unref(openActionMenuId) === entry.id)} title="Acciones de la entrada" data-v-0d7b38be>···</button>`);
            if (unref(openActionMenuId) === entry.id) {
              _push(`<div class="entry-action-menu" data-v-0d7b38be><button data-v-0d7b38be>✎ <span data-v-0d7b38be>Editar entrada</span></button><button class="entry-delete-action" data-v-0d7b38be>⌫ <span data-v-0d7b38be>Eliminar entrada</span></button></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></td></tr>`);
          });
          _push(`<!--]-->`);
          if (!unref(filteredEntries).length) {
            _push(`<tr data-v-0d7b38be><td colspan="7" class="empty-table" data-v-0d7b38be>No hay entradas para mostrar con estos filtros.</td></tr>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</tbody></table></div><div class="table-footer" data-v-0d7b38be><span data-v-0d7b38be>Mostrando <b data-v-0d7b38be>${ssrInterpolate(unref(filteredEntries).length ? unref(activeView) === "overview" ? Math.min(unref(filteredEntries).length, 4) : unref(filteredEntries).length : 0)}</b> de <b data-v-0d7b38be>${ssrInterpolate(unref(filteredEntries).length)}</b> entradas</span><div data-v-0d7b38be><button disabled data-v-0d7b38be>← Anterior</button><button class="table-page" data-v-0d7b38be>1</button><button disabled data-v-0d7b38be>Siguiente →</button></div></div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<section class="editor-workspace" data-v-0d7b38be><div class="editor-page-top" data-v-0d7b38be><div data-v-0d7b38be><div class="breadcrumb" data-v-0d7b38be>Panel <span data-v-0d7b38be>/</span> Todas las entradas <span data-v-0d7b38be>/</span> ${ssrInterpolate(unref(editingEntryId) ? "Editar entrada" : "Añadir entrada")}</div><h2 data-v-0d7b38be>${ssrInterpolate(unref(editingEntryId) ? "Editar entrada" : "Añadir entrada")}</h2></div><div class="editor-shortcuts" data-v-0d7b38be><button data-v-0d7b38be>Saltar al editor ↓</button><button data-v-0d7b38be>Editar con Elementor ↗</button></div></div><div class="editor-columns" data-v-0d7b38be><div class="editor-primary" data-v-0d7b38be><section class="panel-card post-editor-card" data-v-0d7b38be><input${ssrRenderAttr("value", unref(form).title)} class="post-title-input" maxlength="120" placeholder="Escribe un título" aria-label="Título de la entrada" data-v-0d7b38be><div class="title-counter" data-v-0d7b38be>${ssrInterpolate(unref(form).title.length)}/120</div><div class="post-editor-toolbar" data-v-0d7b38be><div class="editor-tools-left" data-v-0d7b38be><button class="media-button" data-v-0d7b38be>▧ <span data-v-0d7b38be>Añadir medios</span></button><button class="recortar-button"${ssrIncludeBooleanAttr(!unref(form).body.trim()) ? " disabled" : ""} title="Quitar el primer párrafo del contenido y usarlo como titular" data-v-0d7b38be>✂ Recortar</button></div><div class="editor-mode" data-v-0d7b38be><button class="${ssrRenderClass({ selected: unref(editorMode) === "visual" })}" data-v-0d7b38be>Visual</button><button class="${ssrRenderClass({ selected: unref(editorMode) === "code" })}" data-v-0d7b38be>Código</button></div></div>`);
        if (unref(editorMode) === "visual") {
          _push(`<div class="format-toolbar" data-v-0d7b38be><button data-v-0d7b38be><b data-v-0d7b38be>B</b></button><button data-v-0d7b38be><i data-v-0d7b38be>I</i></button><button data-v-0d7b38be>H₂</button><button data-v-0d7b38be>▧</button><label data-v-0d7b38be>Párrafo <span data-v-0d7b38be>⌄</span></label><span class="toolbar-spacer" data-v-0d7b38be></span><button class="${ssrRenderClass({ active: unref(bodyJustified) })}" title="Alineación justificada" data-v-0d7b38be>☰</button><button title="Vista previa" data-v-0d7b38be>↗</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<textarea id="body-editor" class="${ssrRenderClass([{ "code-mode": unref(editorMode) === "code", justified: unref(bodyJustified) && unref(editorMode) === "visual" }, "body-textarea"])}" rows="15"${ssrRenderAttr("placeholder", unref(editorMode) === "visual" ? "Párrafo\n\nEmpieza a escribir tu historia aquí..." : "<!-- Escribe o edita el contenido HTML de la entrada -->")} data-v-0d7b38be>${ssrInterpolate(unref(form).body)}</textarea><div class="word-count" data-v-0d7b38be>Número de palabras: <b data-v-0d7b38be>${ssrInterpolate(unref(wordCount))}</b></div></section><section class="panel-card excerpt-panel" data-v-0d7b38be><h3 data-v-0d7b38be>Resumen de la entrada</h3><textarea rows="3" placeholder="Añade una bajada breve para presentar la noticia." data-v-0d7b38be>${ssrInterpolate(unref(form).summary)}</textarea><small data-v-0d7b38be>Este resumen aparecerá en las tarjetas de noticias.</small></section><details class="panel-card wp-panel" open data-v-0d7b38be><summary data-v-0d7b38be><span data-v-0d7b38be>Yoast SEO</span><span class="panel-open-label" data-v-0d7b38be>SEO　 Legibilidad　 Schema　 Social</span></summary><div class="seo-content" data-v-0d7b38be><div class="seo-auto-heading" data-v-0d7b38be><span data-v-0d7b38be>Los campos se completan automáticamente con el título y el contenido.</span><button class="inline-link" data-v-0d7b38be>Restaurar automático</button></div><label class="field-label" data-v-0d7b38be>Frase clave objetivo<input${ssrRenderAttr("value", unref(form).focusKeyphrase)} placeholder="Se toma del título" data-v-0d7b38be></label><div class="google-preview" data-v-0d7b38be><small data-v-0d7b38be>Vista previa de Google · Resultado móvil / escritorio</small><div class="google-url" data-v-0d7b38be>burbujapolitica.com › ${ssrInterpolate(unref(form).slug || "entrada")}</div><div class="google-title" data-v-0d7b38be>${ssrInterpolate(unref(seoPreviewTitle))} - Burbuja Política</div><div class="google-description" data-v-0d7b38be>${ssrInterpolate(unref(seoPreviewDescription))}</div></div><label class="field-label" data-v-0d7b38be>Título SEO<input${ssrRenderAttr("value", unref(form).seoTitle)} placeholder="Se completa con el título de la entrada" data-v-0d7b38be></label><label class="field-label" data-v-0d7b38be>Slug<input${ssrRenderAttr("value", unref(form).slug)} placeholder="slug-de-la-entrada" data-v-0d7b38be><button class="inline-link" data-v-0d7b38be>Generar desde el título</button></label><label class="field-label" data-v-0d7b38be>Meta description<textarea rows="3" maxlength="160" placeholder="Se genera desde el resumen o el primer párrafo" data-v-0d7b38be>${ssrInterpolate(unref(form).seoDescription)}</textarea><small data-v-0d7b38be>${ssrInterpolate(unref(form).seoDescription.length)}/160 caracteres</small></label><p class="seo-unavailable" data-v-0d7b38be>Análisis SEO y legibilidad: vista simulada, sin conexión al servicio Yoast.</p></div></details></div><aside class="editor-rail" data-v-0d7b38be><section class="${ssrRenderClass([{ "publish-attention": unref(showMissingHighlights) && !unref(form).image }, "panel-card rail-panel"])}" data-v-0d7b38be><div class="wp-panel-title" data-v-0d7b38be><h3 data-v-0d7b38be>Imagen destacada <b class="required-indicator" data-v-0d7b38be>*</b></h3><button data-v-0d7b38be>⌃</button></div><input class="upload-input" type="file" accept="image/*" data-v-0d7b38be>`);
        if (unref(form).image) {
          _push(`<div class="image-preview" data-v-0d7b38be><img${ssrRenderAttr("src", unref(form).image)} alt="Vista previa de la imagen seleccionada" data-v-0d7b38be><div data-v-0d7b38be><b data-v-0d7b38be>${ssrInterpolate(unref(selectedImageName))}</b><small data-v-0d7b38be>Vista previa temporal</small><button type="button" data-v-0d7b38be>Cambiar</button><button type="button" class="remove-image" data-v-0d7b38be>Quitar</button></div></div>`);
        } else {
          _push(`<div class="image-placeholder" data-v-0d7b38be><span data-v-0d7b38be>▧</span><b data-v-0d7b38be>Sin imagen seleccionada</b><small data-v-0d7b38be>Necesaria para publicar · JPG, PNG o WebP · Máximo 5 MB</small><button type="button" data-v-0d7b38be>Establecer la imagen destacada</button></div>`);
        }
        if (unref(uploadError)) {
          _push(`<p class="upload-error" data-v-0d7b38be>${ssrInterpolate(unref(uploadError))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section><section class="${ssrRenderClass([{ "publish-attention": unref(showMissingHighlights) && !unref(form).categories.length }, "panel-card rail-panel"])}" data-v-0d7b38be><div class="wp-panel-title" data-v-0d7b38be><h3 data-v-0d7b38be>Categorías</h3><button data-v-0d7b38be>⌃</button></div><div class="category-tabs" data-v-0d7b38be><button class="active" data-v-0d7b38be>Todas las categorías</button><button data-v-0d7b38be>Más utilizadas</button></div><div class="category-checks" data-v-0d7b38be><!--[-->`);
        ssrRenderList(unref(categories), (category) => {
          _push(`<label data-v-0d7b38be><input type="checkbox"${ssrIncludeBooleanAttr(unref(form).categories.includes(category)) ? " checked" : ""} data-v-0d7b38be><span data-v-0d7b38be>${ssrInterpolate(category)}</span></label>`);
        });
        _push(`<!--]--></div>`);
        if (unref(addingCategory)) {
          _push(`<div class="add-category-form" data-v-0d7b38be><label class="field-label" data-v-0d7b38be>Nombre de la nueva categoría<input${ssrRenderAttr("value", unref(newCategoryName))} placeholder="Ej. Comunidad" data-v-0d7b38be></label>`);
          if (unref(categoryError)) {
            _push(`<p class="upload-error" data-v-0d7b38be>${ssrInterpolate(unref(categoryError))}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div data-v-0d7b38be><button class="add-category-confirm" data-v-0d7b38be>Añadir</button><button class="add-category-cancel" data-v-0d7b38be>Cancelar</button></div></div>`);
        } else {
          _push(`<button class="inline-link" data-v-0d7b38be>＋ Añadir categoría</button>`);
        }
        _push(`</section><section class="panel-card publish-panel" data-v-0d7b38be><div class="wp-panel-title" data-v-0d7b38be><h3 data-v-0d7b38be>${ssrInterpolate(unref(editingEntryId) ? "Actualizar entrada" : "Publicar")}</h3><button title="Contraer" data-v-0d7b38be>⌃</button></div><div class="${ssrRenderClass([{ ready: unref(canPublish) }, "publish-progress"])}" data-v-0d7b38be><div class="publish-progress-heading" data-v-0d7b38be><b data-v-0d7b38be>${ssrInterpolate(unref(canPublish) ? "Listo para publicar" : "Completa los requisitos")}</b><span data-v-0d7b38be>${ssrInterpolate(unref(publishProgress))}%</span></div><div class="publish-progress-track" role="progressbar"${ssrRenderAttr("aria-valuenow", unref(publishProgress))} aria-valuemin="0" aria-valuemax="100"${ssrRenderAttr("aria-label", `Requisitos para publicar: ${unref(publishProgress)}%`)} data-v-0d7b38be><span style="${ssrRenderStyle({ width: `${unref(publishProgress)}%` })}" data-v-0d7b38be></span></div><ul class="publish-checklist" data-v-0d7b38be><!--[-->`);
        ssrRenderList(unref(publishChecklist), (item) => {
          _push(`<li class="${ssrRenderClass({ complete: item.complete })}" data-v-0d7b38be><span aria-hidden="true" data-v-0d7b38be>${ssrInterpolate(item.complete ? "✓" : "○")}</span>${ssrInterpolate(item.label)}</li>`);
        });
        _push(`<!--]--></ul></div><button class="preview-button" data-v-0d7b38be>Vista previa ↗</button><div class="publish-property" data-v-0d7b38be><span data-v-0d7b38be>Estado:</span><b data-v-0d7b38be>${ssrInterpolate(unref(editingEntryId) ? "Editando publicación" : "Borrador")}</b><button data-v-0d7b38be>Editar</button></div><div class="publish-property" data-v-0d7b38be><span data-v-0d7b38be>Visibilidad:</span><select data-v-0d7b38be><option data-v-0d7b38be${ssrIncludeBooleanAttr(Array.isArray(unref(form).visibility) ? ssrLooseContain(unref(form).visibility, null) : ssrLooseEqual(unref(form).visibility, null)) ? " selected" : ""}>Pública</option><option data-v-0d7b38be${ssrIncludeBooleanAttr(Array.isArray(unref(form).visibility) ? ssrLooseContain(unref(form).visibility, null) : ssrLooseEqual(unref(form).visibility, null)) ? " selected" : ""}>Privada</option><option data-v-0d7b38be${ssrIncludeBooleanAttr(Array.isArray(unref(form).visibility) ? ssrLooseContain(unref(form).visibility, null) : ssrLooseEqual(unref(form).visibility, null)) ? " selected" : ""}>Protegida con contraseña</option></select></div><label class="schedule-toggle" data-v-0d7b38be><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).publishImmediately) ? ssrLooseContain(unref(form).publishImmediately, null) : unref(form).publishImmediately) ? " checked" : ""} type="checkbox" data-v-0d7b38be><span data-v-0d7b38be>Publicar inmediatamente</span></label>`);
        if (!unref(form).publishImmediately) {
          _push(`<label class="${ssrRenderClass([{ "publish-attention": unref(showMissingHighlights) && !unref(form).publishAt }, "field-label schedule-field"])}" data-v-0d7b38be>Fecha y hora<input${ssrRenderAttr("value", unref(form).publishAt)} type="datetime-local" data-v-0d7b38be></label>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="amp-toggle" data-v-0d7b38be><label data-v-0d7b38be><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).amp) ? ssrLooseContain(unref(form).amp, null) : unref(form).amp) ? " checked" : ""} type="checkbox" data-v-0d7b38be><span data-v-0d7b38be>AMP</span></label><b data-v-0d7b38be>Activo</b><button data-v-0d7b38be>Editar</button></div><button class="draft-copy" data-v-0d7b38be>Copiar en un borrador nuevo</button>`);
        if (unref(missingPublishItems).length) {
          _push(`<div class="publish-missing" role="status" aria-live="polite" data-v-0d7b38be><b data-v-0d7b38be>Para activar «${ssrInterpolate(unref(form).publishImmediately ? "Publicar" : "Programar")}», te falta:</b><ul data-v-0d7b38be><!--[-->`);
          ssrRenderList(unref(missingPublishItems), (item) => {
            _push(`<li data-v-0d7b38be>${ssrInterpolate(item)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<p class="publish-ready-message" role="status" data-v-0d7b38be>Todo listo. Ya puedes ${ssrInterpolate(unref(form).publishImmediately ? "publicar" : "programar")} esta entrada.</p>`);
        }
        _push(`<div class="publish-actions" data-v-0d7b38be><button class="secondary-button"${ssrIncludeBooleanAttr(!unref(form).title.trim() || !unref(form).categories.length) ? " disabled" : ""} data-v-0d7b38be>Guardar borrador</button><button class="primary-button"${ssrIncludeBooleanAttr(!unref(canPublish)) ? " disabled" : ""}${ssrRenderAttr("title", unref(missingPublishItems).length ? `Completa: ${unref(missingPublishItems).join(", ")}` : "")} data-v-0d7b38be>${ssrInterpolate(unref(editingEntryId) ? "Actualizar entrada" : unref(form).publishImmediately ? "Publicar" : "Programar")}</button></div></section></aside></div><div class="editor-status editor-session-note" data-v-0d7b38be><span class="status-dot draft-dot" data-v-0d7b38be></span><span data-v-0d7b38be><b data-v-0d7b38be>Modo de demostración</b><small data-v-0d7b38be>Los cambios y la imagen solo viven en esta sesión; al recargar la página se borran.</small></span></div></section>`);
      }
      if (unref(toast)) {
        _push(`<div class="toast" data-v-0d7b38be><span data-v-0d7b38be>✓</span>${ssrInterpolate(unref(toast))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dasbuard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dasbuard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0d7b38be"]]);
export {
  dasbuard as default
};
//# sourceMappingURL=dasbuard-hZk5k-Ij.js.map
