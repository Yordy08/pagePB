<script setup lang="ts">
import Swal from 'sweetalert2'

definePageMeta({ middleware: 'admin-auth' })

type EntryStatus = 'Publicado' | 'Borrador' | 'En revisión' | 'Programado'
type Entry = { id: number; title: string; category: string; date: string; status: EntryStatus; views: number; image?: string; summary?: string; body?: string; slug?: string; visibility?: string; seoDescription?: string }

const entries = useState<Entry[]>('bp-demo-entries', () => [
  { id: 1, title: 'Avanza la etapa final del acueducto regional del San Jorge', category: 'Política Córdoba', date: '26 oct 2026', status: 'Publicado', views: 2480 },
  { id: 2, title: 'Dos integrantes de agrupación vallenata fallecen en siniestro vial', category: 'Política Región', date: '26 oct 2026', status: 'Publicado', views: 1892 },
  { id: 3, title: 'Gobierno anuncia nuevas becas de tecnología y apoyo para emprendedores', category: 'Política Nación', date: '26 oct 2026', status: 'En revisión', views: 0 },
  { id: 4, title: 'La seguridad nacional no puede estar por encima de la Constitución', category: 'Opinión', date: '24 oct 2026', status: 'Borrador', views: 0 },
  { id: 5, title: 'Montería le apuesta a la energía solar para reducir el gasto eléctrico', category: 'Ambiente', date: '22 oct 2026', status: 'Publicado', views: 964 }
])
const sessionPublications = useState<Entry[]>('bp-demo-published', () => [])

const categories = useState<string[]>('bp-demo-categories', () => ['Boletines', 'Política Nación', 'Política Córdoba', 'Política Región', 'Política Internacional', 'Ambiente', 'Opinión', 'Crónicas', 'Ojo a los medios'])
const sections = [
  { id: 'overview', label: 'Resumen', icon: '▦' },
  { id: 'all', label: 'Todas las entradas', icon: '▤' },
  { id: 'published', label: 'Publicadas', icon: '◉' },
  { id: 'drafts', label: 'Borradores', icon: '▧' }
]
type AnalyticsRange = 'today' | '7days' | '30days'
type AnalyticsPoint = { label: string; height: number }
type AnalyticsBreakdown = { name: string; visits: string; share: number }
type AnalyticsData = { periodLabel: string; visits: number; pageViews: number; change: number; chartTitle: string; chartSubtitle: string; axis: string[]; chart: AnalyticsPoint[]; locations: AnalyticsBreakdown[]; sources: AnalyticsBreakdown[]; topStories: Array<{ views: string; share: number }> }
const periodOptions: Array<{ id: AnalyticsRange; label: string }> = [
  { id: 'today', label: 'Hoy' },
  { id: '7days', label: 'Últimos 7 días' },
  { id: '30days', label: 'Últimos 30 días' }
]
const analyticsByPeriod: Record<AnalyticsRange, AnalyticsData> = {
  today: {
    periodLabel: 'hoy', visits: 2847, pageViews: 5336, change: 12, chartTitle: 'Visitas durante el día', chartSubtitle: 'Lecturas por hora · hoy', axis: ['1.000', '750', '500', '250', '0'],
    chart: [{ label: '8 am', height: 28 }, { label: '10 am', height: 53 }, { label: '12 pm', height: 77 }, { label: '2 pm', height: 59 }, { label: '4 pm', height: 92 }, { label: '6 pm', height: 69 }, { label: 'Ahora', height: 81 }],
    locations: [{ name: 'Montería, Córdoba', visits: '1.194', share: 42 }, { name: 'Bogotá, Colombia', visits: '598', share: 21 }, { name: 'Sincelejo, Sucre', visits: '427', share: 15 }, { name: 'Medellín, Antioquia', visits: '342', share: 12 }, { name: 'Otras ciudades', visits: '286', share: 10 }],
    sources: [{ name: 'Redes sociales', visits: '1.139', share: 40 }, { name: 'Buscadores', visits: '996', share: 35 }, { name: 'Acceso directo', visits: '484', share: 17 }, { name: 'Otros sitios', visits: '228', share: 8 }],
    topStories: [{ views: '2.480', share: 100 }, { views: '1.892', share: 76 }, { views: '1.356', share: 55 }, { views: '964', share: 39 }]
  },
  '7days': {
    periodLabel: 'en los últimos 7 días', visits: 18420, pageViews: 35286, change: 8.4, chartTitle: 'Visitas de los últimos 7 días', chartSubtitle: 'Lecturas por día · semana actual', axis: ['5.000', '3.750', '2.500', '1.250', '0'],
    chart: [{ label: 'Lun', height: 46 }, { label: 'Mar', height: 68 }, { label: 'Mié', height: 54 }, { label: 'Jue', height: 82 }, { label: 'Vie', height: 62 }, { label: 'Sáb', height: 92 }, { label: 'Dom', height: 72 }],
    locations: [{ name: 'Montería, Córdoba', visits: '7.728', share: 42 }, { name: 'Bogotá, Colombia', visits: '3.868', share: 21 }, { name: 'Sincelejo, Sucre', visits: '2.763', share: 15 }, { name: 'Medellín, Antioquia', visits: '2.210', share: 12 }, { name: 'Otras ciudades', visits: '1.851', share: 10 }],
    sources: [{ name: 'Redes sociales', visits: '7.368', share: 40 }, { name: 'Buscadores', visits: '6.447', share: 35 }, { name: 'Acceso directo', visits: '3.131', share: 17 }, { name: 'Otros sitios', visits: '1.474', share: 8 }],
    topStories: [{ views: '12.840', share: 100 }, { views: '9.614', share: 75 }, { views: '7.128', share: 56 }, { views: '5.306', share: 41 }]
  },
  '30days': {
    periodLabel: 'en los últimos 30 días', visits: 72410, pageViews: 138592, change: -3.2, chartTitle: 'Visitas de los últimos 30 días', chartSubtitle: 'Lecturas · últimos 30 días', axis: ['20.000', '15.000', '10.000', '5.000', '0'],
    chart: [{ label: '1–5', height: 50 }, { label: '6–10', height: 62 }, { label: '11–15', height: 48 }, { label: '16–20', height: 75 }, { label: '21–25', height: 88 }, { label: '26–30', height: 67 }, { label: 'Hoy', height: 81 }],
    locations: [{ name: 'Montería, Córdoba', visits: '30.412', share: 42 }, { name: 'Bogotá, Colombia', visits: '15.206', share: 21 }, { name: 'Sincelejo, Sucre', visits: '10.861', share: 15 }, { name: 'Medellín, Antioquia', visits: '8.689', share: 12 }, { name: 'Otras ciudades', visits: '7.242', share: 10 }],
    sources: [{ name: 'Redes sociales', visits: '28.964', share: 40 }, { name: 'Buscadores', visits: '25.344', share: 35 }, { name: 'Acceso directo', visits: '12.310', share: 17 }, { name: 'Otros sitios', visits: '5.792', share: 8 }],
    topStories: [{ views: '42.615', share: 100 }, { views: '31.904', share: 75 }, { views: '23.192', share: 54 }, { views: '18.104', share: 42 }]
  }
}
const mostReadArticles = [
  { title: 'Avanza la etapa final del acueducto regional del San Jorge', category: 'Política Córdoba' },
  { title: 'Dos integrantes de agrupación vallenata fallecen en siniestro vial', category: 'Política Región' },
  { title: 'Gobierno anuncia nuevas becas de tecnología y apoyo para emprendedores', category: 'Política Nación' },
  { title: 'Montería le apuesta a la energía solar para reducir el gasto eléctrico', category: 'Ambiente' }
]
const currentReaders = [
  { title: 'Avanza la etapa final del acueducto regional del San Jorge', location: 'Montería, Córdoba', time: 'hace 12 s' },
  { title: 'Últimas noticias de Política Nación', location: 'Bogotá, Colombia', time: 'hace 28 s' },
  { title: 'La seguridad nacional y la Constitución', location: 'Sincelejo, Sucre', time: 'hace 41 s' }
]
const activeView = ref('overview')
const selectedPeriod = ref<AnalyticsRange>('today')
const analytics = computed(() => analyticsByPeriod[selectedPeriod.value])
const mostReadStories = computed(() => mostReadArticles.map((story, index) => ({ ...story, ...analytics.value.topStories[index] })))
const search = ref('')
const categoryFilter = ref('Todas las categorías')
const editorOpen = ref(false)
const editingEntryId = ref<number | null>(null)
const openActionMenuId = ref<number | null>(null)
const toast = ref('')
const adminSession = useCookie('bp-admin-demo-session')
const adminRole = useCookie<'admin' | 'revision' | null>('bp-admin-demo-role')
const imageInput = ref<HTMLInputElement | null>(null)
const contentInput = ref<HTMLTextAreaElement | null>(null)
const selectedImageName = ref('')
const uploadError = ref('')
const editorMode = ref<'visual' | 'code'>('visual')
const slugIsCustom = ref(false)
const insertAfterUpload = ref(false)
const bodyJustified = ref(false)
const seoTitleManual = ref(false)
const seoDescriptionManual = ref(false)
const keyphraseManual = ref(false)
const addingCategory = ref(false)
const newCategoryName = ref('')
const categoryError = ref('')
const form = reactive({ title: '', category: '', categories: [] as string[], summary: '', body: '', image: '', slug: '', visibility: 'Pública', publishImmediately: true, publishAt: '', amp: true, focusKeyphrase: '', seoDescription: '', seoTitle: '' })
const publishedCount = computed(() => entries.value.filter(entry => entry.status === 'Publicado').length)
const draftCount = computed(() => entries.value.filter(entry => entry.status === 'Borrador').length)
const reviewCount = computed(() => entries.value.filter(entry => entry.status === 'En revisión').length)
const totalViews = computed(() => entries.value.reduce((sum, entry) => sum + entry.views, 0))
const hasStoryContext = computed(() => Boolean(form.body.trim() || form.summary.trim()))
const publishChecklist = computed(() => [
  { label: 'Titular', complete: Boolean(form.title.trim()) },
  { label: 'Contexto', complete: hasStoryContext.value },
  { label: 'Categoría', complete: form.categories.length > 0 },
  { label: 'Imagen destacada', complete: Boolean(form.image) },
  ...(!form.publishImmediately ? [{ label: 'Fecha y hora', complete: Boolean(form.publishAt) }] : [])
])
const publishProgress = computed(() => Math.round(publishChecklist.value.filter(item => item.complete).length / publishChecklist.value.length * 100))
const missingPublishItems = computed(() => publishChecklist.value.filter(item => !item.complete).map(item => item.label))
const canPublish = computed(() => missingPublishItems.value.length === 0)
const showMissingHighlights = computed(() => Boolean(form.title.trim() && form.summary.trim()))
const liveVisitors = ref(18)
const wordCount = computed(() => form.body.trim() ? form.body.trim().split(/\s+/).length : 0)
const seoPreviewTitle = computed(() => form.seoTitle.trim() || form.title.trim() || 'Título de la entrada')
const seoPreviewDescription = computed(() => form.seoDescription.trim() || 'Añade una meta description para mostrar un resumen de esta entrada en los resultados de búsqueda.')
const pageTitle = computed(() => editorOpen.value ? (editingEntryId.value ? 'Editar entrada' : 'Nueva entrada') : ({ overview: 'Resumen editorial', all: 'Todas las entradas', published: 'Entradas publicadas', drafts: 'Borradores' }[activeView.value] || 'Resumen editorial'))
const filteredEntries = computed(() => entries.value.filter(entry => {
  const matchesView = activeView.value === 'published' ? entry.status === 'Publicado' : activeView.value === 'drafts' ? entry.status === 'Borrador' : true
  const matchesSearch = entry.title.toLowerCase().includes(search.value.toLowerCase())
  const matchesCategory = categoryFilter.value === 'Todas las categorías' || entry.category === categoryFilter.value
  return matchesView && matchesSearch && matchesCategory
}))

let liveVisitorsTimer: ReturnType<typeof setInterval> | undefined
onMounted(() => {
  liveVisitorsTimer = setInterval(() => {
    liveVisitors.value = Math.max(8, Math.min(31, liveVisitors.value + (Math.random() > 0.5 ? 1 : -1)))
  }, 6000)
})
onUnmounted(() => {
  if (liveVisitorsTimer) clearInterval(liveVisitorsTimer)
})

useSeoMeta({ title: 'Panel editorial | Burbuja Política', description: 'Panel editorial de demostración de Burbuja Política.', robots: 'noindex, nofollow' })

function openEditor() {
  editingEntryId.value = null
  openActionMenuId.value = null
  form.title = ''
  form.category = ''
  form.categories = []
  form.summary = ''
  form.body = ''
  form.image = ''
  form.slug = ''
  form.visibility = 'Pública'
  form.publishImmediately = true
  form.publishAt = ''
  form.amp = true
  form.focusKeyphrase = ''
  form.seoDescription = ''
  form.seoTitle = ''
  seoTitleManual.value = false
  seoDescriptionManual.value = false
  keyphraseManual.value = false
  slugIsCustom.value = false
  insertAfterUpload.value = false
  bodyJustified.value = false
  editorMode.value = 'visual'
  selectedImageName.value = ''
  uploadError.value = ''
  editorOpen.value = true
}

function editEntry(entry: Entry) {
  openEditor()
  editingEntryId.value = entry.id
  form.title = entry.title
  form.category = entry.category
  form.categories = [entry.category]
  form.summary = entry.summary || ''
  form.body = entry.body || ''
  form.image = entry.image || ''
  form.slug = entry.slug || entry.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  form.visibility = entry.visibility || 'Pública'
  form.publishImmediately = true
  slugIsCustom.value = Boolean(entry.slug)
  selectedImageName.value = entry.image ? 'Imagen actual' : ''
  seoTitleManual.value = false
  seoDescriptionManual.value = Boolean(entry.seoDescription)
  form.seoDescription = entry.seoDescription || ''
  openActionMenuId.value = null
}

function toggleActionMenu(id: number) {
  openActionMenuId.value = openActionMenuId.value === id ? null : id
}

async function deleteEntry(entry: Entry) {
  openActionMenuId.value = null
  const result = await Swal.fire({
    title: '¿Eliminar esta entrada?',
    text: `Se eliminará “${entry.title}” de las listas y de la portada de demostración.`,
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
  if (editingEntryId.value === entry.id) {
    editingEntryId.value = null
    editorOpen.value = false
  }
  toast.value = 'Entrada eliminada durante esta sesión.'
  window.setTimeout(() => { toast.value = '' }, 2800)
}

function setCategory(category: string, checked: boolean) {
  if (checked && !form.categories.includes(category)) form.categories.push(category)
  if (!checked) form.categories = form.categories.filter(item => item !== category)
  form.category = form.categories[0] || ''
}

function addCategory() {
  const name = newCategoryName.value.trim()
  if (!name) {
    categoryError.value = 'Escribe el nombre de la categoría.'
    return
  }
  if (categories.value.some(category => category.toLocaleLowerCase() === name.toLocaleLowerCase())) {
    categoryError.value = 'Esta categoría ya existe.'
    return
  }
  categories.value.push(name)
  setCategory(name, true)
  newCategoryName.value = ''
  categoryError.value = ''
  addingCategory.value = false
  toast.value = 'Categoría añadida a la simulación.'
  window.setTimeout(() => { toast.value = '' }, 2500)
}

function updateSlug() {
  if (slugIsCustom.value) return
  form.slug = form.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

watch(() => form.title, updateSlug)

function updateSeoDefaults() {
  if (!seoTitleManual.value) form.seoTitle = form.title.trim()
  if (!keyphraseManual.value) form.focusKeyphrase = form.title.trim()
  if (!seoDescriptionManual.value) {
    const source = form.summary.trim() || firstParagraph(form.body).text
    form.seoDescription = source.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160)
  }
}

watch([() => form.title, () => form.summary, () => form.body], updateSeoDefaults)

function firstParagraph(content: string) {
  const source = content.trim()
  if (!source) return { text: '', rest: '' }
  const htmlParagraph = source.match(/^<p\b[^>]*>([\s\S]*?)<\/p>/i)
  if (htmlParagraph) {
    return {
      text: htmlParagraph[1].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim(),
      rest: source.slice(htmlParagraph[0].length).trim()
    }
  }
  const paragraphs = source.split(/\n\s*\n/)
  if (paragraphs.length > 1) return { text: paragraphs[0].trim(), rest: paragraphs.slice(1).join('\n\n').trim() }
  const firstLineBreak = source.indexOf('\n')
  if (firstLineBreak >= 0) return { text: source.slice(0, firstLineBreak).trim(), rest: source.slice(firstLineBreak + 1).trim() }
  return { text: source, rest: '' }
}

function recortarContenido() {
  const paragraph = firstParagraph(form.body)
  if (!paragraph.text) {
    toast.value = 'Pega primero el contenido para poder recortar el primer párrafo.'
  } else {
    const headline = paragraph.text.slice(0, 120)
    const remainder = paragraph.text.length > 120 ? paragraph.text.slice(120).trim() : ''
    form.title = headline
    form.body = [remainder, paragraph.rest].filter(Boolean).join('\n\n')
    bodyJustified.value = true
    toast.value = paragraph.text.length > 120 ? 'Primer párrafo convertido en titular; el texto restante se conserva en el contenido.' : 'Primer párrafo convertido en titular y retirado del contenido.'
  }
  window.setTimeout(() => { toast.value = '' }, 3200)
}

function restoreSeoDefaults() {
  seoTitleManual.value = false
  seoDescriptionManual.value = false
  keyphraseManual.value = false
  updateSeoDefaults()
}

function onCategoryChange(category: string, event: Event) {
  setCategory(category, (event.target as HTMLInputElement).checked)
}

function skipToEditor() {
  contentInput.value?.focus()
  contentInput.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function useElementor() {
  toast.value = 'El constructor visual no está disponible en esta demostración.'
  window.setTimeout(() => { toast.value = '' }, 3000)
}

function formatContent(marker: string) {
  const field = contentInput.value
  if (!field) return
  const start = field.selectionStart
  const end = field.selectionEnd
  const selected = form.body.slice(start, end) || 'texto'
  form.body = `${form.body.slice(0, start)}${marker}${selected}${marker}${form.body.slice(end)}`
  nextTick(() => {
    field.focus()
    field.setSelectionRange(start + marker.length, start + marker.length + selected.length)
  })
}

function insertImageIntoBody() {
  if (!form.image) {
    insertAfterUpload.value = true
    imageInput.value?.click()
    return
  }
  addImageMarkerToBody()
}

function addImageMarkerToBody() {
  form.body += `\n\n[Imagen: ${selectedImageName.value || 'imagen destacada'}]`
  toast.value = 'Imagen añadida al contenido.'
  window.setTimeout(() => { toast.value = '' }, 2500)
}

function handleImageUpload(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  if (!file.type.startsWith('image/')) {
    uploadError.value = 'Selecciona un archivo de imagen.'
    input.value = ''
    return
  }
  if (file.size > 5 * 1024 * 1024) {
    uploadError.value = 'La imagen debe pesar menos de 5 MB.'
    input.value = ''
    return
  }
  if (form.image.startsWith('blob:')) URL.revokeObjectURL(form.image)
  form.image = URL.createObjectURL(file)
  selectedImageName.value = file.name
  uploadError.value = ''
  input.value = ''
  if (insertAfterUpload.value) {
    insertAfterUpload.value = false
    addImageMarkerToBody()
  }
}

function removeImage() {
  if (form.image.startsWith('blob:')) URL.revokeObjectURL(form.image)
  form.image = ''
  selectedImageName.value = ''
  uploadError.value = ''
}

function saveEntry(status: EntryStatus) {
  if (!form.title.trim() || !form.categories.length) return
  if (status === 'Publicado' && missingPublishItems.value.length) {
    toast.value = `Completa estos datos antes de publicar: ${missingPublishItems.value.join(', ')}.`
    window.setTimeout(() => { toast.value = '' }, 3500)
    return
  }
  if (status === 'Publicado' && !form.image) {
    toast.value = 'Añade una imagen destacada antes de publicar.'
    window.setTimeout(() => { toast.value = '' }, 3000)
    return
  }
  if (status === 'Publicado' && !form.publishImmediately && !form.publishAt) {
    toast.value = 'Selecciona una fecha y hora para programar la entrada.'
    window.setTimeout(() => { toast.value = '' }, 3000)
    return
  }
  const savedStatus: EntryStatus = status === 'Publicado' && !form.publishImmediately ? 'Programado' : status
  const existing = editingEntryId.value === null ? undefined : entries.value.find(entry => entry.id === editingEntryId.value)
  const newEntry: Entry = {
    id: existing?.id || Date.now(),
    title: form.title.trim(),
    category: form.category,
    date: savedStatus === 'Programado' && form.publishAt ? new Intl.DateTimeFormat('es-CO', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(form.publishAt)) : new Intl.DateTimeFormat('es-CO', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date()),
    status: savedStatus,
    views: existing?.views || 0,
    image: form.image,
    summary: form.summary.trim(),
    body: form.body.trim(),
    slug: form.slug,
    visibility: form.visibility,
    seoDescription: form.seoDescription
  }
  if (existing) {
    Object.assign(existing, newEntry)
  } else {
    entries.value.unshift(newEntry)
  }
  const publicationIndex = sessionPublications.value.findIndex(entry => entry.id === newEntry.id)
  if (savedStatus === 'Publicado' && form.visibility === 'Pública') {
    if (publicationIndex >= 0) Object.assign(sessionPublications.value[publicationIndex], newEntry)
    else sessionPublications.value.unshift({ ...newEntry })
  } else if (publicationIndex >= 0) {
    sessionPublications.value.splice(publicationIndex, 1)
  }
  editorOpen.value = false
  editingEntryId.value = null
  activeView.value = savedStatus === 'Publicado' ? 'published' : savedStatus === 'Borrador' ? 'drafts' : 'all'
  toast.value = existing ? 'Los cambios de la entrada se guardaron.' : savedStatus === 'Publicado' ? 'La entrada se publicó correctamente.' : savedStatus === 'Programado' ? 'La entrada quedó programada.' : 'El borrador se guardó correctamente.'
  window.setTimeout(() => { toast.value = '' }, 3200)
}

function showList(view: string) {
  activeView.value = view
  editorOpen.value = false
  editingEntryId.value = null
  openActionMenuId.value = null
}

function signOut() {
  adminSession.value = null
  adminRole.value = null
  navigateTo('/login')
}
</script>

<template>
  <div class="dashboard">
    <aside class="sidebar">
      <NuxtLink to="/" class="dash-brand"><span class="brand-mark">BP</span><span class="brand-name">Burbuja <b>Política</b><small>PANEL EDITORIAL</small></span></NuxtLink>
      <div class="workspace-label">ESPACIO DE TRABAJO</div>
      <nav class="side-nav" aria-label="Navegación del panel">
        <button v-for="item in sections" :key="item.id" :class="{ active: activeView === item.id && !editorOpen }" @click="showList(item.id)"><span class="nav-icon">{{ item.icon }}</span>{{ item.label }}<span v-if="item.id === 'drafts'" class="nav-count">{{ draftCount }}</span></button>
        <button :class="{ active: editorOpen }" @click="openEditor"><span class="nav-icon">＋</span>Nueva entrada</button>
      </nav>
      <NuxtLink to="/revision" class="revision-shortcut"><span>◉</span> Revisión de hoy</NuxtLink>
      <div class="sidebar-bottom"><div class="private-note"><span class="lock-icon">⌑</span><span><b>Área privada</b><small>Modo de demostración</small></span><i></i></div><NuxtLink to="/" class="back-site">↗ <span>Volver al sitio</span></NuxtLink><div class="profile"><div class="profile-avatar">BP</div><span><b>Editor</b><small>Redacción</small></span><button aria-label="Cerrar sesión" title="Cerrar sesión" @click="signOut">↪</button></div></div>
    </aside>

    <div class="dashboard-main">
      <header class="topbar"><div class="mobile-brand"><span class="brand-mark">BP</span><b>Burbuja Política</b></div><div class="topbar-right"><span class="status-dot"></span><span class="online-label">Panel editorial</span><ThemeToggle /><button class="topbar-icon" aria-label="Notificaciones">♧<i></i></button><div class="top-avatar">BP</div></div></header>
      <main class="content-area">
        <div class="page-heading"><div><div class="breadcrumb">Panel <span>/</span> {{ pageTitle }}</div><h1>{{ pageTitle }}</h1><p v-if="!editorOpen && activeView === 'overview'">Analítica ilustrativa para la propuesta del panel.</p><p v-else-if="!editorOpen">Administra el contenido y mantén al día a tus lectores.</p><p v-else>Completa los datos para preparar una nueva publicación.</p></div><button v-if="!editorOpen" class="primary-button" @click="openEditor"><span>＋</span> Crear entrada</button></div>

        <template v-if="!editorOpen">
          <template v-if="activeView === 'overview'">
            <div class="metrics-grid">
              <article class="metric-card"><div class="metric-top"><span>Visitas {{ analytics.periodLabel }}</span><span class="metric-icon red-icon">↗</span></div><div class="metric-value">{{ analytics.visits.toLocaleString('es-CO') }}</div><div class="metric-foot"><span class="metric-trend" :class="{ 'metric-trend-down': analytics.change < 0 }">{{ analytics.change >= 0 ? '↗' : '↘' }} {{ Math.abs(analytics.change) }}%</span> vs. periodo anterior</div></article>
              <article class="metric-card"><div class="metric-top"><span>Viendo ahora</span><span class="metric-icon red-icon live-metric-icon"><i></i>◉</span></div><div class="metric-value">{{ liveVisitors }}</div><div class="metric-foot"><span class="live-caption-dot"></span> lectores activos en el sitio</div></article>
              <article class="metric-card"><div class="metric-top"><span>Entradas publicadas</span><span class="metric-icon red-icon">▤</span></div><div class="metric-value">{{ publishedCount }}</div><div class="metric-foot"><span class="metric-trend">↗ 3</span> esta semana</div></article>
              <article class="metric-card"><div class="metric-top"><span>Páginas vistas</span><span class="metric-icon red-icon">◷</span></div><div class="metric-value">{{ analytics.pageViews.toLocaleString('es-CO') }}</div><div class="metric-foot">{{ analytics.periodLabel }}</div></article>
            </div>

            <section class="panel-card activity-card">
              <div class="panel-heading"><div><h2>{{ analytics.chartTitle }}</h2><p>{{ analytics.chartSubtitle }}</p></div><select v-model="selectedPeriod" class="period-select" aria-label="Seleccionar periodo"><option v-for="period in periodOptions" :key="period.id" :value="period.id">{{ period.label }}</option></select></div>
              <div class="chart-area"><div class="chart-y"><span v-for="mark in analytics.axis" :key="mark">{{ mark }}</span></div><div class="chart"><div v-for="(point, index) in analytics.chart" :key="point.label" class="chart-column"><div class="chart-bar" :class="{ today: index === analytics.chart.length - 1 }" :style="{ height: `${point.height}%` }"></div><span>{{ point.label }}</span></div></div></div>
            </section>

            <div class="insights-grid">
              <section class="panel-card insight-card"><div class="panel-heading"><div><h2>De dónde te visitan</h2><p>Ubicación aproximada · {{ analytics.periodLabel }}</p></div><span class="insight-icon">⌖</span></div><div class="location-list"><div v-for="location in analytics.locations" :key="location.name" class="location-row"><div class="location-info"><span>{{ location.name }}</span><b>{{ location.visits }}</b></div><div class="location-track"><span :style="{ width: `${location.share}%` }"></span></div></div></div><p class="insight-footnote">Datos geográficos de ejemplo para esta demostración.</p></section>
              <section class="panel-card insight-card"><div class="panel-heading"><div><h2>Origen de las visitas</h2><p>Canales de llegada · {{ analytics.periodLabel }}</p></div><span class="insight-icon">⌁</span></div><div class="location-list"><div v-for="source in analytics.sources" :key="source.name" class="location-row"><div class="location-info"><span>{{ source.name }}</span><b>{{ source.visits }}</b></div><div class="location-track"><span :style="{ width: `${source.share}%` }"></span></div></div></div><p class="insight-footnote">Porcentajes simulados por canal de adquisición.</p></section>
              <section class="panel-card insight-card live-readers-card"><div class="panel-heading"><div><h2>Lectores en tiempo real</h2><p>Actividad reciente en el sitio</p></div><span class="live-badge"><i></i> EN VIVO</span></div><div class="live-total"><b>{{ liveVisitors }}</b><span>personas están leyendo ahora</span></div><div class="reader-list"><div v-for="reader in currentReaders" :key="reader.title" class="reader-row"><span class="reader-avatar">◉</span><div><b>{{ reader.title }}</b><small>{{ reader.location }} · {{ reader.time }}</small></div></div></div><p class="insight-footnote">Contador animado de ejemplo; no representa visitantes reales.</p></section>
            </div>

            <section class="panel-card most-read-card"><div class="panel-heading"><div><h2>Noticias más leídas</h2><p>Las entradas con más visitas acumuladas</p></div><span class="eyebrow">TOP CONTENIDO</span></div><div class="most-read-list"><div v-for="(story, index) in mostReadStories" :key="story.title" class="most-read-row"><span class="rank-number">0{{ index + 1 }}</span><div class="most-read-title"><b>{{ story.title }}</b><small>{{ story.category }}</small><div class="read-track"><span :style="{ width: `${story.share}%` }"></span></div></div><strong>{{ story.views }} <small>vistas</small></strong></div></div></section>
          </template>

          <section v-if="activeView !== 'overview'" class="panel-card entries-card">
            <div class="panel-heading entries-heading"><div><h2>{{ activeView === 'published' ? 'Entradas publicadas' : activeView === 'drafts' ? 'Borradores' : 'Entradas recientes' }}</h2><p>Consulta y administra el contenido del medio.</p></div><button class="text-button" @click="showList('all')">Ver todas <span>→</span></button></div>
            <div class="table-tools"><label class="table-search"><span>⌕</span><input v-model="search" placeholder="Buscar entrada..."></label><select v-model="categoryFilter" aria-label="Filtrar por categoría"><option>Todas las categorías</option><option v-for="category in categories" :key="category">{{ category }}</option></select><button class="filter-button">☷ <span>Filtros</span></button></div>
            <div class="table-scroll"><table><thead><tr><th class="check-col"><input type="checkbox" aria-label="Seleccionar todas"></th><th>TÍTULO</th><th>CATEGORÍA</th><th>FECHA</th><th>ESTADO</th><th>VISTAS</th><th></th></tr></thead><tbody><tr v-for="entry in (activeView === 'overview' ? filteredEntries.slice(0, 4) : filteredEntries)" :key="entry.id"><td><input type="checkbox" :aria-label="`Seleccionar ${entry.title}`"></td><td><div class="entry-cell"><img v-if="entry.image" class="table-thumb" :src="entry.image" :alt="entry.title"><div class="entry-title">{{ entry.title }}<small>Por Redacción Burbuja</small></div></div></td><td><span class="category-pill">{{ entry.category }}</span></td><td class="date-cell">{{ entry.date }}</td><td><span class="status-pill" :class="entry.status === 'Publicado' ? 'published' : entry.status === 'Borrador' ? 'draft' : 'review'"><i></i>{{ entry.status }}</span></td><td class="views-cell">{{ entry.views ? entry.views.toLocaleString('es-CO') : '—' }}</td><td class="action-cell"><div class="entry-action-wrap"><button class="row-menu" :aria-label="`Acciones de ${entry.title}`" :aria-expanded="openActionMenuId === entry.id" title="Acciones de la entrada" @click.stop="toggleActionMenu(entry.id)">···</button><div v-if="openActionMenuId === entry.id" class="entry-action-menu" @click.stop><button @click="editEntry(entry)">✎ <span>Editar entrada</span></button><button class="entry-delete-action" @click="deleteEntry(entry)">⌫ <span>Eliminar entrada</span></button></div></div></td></tr><tr v-if="!filteredEntries.length"><td colspan="7" class="empty-table">No hay entradas para mostrar con estos filtros.</td></tr></tbody></table></div>
            <div class="table-footer"><span>Mostrando <b>{{ filteredEntries.length ? (activeView === 'overview' ? Math.min(filteredEntries.length, 4) : filteredEntries.length) : 0 }}</b> de <b>{{ filteredEntries.length }}</b> entradas</span><div><button disabled>← Anterior</button><button class="table-page">1</button><button disabled>Siguiente →</button></div></div>
          </section>
        </template>

        <section v-else class="editor-workspace">
          <div class="editor-page-top"><div><div class="breadcrumb">Panel <span>/</span> Todas las entradas <span>/</span> {{ editingEntryId ? 'Editar entrada' : 'Añadir entrada' }}</div><h2>{{ editingEntryId ? 'Editar entrada' : 'Añadir entrada' }}</h2></div><div class="editor-shortcuts"><button @click="skipToEditor">Saltar al editor ↓</button><button @click="useElementor">Editar con Elementor ↗</button></div></div>
          <div class="editor-columns">
            <div class="editor-primary">
              <section class="panel-card post-editor-card">
                <input v-model="form.title" class="post-title-input" maxlength="120" placeholder="Escribe un título" aria-label="Título de la entrada">
                <div class="title-counter">{{ form.title.length }}/120</div>
                <div class="post-editor-toolbar"><div class="editor-tools-left"><button class="media-button" @click="insertImageIntoBody">▧ <span>Añadir medios</span></button><button class="recortar-button" :disabled="!form.body.trim()" title="Quitar el primer párrafo del contenido y usarlo como titular" @click="recortarContenido">✂ Recortar</button></div><div class="editor-mode"><button :class="{ selected: editorMode === 'visual' }" @click="editorMode = 'visual'">Visual</button><button :class="{ selected: editorMode === 'code' }" @click="editorMode = 'code'">Código</button></div></div>
                <div v-if="editorMode === 'visual'" class="format-toolbar"><button @click="formatContent('**')"><b>B</b></button><button @click="formatContent('*')"><i>I</i></button><button @click="formatContent('## ')">H₂</button><button @click="insertImageIntoBody">▧</button><label>Párrafo <span>⌄</span></label><span class="toolbar-spacer"></span><button :class="{ active: bodyJustified }" title="Alineación justificada" @click="bodyJustified = !bodyJustified">☰</button><button title="Vista previa">↗</button></div>
                <textarea id="body-editor" ref="contentInput" v-model="form.body" class="body-textarea" :class="{ 'code-mode': editorMode === 'code', justified: bodyJustified && editorMode === 'visual' }" rows="15" :placeholder="editorMode === 'visual' ? 'Párrafo\n\nEmpieza a escribir tu historia aquí...' : '<!-- Escribe o edita el contenido HTML de la entrada -->'"></textarea>
                <div class="word-count">Número de palabras: <b>{{ wordCount }}</b></div>
              </section>
              <section class="panel-card excerpt-panel"><h3>Resumen de la entrada</h3><textarea v-model="form.summary" rows="3" placeholder="Añade una bajada breve para presentar la noticia."></textarea><small>Este resumen aparecerá en las tarjetas de noticias.</small></section>
              <details class="panel-card wp-panel" open><summary><span>Yoast SEO</span><span class="panel-open-label">SEO　 Legibilidad　 Schema　 Social</span></summary><div class="seo-content"><div class="seo-auto-heading"><span>Los campos se completan automáticamente con el título y el contenido.</span><button class="inline-link" @click="restoreSeoDefaults">Restaurar automático</button></div><label class="field-label">Frase clave objetivo<input v-model="form.focusKeyphrase" placeholder="Se toma del título" @input="keyphraseManual = true"></label><div class="google-preview"><small>Vista previa de Google · Resultado móvil / escritorio</small><div class="google-url">burbujapolitica.com › {{ form.slug || 'entrada' }}</div><div class="google-title">{{ seoPreviewTitle }} - Burbuja Política</div><div class="google-description">{{ seoPreviewDescription }}</div></div><label class="field-label">Título SEO<input v-model="form.seoTitle" placeholder="Se completa con el título de la entrada" @input="seoTitleManual = true"></label><label class="field-label">Slug<input v-model="form.slug" @input="slugIsCustom = true" placeholder="slug-de-la-entrada"><button class="inline-link" @click="slugIsCustom = false; updateSlug()">Generar desde el título</button></label><label class="field-label">Meta description<textarea v-model="form.seoDescription" rows="3" maxlength="160" placeholder="Se genera desde el resumen o el primer párrafo" @input="seoDescriptionManual = true"></textarea><small>{{ form.seoDescription.length }}/160 caracteres</small></label><p class="seo-unavailable">Análisis SEO y legibilidad: vista simulada, sin conexión al servicio Yoast.</p></div></details>
            </div>

            <aside class="editor-rail">
              <section class="panel-card rail-panel" :class="{ 'publish-attention': showMissingHighlights && !form.image }"><div class="wp-panel-title"><h3>Imagen destacada <b class="required-indicator">*</b></h3><button>⌃</button></div><input ref="imageInput" class="upload-input" type="file" accept="image/*" @change="handleImageUpload"><div v-if="form.image" class="image-preview"><img :src="form.image" alt="Vista previa de la imagen seleccionada"><div><b>{{ selectedImageName }}</b><small>Vista previa temporal</small><button type="button" @click="imageInput?.click()">Cambiar</button><button type="button" class="remove-image" @click="removeImage">Quitar</button></div></div><div v-else class="image-placeholder"><span>▧</span><b>Sin imagen seleccionada</b><small>Necesaria para publicar · JPG, PNG o WebP · Máximo 5 MB</small><button type="button" @click="imageInput?.click()">Establecer la imagen destacada</button></div><p v-if="uploadError" class="upload-error">{{ uploadError }}</p></section>

              <section class="panel-card rail-panel" :class="{ 'publish-attention': showMissingHighlights && !form.categories.length }"><div class="wp-panel-title"><h3>Categorías</h3><button>⌃</button></div><div class="category-tabs"><button class="active">Todas las categorías</button><button>Más utilizadas</button></div><div class="category-checks"><label v-for="category in categories" :key="category"><input type="checkbox" :checked="form.categories.includes(category)" @change="onCategoryChange(category, $event)"><span>{{ category }}</span></label></div><div v-if="addingCategory" class="add-category-form"><label class="field-label">Nombre de la nueva categoría<input v-model="newCategoryName" placeholder="Ej. Comunidad" @keyup.enter="addCategory"></label><p v-if="categoryError" class="upload-error">{{ categoryError }}</p><div><button class="add-category-confirm" @click="addCategory">Añadir</button><button class="add-category-cancel" @click="addingCategory = false; categoryError = ''">Cancelar</button></div></div><button v-else class="inline-link" @click="addingCategory = true">＋ Añadir categoría</button></section>

              <section class="panel-card publish-panel">
                <div class="wp-panel-title"><h3>{{ editingEntryId ? 'Actualizar entrada' : 'Publicar' }}</h3><button title="Contraer">⌃</button></div>
                <div class="publish-progress" :class="{ ready: canPublish }">
                  <div class="publish-progress-heading"><b>{{ canPublish ? 'Listo para publicar' : 'Completa los requisitos' }}</b><span>{{ publishProgress }}%</span></div>
                  <div class="publish-progress-track" role="progressbar" :aria-valuenow="publishProgress" aria-valuemin="0" aria-valuemax="100" :aria-label="`Requisitos para publicar: ${publishProgress}%`"><span :style="{ width: `${publishProgress}%` }"></span></div>
                  <ul class="publish-checklist">
                    <li v-for="item in publishChecklist" :key="item.label" :class="{ complete: item.complete }">
                      <span aria-hidden="true">{{ item.complete ? '✓' : '○' }}</span>{{ item.label }}
                    </li>
                  </ul>
                </div>
                <button class="preview-button" @click="toast = 'La vista previa estará disponible al conectar la publicación.'">Vista previa ↗</button>
                <div class="publish-property"><span>Estado:</span><b>{{ editingEntryId ? 'Editando publicación' : 'Borrador' }}</b><button @click="toast = 'El estado se define al guardar o publicar.'">Editar</button></div>
                <div class="publish-property"><span>Visibilidad:</span><select v-model="form.visibility"><option>Pública</option><option>Privada</option><option>Protegida con contraseña</option></select></div>
                <label class="schedule-toggle"><input v-model="form.publishImmediately" type="checkbox"><span>Publicar inmediatamente</span></label>
                <label v-if="!form.publishImmediately" class="field-label schedule-field" :class="{ 'publish-attention': showMissingHighlights && !form.publishAt }">Fecha y hora<input v-model="form.publishAt" type="datetime-local"></label>
                <div class="amp-toggle"><label><input v-model="form.amp" type="checkbox"><span>AMP</span></label><b>Activo</b><button @click="form.amp = !form.amp">Editar</button></div>
                <button class="draft-copy" @click="toast = 'Se creó una copia local del borrador.'">Copiar en un borrador nuevo</button>
                <div v-if="missingPublishItems.length" class="publish-missing" role="status" aria-live="polite">
                  <b>Para activar «{{ form.publishImmediately ? 'Publicar' : 'Programar' }}», te falta:</b>
                  <ul><li v-for="item in missingPublishItems" :key="item">{{ item }}</li></ul>
                </div>
                <p v-else class="publish-ready-message" role="status">Todo listo. Ya puedes {{ form.publishImmediately ? 'publicar' : 'programar' }} esta entrada.</p>
                <div class="publish-actions"><button class="secondary-button" :disabled="!form.title.trim() || !form.categories.length" @click="saveEntry('Borrador')">Guardar borrador</button><button class="primary-button" :disabled="!canPublish" :title="missingPublishItems.length ? `Completa: ${missingPublishItems.join(', ')}` : ''" @click="saveEntry('Publicado')">{{ editingEntryId ? 'Actualizar entrada' : form.publishImmediately ? 'Publicar' : 'Programar' }}</button></div>
              </section>

            </aside>
          </div>
          <div class="editor-status editor-session-note"><span class="status-dot draft-dot"></span><span><b>Modo de demostración</b><small>Los cambios y la imagen solo viven en esta sesión; al recargar la página se borran.</small></span></div>
        </section>
        <div v-if="toast" class="toast"><span>✓</span>{{ toast }}</div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.dashboard{--admin-red:#bb1919;--admin-ink:#252a31;--admin-muted:#7c838d;--admin-line:#e8eaed;min-height:100vh;display:grid;grid-template-columns:250px minmax(0,1fr);background:#f6f7f9;color:var(--admin-ink);font:14px 'Lato',Arial,sans-serif}.sidebar{position:sticky;top:0;height:100vh;padding:25px 16px 15px;background:#fff;border-right:1px solid var(--admin-line);display:flex;flex-direction:column}.dash-brand{display:flex;align-items:center;gap:11px;padding:1px 8px 27px;border-bottom:1px solid #f0f1f3}.brand-mark,.top-avatar{width:38px;height:38px;border-radius:11px;display:grid;place-items:center;background:var(--admin-red);color:#fff;font:bold 13px 'Source Sans 3',sans-serif;box-shadow:0 4px 10px #bb191929}.brand-name{font-size:15px;font-weight:600;line-height:1.05}.brand-name b{font-weight:800}.brand-name small{display:block;margin-top:7px;color:#9b9fa5;font:800 8px 'Source Sans 3',sans-serif;letter-spacing:.16em}.workspace-label{margin:26px 10px 10px;color:#9a9fa7;font:800 9px 'Source Sans 3',sans-serif;letter-spacing:.12em}.side-nav{display:grid;gap:4px}.side-nav button{width:100%;height:42px;display:flex;align-items:center;gap:11px;border:0;border-radius:7px;padding:0 11px;background:transparent;text-align:left;color:#626a74;font-size:12px;cursor:pointer}.side-nav button:hover{background:#f8f1f1;color:var(--admin-red)}.side-nav button.active{background:#f9eded;color:var(--admin-red);font-weight:700}.nav-icon{width:18px;text-align:center;font-size:16px}.nav-count{margin-left:auto;min-width:20px;padding:3px 6px;border-radius:12px;background:#f0f1f2;color:#68707a;text-align:center;font-size:10px}.sidebar-bottom{margin-top:auto}.private-note{position:relative;display:flex;align-items:center;gap:9px;padding:12px 9px;margin-bottom:13px;background:#f8f8f9;border-radius:7px}.lock-icon{width:28px;height:28px;display:grid;place-items:center;background:#fff;border:1px solid var(--admin-line);border-radius:6px;color:#68707a}.private-note b,.private-note small,.profile b,.profile small{display:block}.private-note b,.profile b{font-size:10px}.private-note small,.profile small{margin-top:3px;font-size:9px;color:#8a9099}.private-note i,.status-dot{width:7px;height:7px;border-radius:50%;background:#38a56a}.private-note i{margin-left:auto}.back-site{display:flex;align-items:center;gap:9px;padding:10px;color:#66707a;font-size:11px}.back-site:hover{color:var(--admin-red)}.profile{display:flex;align-items:center;gap:9px;border-top:1px solid #f0f1f3;padding:15px 7px 0;margin-top:8px}.profile-avatar,.top-avatar{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:#f5e7e7;color:var(--admin-red);font-size:9px;font-weight:800}.profile button{margin-left:auto;border:0;background:none;color:#6f7780;font-size:18px}.dashboard-main{min-width:0}.topbar{height:64px;padding:0 38px;display:flex;align-items:center;justify-content:space-between;background:white;border-bottom:1px solid var(--admin-line)}.mobile-brand{display:none}.topbar-right{display:flex;align-items:center;gap:11px;color:#6d747e}.topbar-right .status-dot{width:7px;height:7px}.online-label{font-size:11px}.topbar-icon{position:relative;margin:0 7px 0 14px;border:0;background:none;color:#69717a;font-size:17px}.topbar-icon i{position:absolute;top:1px;right:0;width:5px;height:5px;border:1px solid white;border-radius:50%;background:var(--admin-red)}.top-avatar{width:31px;height:31px}.content-area{max-width:1500px;margin:0 auto;padding:31px 38px 48px}.page-heading{display:flex;align-items:center;justify-content:space-between;margin-bottom:23px}.breadcrumb{margin-bottom:9px;color:#9298a1;font-size:10px}.breadcrumb span{padding:0 7px;color:#c0c4c9}.page-heading h1{margin:0;color:#22272e;font:700 27px 'Source Sans 3',sans-serif;letter-spacing:-.02em}.page-heading p{margin:5px 0 0;color:#858b94;font-size:11px}.primary-button,.secondary-button,.discard-button{height:37px;display:inline-flex;justify-content:center;align-items:center;gap:8px;border:1px solid var(--admin-red);border-radius:5px;padding:0 13px;background:var(--admin-red);color:white;font-size:11px;font-weight:700;cursor:pointer;transition:.15s}.primary-button:hover{background:#9c1515}.primary-button:disabled,.secondary-button:disabled{opacity:.45;cursor:not-allowed}.primary-button>span{font-size:17px;line-height:0}.metrics-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:15px;margin-bottom:18px}.metric-card,.panel-card{background:white;border:1px solid #eaecf0;border-radius:7px;box-shadow:0 2px 5px #1c27320a}.metric-card{min-height:113px;padding:15px 16px}.metric-top{display:flex;align-items:center;justify-content:space-between;color:#747b85;font-size:10px}.metric-icon{width:26px;height:26px;display:grid;place-items:center;border-radius:6px;font-size:14px}.red-icon{background:#fbeeee;color:#bb1919}.blue-icon{background:#edf3ff;color:#5378c5}.amber-icon{background:#fff5e8;color:#d39234}.green-icon{background:#eaf6ef;color:#3d9b67}.metric-value{margin-top:8px;color:#252a31;font:700 24px 'Source Sans 3',sans-serif;line-height:1}.metric-foot{margin-top:7px;color:#999fa7;font-size:9px}.metric-trend{margin-right:4px;color:#3b9b69;font-weight:700}.panel-card{margin-bottom:17px}.activity-card{padding:17px 18px 10px}.panel-heading{display:flex;align-items:flex-start;justify-content:space-between}.panel-heading h2{margin:0;color:#292e35;font:700 14px 'Source Sans 3',sans-serif}.panel-heading p{margin:4px 0 0;color:#8c929a;font-size:10px}.period-select{height:29px;padding:0 9px;border:1px solid var(--admin-line);border-radius:4px;background:white;color:#626973;font-size:9px}.period-select span{padding-left:14px}.chart-area{height:153px;display:flex;gap:14px;padding:17px 5px 0}.chart-y{width:32px;display:flex;flex-direction:column;justify-content:space-between;padding-bottom:19px;color:#a0a6ad;font-size:8px}.chart{position:relative;flex:1;display:grid;grid-template-columns:repeat(7,1fr);align-items:end;gap:clamp(9px,3vw,30px);background:repeating-linear-gradient(to bottom,transparent 0,transparent 31px,#eff0f2 32px)}.chart-column{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:7px}.chart-bar{width:min(34px,70%);min-height:9px;border-radius:4px 4px 0 0;background:#e8b8b8}.chart-bar.today{background:var(--admin-red)}.chart-column>span{height:15px;color:#8c929a;font-size:8px}.entries-card{padding:17px 18px 0}.entries-heading{align-items:center}.text-button{border:0;background:none;color:var(--admin-red);font-size:10px;font-weight:700;cursor:pointer}.text-button span{padding-left:5px}.table-tools{display:flex;gap:9px;align-items:center;margin:17px 0 13px}.table-search{height:32px;min-width:190px;display:flex;align-items:center;gap:7px;padding:0 9px;border:1px solid var(--admin-line);border-radius:4px;color:#89909a}.table-search span{font-size:17px}.table-search input{width:100%;height:28px;border:0;outline:0;font:10px 'Lato',sans-serif}.table-tools select{height:32px;max-width:205px;padding:0 9px;border:1px solid var(--admin-line);border-radius:4px;background:#fff;color:#68707a;font:10px 'Lato',sans-serif}.filter-button{height:32px;padding:0 10px;border:1px solid var(--admin-line);border-radius:4px;background:#fff;color:#69717a;font-size:12px}.filter-button span{font-size:10px}.table-scroll{overflow-x:auto}table{width:100%;border-collapse:collapse;text-align:left}thead{background:#f8f9fa}th{height:35px;color:#89909a;font:800 8px 'Source Sans 3',sans-serif;letter-spacing:.08em}th,td{padding:0 9px;border-bottom:1px solid #f0f1f3}td{height:58px;color:#555e68;font-size:9px}.check-col{width:31px}td input,th input{width:13px;height:13px;accent-color:var(--admin-red)}.entry-title{max-width:330px;color:#31363d;font-size:10px;font-weight:700;line-height:1.25}.entry-title small{display:block;margin-top:4px;color:#9ba1a8;font-size:8px;font-weight:400}.category-pill{display:inline-block;padding:5px 7px;border-radius:3px;background:#f8eded;color:#aa2929;font-size:8px;white-space:nowrap}.date-cell,.views-cell{white-space:nowrap;color:#78808a}.status-pill{display:inline-flex;align-items:center;gap:5px;padding:5px 7px;border-radius:14px;font-size:8px;white-space:nowrap}.status-pill i{width:5px;height:5px;border-radius:50%}.status-pill.published{background:#eaf6ef;color:#318454}.status-pill.published i{background:#3d9b67}.status-pill.draft{background:#f0f1f3;color:#6d747e}.status-pill.draft i{background:#9098a2}.status-pill.review{background:#fff5e8;color:#ad7724}.status-pill.review i{background:#d39234}.row-menu{width:23px;height:24px;border:0;background:transparent;color:#777f89;font-weight:bold;font-size:15px;cursor:pointer}.empty-table{text-align:center;color:#8b929a;padding:25px}.table-footer{height:48px;display:flex;align-items:center;justify-content:space-between;color:#8c929a;font-size:9px}.table-footer b{color:#515963}.table-footer>div{display:flex;gap:5px}.table-footer button{height:26px;padding:0 8px;border:1px solid var(--admin-line);border-radius:4px;background:#fff;color:#737b85;font-size:8px}.table-footer button:disabled{color:#b5bac0;background:#fafafa}.table-footer button.table-page{background:#bb1919;color:#fff;border-color:#bb1919}.editor-card{padding:22px}.editor-top{display:flex;justify-content:space-between;align-items:start;padding-bottom:18px;border-bottom:1px solid var(--admin-line)}.editor-top .eyebrow{color:var(--admin-red);font-size:8px}.editor-top h2{margin:5px 0;font:700 20px 'Source Sans 3',sans-serif}.editor-top p{margin:0;color:#858b94;font-size:10px}.editor-top p b{color:var(--admin-red)}.discard-button{height:30px;border-color:var(--admin-line);background:white;color:#69717a;font-size:10px}.editor-layout{display:grid;grid-template-columns:minmax(0,1.7fr) minmax(210px,1fr);gap:24px;padding:20px 0}.editor-fields{display:grid;gap:17px}.field-label{display:grid;gap:7px;color:#454c55;font-size:10px;font-weight:700}.field-label>b{display:none}.field-label input,.field-label textarea,.field-label select{width:100%;padding:10px 11px;border:1px solid #dfe2e6;border-radius:5px;background:white;color:#333;font:11px 'Lato',sans-serif;outline:none}.field-label input:focus,.field-label textarea:focus,.field-label select:focus{border-color:#c96666;box-shadow:0 0 0 2px #bb19190d}.field-label textarea{resize:vertical;line-height:1.55}.field-label small{justify-self:end;color:#979da5;font-size:8px;font-weight:400}.editor-settings{padding:14px;border:1px solid var(--admin-line);border-radius:6px;background:#fbfbfc}.editor-settings h3{margin:0 0 14px;font:700 12px 'Source Sans 3',sans-serif}.editor-settings .field-label{margin-bottom:18px}.image-placeholder{min-height:143px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;padding:12px;border:1px dashed #d6d9de;border-radius:5px;background:white;text-align:center}.image-placeholder>span{font-size:22px;color:#a7adb5}.image-placeholder b{font-size:10px}.image-placeholder small{max-width:170px;color:#9298a0;font-size:8px;line-height:1.4}.image-placeholder button{padding:6px 9px;border:1px solid #e0e2e5;border-radius:4px;background:#f8f8f9;color:#8c929a;font-size:8px}.editor-status{display:flex;align-items:flex-start;gap:8px;margin-top:15px;padding-top:14px;border-top:1px solid var(--admin-line)}.draft-dot{flex:0 0 7px;margin-top:3px;background:#d39234}.editor-status b,.editor-status small{display:block}.editor-status b{font-size:9px}.editor-status small{margin-top:4px;color:#9298a0;font-size:8px;line-height:1.4}.editor-actions{display:flex;justify-content:space-between;align-items:center;padding-top:15px;border-top:1px solid var(--admin-line)}.editor-actions>span{color:#9197a0;font-size:9px}.editor-actions>div{display:flex;gap:8px}.secondary-button{height:34px;border-color:#d9dce1;background:white;color:#535b65;font-size:10px}.editor-actions .primary-button{height:34px;font-size:10px}.toast{position:fixed;right:25px;bottom:22px;z-index:10;display:flex;align-items:center;gap:9px;padding:12px 17px;border-radius:6px;background:#252a31;color:#fff;box-shadow:0 8px 25px #0002;font-size:11px}.toast span{color:#70cf95;font-weight:800}
.sidebar{background:#1f2125;border-color:#34363a}.dash-brand{border-color:#393b3f}.brand-name{color:#fff}.brand-name small,.workspace-label{color:#a4a7ac}.side-nav button{color:#d2d3d5}.side-nav button:hover{background:#2d2f33;color:#fff}.side-nav button.active{background:#bb1919;color:#fff}.nav-count{background:#3a3c40;color:#fff}.private-note{background:#2b2d31}.private-note b,.profile b{color:#fff}.private-note small,.profile small{color:#b3b5b9}.lock-icon{background:#1f2125;border-color:#45474b;color:#fff}.back-site{color:#d0d1d3}.profile{border-color:#393b3f}.profile-avatar{background:#bb1919;color:#fff}.profile button{color:#d1d2d4}.dashboard{background:#f2f2f2}.topbar{border-color:#e2e2e2}.metric-card{border-top:2px solid #bb1919}.red-icon,.blue-icon,.amber-icon,.green-icon{background:#f7e8e8;color:#bb1919}.metric-trend{color:#bb1919}.chart-bar{background:#d6d6d6}.chart-bar.today{background:#bb1919}.category-pill{background:#bb1919;color:#fff}.status-pill.published{background:#bb1919;color:#fff}.status-pill.published i{background:#fff}.status-pill.draft{background:#333;color:#fff}.status-pill.draft i{background:#fff}.status-pill.review{background:#f7e8e8;color:#991818}.status-pill.review i{background:#bb1919}.page-heading h1,.metric-value,.panel-heading h2,.entry-title,.editor-top h2{color:#1f2125}.panel-card,.metric-card{border-color:#e3e3e3}.toast span{color:#fff}
@media(max-width:1100px){.dashboard{grid-template-columns:220px minmax(0,1fr)}.content-area{padding:27px 25px 38px}.topbar{padding:0 25px}.metrics-grid{gap:10px}.metric-card{padding:13px}.entry-title{max-width:250px}}
@media(max-width:820px){.dashboard{grid-template-columns:1fr}.sidebar{position:static;width:100%;height:auto;padding:12px 18px;border-right:0;border-bottom:1px solid var(--admin-line)}.dash-brand{padding:0;border:0}.brand-mark{width:34px;height:34px}.brand-name small,.workspace-label,.sidebar-bottom{display:none}.side-nav{display:flex;overflow-x:auto;gap:5px;margin-top:12px;padding-bottom:1px}.side-nav button{width:auto;flex:0 0 auto;height:35px;padding:0 10px;white-space:nowrap;font-size:10px}.nav-icon{width:auto}.dashboard-main{min-width:0}.topbar{height:50px;padding:0 18px}.mobile-brand{display:none}.content-area{padding:23px 18px 32px}.metrics-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.category-pill{max-width:120px;overflow:hidden;text-overflow:ellipsis}.online-label{font-size:10px}}
@media(max-width:560px){.sidebar{padding:10px 12px}.dash-brand{gap:8px}.brand-name{font-size:13px}.side-nav button{height:33px;padding:0 8px;font-size:9px}.side-nav{margin-top:9px}.content-area{padding:19px 12px 26px}.page-heading{align-items:flex-end;gap:10px}.page-heading h1{font-size:22px}.page-heading p{max-width:230px;font-size:9px;line-height:1.4}.page-heading>.primary-button{height:33px;padding:0 9px;white-space:nowrap;font-size:9px}.metrics-grid{gap:8px}.metric-card{min-height:98px;padding:11px}.metric-top{font-size:9px}.metric-value{font-size:21px}.metric-foot{font-size:8px}.activity-card,.entries-card{padding:13px 11px 0}.activity-card{padding-bottom:7px}.panel-heading h2{font-size:12px}.panel-heading p{font-size:9px}.period-select{font-size:8px;padding:0 6px}.chart-area{height:130px;padding-left:0;padding-right:0}.chart{gap:9px}.chart-bar{width:70%}.table-tools{flex-wrap:wrap}.table-search{flex:1;min-width:155px}.table-tools select{max-width:100%;flex:1}.filter-button{height:32px}.table-scroll table{min-width:690px}.entries-heading{align-items:start}.table-footer{font-size:8px}.table-footer button{padding:0 5px}.editor-card{padding:15px}.editor-top h2{font-size:17px}.editor-layout{grid-template-columns:1fr;gap:17px;padding:15px 0}.editor-actions{align-items:flex-start;gap:11px;flex-direction:column}.editor-actions>div{width:100%}.editor-actions button{flex:1}.editor-actions>span{font-size:8px}.toast{left:12px;right:12px;bottom:12px;justify-content:center}.topbar-right{gap:7px}}
.image-upload{display:grid;gap:7px}.upload-input{display:none}.image-preview{display:grid;grid-template-columns:88px 1fr;gap:11px;padding:8px;border:1px solid #e3e3e3;border-radius:5px;background:white}.image-preview>img{width:88px;height:88px;object-fit:cover;border-radius:3px}.image-preview>div{min-width:0;display:flex;flex-direction:column;align-items:flex-start;gap:5px}.image-preview b{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:9px}.image-preview small{color:#777;font-size:8px}.image-preview button,.image-placeholder button{border:1px solid #bb1919;border-radius:4px;padding:6px 9px;background:#bb1919;color:white;font-size:8px;cursor:pointer}.image-preview button.remove-image{border-color:#ddd;background:white;color:#555}.image-placeholder button:hover,.image-preview button:hover{background:#991818;color:#fff}.upload-error{margin:0;color:#bb1919;font-size:9px}.entry-cell{display:flex;align-items:center;gap:9px}.table-thumb{width:38px;height:38px;flex:0 0 38px;object-fit:cover;border-radius:4px}.entry-cell .entry-title{min-width:0}
.editor-workspace{max-width:1320px;margin:0 auto}.ad-alerts{margin-bottom:16px;padding:11px 14px;border:1px solid #efd0d0;border-left:3px solid #bb1919;border-radius:5px;background:#fff8f8;color:#514747;font-size:10px}.ad-alert-heading{display:flex;align-items:center;gap:8px;margin-bottom:7px;color:#352c2c}.ad-alert-icon{width:18px;height:18px;display:grid;place-items:center;border-radius:50%;background:#bb1919;color:white;font-weight:800}.ad-alert-row{display:flex;align-items:center;gap:7px;padding:3px 0 0 26px;color:#6b5c5c}.ad-alert-row>span:first-child{color:#bb1919}.ad-alert-row button,.editor-shortcuts button,.inline-link{border:0;background:none;color:#a91c1c;font-size:9px;text-decoration:underline;cursor:pointer}.editor-page-top{display:flex;justify-content:space-between;align-items:end;margin:0 0 16px}.editor-page-top h2{margin:0;color:#1f2125;font:700 25px 'Source Sans 3',sans-serif}.editor-shortcuts{display:flex;gap:14px}.editor-shortcuts button{font-size:10px}.editor-columns{display:grid;grid-template-columns:minmax(0,1fr) 315px;gap:17px;align-items:start}.editor-primary,.editor-rail{display:grid;gap:14px;min-width:0}.post-editor-card{position:relative;padding:19px 20px 0}.post-title-input{width:100%;height:47px;border:0;border-bottom:1px solid #e5e5e5;outline:0;color:#252a31;font:600 23px 'Source Sans 3',sans-serif}.post-title-input::placeholder{color:#a1a4a8}.post-title-input:focus{border-bottom-color:#bb1919}.title-counter{padding:6px 0 11px;text-align:right;color:#a0a4a9;font-size:8px}.post-editor-toolbar{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #e7e7e7}.media-button{height:34px;padding:0 10px;border:1px solid #d7dadd;border-radius:4px;background:#fff;color:#444;font-size:10px}.media-button span{padding-left:3px}.editor-mode{display:flex;align-self:stretch;gap:3px}.editor-mode button{padding:0 12px;border:0;border-bottom:2px solid transparent;background:transparent;color:#777;font-size:9px}.editor-mode button.selected{border-color:#bb1919;color:#bb1919;font-weight:700}.format-toolbar{height:37px;display:flex;align-items:center;gap:5px;border-bottom:1px solid #eee}.format-toolbar button{width:27px;height:25px;border:1px solid #e2e3e5;border-radius:3px;background:#fff;color:#50555b;font-size:10px}.format-toolbar label{margin-left:5px;color:#555;font-size:9px}.format-toolbar label span{padding-left:10px}.toolbar-spacer{flex:1}.body-textarea{width:100%;min-height:300px;padding:14px 0;border:0;outline:0;resize:vertical;color:#383838;font:13px/1.7 'Lato',Arial,sans-serif}.body-textarea::placeholder{color:#a0a2a6;white-space:pre-line}.body-textarea.code-mode{font:12px/1.6 Consolas,monospace;color:#333}.word-count{height:31px;display:flex;align-items:center;justify-content:flex-end;gap:4px;border-top:1px solid #eee;color:#92969b;font-size:8px}.word-count b{color:#555}.excerpt-panel{padding:15px 19px}.excerpt-panel h3,.wp-panel-title h3,.rail-panel h3{margin:0;color:#333;font:700 12px 'Source Sans 3',sans-serif}.excerpt-panel textarea{width:100%;margin:12px 0 4px;padding:9px;border:1px solid #dfe2e6;border-radius:4px;resize:vertical;font:10px 'Lato',sans-serif}.excerpt-panel small{color:#92969b;font-size:8px}.wp-panel{overflow:hidden}.wp-panel>summary{min-height:43px;display:flex;align-items:center;justify-content:space-between;padding:0 14px;list-style:none;cursor:pointer;color:#30343a;font:700 12px 'Source Sans 3',sans-serif}.wp-panel>summary::-webkit-details-marker{display:none}.wp-panel>summary:after{content:'⌄';color:#858b92;font-size:13px}.wp-panel[open]>summary:after{content:'⌃'}.panel-open-label{margin-left:auto;margin-right:12px;color:#9b2525;font:600 8px 'Lato',sans-serif}.seo-content,.rail-panel-content{display:grid;gap:12px;padding:13px 14px 16px;border-top:1px solid #ececec}.seo-content .field-label{gap:6px}.seo-content .field-label input,.seo-content .field-label textarea,.rail-panel-content input,.rail-panel-content select{width:100%;min-height:32px;padding:8px;border:1px solid #dfe2e6;border-radius:4px;font:10px 'Lato',sans-serif}.seo-content .field-label textarea{resize:vertical}.seo-content .inline-link{justify-self:start;padding:0}.google-preview{padding:11px;border:1px solid #e5e5e5;border-radius:4px;background:#fff}.google-preview>small{display:block;margin-bottom:10px;color:#848a92;font-size:8px}.google-url{color:#4c5962;font-size:8px}.google-title{margin:4px 0;color:#1a0dab;font:14px Arial,sans-serif}.google-description{color:#555;font:9px/1.5 Arial,sans-serif}.seo-unavailable{margin:0;color:#8a8f95;font-size:8px}.editor-rail>.panel-card{padding:0}.wp-panel-title{height:41px;display:flex;align-items:center;justify-content:space-between;padding:0 13px;border-bottom:1px solid #ededed}.wp-panel-title button{border:0;background:none;color:#7c8289}.publish-panel>.preview-button{margin:12px 13px 6px;padding:6px 9px;border:1px solid #dfe1e4;border-radius:4px;background:white;color:#565d65;font-size:8px}.publish-property{display:flex;align-items:center;gap:6px;padding:8px 13px;border-bottom:1px solid #f0f0f0;color:#687078;font-size:9px}.publish-property b{color:#31363d;font-weight:600}.publish-property button,.publish-property select{margin-left:auto;border:0;background:transparent;color:#a32323;font-size:9px}.publish-property select{max-width:150px;color:#454a50}.schedule-toggle{display:flex;align-items:center;gap:7px;padding:11px 13px 5px;color:#61676e;font-size:9px}.schedule-toggle input,.amp-toggle input,.category-checks input,.check-options input,.format-options input{accent-color:#bb1919}.schedule-field{margin:3px 13px 10px}.amp-toggle{display:flex;align-items:center;gap:7px;padding:8px 13px;color:#657078;font-size:9px}.amp-toggle label{display:flex;align-items:center;gap:5px}.amp-toggle b{color:#353a40;font-size:9px}.amp-toggle button{margin-left:auto;border:0;background:none;color:#a32323;font-size:9px}.draft-copy{margin:4px 13px 10px;padding:0;border:0;background:none;color:#a32323;font-size:9px;text-decoration:underline}.publish-actions{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:10px 13px;border-top:1px solid #e9e9e9;background:#fafafa}.publish-actions .primary-button,.publish-actions .secondary-button{height:30px;padding:0 9px;font-size:9px}.category-tabs{display:flex;gap:12px;padding:11px 13px 7px;border-bottom:1px solid #eee}.category-tabs button{padding:0;border:0;background:none;color:#858b92;font-size:8px}.category-tabs button.active{color:#a91c1c;font-weight:700}.category-checks{max-height:190px;display:grid;grid-template-columns:1fr 1fr;gap:9px 5px;overflow:auto;padding:12px 13px}.category-checks label,.check-options label,.format-options label{display:flex;align-items:center;gap:5px;color:#555d65;font-size:8px}.rail-panel>.inline-link{margin:0 13px 13px;padding:0}.rail-panel>.image-preview,.rail-panel>.image-placeholder{margin:12px}.rail-panel .image-placeholder{min-height:120px}.rail-panel .image-placeholder b{font-size:9px}.rail-panel .image-placeholder small{font-size:8px}.rail-panel .image-placeholder button{font-size:8px}.rail-panel>.upload-error{margin:-4px 13px 12px}.format-options,.check-options{display:grid;gap:9px}.editor-session-note{max-width:1320px;margin:12px auto 0;padding:10px 12px;border:1px solid #e7e7e7;border-radius:5px;background:white}.editor-session-note b{font-size:9px}.editor-session-note small{font-size:8px}.editor-page-top .breadcrumb{margin-bottom:5px}
@media(max-width:1050px){.editor-columns{grid-template-columns:minmax(0,1fr) 285px;gap:12px}.post-editor-card{padding-left:14px;padding-right:14px}.editor-page-top h2{font-size:22px}}
@media(max-width:820px){.editor-columns{grid-template-columns:1fr}.editor-rail{grid-template-columns:repeat(2,minmax(0,1fr));align-items:start}.publish-panel{grid-column:1/-1}.editor-page-top{align-items:start;gap:12px;flex-direction:column}.editor-shortcuts{align-self:flex-end}.editor-session-note{margin-bottom:4px}}
@media(max-width:560px){.ad-alerts{padding:9px;font-size:9px}.ad-alert-heading{align-items:flex-start}.ad-alert-row{padding-left:0;flex-wrap:wrap}.editor-page-top h2{font-size:21px}.post-editor-card{padding:12px 12px 0}.post-title-input{height:42px;font-size:18px}.editor-rail{grid-template-columns:1fr}.publish-panel{grid-column:auto}.panel-open-label{font-size:7px}.category-checks{grid-template-columns:repeat(2,minmax(0,1fr))}.editor-shortcuts{align-self:flex-start}.body-textarea{min-height:230px}.format-toolbar{gap:3px}.format-toolbar button{width:24px}.editor-page-top .breadcrumb{font-size:9px}}
.editor-tools-left{display:flex;align-items:center;gap:7px}.recortar-button{height:30px;padding:0 10px;border:1px solid #bb1919;border-radius:4px;background:#fff;color:#a51c1c;font-size:9px;font-weight:700;cursor:pointer}.recortar-button:hover:not(:disabled){background:#bb1919;color:#fff}.recortar-button:disabled{border-color:#e1e1e1;color:#aaa;cursor:not-allowed}.seo-auto-heading{display:flex;align-items:center;justify-content:space-between;gap:8px;color:#7d848c;font-size:8px}.seo-auto-heading .inline-link{white-space:nowrap}
.body-textarea.justified{text-align:justify;text-justify:inter-word}.format-toolbar button.active{border-color:#bb1919;background:#f8eaea;color:#a51c1c}
.insights-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px;margin-bottom:17px}.insight-card{min-width:0;padding:17px 18px}.insight-icon{width:27px;height:27px;display:grid;place-items:center;border-radius:6px;background:#f8eaea;color:#bb1919;font-size:17px}.location-list{display:grid;gap:13px;margin-top:17px}.location-info{display:flex;justify-content:space-between;gap:12px;margin-bottom:6px;color:#555d65;font-size:9px}.location-info b{color:#262a30}.location-track,.read-track{height:5px;overflow:hidden;border-radius:4px;background:#eee}.location-track span,.read-track span{height:100%;display:block;border-radius:4px;background:#bb1919}.insight-footnote{margin:14px 0 0;color:#92979e;font-size:8px}.live-badge{display:inline-flex;align-items:center;gap:5px;padding:5px 7px;border-radius:12px;background:#f8eaea;color:#a61c1c;font-size:8px;font-weight:800;letter-spacing:.05em}.live-badge i,.live-caption-dot{width:6px;height:6px;border-radius:50%;background:#bb1919}.live-badge i{animation:livePulse 1.6s infinite}@keyframes livePulse{50%{box-shadow:0 0 0 4px #bb191933}}.live-total{display:flex;align-items:baseline;gap:9px;padding:11px 0 12px;border-bottom:1px solid #eee}.live-total b{color:#bb1919;font:700 31px 'Source Sans 3',sans-serif}.live-total span{color:#777f87;font-size:9px}.reader-list{display:grid}.reader-row{display:flex;align-items:center;gap:9px;padding:10px 0;border-bottom:1px solid #f0f0f0}.reader-avatar{width:25px;height:25px;flex:0 0 25px;display:grid;place-items:center;border-radius:50%;background:#f6e9e9;color:#bb1919;font-size:11px}.reader-row>div{min-width:0}.reader-row b,.reader-row small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.reader-row b{color:#3d4248;font-size:9px}.reader-row small{margin-top:3px;color:#8b9198;font-size:8px}.most-read-card{padding:17px 18px 5px}.most-read-card .panel-heading{align-items:center;margin-bottom:10px}.most-read-card .eyebrow{color:#bb1919}.most-read-list{display:grid}.most-read-row{display:grid;grid-template-columns:28px minmax(0,1fr) 65px;align-items:center;gap:11px;padding:11px 3px;border-top:1px solid #eee}.rank-number{color:#bb1919;font:700 17px 'Source Sans 3',sans-serif}.most-read-title{min-width:0}.most-read-title>b{display:block;overflow:hidden;color:#32373d;font-size:10px;text-overflow:ellipsis;white-space:nowrap}.most-read-title>small{display:block;margin:3px 0 7px;color:#878d95;font-size:8px}.most-read-row>strong{color:#262a30;text-align:right;font-size:10px}.most-read-row>strong small{display:block;margin-top:3px;color:#969ba2;font-size:8px;font-weight:400}.read-track{height:4px}.read-track span{background:#bb1919}.live-caption-dot{display:inline-block;margin-right:4px;vertical-align:middle}
.metric-trend-down{color:#666}.period-select{min-width:125px;padding:0 8px}
@media(max-width:820px){.insights-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:560px){.insights-grid{grid-template-columns:1fr;gap:10px}.insight-card{padding:13px}.most-read-card{padding:13px}.most-read-title>b{white-space:normal;line-height:1.4}.most-read-row{grid-template-columns:23px minmax(0,1fr) 54px;gap:7px}.live-total b{font-size:27px}}
.publish-progress{padding:12px 13px;border-bottom:1px solid #f0f0f0}.publish-progress-heading{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;color:#4f555d;font-size:9px}.publish-progress-heading b{font-weight:700}.publish-progress-heading>span{color:#a32323;font-weight:800}.publish-progress-track{height:6px;overflow:hidden;border-radius:6px;background:#f0e5e5}.publish-progress-track>span{height:100%;display:block;border-radius:inherit;background:#bb1919;transition:width .25s ease}.publish-progress.ready .publish-progress-heading>span{color:#278454}.publish-progress.ready .publish-progress-track>span{background:#278454}.publish-checklist{display:grid;grid-template-columns:1fr 1fr;gap:7px 8px;margin:10px 0 0;padding:0;list-style:none}.publish-checklist li{display:flex;align-items:center;gap:5px;color:#92979e;font-size:8px;line-height:1.3}.publish-checklist li>span{color:#bb1919;font-size:10px}.publish-checklist li.complete{color:#4e775e}.publish-checklist li.complete>span{color:#278454}.publish-missing{margin:0 13px 10px;padding:9px 10px;border:1px solid #efd0d0;border-radius:4px;background:#fff8f8;color:#823333;font-size:9px;line-height:1.5}.publish-missing b{font-weight:700}.publish-missing ul{margin:4px 0 0;padding-left:16px}.publish-ready-message{margin:0 13px 10px;color:#278454;font-size:9px;line-height:1.5}.required-indicator{color:#bb1919}.publish-requirement{margin:0;padding:0 13px 10px;color:#a51c1c;font-size:8px;line-height:1.4}
.publish-attention{position:relative;isolation:isolate;border-color:transparent!important}.publish-attention::before{position:absolute;z-index:1;inset:0;padding:2px;border-radius:inherit;background:conic-gradient(from var(--publish-border-angle),#bb1919 0 25%,#181818 38%,#bb1919 50% 75%,#181818 88%,#bb1919);content:"";pointer-events:none;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;animation:publish-border-spin 2.2s linear infinite}@property --publish-border-angle{syntax:"<angle>";inherits:false;initial-value:0deg}@keyframes publish-border-spin{to{--publish-border-angle:360deg}}.schedule-field.publish-attention{padding:8px;border-radius:5px}.post-title-input.publish-attention,.excerpt-panel.publish-attention{border:2px solid #bb1919;border-radius:5px;animation:publish-border-pulse 1s ease-in-out infinite alternate}@keyframes publish-border-pulse{to{border-color:#181818;box-shadow:0 0 0 3px #bb191933}}@media(prefers-reduced-motion:reduce){.publish-attention::before,.post-title-input.publish-attention,.excerpt-panel.publish-attention{animation:none}}
.action-cell{width:44px}.entry-action-wrap{position:relative;display:flex;justify-content:flex-end}.entry-action-menu{position:absolute;z-index:8;top:27px;right:0;width:152px;display:grid;gap:2px;padding:5px;border:1px solid #e2e3e6;border-radius:5px;background:#fff;box-shadow:0 8px 22px #20283220}.entry-action-menu button{height:31px;display:flex;align-items:center;gap:8px;padding:0 8px;border:0;border-radius:3px;background:transparent;color:#444b53;text-align:left;font-size:9px;cursor:pointer}.entry-action-menu button:hover{background:#f5f5f5;color:#a51c1c}.entry-action-menu button.entry-delete-action{color:#a51c1c}.entry-action-menu button.entry-delete-action:hover{background:#fff1f1}
</style>
