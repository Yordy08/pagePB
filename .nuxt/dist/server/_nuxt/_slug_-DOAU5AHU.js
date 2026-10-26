import { a as useRoute, c as createError, _ as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, computed, ref, watch, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { a as useSeoMeta, _ as _export_sfc } from "./_plugin-vue_export-helper-Dsv-b7lp.js";
import "C:/Users/Yordy/pagePB/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/Yordy/pagePB/node_modules/hookable/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/unctx/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Yordy/pagePB/node_modules/defu/dist/defu.mjs";
import "C:/Users/Yordy/pagePB/node_modules/ufo/dist/index.mjs";
import "C:/Users/Yordy/pagePB/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const image = {
      nation: "https://burbujapolitica.com/wp-content/uploads/2026/10/5116624690855218518_121-1024x576.jpg",
      region: "https://burbujapolitica.com/wp-content/uploads/2026/10/Web-47_5-1024x576.jpg",
      water: "https://burbujapolitica.com/wp-content/uploads/2026/10/image_2026-10-26_07-55-49-1024x768.jpg",
      solar: "https://burbujapolitica.com/wp-content/uploads/2026/10/photo_2026-10-22_23-08-38-1024x689.jpg",
      opinion: "https://burbujapolitica.com/wp-content/uploads/2026/10/opinion-1-1024x576.jpg",
      community: "https://burbujapolitica.com/wp-content/uploads/2026/10/Web-45_5-1024x576.jpg"
    };
    const article = (title, src, summary, date = "26 oct 2026", views = 820) => ({ title, image: src, summary, date, views });
    const categories = {
      "politica-nacion": {
        title: "Política Nación",
        description: "Decisiones, debates y protagonistas de la política colombiana.",
        articles: [article("Gobierno anuncia nuevas becas de tecnología y apoyo para emprendedores", image.nation, "Las medidas anunciadas buscan ampliar la formación tecnológica y respaldar nuevos proyectos productivos.", "26 oct 2026", 2480), article("Congreso debate recursos para los siguientes ciclos de Colombia Mayor", image.opinion, "La disponibilidad de recursos para los próximos ciclos del programa queda ahora en manos del Congreso.", "26 oct 2026", 1890), article("Presidencia presenta medidas de formación laboral y emprendimiento", image.solar, "Las iniciativas buscan ampliar oportunidades de capacitación y respaldo a nuevos proyectos.", "25 oct 2026", 1430), article("Mindefensa confirma entrenamiento conjunto en Tolemaida", image.region, "El anuncio se incorpora a la agenda nacional de defensa y cooperación.", "25 oct 2026", 970), article("Congreso abre debate sobre prioridades del presupuesto nacional", image.community, "Legisladores analizan las partidas destinadas a programas y servicios públicos.", "24 oct 2026", 730)]
      },
      "politica-cordoba": {
        title: "Política Córdoba",
        description: "La actualidad política, pública y social del departamento de Córdoba.",
        articles: [article("Avanza la etapa final del acueducto regional del San Jorge", image.water, "Las pruebas del sistema avanzan hacia la puesta en marcha para varios municipios cordobeses.", "26 oct 2026", 2480), article("Gobernación amplía plazo para financiar la adquisición de taxis nuevos", image.solar, "La convocatoria busca acompañar la renovación del servicio de transporte público.", "23 oct 2026", 1720), article("Unidad para las Víctimas entrega indemnizaciones a 250 personas en Córdoba", image.community, "Los recursos permitirán impulsar proyectos de vida y emprendimientos locales.", "23 oct 2026", 1350), article("Montería le apuesta a la energía solar en sus sedes públicas", image.solar, "El proyecto busca reducir costos de energía y avanzar en sostenibilidad.", "22 oct 2026", 980), article("Córdoba registra un nuevo avance en competitividad regional", image.region, "Indicadores y proyectos locales destacan el potencial de los municipios.", "22 oct 2026", 760)]
      },
      "politica-region": {
        title: "Política Región",
        description: "Historias de los territorios y las comunidades que construyen la región.",
        articles: [article("Dos integrantes de agrupación vallenata fallecen en siniestro vial", image.region, "La noticia enluta al folclor vallenato y a las comunidades de la región.", "26 oct 2026", 2480), article("Joven universitaria muere en siniestro vial entre Ovejas y El Carmen de Bolívar", image.community, "La comunidad acompaña a familiares y allegados tras el accidente.", "26 oct 2026", 1860), article("Comunidades regionales piden respuestas para sus necesidades urgentes", image.water, "Líderes y habitantes plantean prioridades para el desarrollo local.", "25 oct 2026", 1390), article("Historias vallenatas que siguen latiendo en los municipios", image.region, "La música y sus protagonistas hacen parte de la memoria compartida.", "24 oct 2026", 910), article("Voces locales impulsan proyectos para transformar el territorio", image.solar, "Iniciativas comunitarias abren nuevas oportunidades en la región.", "23 oct 2026", 690)]
      },
      "politica-internacional": {
        title: "Internacional",
        description: "Noticias y análisis de los acontecimientos que conectan a Colombia con el mundo.",
        articles: [article("Colombia sigue de cerca los cambios políticos en América Latina", image.nation, "Las relaciones regionales y sus efectos en la agenda internacional.", "26 oct 2026", 2100), article("Líderes regionales abren diálogo sobre cooperación y desarrollo", image.solar, "Una agenda compartida aborda oportunidades económicas y desafíos comunes.", "25 oct 2026", 1480), article("Panorama global: los temas internacionales que marcan la semana", image.opinion, "Claves para entender las noticias que trascienden fronteras.", "24 oct 2026", 1180), article("Gobiernos latinoamericanos revisan acuerdos de integración", image.community, "Representantes exploran mecanismos para fortalecer el intercambio regional.", "23 oct 2026", 840), article("Nuevas conversaciones ponen el foco en la cooperación regional", image.region, "Los países buscan espacios de diálogo ante desafíos compartidos.", "22 oct 2026", 650)]
      },
      opinion: {
        title: "Opinión",
        description: "Columnas, ideas y perspectivas para pensar la realidad política y social.",
        articles: [article("La seguridad nacional no puede estar por encima de la Constitución", image.opinion, "Una reflexión sobre el equilibrio entre las políticas de seguridad y las garantías constitucionales.", "8 oct 2026", 2100), article("Presidencia de Ascún 2024–2026: gestión y resultados", image.community, "Una mirada a los avances y desafíos de la educación superior.", "25 oct 2026", 1620), article("Saber 11: evaluación para pensar y transformar", image.nation, "Ideas para convertir la evaluación en una herramienta de mejora educativa.", "4 oct 2026", 1240), article("La educación superior y los retos de la próxima década", image.solar, "Una columna sobre oportunidades, acceso y transformación universitaria.", "1 oct 2026", 900), article("Participación ciudadana: escuchar antes de decidir", image.region, "Una reflexión sobre el valor del diálogo en la vida pública.", "28 sep 2026", 690)]
      },
      ambiente: {
        title: "Ambiente",
        description: "Medioambiente, sostenibilidad y acciones para proteger nuestros territorios.",
        articles: [{
          ...article("Las autoridades del sur de Córdoba intensifican el monitoreo ante el aumento del caudal de los afluentes hídricos", image.water, "Las autoridades locales declaran el estado de alerta en Puerto Libertador tras una creciente súbita del río proveniente del sector de San Juan.", "17 oct 2026"),
          body: [
            "Las autoridades locales declaran el estado de alerta en el municipio de Puerto Libertador, en el departamento de Córdoba, tras el registro de una fuerte creciente súbita en el caudal del río proveniente del sector de San Juan. Las intensas precipitaciones caídas en las zonas altas de la región provocan un incremento acelerado en los niveles de agua, lo que genera preocupación entre los habitantes de las veredas y los asentamientos ribereños cercanos al cauce.",
            "Los organismos de gestión del riesgo y los comités de emergencia mantienen una vigilancia constante sobre el comportamiento del afluente para prevenir afectaciones graves a la infraestructura y a las familias de la zona rural. Asimismo, los entes de socorro reiteran el llamado a la comunidad para mantenerse alerta, evitar cruzar corrientes crecidas y acatar las recomendaciones preventivas ante la persistencia de la temporada de lluvias en el sur cordobés."
          ]
        }, article("Montería bajo el agua: precipitaciones dejan vehículos atrapados y afectaciones en conjuntos residenciales", image.solar, "Las lluvias de la jornada provocan afectaciones y complicaciones en distintos sectores de Montería.", "24 oct 2026", 1980), article("Gobernación de Córdoba hace un llamado a extremar precauciones durante las lluvias", image.community, "Las autoridades recomiendan mantenerse atentos a los pronósticos y seguir las indicaciones de los organismos de emergencia.", "24 oct 2026", 1510), article("Alcaldía advierte sobre posible reactivación de lluvias en Montería", image.region, "La comunidad puede seguir los reportes de las autoridades y tomar medidas preventivas.", "22 oct 2026", 1100), article("El cuidado de los afluentes se convierte en prioridad para las comunidades", image.water, "Habitantes y organismos locales refuerzan el llamado a proteger las fuentes hídricas.", "21 oct 2026", 760)]
      },
      boletines: {
        title: "Boletines",
        description: "Comunicados e información oficial de entidades y organizaciones.",
        articles: [article("Una comunidad cordobesa rinde homenaje a su patrullera", image.community, "Habitantes y familiares se reunieron en un acto de reconocimiento y gratitud.", "26 oct 2026", 1880), article("Avanza la etapa final del acueducto regional del San Jorge", image.water, "El proyecto se acerca a una nueva etapa de operación.", "26 oct 2026", 1450), article("Gobierno anuncia becas de tecnología y apoyo a emprendedores", image.nation, "Conoce los principales anuncios de la jornada.", "26 oct 2026", 1190), article("ICETEX presenta nueva oferta de crédito con beneficios especiales", image.opinion, "La entidad dará a conocer alternativas para estudiantes y familias.", "26 oct 2026", 900), article("Policía de Montería conmemora el Día de la Mujer Policía", image.region, "Una jornada para reconocer la vocación y el servicio de las uniformadas.", "25 oct 2026", 720)]
      },
      cronicas: {
        title: "Crónicas",
        description: "Relatos, personajes y escenas que cuentan la vida de nuestros territorios.",
        articles: [article("Una comunidad se reúne para recordar y rendir homenaje", image.community, "En Mocarí, las velas y los mensajes de gratitud acompañaron una noche de memoria.", "26 oct 2026", 1580), article("Historias vallenatas que siguen latiendo en la región", image.region, "La música y sus protagonistas hacen parte de la memoria compartida.", "25 oct 2026", 1230), article("El agua que espera una región: historia del acueducto del San Jorge", image.water, "Un recorrido por el camino de una obra esperada por las comunidades.", "24 oct 2026", 980), article("La memoria de los barrios se cuenta desde sus habitantes", image.solar, "Relatos cotidianos que ayudan a comprender la identidad de una comunidad.", "22 oct 2026", 720), article("Una jornada de lluvia y solidaridad en el sur de Córdoba", image.nation, "Vecinos y equipos de apoyo se organizan ante las condiciones del clima.", "20 oct 2026", 590)]
      },
      "ojo-a-los-medios": {
        title: "Ojo a los medios",
        description: "Seguimiento a los temas, voces y debates que circulan en los medios.",
        articles: [article("Los temas que concentran la conversación pública esta semana", image.nation, "Un repaso a las noticias y discusiones que están marcando la agenda mediática.", "26 oct 2026", 1500), article("Claves para seguir la actualidad política en Colombia", image.opinion, "Contexto y perspectivas para entender los asuntos destacados en los medios.", "25 oct 2026", 1170), article("Voces y debates que ponen al territorio en el centro", image.community, "Historias regionales que amplían la conversación pública.", "24 oct 2026", 940), article("Qué se comenta hoy en las regiones y por qué importa", image.region, "Una selección de temas con impacto en la conversación local.", "23 oct 2026", 740), article("El debate público de la semana, explicado en contexto", image.solar, "Claves para distinguir los hechos principales y sus antecedentes.", "22 oct 2026", 610)]
      }
    };
    const route = useRoute();
    const category = computed(() => categories[String(route.params.slug)]);
    const sortMode = ref("latest");
    const categorySearch = ref("");
    const visibleCount = ref(4);
    const filteredArticles = computed(() => {
      const matches = (category.value?.articles || []).filter((item) => `${item.title} ${item.summary}`.toLocaleLowerCase().includes(categorySearch.value.toLocaleLowerCase()));
      return sortMode.value === "popular" ? [...matches].sort((a, b) => (b.views || 0) - (a.views || 0)) : matches;
    });
    const visibleArticles = computed(() => filteredArticles.value.slice(0, visibleCount.value));
    const canLoadMore = computed(() => visibleCount.value < filteredArticles.value.length);
    watch(() => route.params.slug, () => {
      categorySearch.value = "";
      sortMode.value = "latest";
      visibleCount.value = 4;
    });
    const articleSlug = (title) => title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const articleLink = (story) => ({
      path: `/noticia/${articleSlug(story.title)}/`,
      query: { title: story.title, category: category.value?.title || "", image: story.image, date: story.date, summary: story.summary, body: story.body ? JSON.stringify(story.body) : "" }
    });
    if (!category.value) {
      throw createError({ statusCode: 404, statusMessage: "Sección no encontrada" });
    }
    useSeoMeta({ title: () => `${category.value?.title} | Burbuja Política`, description: () => category.value?.description });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(category)) {
        _push(`<main${ssrRenderAttrs(mergeProps({ class: "wrap category-page" }, _attrs))} data-v-f6a4ad1c><div class="category-breadcrumb" data-v-f6a4ad1c>`);
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
        _push(`<span data-v-f6a4ad1c>/</span>${ssrInterpolate(unref(category).title)}</div><header class="category-heading" data-v-f6a4ad1c><div class="category-heading-copy" data-v-f6a4ad1c><span class="eyebrow" data-v-f6a4ad1c>BURBUJA POLÍTICA <i data-v-f6a4ad1c></i> ACTUALIDAD</span><h1 data-v-f6a4ad1c>${ssrInterpolate(unref(category).title)}</h1><p data-v-f6a4ad1c>${ssrInterpolate(unref(category).description)}</p></div><div class="edition-stamp" data-v-f6a4ad1c><span data-v-f6a4ad1c>COBERTURA</span><b data-v-f6a4ad1c>${ssrInterpolate(unref(category).articles.length.toString().padStart(2, "0"))}</b><small data-v-f6a4ad1c>HISTORIAS</small></div></header><nav class="category-quick-nav" aria-label="Explorar secciones" data-v-f6a4ad1c><span data-v-f6a4ad1c>Explora:</span><!--[-->`);
        ssrRenderList([{ label: "Nación", slug: "politica-nacion" }, { label: "Córdoba", slug: "politica-cordoba" }, { label: "Región", slug: "politica-region" }, { label: "Internacional", slug: "politica-internacional" }, { label: "Opinión", slug: "opinion" }, { label: "Ambiente", slug: "ambiente" }], (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.slug,
            to: `/category/${item.slug}/`,
            class: { selected: unref(route).params.slug === item.slug }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></nav><div class="category-rule" data-v-f6a4ad1c><span data-v-f6a4ad1c></span></div><section class="category-feature" data-v-f6a4ad1c>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: articleLink(unref(category).articles[0]),
          class: "category-main-story"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", unref(category).articles[0].image)}${ssrRenderAttr("alt", unref(category).articles[0].title)} data-v-f6a4ad1c${_scopeId}><div class="category-image-shade" data-v-f6a4ad1c${_scopeId}></div><div class="category-feature-copy" data-v-f6a4ad1c${_scopeId}><span class="tag" data-v-f6a4ad1c${_scopeId}>${ssrInterpolate(unref(category).title)}</span><h2 data-v-f6a4ad1c${_scopeId}>${ssrInterpolate(unref(category).articles[0].title)}</h2><p data-v-f6a4ad1c${_scopeId}>${ssrInterpolate(unref(category).articles[0].summary)}</p><span class="story-date" data-v-f6a4ad1c${_scopeId}>${ssrInterpolate(unref(category).articles[0].date)} <b data-v-f6a4ad1c${_scopeId}>·</b> Redacción</span><span class="read-feature" data-v-f6a4ad1c${_scopeId}>Leer noticia completa <b data-v-f6a4ad1c${_scopeId}>→</b></span></div>`);
            } else {
              return [
                createVNode("img", {
                  src: unref(category).articles[0].image,
                  alt: unref(category).articles[0].title
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "category-image-shade" }),
                createVNode("div", { class: "category-feature-copy" }, [
                  createVNode("span", { class: "tag" }, toDisplayString(unref(category).title), 1),
                  createVNode("h2", null, toDisplayString(unref(category).articles[0].title), 1),
                  createVNode("p", null, toDisplayString(unref(category).articles[0].summary), 1),
                  createVNode("span", { class: "story-date" }, [
                    createTextVNode(toDisplayString(unref(category).articles[0].date) + " ", 1),
                    createVNode("b", null, "·"),
                    createTextVNode(" Redacción")
                  ]),
                  createVNode("span", { class: "read-feature" }, [
                    createTextVNode("Leer noticia completa "),
                    createVNode("b", null, "→")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<aside class="category-brief" data-v-f6a4ad1c><div class="brief-heading" data-v-f6a4ad1c><span class="eyebrow" data-v-f6a4ad1c>AL DÍA EN ${ssrInterpolate(unref(category).title.toLocaleUpperCase())}</span><span class="live-badge" data-v-f6a4ad1c><i data-v-f6a4ad1c></i> ACTUALIZADO</span></div><!--[-->`);
        ssrRenderList(unref(category).articles.slice(1, 4), (item, index) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.title,
            to: articleLink(item),
            class: "brief-item"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="brief-number" data-v-f6a4ad1c${_scopeId}>0${ssrInterpolate(index + 1)}</span><div data-v-f6a4ad1c${_scopeId}><span class="tag" data-v-f6a4ad1c${_scopeId}>${ssrInterpolate(unref(category).title)}</span><h3 data-v-f6a4ad1c${_scopeId}>${ssrInterpolate(item.title)}</h3><p class="brief-summary" data-v-f6a4ad1c${_scopeId}>${ssrInterpolate(item.summary)}</p><span class="story-date" data-v-f6a4ad1c${_scopeId}>${ssrInterpolate(item.date)}</span></div>`);
              } else {
                return [
                  createVNode("span", { class: "brief-number" }, "0" + toDisplayString(index + 1), 1),
                  createVNode("div", null, [
                    createVNode("span", { class: "tag" }, toDisplayString(unref(category).title), 1),
                    createVNode("h3", null, toDisplayString(item.title), 1),
                    createVNode("p", { class: "brief-summary" }, toDisplayString(item.summary), 1),
                    createVNode("span", { class: "story-date" }, toDisplayString(item.date), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: articleLink(unref(category).articles[1] || unref(category).articles[0]),
          class: "brief-more"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Ver más noticias <b data-v-f6a4ad1c${_scopeId}>→</b>`);
            } else {
              return [
                createTextVNode("Ver más noticias "),
                createVNode("b", null, "→")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</aside></section><section class="category-list" data-v-f6a4ad1c><div class="section-heading" data-v-f6a4ad1c><div data-v-f6a4ad1c><span class="eyebrow" data-v-f6a4ad1c>TODO LO QUE PASA</span><h2 data-v-f6a4ad1c>Noticias de ${ssrInterpolate(unref(category).title)}</h2><p class="category-subheading" data-v-f6a4ad1c>Cobertura, análisis y contexto desde el territorio.</p></div><span class="category-count" data-v-f6a4ad1c>${ssrInterpolate(unref(filteredArticles).length)} NOTICIAS</span></div><div class="category-controls" data-v-f6a4ad1c><div class="category-tabs" data-v-f6a4ad1c><button class="${ssrRenderClass({ active: unref(sortMode) === "latest" })}" data-v-f6a4ad1c>Más recientes</button><button class="${ssrRenderClass({ active: unref(sortMode) === "popular" })}" data-v-f6a4ad1c>Más leídas</button></div><label class="category-search" data-v-f6a4ad1c><span data-v-f6a4ad1c>⌕</span><input${ssrRenderAttr("value", unref(categorySearch))} placeholder="Buscar en {{ category.title }}" aria-label="Buscar en esta categoría" data-v-f6a4ad1c></label></div>`);
        if (unref(visibleArticles).length) {
          _push(`<div class="news-grid" data-v-f6a4ad1c><!--[-->`);
          ssrRenderList(unref(visibleArticles), (item, index) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: item.title,
              to: articleLink(item),
              class: "news-card"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="card-image" data-v-f6a4ad1c${_scopeId}><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} loading="lazy" data-v-f6a4ad1c${_scopeId}><span class="tag" data-v-f6a4ad1c${_scopeId}>${ssrInterpolate(unref(category).title)}</span>`);
                  if (index === 0 && unref(sortMode) === "popular") {
                    _push2(`<span class="popular-mark" data-v-f6a4ad1c${_scopeId}>MÁS LEÍDA</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div><div class="card-copy" data-v-f6a4ad1c${_scopeId}><h3 data-v-f6a4ad1c${_scopeId}>${ssrInterpolate(item.title)}</h3><p data-v-f6a4ad1c${_scopeId}>${ssrInterpolate(item.summary)}</p><span class="story-date" data-v-f6a4ad1c${_scopeId}>${ssrInterpolate(item.date)} <b data-v-f6a4ad1c${_scopeId}>·</b> Redacción</span><span class="card-read-more" data-v-f6a4ad1c${_scopeId}>Leer noticia <b data-v-f6a4ad1c${_scopeId}>→</b></span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "card-image" }, [
                      createVNode("img", {
                        src: item.image,
                        alt: item.title,
                        loading: "lazy"
                      }, null, 8, ["src", "alt"]),
                      createVNode("span", { class: "tag" }, toDisplayString(unref(category).title), 1),
                      index === 0 && unref(sortMode) === "popular" ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "popular-mark"
                      }, "MÁS LEÍDA")) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "card-copy" }, [
                      createVNode("h3", null, toDisplayString(item.title), 1),
                      createVNode("p", null, toDisplayString(item.summary), 1),
                      createVNode("span", { class: "story-date" }, [
                        createTextVNode(toDisplayString(item.date) + " ", 1),
                        createVNode("b", null, "·"),
                        createTextVNode(" Redacción")
                      ]),
                      createVNode("span", { class: "card-read-more" }, [
                        createTextVNode("Leer noticia "),
                        createVNode("b", null, "→")
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
          _push(`<div class="category-empty" data-v-f6a4ad1c>No encontramos noticias que coincidan con “${ssrInterpolate(unref(categorySearch))}”.</div>`);
        }
        if (unref(canLoadMore)) {
          _push(`<button class="load-more-button" data-v-f6a4ad1c>Cargar más noticias <span data-v-f6a4ad1c>＋</span></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section></main>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f6a4ad1c"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-DOAU5AHU.js.map
