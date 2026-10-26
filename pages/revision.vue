<script setup lang="ts">
import Swal from 'sweetalert2'

definePageMeta({ middleware: 'admin-auth' })

type Status = 'Publicado' | 'Borrador' | 'En revisión' | 'Programado'
type Entry = { id: number; title: string; category: string; date: string; status: Status; views: number; image?: string; summary?: string; body?: string; slug?: string; visibility?: string; seoDescription?: string }
type EditValues = { title: string; category: string; image: string; summary: string; body: string }

const entries = useState<Entry[]>('bp-demo-entries', () => [
  { id: 1, title: 'Avanza la etapa final del acueducto regional del San Jorge', category: 'Política Córdoba', date: '26 oct 2026', status: 'Publicado', views: 2480, image: 'https://burbujapolitica.com/wp-content/uploads/2026/10/image_2026-10-26_07-55-49-1024x768.jpg', summary: 'Las pruebas del sistema avanzan hacia la puesta en marcha para varios municipios cordobeses.' },
  { id: 2, title: 'Dos integrantes de agrupación vallenata fallecen en siniestro vial', category: 'Política Región', date: '26 oct 2026', status: 'Publicado', views: 1892, image: 'https://burbujapolitica.com/wp-content/uploads/2026/10/Web-47_5-1024x576.jpg', summary: 'La noticia enluta al folclor vallenato y a las comunidades de la región.' },
  { id: 3, title: 'Gobierno anuncia nuevas becas de tecnología y apoyo para emprendedores', category: 'Política Nación', date: '26 oct 2026', status: 'En revisión', views: 0 },
  { id: 4, title: 'La seguridad nacional no puede estar por encima de la Constitución', category: 'Opinión', date: '24 oct 2026', status: 'Borrador', views: 0 },
  { id: 5, title: 'Montería le apuesta a la energía solar para reducir el gasto eléctrico', category: 'Ambiente', date: '22 oct 2026', status: 'Publicado', views: 964 }
])
const sessionPublications = useState<Entry[]>('bp-demo-published', () => [])
const categories = useState<string[]>('bp-demo-categories', () => ['Boletines', 'Política Nación', 'Política Córdoba', 'Política Región', 'Política Internacional', 'Ambiente', 'Opinión', 'Crónicas', 'Ojo a los medios'])
const todayLabel = new Intl.DateTimeFormat('es-CO', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date()).toLocaleLowerCase().replace(/\s+de\s+/g, ' ')
const todayEntries = computed(() => entries.value.filter(entry => entry.status === 'Publicado' && (entry.date.toLocaleLowerCase() === todayLabel || entry.date === 'Ahora')))
const drafts = reactive<Record<number, EditValues>>({})
const copiedId = ref<number | null>(null)
const sharedOnX = ref<number[]>([])
const editingEntryId = ref<number | null>(null)
const editingEntry = computed(() => todayEntries.value.find(entry => entry.id === editingEntryId.value) || null)
const toast = ref('')
const adminSession = useCookie('bp-admin-demo-session')
const adminRole = useCookie<'admin' | 'revision' | null>('bp-admin-demo-role')

watch(todayEntries, (items) => {
  for (const entry of items) {
    if (!drafts[entry.id]) drafts[entry.id] = { title: entry.title, category: entry.category, image: entry.image || '', summary: entry.summary || '', body: entry.body || '' }
  }
}, { immediate: true })

useSeoMeta({ title: 'Revisión de hoy | Burbuja Política', description: 'Revisa y actualiza las publicaciones del día.', robots: 'noindex, nofollow' })

function slugify(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function uploadImage(event: Event, id: number) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file || !file.type.startsWith('image/')) return
  if (file.size > 5 * 1024 * 1024) {
    notify('La imagen debe pesar menos de 5 MB.')
    input.value = ''
    return
  }
  const oldImage = drafts[id]?.image
  if (oldImage?.startsWith('blob:')) URL.revokeObjectURL(oldImage)
  drafts[id].image = URL.createObjectURL(file)
  input.value = ''
}

function saveChanges(entry: Entry) {
  const updated = drafts[entry.id]
  if (!updated.title.trim() || !updated.category) {
    notify('El titular y la categoría son obligatorios.')
    return
  }
  Object.assign(entry, updated, { slug: slugify(updated.title) })
  const publicIndex = sessionPublications.value.findIndex(item => item.id === entry.id)
  if (publicIndex >= 0) Object.assign(sessionPublications.value[publicIndex], entry)
  else sessionPublications.value.unshift({ ...entry })
  editingEntryId.value = null
  notify('Cambios guardados durante esta sesión.')
}

function openEditor(entry: Entry) {
  drafts[entry.id] = { title: entry.title, category: entry.category, image: entry.image || '', summary: entry.summary || '', body: entry.body || '' }
  editingEntryId.value = entry.id
}

function closeEditor() {
  if (editingEntry.value) {
    const entry = editingEntry.value
    drafts[entry.id] = { title: entry.title, category: entry.category, image: entry.image || '', summary: entry.summary || '', body: entry.body || '' }
  }
  editingEntryId.value = null
}

async function copyForX(entry: Entry) {
  const edit = drafts[entry.id]
  const articleUrl = new URL(`/noticia/${slugify(edit.title)}/`, window.location.origin)
  articleUrl.searchParams.set('title', edit.title)
  articleUrl.searchParams.set('category', edit.category)
  articleUrl.searchParams.set('image', edit.image)
  articleUrl.searchParams.set('date', entry.date)
  articleUrl.searchParams.set('summary', edit.summary)
  articleUrl.searchParams.set('body', edit.body)
  const text = `${edit.title}\n${articleUrl.toString()}`
  try {
    await navigator.clipboard.writeText(text)
    copiedId.value = entry.id
    if (!sharedOnX.value.includes(entry.id)) sharedOnX.value.push(entry.id)
    window.setTimeout(() => { copiedId.value = null }, 2500)
  } catch {
    window.prompt('Copia el titular y el enlace para compartir en X:', text)
    if (!sharedOnX.value.includes(entry.id)) sharedOnX.value.push(entry.id)
  }
}

async function deleteEntry(entry: Entry) {
  const result = await Swal.fire({
    title: '¿Eliminar esta publicación?',
    text: `Se quitará “${entry.title}” de la lista y de la portada de demostración. Esta acción no se puede deshacer durante esta sesión.`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#bb1919',
    cancelButtonColor: '#6b7077',
    reverseButtons: true,
    focusCancel: true
  })

  if (!result.isConfirmed) return

  entries.value = entries.value.filter(item => item.id !== entry.id)
  sessionPublications.value = sessionPublications.value.filter(item => item.id !== entry.id)
  delete drafts[entry.id]
  sharedOnX.value = sharedOnX.value.filter(id => id !== entry.id)
  notify('Publicación eliminada durante esta sesión.')
}

function notify(message: string) {
  toast.value = message
  window.setTimeout(() => { toast.value = '' }, 2800)
}

function signOut() {
  adminSession.value = null
  adminRole.value = null
  navigateTo('/login')
}
</script>

<template>
  <main class="revision-page">
    <header class="revision-topbar"><NuxtLink to="/dasbuard" class="revision-brand"><span class="revision-mark">BP</span><span><b>Burbuja Política</b><small>REVISIÓN EDITORIAL</small></span></NuxtLink><div class="revision-actions"><span class="revision-date"><i></i> {{ todayLabel }}</span><ThemeToggle /><NuxtLink to="/dasbuard" class="back-dashboard">← Volver al panel</NuxtLink><button class="logout-button" @click="signOut">Cerrar sesión</button></div></header>
    <div class="revision-container"><div class="revision-heading"><div><span class="revision-kicker">CONTROL DE PUBLICACIONES</span><h1>Revisión del día</h1><p>Verifica los titulares, el contexto y las imágenes antes de compartir cada noticia.</p></div><div class="revision-summary"><b>{{ todayEntries.length }}</b><span>publicaciones<br>de hoy</span></div></div>
      <div v-if="todayEntries.length" class="revision-list"><article v-for="entry in todayEntries" :key="entry.id" class="revision-card" :class="{ 'shared-x-card': sharedOnX.includes(entry.id) }"><div class="revision-card-top"><div><span class="revision-live"><i></i> PUBLICADA</span><span class="revision-card-date">{{ entry.date }}</span></div><div class="revision-top-meta"><span class="revision-views">◉ {{ entry.views.toLocaleString('es-CO') }} vistas</span><span v-if="sharedOnX.includes(entry.id)" class="x-published-badge"><b>𝕏</b> PUBLICADO EN X</span></div></div><div class="revision-card-layout"><img v-if="entry.image" class="revision-card-image" :src="entry.image" :alt="entry.title"><div v-else class="revision-card-image no-image"><span>▧</span><small>Sin imagen</small></div><div class="revision-card-content"><span class="revision-category">{{ entry.category }}</span><h2>{{ entry.title }}</h2><p>{{ entry.summary || 'Esta noticia aún no tiene un resumen. Puedes agregar contexto desde Editar noticia.' }}</p><span class="revision-card-author">Redacción Burbuja <i>·</i> {{ entry.date }}</span></div></div><div class="revision-card-footer"><span class="session-hint">{{ sharedOnX.includes(entry.id) ? 'Enlace y titular copiados · estado de X simulado' : 'Vista previa de publicación · cambios temporales' }}</span><div><button class="delete-revision" @click="deleteEntry(entry)">Eliminar</button><button class="copy-x" :class="{ 'copy-x-done': sharedOnX.includes(entry.id) }" @click="copyForX(entry)">{{ copiedId === entry.id ? '✓ Copiado para X' : sharedOnX.includes(entry.id) ? '𝕏 Compartido en X' : '𝕏 Copiar titular y enlace' }}</button><button class="save-revision" @click="openEditor(entry)">Editar noticia</button></div></div></article></div>
      <section v-else class="revision-empty"><span>▤</span><h2>No hay publicaciones para revisar hoy</h2><p>Las entradas publicadas durante el día aparecerán aquí.</p><NuxtLink to="/dasbuard">Ir a crear una entrada →</NuxtLink></section>
      <p class="revision-demo-note">Panel de demostración · La edición y la copia de enlaces funcionan durante esta sesión.</p>
    </div>
    <div v-if="editingEntry" class="modal-backdrop" @click.self="closeEditor" @keydown.esc="closeEditor"><section class="edit-modal" role="dialog" aria-modal="true" aria-labelledby="edit-modal-title"><header class="modal-header"><div><span class="revision-kicker">EDICIÓN DE CONTENIDO</span><h2 id="edit-modal-title">Editar noticia</h2></div><button class="modal-close" aria-label="Cerrar" @click="closeEditor">×</button></header><div class="modal-content"><div class="modal-image-column"><div class="modal-image"><img v-if="drafts[editingEntry.id].image" :src="drafts[editingEntry.id].image" :alt="drafts[editingEntry.id].title"><div v-else class="no-image"><span>▧</span><small>Sin imagen</small></div></div><input id="revision-modal-image" class="revision-file" type="file" accept="image/*" @change="uploadImage($event, editingEntry.id)"><button class="image-change" @click="document.getElementById('revision-modal-image')?.click()">↥ Cambiar imagen</button></div><div class="revision-fields"><label class="revision-label">Categoría<select v-model="drafts[editingEntry.id].category"><option v-for="category in categories" :key="category">{{ category }}</option></select></label><label class="revision-label">Titular<textarea v-model="drafts[editingEntry.id].title" rows="2" maxlength="160"></textarea><small>{{ drafts[editingEntry.id].title.length }}/160 caracteres</small></label><label class="revision-label">Contexto / descripción<textarea v-model="drafts[editingEntry.id].summary" rows="3" placeholder="Añade un fragmento del contexto de la noticia"></textarea></label><label class="revision-label">Contenido completo<textarea v-model="drafts[editingEntry.id].body" rows="6" placeholder="Texto completo de la noticia"></textarea></label></div></div><footer class="modal-footer"><span>Los cambios se aplican durante esta sesión.</span><div><button class="modal-cancel" @click="closeEditor">Cancelar</button><button class="save-revision" @click="saveChanges(editingEntry)">Guardar cambios</button></div></footer></section></div>
    <div v-if="toast" class="revision-toast">✓ {{ toast }}</div>
  </main>
</template>

<style scoped>
.revision-page{--red:#bb1919;min-height:100vh;background:#f3f4f6;color:#262a30;font-family:'Lato',Arial,sans-serif}.revision-topbar{height:66px;display:flex;align-items:center;justify-content:space-between;padding:0 max(24px,calc((100vw - 1180px)/2));border-bottom:1px solid #e1e3e6;background:#fff}.revision-brand{display:flex;align-items:center;gap:10px}.revision-mark{width:37px;height:37px;display:grid;place-items:center;border-radius:10px;background:var(--red);color:#fff;font:800 12px 'Source Sans 3',sans-serif}.revision-brand b,.revision-brand small{display:block}.revision-brand b{color:#25292e;font:700 13px 'Source Sans 3',sans-serif}.revision-brand small{margin-top:3px;color:#858b92;font-size:7px;font-weight:800;letter-spacing:.13em}.revision-actions{display:flex;align-items:center;gap:20px}.revision-date{display:flex;align-items:center;gap:6px;color:#747b83;font-size:9px;text-transform:capitalize}.revision-date i,.revision-live i{width:6px;height:6px;border-radius:50%;background:#bb1919}.back-dashboard{padding:8px 11px;border:1px solid #e3e4e6;border-radius:4px;color:#4d545b;font-size:9px}.back-dashboard:hover{border-color:var(--red);color:var(--red)}.revision-container{max-width:1100px;margin:0 auto;padding:32px 24px 55px}.revision-heading{display:flex;align-items:end;justify-content:space-between;margin-bottom:23px}.revision-kicker{color:var(--red);font:800 8px 'Source Sans 3',sans-serif;letter-spacing:.14em}.revision-heading h1{margin:6px 0;color:#202429;font:800 32px 'Source Sans 3',sans-serif;letter-spacing:-.02em}.revision-heading p{margin:0;color:#7b8289;font-size:11px}.revision-summary{display:flex;align-items:center;gap:9px;padding:10px 14px;border:1px solid #e4e5e7;border-radius:5px;background:#fff}.revision-summary b{color:var(--red);font:800 24px 'Source Sans 3',sans-serif}.revision-summary span{color:#727981;font-size:8px;line-height:1.4}.revision-list{display:grid;gap:16px}.revision-card{overflow:hidden;border:1px solid #e1e3e6;border-radius:7px;background:#fff;box-shadow:0 3px 10px #19212d08}.revision-card-top{height:42px;display:flex;align-items:center;justify-content:space-between;padding:0 17px;border-bottom:1px solid #eceef0}.revision-card-top>div{display:flex;align-items:center;gap:11px}.revision-live{display:flex;align-items:center;gap:5px;color:#a81e1e;font-size:7px;font-weight:800;letter-spacing:.07em}.revision-card-date,.revision-views{color:#899098;font-size:8px}.revision-views{color:#6d747d}.revision-card-layout{display:grid;grid-template-columns:230px minmax(0,1fr);gap:20px;padding:18px}.revision-image-column{min-width:0}.revision-image{height:150px;overflow:hidden;border-radius:4px;background:#f0f0f0}.revision-image>img{width:100%;height:100%;object-fit:cover}.no-image{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;color:#a0a4a9}.no-image span{font-size:28px}.no-image small{font-size:8px}.revision-file{display:none}.image-change{width:100%;height:31px;margin-top:8px;border:1px solid #e2e3e5;border-radius:4px;background:white;color:#59616a;font-size:8px;cursor:pointer}.image-change:hover{border-color:var(--red);color:var(--red)}.revision-fields{display:grid;grid-template-columns:1fr 1fr;gap:11px 13px}.revision-label{display:grid;align-content:start;gap:5px;color:#444b53;font-size:9px;font-weight:700}.revision-label:first-child,.revision-label:nth-child(2){grid-column:1/-1}.revision-label input,.revision-label select,.revision-label textarea{width:100%;padding:8px 9px;border:1px solid #dedfe2;border-radius:4px;background:#fff;color:#34383e;font:10px/1.45 'Lato',sans-serif;outline:none}.revision-label textarea{resize:vertical}.revision-label input:focus,.revision-label select:focus,.revision-label textarea:focus{border-color:#bf5b5b;box-shadow:0 0 0 2px #bb19190d}.revision-label small{justify-self:end;color:#969ba2;font-size:7px;font-weight:400}.revision-card-footer{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 17px;border-top:1px solid #eceef0;background:#fbfbfc}.session-hint{color:#92979e;font-size:8px}.revision-card-footer>div{display:flex;gap:7px}.copy-x,.save-revision{height:31px;padding:0 11px;border:1px solid #dfe1e4;border-radius:4px;background:#fff;color:#41474e;font-size:8px;font-weight:700;cursor:pointer}.copy-x:hover{border-color:#252525;color:#151515}.save-revision{border-color:var(--red);background:var(--red);color:#fff}.save-revision:hover{background:#991717}.revision-demo-note{margin:17px 0 0;color:#8b9198;text-align:center;font-size:8px}.revision-empty{padding:50px 20px;border:1px dashed #d7d9dc;border-radius:7px;background:#fff;text-align:center}.revision-empty>span{color:var(--red);font-size:30px}.revision-empty h2{margin:8px 0;color:#30353a;font:700 18px 'Source Sans 3',sans-serif}.revision-empty p{color:#81878e;font-size:10px}.revision-empty a{color:var(--red);font-size:9px;font-weight:700}.revision-toast{position:fixed;right:22px;bottom:22px;padding:12px 16px;border-radius:5px;background:#24272c;color:#fff;box-shadow:0 8px 20px #0002;font-size:10px}.revision-toast:first-letter{color:#7dd29b}
@media(max-width:700px){.revision-topbar{height:57px;padding:0 14px}.revision-brand b{font-size:11px}.revision-actions{gap:8px}.revision-date{font-size:8px}.back-dashboard{padding:7px;font-size:8px}.revision-container{padding:22px 12px 36px}.revision-heading h1{font-size:27px}.revision-heading p{max-width:250px;font-size:9px;line-height:1.4}.revision-summary{padding:8px}.revision-summary b{font-size:20px}.revision-card-layout{grid-template-columns:1fr;gap:13px;padding:13px}.revision-image{height:190px}.revision-fields{grid-template-columns:1fr}.revision-label:first-child,.revision-label:nth-child(2){grid-column:auto}.revision-card-footer{align-items:flex-start;flex-direction:column;padding:10px 13px}.revision-card-footer>div{width:100%}.revision-card-footer button{flex:1}.session-hint{font-size:7px}}
.revision-card-layout{grid-template-columns:225px minmax(0,1fr);align-items:center}.revision-card-image{display:block;width:225px;height:155px;object-fit:cover;border-radius:4px;background:#eee}.revision-card-image.no-image{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;color:#999}.revision-card-content{min-width:0}.revision-category{display:inline-block;padding:5px 8px;border-radius:3px;background:#bb1919;color:white;font:800 8px 'Source Sans 3',sans-serif;letter-spacing:.04em}.revision-card-content h2{margin:9px 0 7px;color:#25292e;font:700 21px/1.15 'Source Sans 3',sans-serif}.revision-card-content p{display:-webkit-box;overflow:hidden;margin:0 0 9px;color:#626970;font:12px/1.55 'Lato',sans-serif;-webkit-box-orient:vertical;-webkit-line-clamp:3}.revision-card-author{color:#858b92;font-size:8px}.revision-card-author i{padding:0 4px;color:#bb1919}.modal-backdrop{position:fixed;inset:0;z-index:30;display:flex;align-items:center;justify-content:center;padding:24px;background:#17191dcc;backdrop-filter:blur(2px)}.edit-modal{width:min(850px,100%);max-height:calc(100vh - 48px);display:flex;flex-direction:column;overflow:hidden;border-radius:8px;background:#f7f8fa;box-shadow:0 24px 80px #0005}.modal-header{display:flex;align-items:center;justify-content:space-between;padding:17px 21px;border-bottom:1px solid #e4e6e9;background:white}.modal-header h2{margin:3px 0 0;color:#202429;font:800 23px 'Source Sans 3',sans-serif}.modal-close{width:32px;height:32px;border:1px solid #e1e3e5;border-radius:50%;background:white;color:#5a6169;font-size:22px;line-height:1;cursor:pointer}.modal-close:hover{border-color:#bb1919;color:#bb1919}.modal-content{display:grid;grid-template-columns:220px minmax(0,1fr);gap:18px;overflow:auto;padding:20px}.modal-image{height:148px;overflow:hidden;border-radius:5px;background:#eee}.modal-image img{width:100%;height:100%;object-fit:cover}.modal-image-column .image-change{background:white}.modal-content .revision-fields{grid-template-columns:1fr 1fr}.modal-content .revision-label:first-child,.modal-content .revision-label:nth-child(2),.modal-content .revision-label:nth-child(3),.modal-content .revision-label:nth-child(4){grid-column:1/-1}.modal-content .revision-label textarea{min-height:55px}.modal-footer{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:13px 20px;border-top:1px solid #e3e5e8;background:white}.modal-footer>span{color:#858b92;font-size:8px}.modal-footer>div{display:flex;gap:8px}.modal-cancel{height:32px;padding:0 12px;border:1px solid #dadde1;border-radius:4px;background:white;color:#59616a;font-size:9px;cursor:pointer}.modal-footer .save-revision{height:32px}.revision-toast{z-index:40}
@media(min-width:1000px){.revision-list{grid-template-columns:repeat(2,minmax(0,1fr));align-items:stretch;gap:18px}.revision-card{display:flex;flex-direction:column}.revision-card-layout{flex:1;grid-template-columns:1fr;align-content:start;align-items:start;gap:13px;padding:14px}.revision-card-image{width:100%;height:205px}.revision-card-content h2{font-size:19px}.revision-card-footer{align-items:center;flex-wrap:wrap;gap:9px;padding:11px 14px}.revision-card-footer>div{display:flex;flex-wrap:wrap;gap:6px}.revision-card-footer button{padding:0 8px;font-size:7px}}
.shared-x-card{border-color:#4ba66a;box-shadow:0 0 0 1px #4ba66a33,0 5px 18px #27844812}.shared-x-card .revision-card-top{background:#f0f9f2;border-bottom-color:#d7eddd}.shared-x-card .revision-card-footer{background:#f4fbf5;border-top-color:#d7eddd}.revision-top-meta{display:flex;align-items:center;gap:10px}.x-published-badge{display:inline-flex;align-items:center;gap:5px;padding:5px 8px;border-radius:12px;background:#25834b;color:#fff;font-size:7px;font-weight:800;letter-spacing:.045em}.x-published-badge b{font-size:10px}.copy-x.copy-x-done{border-color:#27864c;background:#27864c;color:white}.copy-x.copy-x-done:hover{background:#1c713d}
.delete-revision{height:31px;padding:0 10px;border:1px solid #e4caca;border-radius:4px;background:#fff;color:#a21d1d;font-size:8px;font-weight:700;cursor:pointer}.delete-revision:hover{border-color:#bb1919;background:#fff3f3}
.logout-button{padding:8px 10px;border:1px solid #e4d5d5;border-radius:4px;background:#fff;color:#a41c1c;font-size:9px;cursor:pointer}.logout-button:hover{border-color:#bb1919;background:#fff6f6}
@media(max-width:700px){.revision-card-layout{grid-template-columns:1fr;align-items:start;padding:13px}.revision-card-image{width:100%;height:190px}.revision-card-content h2{font-size:18px}.revision-card-content p{font-size:10px}.modal-backdrop{align-items:flex-end;padding:0}.edit-modal{width:100%;max-height:92vh;border-radius:12px 12px 0 0}.modal-content{grid-template-columns:1fr;gap:12px;padding:14px}.modal-image{height:170px}.modal-content .revision-fields{grid-template-columns:1fr}.modal-content .revision-label:first-child,.modal-content .revision-label:nth-child(2),.modal-content .revision-label:nth-child(3),.modal-content .revision-label:nth-child(4){grid-column:auto}.modal-header{padding:13px 15px}.modal-header h2{font-size:20px}.modal-footer{padding:11px 14px}.modal-footer>span{max-width:130px;line-height:1.4}}
@media(max-width:700px){.revision-top-meta{align-items:flex-end;flex-direction:column;gap:5px}.x-published-badge{font-size:6px;padding:4px 6px}}
.revision-card-layout{grid-template-columns:minmax(0,1fr)}.revision-card-content{padding:2px 3px 5px}.revision-card-content h2{margin-top:9px}.revision-card-image{width:100%;height:230px;object-fit:cover}.revision-card-footer>div{align-items:center}.delete-revision{height:31px}
</style>
