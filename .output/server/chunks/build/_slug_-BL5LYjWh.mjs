import { a as useRoute, c as createError, _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, computed, reactive, ref, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
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
    const pages = {
      "politica-de-privacidad": {
        title: "Pol\xEDtica de privacidad",
        intro: "En Burbuja Pol\xEDtica reconocemos la importancia de proteger los datos personales de lectores, visitantes y personas que se comunican con el medio.",
        sections: [
          { heading: "Responsable y alcance", paragraphs: ["Esta pol\xEDtica describe el tratamiento de datos asociado a la navegaci\xF3n por el sitio y a los canales de contacto de Burbuja Pol\xEDtica. Para consultas sobre privacidad, puedes escribirnos desde la p\xE1gina de Contacto."] },
          { heading: "Qu\xE9 informaci\xF3n podemos recibir", paragraphs: ["Si utilizas un formulario o nos env\xEDas informaci\xF3n, podemos recibir los datos que incluyas, como nombre, correo electr\xF3nico, asunto y contenido del mensaje. Al visitar el sitio, el servidor y las herramientas t\xE9cnicas pueden procesar datos de conexi\xF3n y navegaci\xF3n."] },
          { heading: "Para qu\xE9 se utiliza", bullets: ["Responder consultas y solicitudes editoriales.", "Revisar informaci\xF3n enviada al medio y dar seguimiento a correcciones.", "Mantener, proteger y mejorar el funcionamiento del sitio.", "Comprender de forma agregada qu\xE9 contenidos interesan a la audiencia, cuando las herramientas anal\xEDticas est\xE9n habilitadas."] },
          { heading: "Control y solicitudes", paragraphs: ["Puedes solicitar acceso, actualizaci\xF3n o eliminaci\xF3n de la informaci\xF3n que nos hayas enviado, as\xED como consultar el uso que se le da. Incluye en tu solicitud el medio de contacto y los detalles necesarios para identificarla."] },
          { heading: "Actualizaciones", paragraphs: ["Esta pol\xEDtica podr\xE1 actualizarse si cambian los servicios, herramientas o procesos del sitio. La versi\xF3n vigente se publicar\xE1 en esta p\xE1gina."] }
        ]
      },
      "terminos-y-condiciones": {
        title: "T\xE9rminos y condiciones de uso",
        intro: "Estas reglas describen el uso del portal Burbuja Pol\xEDtica y de los contenidos publicados en \xE9l.",
        sections: [
          { heading: "Uso del portal", paragraphs: ["El sitio ofrece informaci\xF3n period\xEDstica, an\xE1lisis, opini\xF3n y contenidos de inter\xE9s p\xFAblico. La persona usuaria se compromete a utilizarlo de forma l\xEDcita y respetuosa, sin interferir con su funcionamiento ni vulnerar los derechos de otras personas."] },
          { heading: "Contenidos y atribuci\xF3n", paragraphs: ["Los textos, fotograf\xEDas, videos, marcas y otros materiales pueden estar protegidos por derechos de autor. La lectura y el enlace a las publicaciones est\xE1n permitidos; la reproducci\xF3n o explotaci\xF3n de material requiere autorizaci\xF3n o una excepci\xF3n legal aplicable."] },
          { heading: "Enlaces externos", paragraphs: ["El portal puede incluir enlaces a p\xE1ginas de terceros. Burbuja Pol\xEDtica no controla sus contenidos, disponibilidad ni pol\xEDticas."] },
          { heading: "Comentarios e informaci\xF3n enviada", paragraphs: ["La informaci\xF3n enviada por los canales del medio debe ser pertinente, verificable y respetuosa. El env\xEDo de una comunicaci\xF3n no garantiza su publicaci\xF3n ni una respuesta inmediata."] },
          { heading: "Cambios", paragraphs: ["Estos t\xE9rminos pueden actualizarse para reflejar cambios en el portal o en sus servicios. El uso continuado del sitio tras una actualizaci\xF3n implica que se consult\xF3 la versi\xF3n vigente."] }
        ]
      },
      "politica-de-cookies": {
        title: "Pol\xEDtica de cookies",
        intro: "Las cookies y tecnolog\xEDas similares pueden ayudar a que un sitio funcione, recuerde preferencias y mida el uso de sus contenidos.",
        sections: [
          { heading: "Qu\xE9 son las cookies", paragraphs: ["Son peque\xF1os archivos o identificadores que el navegador puede guardar al visitar una p\xE1gina. Tambi\xE9n existen tecnolog\xEDas equivalentes utilizadas para recordar preferencias o generar estad\xEDsticas."] },
          { heading: "Categor\xEDas de uso", bullets: ["T\xE9cnicas: necesarias para ofrecer funciones b\xE1sicas y proteger el sitio.", "Preferencias: recuerdan opciones de visualizaci\xF3n o navegaci\xF3n.", "Anal\xEDtica: ayudan a conocer, de forma agregada, c\xF3mo se utilizan las p\xE1ginas.", "Publicidad y medici\xF3n: pueden evaluar campa\xF1as o limitar repeticiones de anuncios cuando esos servicios est\xE9n activos."] },
          { heading: "Control desde el navegador", paragraphs: ["Puedes revisar, bloquear o eliminar cookies desde los ajustes de tu navegador. Si se desactivan ciertas cookies, algunas funciones del sitio podr\xEDan no operar como se espera."] },
          { heading: "Herramientas de terceros", paragraphs: ["Servicios externos de anal\xEDtica, contenido integrado o publicidad pueden aplicar sus propias tecnolog\xEDas y pol\xEDticas. La lista concreta de proveedores debe actualizarse cuando esas herramientas se configuren en el sitio."] }
        ]
      },
      "quienes-somos": {
        title: "Sabemos de Pol\xEDtica",
        intro: "Burbuja Pol\xEDtica es un medio digital especializado en pol\xEDtica, entendiendo que muchos de los temas que gravitan sobre el desarrollo de los territorios pasan por la ejecuci\xF3n de programas y proyectos pol\xEDticos.",
        sections: [
          { heading: "Nuestro prop\xF3sito", paragraphs: ["Hacer visible acciones gubernamentales y de la sociedad civil hacen parte de nuestro norte informativo. Contamos historias y decisiones que ayudan a entender lo que ocurre en C\xF3rdoba, Colombia y sus comunidades."] },
          { heading: "Desde el territorio", paragraphs: ["Damos espacio a la actualidad pol\xEDtica, las voces ciudadanas, la gesti\xF3n p\xFAblica y los asuntos sociales y ambientales que influyen en la vida cotidiana."] },
          { heading: "Qu\xE9 encontrar\xE1s", bullets: ["Noticias de pol\xEDtica nacional, C\xF3rdoba y la regi\xF3n.", "Informaci\xF3n internacional, ambiental y comunitaria.", "Opini\xF3n, cr\xF3nicas, boletines y seguimiento a temas de inter\xE9s p\xFAblico."] }
        ]
      },
      "equipo-editorial": {
        title: "Equipo editorial",
        intro: "El equipo editorial organiza la cobertura, verifica la informaci\xF3n y prepara los contenidos publicados por Burbuja Pol\xEDtica.",
        sections: [
          { heading: "Responsabilidades editoriales", bullets: ["Direcci\xF3n editorial: define prioridades de cobertura y supervisa los criterios period\xEDsticos.", "Redacci\xF3n: investiga, escribe y actualiza las noticias.", "Colaboradores: aportan informaci\xF3n, an\xE1lisis y perspectivas desde sus \xE1reas y territorios.", "Edici\xF3n: revisa claridad, contexto, atribuci\xF3n de fuentes y consistencia antes de publicar."] },
          { heading: "Firmas y atribuciones", paragraphs: ["Las publicaciones identifican a su autor o a la Redacci\xF3n Burbuja seg\xFAn corresponda. Los nombres y cargos de responsables editoriales se mostrar\xE1n junto a sus contenidos y se actualizar\xE1n en esta p\xE1gina cuando el medio los confirme p\xFAblicamente."] },
          { heading: "Contacto editorial", paragraphs: ["Para consultas sobre una publicaci\xF3n, solicitudes de entrevista o informaci\xF3n para la redacci\xF3n, utiliza el canal de Contacto."] }
        ]
      },
      "politica-editorial": {
        title: "Pol\xEDtica editorial",
        intro: "Nuestros criterios editoriales buscan ofrecer informaci\xF3n comprensible, contrastada y \xFAtil para las comunidades.",
        sections: [
          { heading: "Verificaci\xF3n y fuentes", bullets: ["Contrastamos los datos relevantes antes de publicar.", "Identificamos las fuentes y atribuimos declaraciones y documentos.", "Cuando un dato no puede verificarse de forma independiente, lo indicamos con claridad.", "Solicitamos la versi\xF3n de las personas o entidades directamente involucradas cuando el tema lo requiere."] },
          { heading: "Independencia y equilibrio", paragraphs: ["La cobertura procura distinguir hechos, an\xE1lisis y opiniones. Las decisiones editoriales se toman con independencia y buscan representar el contexto relevante sin ocultar informaci\xF3n significativa."] },
          { heading: "Opini\xF3n y contenido de terceros", paragraphs: ["Las columnas y art\xEDculos de opini\xF3n se presentan como tales. Los comunicados, boletines y materiales de terceros se atribuyen a su origen y pueden editarse para claridad y formato sin alterar su sentido."] },
          { heading: "Actualizaciones y correcciones", paragraphs: ["Si una publicaci\xF3n necesita una actualizaci\xF3n o rectificaci\xF3n, se revisa la evidencia recibida y se informa el cambio de manera visible seg\xFAn su naturaleza. Consulta Correcciones y rectificaciones para enviar una solicitud."] }
        ]
      },
      "correcciones-y-rectificaciones": {
        title: "Correcciones y rectificaciones",
        intro: "La precisi\xF3n importa. Si encuentras un error u omisi\xF3n en una publicaci\xF3n, puedes solicitar su revisi\xF3n.",
        sections: [
          { heading: "C\xF3mo enviar una solicitud", bullets: ["Comparte el enlace exacto de la noticia.", "Indica el dato que consideras incorrecto o incompleto.", "Explica qu\xE9 deber\xEDa corregirse y adjunta documentos o fuentes que permitan verificarlo.", "Incluye un medio de contacto para poder responderte."] },
          { heading: "Qu\xE9 hacemos con la solicitud", paragraphs: ["La redacci\xF3n revisar\xE1 la publicaci\xF3n y la informaci\xF3n recibida. Si corresponde un cambio, actualizar\xE1 el contenido y se\xF1alar\xE1 la correcci\xF3n o aclaraci\xF3n de manera proporcional. La solicitud no garantiza que se realice un cambio; la decisi\xF3n se basa en la verificaci\xF3n editorial."] },
          { heading: "Canal de contacto", paragraphs: ["Env\xEDa tu solicitud mediante la p\xE1gina de Contacto y selecciona el asunto \u201CCorrecci\xF3n o rectificaci\xF3n\u201D."] }
        ]
      },
      contacto: {
        title: "Contacto",
        intro: "Escr\xEDbenos para compartir informaci\xF3n, enviar solicitudes editoriales o consultar sobre el medio.",
        sections: [
          { heading: "Contacto editorial", paragraphs: ["Para compartir una noticia, proponer una entrevista o enviar documentos, utiliza el formulario de esta p\xE1gina. Incluye fechas, lugares y fuentes disponibles."] },
          { heading: "Correcciones y rectificaciones", paragraphs: ["Incluye el enlace a la publicaci\xF3n y explica qu\xE9 informaci\xF3n debe revisarse. Puedes consultar el procedimiento completo en nuestra pol\xEDtica de correcciones."] },
          { heading: "Contacto comercial", paragraphs: ["Para consultas sobre alianzas, pauta y servicios comerciales, selecciona \u201CContacto comercial\u201D en el formulario."] },
          { heading: "Redes sociales", bullets: ["Facebook: Burbuja Pol\xEDtica.", "Instagram: @burbujapolitica.", "X: @burbujapolitica."] }
        ]
      },
      "derechos-de-autor": {
        title: "Derechos de autor",
        intro: "Los contenidos de Burbuja Pol\xEDtica \u2014incluidos textos, fotograf\xEDas, videos, dise\xF1o y marcas\u2014 pueden estar protegidos por derechos de autor y otras normas aplicables.",
        sections: [
          { heading: "Enlaces y citas", paragraphs: ["Puedes enlazar nuestras publicaciones y citar fragmentos breves indicando claramente el medio y enlazando a la nota original, siempre dentro de los l\xEDmites permitidos por la ley."] },
          { heading: "Reproducci\xF3n de contenidos", paragraphs: ["La reproducci\xF3n completa, distribuci\xF3n, adaptaci\xF3n o uso comercial de textos, fotograf\xEDas o videos requiere autorizaci\xF3n previa del titular de los derechos, salvo que exista una autorizaci\xF3n o excepci\xF3n legal aplicable."] },
          { heading: "Material de terceros", paragraphs: ["Las im\xE1genes, documentos y otros materiales pertenecientes a terceros conservan los derechos de sus respectivos titulares. Los cr\xE9ditos se indican junto al contenido cuando corresponde."] },
          { heading: "Solicitudes de uso", paragraphs: ["Para solicitar autorizaci\xF3n, indica el material, el uso previsto, el medio de publicaci\xF3n y tus datos de contacto mediante la p\xE1gina de Contacto."] }
        ]
      }
    };
    const route = useRoute();
    const page = computed(() => pages[String(route.params.slug)]);
    const sectionId = (heading) => heading.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-");
    if (!page.value) throw createError({ statusCode: 404, statusMessage: "P\xE1gina no encontrada" });
    useSeoMeta({ title: () => {
      var _a;
      return `${(_a = page.value) == null ? void 0 : _a.title} | Burbuja Pol\xEDtica`;
    }, description: () => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.intro;
    } });
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
        _push(`<span data-v-ae6339f2>\u203A</span><span data-v-ae6339f2>Informaci\xF3n</span><span data-v-ae6339f2>\u203A</span><b data-v-ae6339f2>${ssrInterpolate(unref(page).title)}</b></nav><header class="info-hero" data-v-ae6339f2><span class="eyebrow" data-v-ae6339f2>BURBUJA POL\xCDTICA <i data-v-ae6339f2></i> INFORMACI\xD3N</span><h1 data-v-ae6339f2>${ssrInterpolate(unref(page).title)}</h1><p data-v-ae6339f2>${ssrInterpolate(unref(page).intro)}</p><small data-v-ae6339f2>Informaci\xF3n institucional \xB7 Actualizada en octubre de 2026</small></header><div class="info-layout" data-v-ae6339f2><article class="info-content" data-v-ae6339f2><!--[-->`);
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
            _push(`<div class="contact-success" data-v-ae6339f2><span data-v-ae6339f2>\u2713</span><div data-v-ae6339f2><b data-v-ae6339f2>Mensaje preparado</b><p data-v-ae6339f2>Gracias, ${ssrInterpolate(unref(contact).name)}. Este formulario es una demostraci\xF3n y todav\xEDa no env\xEDa mensajes.</p></div></div>`);
          } else {
            _push(`<!--[--><h2 data-v-ae6339f2>Escr\xEDbenos</h2><p class="form-intro" data-v-ae6339f2>Completa los datos y selecciona el motivo de tu mensaje.</p><form data-v-ae6339f2><div class="contact-fields" data-v-ae6339f2><label data-v-ae6339f2>Nombre<input${ssrRenderAttr("value", unref(contact).name)} autocomplete="name" placeholder="Tu nombre" data-v-ae6339f2></label><label data-v-ae6339f2>Correo electr\xF3nico<input${ssrRenderAttr("value", unref(contact).email)} type="email" autocomplete="email" placeholder="nombre@correo.com" data-v-ae6339f2></label></div><label data-v-ae6339f2>Motivo<select data-v-ae6339f2><option data-v-ae6339f2${ssrIncludeBooleanAttr(Array.isArray(unref(contact).topic) ? ssrLooseContain(unref(contact).topic, null) : ssrLooseEqual(unref(contact).topic, null)) ? " selected" : ""}>Consulta editorial</option><option data-v-ae6339f2${ssrIncludeBooleanAttr(Array.isArray(unref(contact).topic) ? ssrLooseContain(unref(contact).topic, null) : ssrLooseEqual(unref(contact).topic, null)) ? " selected" : ""}>Correcci\xF3n o rectificaci\xF3n</option><option data-v-ae6339f2${ssrIncludeBooleanAttr(Array.isArray(unref(contact).topic) ? ssrLooseContain(unref(contact).topic, null) : ssrLooseEqual(unref(contact).topic, null)) ? " selected" : ""}>Contacto comercial</option><option data-v-ae6339f2${ssrIncludeBooleanAttr(Array.isArray(unref(contact).topic) ? ssrLooseContain(unref(contact).topic, null) : ssrLooseEqual(unref(contact).topic, null)) ? " selected" : ""}>Enviar informaci\xF3n</option><option data-v-ae6339f2${ssrIncludeBooleanAttr(Array.isArray(unref(contact).topic) ? ssrLooseContain(unref(contact).topic, null) : ssrLooseEqual(unref(contact).topic, null)) ? " selected" : ""}>Otro</option></select></label><label data-v-ae6339f2>Mensaje<textarea rows="5" placeholder="Cu\xE9ntanos c\xF3mo podemos ayudarte" data-v-ae6339f2>${ssrInterpolate(unref(contact).message)}</textarea></label>`);
            if (unref(contactError)) {
              _push(`<p class="contact-error" data-v-ae6339f2>${ssrInterpolate(unref(contactError))}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<button class="contact-submit" data-v-ae6339f2>Preparar mensaje <span data-v-ae6339f2>\u2192</span></button><small class="form-demo-note" data-v-ae6339f2>Formulario de demostraci\xF3n: el mensaje no se env\xEDa ni se almacena.</small></form><!--]-->`);
          }
          _push(`</section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="info-help" data-v-ae6339f2><span class="about-bp" data-v-ae6339f2>BP</span><div data-v-ae6339f2><b data-v-ae6339f2>\xBFNecesitas m\xE1s informaci\xF3n?</b><p data-v-ae6339f2>El equipo de Burbuja Pol\xEDtica est\xE1 disponible para atender consultas editoriales y solicitudes relacionadas con el medio.</p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/contacto/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Ir a Contacto \u2192`);
            } else {
              return [
                createTextVNode("Ir a Contacto \u2192")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></article><aside class="info-sidebar" data-v-ae6339f2><div class="info-sidebar-title" data-v-ae6339f2>En esta p\xE1gina</div><!--[-->`);
        ssrRenderList(unref(page).sections, (section) => {
          _push(`<a${ssrRenderAttr("href", `#${sectionId(section.heading)}`)} data-v-ae6339f2>${ssrInterpolate(section.heading)}</a>`);
        });
        _push(`<!--]--><div class="info-sidebar-separator" data-v-ae6339f2></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/correcciones-y-rectificaciones/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Correcciones y rectificaciones \u2192`);
            } else {
              return [
                createTextVNode("Correcciones y rectificaciones \u2192")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/contacto/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Contacto \u2192`);
            } else {
              return [
                createTextVNode("Contacto \u2192")
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

export { _slug_ as default };
//# sourceMappingURL=_slug_-BL5LYjWh.mjs.map
