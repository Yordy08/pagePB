<script setup lang="ts">
type InfoPage = { title: string; intro: string; sections: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }> }

const pages: Record<string, InfoPage> = {
  'politica-de-privacidad': {
    title: 'Política de privacidad',
    intro: 'En Burbuja Política reconocemos la importancia de proteger los datos personales de lectores, visitantes y personas que se comunican con el medio.',
    sections: [
      { heading: 'Responsable y alcance', paragraphs: ['Esta política describe el tratamiento de datos asociado a la navegación por el sitio y a los canales de contacto de Burbuja Política. Para consultas sobre privacidad, puedes escribirnos desde la página de Contacto.'] },
      { heading: 'Qué información podemos recibir', paragraphs: ['Si utilizas un formulario o nos envías información, podemos recibir los datos que incluyas, como nombre, correo electrónico, asunto y contenido del mensaje. Al visitar el sitio, el servidor y las herramientas técnicas pueden procesar datos de conexión y navegación.'] },
      { heading: 'Para qué se utiliza', bullets: ['Responder consultas y solicitudes editoriales.', 'Revisar información enviada al medio y dar seguimiento a correcciones.', 'Mantener, proteger y mejorar el funcionamiento del sitio.', 'Comprender de forma agregada qué contenidos interesan a la audiencia, cuando las herramientas analíticas estén habilitadas.'] },
      { heading: 'Control y solicitudes', paragraphs: ['Puedes solicitar acceso, actualización o eliminación de la información que nos hayas enviado, así como consultar el uso que se le da. Incluye en tu solicitud el medio de contacto y los detalles necesarios para identificarla.'] },
      { heading: 'Actualizaciones', paragraphs: ['Esta política podrá actualizarse si cambian los servicios, herramientas o procesos del sitio. La versión vigente se publicará en esta página.'] }
    ]
  },
  'terminos-y-condiciones': {
    title: 'Términos y condiciones de uso',
    intro: 'Estas reglas describen el uso del portal Burbuja Política y de los contenidos publicados en él.',
    sections: [
      { heading: 'Uso del portal', paragraphs: ['El sitio ofrece información periodística, análisis, opinión y contenidos de interés público. La persona usuaria se compromete a utilizarlo de forma lícita y respetuosa, sin interferir con su funcionamiento ni vulnerar los derechos de otras personas.'] },
      { heading: 'Contenidos y atribución', paragraphs: ['Los textos, fotografías, videos, marcas y otros materiales pueden estar protegidos por derechos de autor. La lectura y el enlace a las publicaciones están permitidos; la reproducción o explotación de material requiere autorización o una excepción legal aplicable.'] },
      { heading: 'Enlaces externos', paragraphs: ['El portal puede incluir enlaces a páginas de terceros. Burbuja Política no controla sus contenidos, disponibilidad ni políticas.'] },
      { heading: 'Comentarios e información enviada', paragraphs: ['La información enviada por los canales del medio debe ser pertinente, verificable y respetuosa. El envío de una comunicación no garantiza su publicación ni una respuesta inmediata.'] },
      { heading: 'Cambios', paragraphs: ['Estos términos pueden actualizarse para reflejar cambios en el portal o en sus servicios. El uso continuado del sitio tras una actualización implica que se consultó la versión vigente.'] }
    ]
  },
  'politica-de-cookies': {
    title: 'Política de cookies',
    intro: 'Las cookies y tecnologías similares pueden ayudar a que un sitio funcione, recuerde preferencias y mida el uso de sus contenidos.',
    sections: [
      { heading: 'Qué son las cookies', paragraphs: ['Son pequeños archivos o identificadores que el navegador puede guardar al visitar una página. También existen tecnologías equivalentes utilizadas para recordar preferencias o generar estadísticas.'] },
      { heading: 'Categorías de uso', bullets: ['Técnicas: necesarias para ofrecer funciones básicas y proteger el sitio.', 'Preferencias: recuerdan opciones de visualización o navegación.', 'Analítica: ayudan a conocer, de forma agregada, cómo se utilizan las páginas.', 'Publicidad y medición: pueden evaluar campañas o limitar repeticiones de anuncios cuando esos servicios estén activos.'] },
      { heading: 'Control desde el navegador', paragraphs: ['Puedes revisar, bloquear o eliminar cookies desde los ajustes de tu navegador. Si se desactivan ciertas cookies, algunas funciones del sitio podrían no operar como se espera.'] },
      { heading: 'Herramientas de terceros', paragraphs: ['Servicios externos de analítica, contenido integrado o publicidad pueden aplicar sus propias tecnologías y políticas. La lista concreta de proveedores debe actualizarse cuando esas herramientas se configuren en el sitio.'] }
    ]
  },
  'quienes-somos': {
    title: 'Sabemos de Política',
    intro: 'Burbuja Política es un medio digital especializado en política, entendiendo que muchos de los temas que gravitan sobre el desarrollo de los territorios pasan por la ejecución de programas y proyectos políticos.',
    sections: [
      { heading: 'Nuestro propósito', paragraphs: ['Hacer visible acciones gubernamentales y de la sociedad civil hacen parte de nuestro norte informativo. Contamos historias y decisiones que ayudan a entender lo que ocurre en Córdoba, Colombia y sus comunidades.'] },
      { heading: 'Desde el territorio', paragraphs: ['Damos espacio a la actualidad política, las voces ciudadanas, la gestión pública y los asuntos sociales y ambientales que influyen en la vida cotidiana.'] },
      { heading: 'Qué encontrarás', bullets: ['Noticias de política nacional, Córdoba y la región.', 'Información internacional, ambiental y comunitaria.', 'Opinión, crónicas, boletines y seguimiento a temas de interés público.'] }
    ]
  },
  'equipo-editorial': {
    title: 'Equipo editorial',
    intro: 'El equipo editorial organiza la cobertura, verifica la información y prepara los contenidos publicados por Burbuja Política.',
    sections: [
      { heading: 'Responsabilidades editoriales', bullets: ['Dirección editorial: define prioridades de cobertura y supervisa los criterios periodísticos.', 'Redacción: investiga, escribe y actualiza las noticias.', 'Colaboradores: aportan información, análisis y perspectivas desde sus áreas y territorios.', 'Edición: revisa claridad, contexto, atribución de fuentes y consistencia antes de publicar.'] },
      { heading: 'Firmas y atribuciones', paragraphs: ['Las publicaciones identifican a su autor o a la Redacción Burbuja según corresponda. Los nombres y cargos de responsables editoriales se mostrarán junto a sus contenidos y se actualizarán en esta página cuando el medio los confirme públicamente.'] },
      { heading: 'Contacto editorial', paragraphs: ['Para consultas sobre una publicación, solicitudes de entrevista o información para la redacción, utiliza el canal de Contacto.'] }
    ]
  },
  'politica-editorial': {
    title: 'Política editorial',
    intro: 'Nuestros criterios editoriales buscan ofrecer información comprensible, contrastada y útil para las comunidades.',
    sections: [
      { heading: 'Verificación y fuentes', bullets: ['Contrastamos los datos relevantes antes de publicar.', 'Identificamos las fuentes y atribuimos declaraciones y documentos.', 'Cuando un dato no puede verificarse de forma independiente, lo indicamos con claridad.', 'Solicitamos la versión de las personas o entidades directamente involucradas cuando el tema lo requiere.'] },
      { heading: 'Independencia y equilibrio', paragraphs: ['La cobertura procura distinguir hechos, análisis y opiniones. Las decisiones editoriales se toman con independencia y buscan representar el contexto relevante sin ocultar información significativa.'] },
      { heading: 'Opinión y contenido de terceros', paragraphs: ['Las columnas y artículos de opinión se presentan como tales. Los comunicados, boletines y materiales de terceros se atribuyen a su origen y pueden editarse para claridad y formato sin alterar su sentido.'] },
      { heading: 'Actualizaciones y correcciones', paragraphs: ['Si una publicación necesita una actualización o rectificación, se revisa la evidencia recibida y se informa el cambio de manera visible según su naturaleza. Consulta Correcciones y rectificaciones para enviar una solicitud.'] }
    ]
  },
  'correcciones-y-rectificaciones': {
    title: 'Correcciones y rectificaciones',
    intro: 'La precisión importa. Si encuentras un error u omisión en una publicación, puedes solicitar su revisión.',
    sections: [
      { heading: 'Cómo enviar una solicitud', bullets: ['Comparte el enlace exacto de la noticia.', 'Indica el dato que consideras incorrecto o incompleto.', 'Explica qué debería corregirse y adjunta documentos o fuentes que permitan verificarlo.', 'Incluye un medio de contacto para poder responderte.'] },
      { heading: 'Qué hacemos con la solicitud', paragraphs: ['La redacción revisará la publicación y la información recibida. Si corresponde un cambio, actualizará el contenido y señalará la corrección o aclaración de manera proporcional. La solicitud no garantiza que se realice un cambio; la decisión se basa en la verificación editorial.'] },
      { heading: 'Canal de contacto', paragraphs: ['Envía tu solicitud mediante la página de Contacto y selecciona el asunto “Corrección o rectificación”.'] }
    ]
  },
  contacto: {
    title: 'Contacto',
    intro: 'Escríbenos para compartir información, enviar solicitudes editoriales o consultar sobre el medio.',
    sections: [
      { heading: 'Contacto editorial', paragraphs: ['Para compartir una noticia, proponer una entrevista o enviar documentos, utiliza el formulario de esta página. Incluye fechas, lugares y fuentes disponibles.'] },
      { heading: 'Correcciones y rectificaciones', paragraphs: ['Incluye el enlace a la publicación y explica qué información debe revisarse. Puedes consultar el procedimiento completo en nuestra política de correcciones.'] },
      { heading: 'Contacto comercial', paragraphs: ['Para consultas sobre alianzas, pauta y servicios comerciales, selecciona “Contacto comercial” en el formulario.'] },
      { heading: 'Redes sociales', bullets: ['Facebook: Burbuja Política.', 'Instagram: @burbujapolitica.', 'X: @burbujapolitica.'] }
    ]
  },
  'derechos-de-autor': {
    title: 'Derechos de autor',
    intro: 'Los contenidos de Burbuja Política —incluidos textos, fotografías, videos, diseño y marcas— pueden estar protegidos por derechos de autor y otras normas aplicables.',
    sections: [
      { heading: 'Enlaces y citas', paragraphs: ['Puedes enlazar nuestras publicaciones y citar fragmentos breves indicando claramente el medio y enlazando a la nota original, siempre dentro de los límites permitidos por la ley.'] },
      { heading: 'Reproducción de contenidos', paragraphs: ['La reproducción completa, distribución, adaptación o uso comercial de textos, fotografías o videos requiere autorización previa del titular de los derechos, salvo que exista una autorización o excepción legal aplicable.'] },
      { heading: 'Material de terceros', paragraphs: ['Las imágenes, documentos y otros materiales pertenecientes a terceros conservan los derechos de sus respectivos titulares. Los créditos se indican junto al contenido cuando corresponde.'] },
      { heading: 'Solicitudes de uso', paragraphs: ['Para solicitar autorización, indica el material, el uso previsto, el medio de publicación y tus datos de contacto mediante la página de Contacto.'] }
    ]
  }
}

const route = useRoute()
const page = computed(() => pages[String(route.params.slug)])
const sectionId = (heading: string) => heading.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-')
if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Página no encontrada' })
useSeoMeta({ title: () => `${page.value?.title} | Burbuja Política`, description: () => page.value?.intro })

const contact = reactive({ name: '', email: '', topic: 'Consulta editorial', message: '' })
const contactSent = ref(false)
const contactError = ref('')
function sendContact() {
  if (!contact.name.trim() || !contact.email.trim() || !contact.message.trim()) {
    contactError.value = 'Completa tu nombre, correo y mensaje.'
    return
  }
  contactError.value = ''
  contactSent.value = true
}
</script>

<template>
  <main v-if="page" class="wrap info-page">
    <nav class="info-breadcrumb"><NuxtLink to="/">Inicio</NuxtLink><span>›</span><span>Información</span><span>›</span><b>{{ page.title }}</b></nav>
    <header class="info-hero"><span class="eyebrow">BURBUJA POLÍTICA <i></i> INFORMACIÓN</span><h1>{{ page.title }}</h1><p>{{ page.intro }}</p><small>Información institucional · Actualizada en octubre de 2026</small></header>
    <div class="info-layout">
      <article class="info-content">
        <section v-for="section in page.sections" :id="sectionId(section.heading)" :key="section.heading" class="info-section"><h2>{{ section.heading }}</h2><p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p><ul v-if="section.bullets"><li v-for="bullet in section.bullets" :key="bullet">{{ bullet }}</li></ul></section>
        <section v-if="route.params.slug === 'contacto'" class="contact-form-card"><div v-if="contactSent" class="contact-success"><span>✓</span><div><b>Mensaje preparado</b><p>Gracias, {{ contact.name }}. Este formulario es una demostración y todavía no envía mensajes.</p></div></div><template v-else><h2>Escríbenos</h2><p class="form-intro">Completa los datos y selecciona el motivo de tu mensaje.</p><form @submit.prevent="sendContact"><div class="contact-fields"><label>Nombre<input v-model="contact.name" autocomplete="name" placeholder="Tu nombre"></label><label>Correo electrónico<input v-model="contact.email" type="email" autocomplete="email" placeholder="nombre@correo.com"></label></div><label>Motivo<select v-model="contact.topic"><option>Consulta editorial</option><option>Corrección o rectificación</option><option>Contacto comercial</option><option>Enviar información</option><option>Otro</option></select></label><label>Mensaje<textarea v-model="contact.message" rows="5" placeholder="Cuéntanos cómo podemos ayudarte"></textarea></label><p v-if="contactError" class="contact-error">{{ contactError }}</p><button class="contact-submit">Preparar mensaje <span>→</span></button><small class="form-demo-note">Formulario de demostración: el mensaje no se envía ni se almacena.</small></form></template></section>
        <div class="info-help"><span class="about-bp">BP</span><div><b>¿Necesitas más información?</b><p>El equipo de Burbuja Política está disponible para atender consultas editoriales y solicitudes relacionadas con el medio.</p></div><NuxtLink to="/contacto/">Ir a Contacto →</NuxtLink></div>
      </article>
      <aside class="info-sidebar"><div class="info-sidebar-title">En esta página</div><a v-for="section in page.sections" :key="section.heading" :href="`#${sectionId(section.heading)}`">{{ section.heading }}</a><div class="info-sidebar-separator"></div><NuxtLink to="/correcciones-y-rectificaciones/">Correcciones y rectificaciones →</NuxtLink><NuxtLink to="/contacto/">Contacto →</NuxtLink></aside>
    </div>
  </main>
</template>

<style scoped>
.info-page{padding-top:24px;padding-bottom:65px}.info-breadcrumb{display:flex;align-items:center;gap:8px;color:#858b92;font-size:9px}.info-breadcrumb a{color:#bb1919;font-weight:700}.info-breadcrumb b{color:#4b5158;font-weight:600}.info-hero{max-width:850px;padding:34px 0 26px}.info-hero .eyebrow{display:flex;align-items:center;gap:8px;color:#bb1919}.info-hero .eyebrow i{width:5px;height:5px;border-radius:50%;background:#bb1919}.info-hero h1{margin:10px 0;color:#22272c;font:800 clamp(35px,5vw,54px)/1 'Source Sans 3',sans-serif;letter-spacing:-.03em}.info-hero p{margin:0;color:#646b73;font:16px/1.55 'Lato',sans-serif}.info-hero>small{display:block;margin-top:13px;color:#92979e;font-size:8px}.info-layout{display:grid;grid-template-columns:minmax(0,800px) 250px;gap:40px;align-items:start;justify-content:space-between}.info-content{min-width:0}.info-section{padding:20px 0;border-top:1px solid #e8e8e8}.info-section h2,.contact-form-card h2{margin:0 0 9px;color:#292e33;font:700 22px 'Source Sans 3',sans-serif}.info-section p{margin:0 0 12px;color:#4c535a;font:14px/1.75 'Lato',sans-serif}.info-section p:last-child{margin-bottom:0}.info-section ul{display:grid;gap:8px;margin:10px 0 0;padding-left:19px;color:#4c535a;font:13px/1.6 'Lato',sans-serif}.info-section li::marker{color:#bb1919}.info-sidebar{position:sticky;top:72px;display:grid;gap:10px;padding:16px;border:1px solid #e8e8e8;border-top:3px solid #bb1919;border-radius:4px;background:#fff}.info-sidebar-title{margin-bottom:3px;color:#30353a;font:700 13px 'Source Sans 3',sans-serif}.info-sidebar>a{color:#687078;font-size:9px;line-height:1.4}.info-sidebar>a:hover{color:#bb1919}.info-sidebar-separator{height:1px;margin:5px 0;background:#eee}.contact-form-card{margin:18px 0;padding:21px;border:1px solid #e5e5e5;border-top:3px solid #bb1919;border-radius:5px;background:#fff}.form-intro{margin:0 0 15px;color:#777f86;font-size:10px}.contact-form-card form{display:grid;gap:13px}.contact-form-card label{display:grid;gap:6px;color:#41474e;font-size:9px;font-weight:700}.contact-fields{display:grid;grid-template-columns:1fr 1fr;gap:12px}.contact-form-card input,.contact-form-card select,.contact-form-card textarea{width:100%;padding:9px 10px;border:1px solid #dfe2e5;border-radius:4px;background:white;color:#333;font:10px 'Lato',sans-serif}.contact-form-card textarea{resize:vertical;line-height:1.5}.contact-submit{justify-self:start;display:flex;gap:8px;align-items:center;padding:10px 14px;border:0;border-radius:4px;background:#bb1919;color:#fff;font-size:10px;font-weight:700;cursor:pointer}.contact-submit:hover{background:#9f1717}.contact-submit span{font-size:15px}.form-demo-note{color:#91969c;font-size:8px}.contact-error{margin:0;color:#bb1919;font-size:9px}.contact-success{display:flex;gap:12px;align-items:flex-start;padding:12px;background:#f2f8f3;border:1px solid #d8ebdc;border-radius:4px}.contact-success>span{width:24px;height:24px;display:grid;place-items:center;border-radius:50%;background:#38814d;color:white}.contact-success b{color:#2e5939;font-size:12px}.contact-success p{margin:4px 0 0;color:#66726a;font-size:9px}.info-help{display:flex;align-items:center;gap:12px;margin-top:18px;padding:15px;border-radius:5px;background:#f5f5f5}.info-help .about-bp{flex:0 0 35px;margin:0}.info-help>div{flex:1}.info-help b{font:700 12px 'Source Sans 3',sans-serif}.info-help p{margin:3px 0 0;color:#747a81;font-size:9px;line-height:1.5}.info-help>a{white-space:nowrap;color:#bb1919;font-size:9px;font-weight:700}
@media(max-width:760px){.info-page{padding-top:16px;padding-bottom:38px}.info-hero{padding:25px 0 20px}.info-hero p{font-size:14px}.info-layout{grid-template-columns:1fr;gap:12px}.info-sidebar{position:static;grid-template-columns:1fr 1fr;gap:8px;padding:12px}.info-sidebar-title,.info-sidebar-separator{grid-column:1/-1}.info-sidebar>a{font-size:8px}.info-section{padding:16px 0}.info-section h2,.contact-form-card h2{font-size:19px}.info-section p{font-size:13px}.info-help{align-items:flex-start;flex-wrap:wrap}.info-help>a{margin-left:47px}.contact-fields{grid-template-columns:1fr}}
</style>
