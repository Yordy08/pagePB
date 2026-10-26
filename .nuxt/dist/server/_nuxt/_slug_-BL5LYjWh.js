import { a as useRoute, c as createError, _ as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, computed, reactive, ref, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
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
    const pages = {
      "politica-de-privacidad": {
        title: "Política de privacidad",
        intro: "En Burbuja Política reconocemos la importancia de proteger los datos personales de lectores, visitantes y personas que se comunican con el medio.",
        sections: [
          { heading: "Responsable y alcance", paragraphs: ["Esta política describe el tratamiento de datos asociado a la navegación por el sitio y a los canales de contacto de Burbuja Política. Para consultas sobre privacidad, puedes escribirnos desde la página de Contacto."] },
          { heading: "Qué información podemos recibir", paragraphs: ["Si utilizas un formulario o nos envías información, podemos recibir los datos que incluyas, como nombre, correo electrónico, asunto y contenido del mensaje. Al visitar el sitio, el servidor y las herramientas técnicas pueden procesar datos de conexión y navegación."] },
          { heading: "Para qué se utiliza", bullets: ["Responder consultas y solicitudes editoriales.", "Revisar información enviada al medio y dar seguimiento a correcciones.", "Mantener, proteger y mejorar el funcionamiento del sitio.", "Comprender de forma agregada qué contenidos interesan a la audiencia, cuando las herramientas analíticas estén habilitadas."] },
          { heading: "Control y solicitudes", paragraphs: ["Puedes solicitar acceso, actualización o eliminación de la información que nos hayas enviado, así como consultar el uso que se le da. Incluye en tu solicitud el medio de contacto y los detalles necesarios para identificarla."] },
          { heading: "Actualizaciones", paragraphs: ["Esta política podrá actualizarse si cambian los servicios, herramientas o procesos del sitio. La versión vigente se publicará en esta página."] }
        ]
      },
      "terminos-y-condiciones": {
        title: "Términos y condiciones de uso",
        intro: "Estas reglas describen el uso del portal Burbuja Política y de los contenidos publicados en él.",
        sections: [
          { heading: "Uso del portal", paragraphs: ["El sitio ofrece información periodística, análisis, opinión y contenidos de interés público. La persona usuaria se compromete a utilizarlo de forma lícita y respetuosa, sin interferir con su funcionamiento ni vulnerar los derechos de otras personas."] },
          { heading: "Contenidos y atribución", paragraphs: ["Los textos, fotografías, videos, marcas y otros materiales pueden estar protegidos por derechos de autor. La lectura y el enlace a las publicaciones están permitidos; la reproducción o explotación de material requiere autorización o una excepción legal aplicable."] },
          { heading: "Enlaces externos", paragraphs: ["El portal puede incluir enlaces a páginas de terceros. Burbuja Política no controla sus contenidos, disponibilidad ni políticas."] },
          { heading: "Comentarios e información enviada", paragraphs: ["La información enviada por los canales del medio debe ser pertinente, verificable y respetuosa. El envío de una comunicación no garantiza su publicación ni una respuesta inmediata."] },
          { heading: "Cambios", paragraphs: ["Estos términos pueden actualizarse para reflejar cambios en el portal o en sus servicios. El uso continuado del sitio tras una actualización implica que se consultó la versión vigente."] }
        ]
      },
      "politica-de-cookies": {
        title: "Política de cookies",
        intro: "Las cookies y tecnologías similares pueden ayudar a que un sitio funcione, recuerde preferencias y mida el uso de sus contenidos.",
        sections: [
          { heading: "Qué son las cookies", paragraphs: ["Son pequeños archivos o identificadores que el navegador puede guardar al visitar una página. También existen tecnologías equivalentes utilizadas para recordar preferencias o generar estadísticas."] },
          { heading: "Categorías de uso", bullets: ["Técnicas: necesarias para ofrecer funciones básicas y proteger el sitio.", "Preferencias: recuerdan opciones de visualización o navegación.", "Analítica: ayudan a conocer, de forma agregada, cómo se utilizan las páginas.", "Publicidad y medición: pueden evaluar campañas o limitar repeticiones de anuncios cuando esos servicios estén activos."] },
          { heading: "Control desde el navegador", paragraphs: ["Puedes revisar, bloquear o eliminar cookies desde los ajustes de tu navegador. Si se desactivan ciertas cookies, algunas funciones del sitio podrían no operar como se espera."] },
          { heading: "Herramientas de terceros", paragraphs: ["Servicios externos de analítica, contenido integrado o publicidad pueden aplicar sus propias tecnologías y políticas. La lista concreta de proveedores debe actualizarse cuando esas herramientas se configuren en el sitio."] }
        ]
      },
      "quienes-somos": {
        title: "Sabemos de Política",
        intro: "Burbuja Política es un medio digital especializado en política, entendiendo que muchos de los temas que gravitan sobre el desarrollo de los territorios pasan por la ejecución de programas y proyectos políticos.",
        sections: [
          { heading: "Nuestro propósito", paragraphs: ["Hacer visible acciones gubernamentales y de la sociedad civil hacen parte de nuestro norte informativo. Contamos historias y decisiones que ayudan a entender lo que ocurre en Córdoba, Colombia y sus comunidades."] },
          { heading: "Desde el territorio", paragraphs: ["Damos espacio a la actualidad política, las voces ciudadanas, la gestión pública y los asuntos sociales y ambientales que influyen en la vida cotidiana."] },
          { heading: "Qué encontrarás", bullets: ["Noticias de política nacional, Córdoba y la región.", "Información internacional, ambiental y comunitaria.", "Opinión, crónicas, boletines y seguimiento a temas de interés público."] }
        ]
      },
      "equipo-editorial": {
        title: "Equipo editorial",
        intro: "El equipo editorial organiza la cobertura, verifica la información y prepara los contenidos publicados por Burbuja Política.",
        sections: [
          { heading: "Responsabilidades editoriales", bullets: ["Dirección editorial: define prioridades de cobertura y supervisa los criterios periodísticos.", "Redacción: investiga, escribe y actualiza las noticias.", "Colaboradores: aportan información, análisis y perspectivas desde sus áreas y territorios.", "Edición: revisa claridad, contexto, atribución de fuentes y consistencia antes de publicar."] },
          { heading: "Firmas y atribuciones", paragraphs: ["Las publicaciones identifican a su autor o a la Redacción Burbuja según corresponda. Los nombres y cargos de responsables editoriales se mostrarán junto a sus contenidos y se actualizarán en esta página cuando el medio los confirme públicamente."] },
          { heading: "Contacto editorial", paragraphs: ["Para consultas sobre una publicación, solicitudes de entrevista o información para la redacción, utiliza el canal de Contacto."] }
        ]
      },
      "politica-editorial": {
        title: "Política editorial",
        intro: "Nuestros criterios editoriales buscan ofrecer información comprensible, contrastada y útil para las comunidades.",
        sections: [
          { heading: "Verificación y fuentes", bullets: ["Contrastamos los datos relevantes antes de publicar.", "Identificamos las fuentes y atribuimos declaraciones y documentos.", "Cuando un dato no puede verificarse de forma independiente, lo indicamos con claridad.", "Solicitamos la versión de las personas o entidades directamente involucradas cuando el tema lo requiere."] },
          { heading: "Independencia y equilibrio", paragraphs: ["La cobertura procura distinguir hechos, análisis y opiniones. Las decisiones editoriales se toman con independencia y buscan representar el contexto relevante sin ocultar información significativa."] },
          { heading: "Opinión y contenido de terceros", paragraphs: ["Las columnas y artículos de opinión se presentan como tales. Los comunicados, boletines y materiales de terceros se atribuyen a su origen y pueden editarse para claridad y formato sin alterar su sentido."] },
          { heading: "Actualizaciones y correcciones", paragraphs: ["Si una publicación necesita una actualización o rectificación, se revisa la evidencia recibida y se informa el cambio de manera visible según su naturaleza. Consulta Correcciones y rectificaciones para enviar una solicitud."] }
        ]
      },
      "correcciones-y-rectificaciones": {
        title: "Correcciones y rectificaciones",
        intro: "La precisión importa. Si encuentras un error u omisión en una publicación, puedes solicitar su revisión.",
        sections: [
          { heading: "Cómo enviar una solicitud", bullets: ["Comparte el enlace exacto de la noticia.", "Indica el dato que consideras incorrecto o incompleto.", "Explica qué debería corregirse y adjunta documentos o fuentes que permitan verificarlo.", "Incluye un medio de contacto para poder responderte."] },
          { heading: "Qué hacemos con la solicitud", paragraphs: ["La redacción revisará la publicación y la información recibida. Si corresponde un cambio, actualizará el contenido y señalará la corrección o aclaración de manera proporcional. La solicitud no garantiza que se realice un cambio; la decisión se basa en la verificación editorial."] },
          { heading: "Canal de contacto", paragraphs: ["Envía tu solicitud mediante la página de Contacto y selecciona el asunto “Corrección o rectificación”."] }
        ]
      },
      contacto: {
        title: "Contacto",
        intro: "Escríbenos para compartir información, enviar solicitudes editoriales o consultar sobre el medio.",
        sections: [
          { heading: "Contacto editorial", paragraphs: ["Para compartir una noticia, proponer una entrevista o enviar documentos, utiliza el formulario de esta página. Incluye fechas, lugares y fuentes disponibles."] },
          { heading: "Correcciones y rectificaciones", paragraphs: ["Incluye el enlace a la publicación y explica qué información debe revisarse. Puedes consultar el procedimiento completo en nuestra política de correcciones."] },
          { heading: "Contacto comercial", paragraphs: ["Para consultas sobre alianzas, pauta y servicios comerciales, selecciona “Contacto comercial” en el formulario."] },
          { heading: "Redes sociales", bullets: ["Facebook: Burbuja Política.", "Instagram: @burbujapolitica.", "X: @burbujapolitica."] }
        ]
      },
      "derechos-de-autor": {
        title: "Derechos de autor",
        intro: "Los contenidos de Burbuja Política —incluidos textos, fotografías, videos, diseño y marcas— pueden estar protegidos por derechos de autor y otras normas aplicables.",
        sections: [
          { heading: "Enlaces y citas", paragraphs: ["Puedes enlazar nuestras publicaciones y citar fragmentos breves indicando claramente el medio y enlazando a la nota original, siempre dentro de los límites permitidos por la ley."] },
          { heading: "Reproducción de contenidos", paragraphs: ["La reproducción completa, distribución, adaptación o uso comercial de textos, fotografías o videos requiere autorización previa del titular de los derechos, salvo que exista una autorización o excepción legal aplicable."] },
          { heading: "Material de terceros", paragraphs: ["Las imágenes, documentos y otros materiales pertenecientes a terceros conservan los derechos de sus respectivos titulares. Los créditos se indican junto al contenido cuando corresponde."] },
          { heading: "Solicitudes de uso", paragraphs: ["Para solicitar autorización, indica el material, el uso previsto, el medio de publicación y tus datos de contacto mediante la página de Contacto."] }
        ]
      }
    };
    const route = useRoute();
    const page = computed(() => pages[String(route.params.slug)]);
    const sectionId = (heading) => heading.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-");
    if (!page.value) throw createError({ statusCode: 404, statusMessage: "Página no encontrada" });
    useSeoMeta({ title: () => `${page.value?.title} | Burbuja Política`, description: () => page.value?.intro });
    const contact = reactive({ name: "", email: "", topic: "Consulta editorial", message: "" });
    const contactSent = ref(false);
    const contactError = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(page)) {
        _push(`<main${ssrRenderAttrs(mergeProps({ class: "wrap info-page" }, _attrs))} data-v-ae6339f2><nav class="info-breadcrumb" data-v-ae6339f2>`);
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
        _push(`<span data-v-ae6339f2>›</span><span data-v-ae6339f2>Información</span><span data-v-ae6339f2>›</span><b data-v-ae6339f2>${ssrInterpolate(unref(page).title)}</b></nav><header class="info-hero" data-v-ae6339f2><span class="eyebrow" data-v-ae6339f2>BURBUJA POLÍTICA <i data-v-ae6339f2></i> INFORMACIÓN</span><h1 data-v-ae6339f2>${ssrInterpolate(unref(page).title)}</h1><p data-v-ae6339f2>${ssrInterpolate(unref(page).intro)}</p><small data-v-ae6339f2>Información institucional · Actualizada en octubre de 2026</small></header><div class="info-layout" data-v-ae6339f2><article class="info-content" data-v-ae6339f2><!--[-->`);
        ssrRenderList(unref(page).sections, (section) => {
          _push(`<section${ssrRenderAttr("id", sectionId(section.heading))} class="info-section" data-v-ae6339f2><h2 data-v-ae6339f2>${ssrInterpolate(section.heading)}</h2><!--[-->`);
          ssrRenderList(section.paragraphs, (paragraph) => {
            _push(`<p data-v-ae6339f2>${ssrInterpolate(paragraph)}</p>`);
          });
          _push(`<!--]-->`);
          if (section.bullets) {
            _push(`<ul data-v-ae6339f2><!--[-->`);
            ssrRenderList(section.bullets, (bullet) => {
              _push(`<li data-v-ae6339f2>${ssrInterpolate(bullet)}</li>`);
            });
            _push(`<!--]--></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</section>`);
        });
        _push(`<!--]-->`);
        if (unref(route).params.slug === "contacto") {
          _push(`<section class="contact-form-card" data-v-ae6339f2>`);
          if (unref(contactSent)) {
            _push(`<div class="contact-success" data-v-ae6339f2><span data-v-ae6339f2>✓</span><div data-v-ae6339f2><b data-v-ae6339f2>Mensaje preparado</b><p data-v-ae6339f2>Gracias, ${ssrInterpolate(unref(contact).name)}. Este formulario es una demostración y todavía no envía mensajes.</p></div></div>`);
          } else {
            _push(`<!--[--><h2 data-v-ae6339f2>Escríbenos</h2><p class="form-intro" data-v-ae6339f2>Completa los datos y selecciona el motivo de tu mensaje.</p><form data-v-ae6339f2><div class="contact-fields" data-v-ae6339f2><label data-v-ae6339f2>Nombre<input${ssrRenderAttr("value", unref(contact).name)} autocomplete="name" placeholder="Tu nombre" data-v-ae6339f2></label><label data-v-ae6339f2>Correo electrónico<input${ssrRenderAttr("value", unref(contact).email)} type="email" autocomplete="email" placeholder="nombre@correo.com" data-v-ae6339f2></label></div><label data-v-ae6339f2>Motivo<select data-v-ae6339f2><option data-v-ae6339f2${ssrIncludeBooleanAttr(Array.isArray(unref(contact).topic) ? ssrLooseContain(unref(contact).topic, null) : ssrLooseEqual(unref(contact).topic, null)) ? " selected" : ""}>Consulta editorial</option><option data-v-ae6339f2${ssrIncludeBooleanAttr(Array.isArray(unref(contact).topic) ? ssrLooseContain(unref(contact).topic, null) : ssrLooseEqual(unref(contact).topic, null)) ? " selected" : ""}>Corrección o rectificación</option><option data-v-ae6339f2${ssrIncludeBooleanAttr(Array.isArray(unref(contact).topic) ? ssrLooseContain(unref(contact).topic, null) : ssrLooseEqual(unref(contact).topic, null)) ? " selected" : ""}>Contacto comercial</option><option data-v-ae6339f2${ssrIncludeBooleanAttr(Array.isArray(unref(contact).topic) ? ssrLooseContain(unref(contact).topic, null) : ssrLooseEqual(unref(contact).topic, null)) ? " selected" : ""}>Enviar información</option><option data-v-ae6339f2${ssrIncludeBooleanAttr(Array.isArray(unref(contact).topic) ? ssrLooseContain(unref(contact).topic, null) : ssrLooseEqual(unref(contact).topic, null)) ? " selected" : ""}>Otro</option></select></label><label data-v-ae6339f2>Mensaje<textarea rows="5" placeholder="Cuéntanos cómo podemos ayudarte" data-v-ae6339f2>${ssrInterpolate(unref(contact).message)}</textarea></label>`);
            if (unref(contactError)) {
              _push(`<p class="contact-error" data-v-ae6339f2>${ssrInterpolate(unref(contactError))}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<button class="contact-submit" data-v-ae6339f2>Preparar mensaje <span data-v-ae6339f2>→</span></button><small class="form-demo-note" data-v-ae6339f2>Formulario de demostración: el mensaje no se envía ni se almacena.</small></form><!--]-->`);
          }
          _push(`</section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="info-help" data-v-ae6339f2><span class="about-bp" data-v-ae6339f2>BP</span><div data-v-ae6339f2><b data-v-ae6339f2>¿Necesitas más información?</b><p data-v-ae6339f2>El equipo de Burbuja Política está disponible para atender consultas editoriales y solicitudes relacionadas con el medio.</p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/contacto/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Ir a Contacto →`);
            } else {
              return [
                createTextVNode("Ir a Contacto →")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></article><aside class="info-sidebar" data-v-ae6339f2><div class="info-sidebar-title" data-v-ae6339f2>En esta página</div><!--[-->`);
        ssrRenderList(unref(page).sections, (section) => {
          _push(`<a${ssrRenderAttr("href", `#${sectionId(section.heading)}`)} data-v-ae6339f2>${ssrInterpolate(section.heading)}</a>`);
        });
        _push(`<!--]--><div class="info-sidebar-separator" data-v-ae6339f2></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/correcciones-y-rectificaciones/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Correcciones y rectificaciones →`);
            } else {
              return [
                createTextVNode("Correcciones y rectificaciones →")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/contacto/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Contacto →`);
            } else {
              return [
                createTextVNode("Contacto →")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</aside></div></main>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ae6339f2"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-BL5LYjWh.js.map
