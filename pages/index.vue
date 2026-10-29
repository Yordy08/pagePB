<script setup lang="ts">
const stories = [
  { category: 'POLÍTICA NACIÓN', title: 'Gobierno anuncia nuevas becas de tecnología y apoyo para emprendedores', summary: 'Las medidas buscan ampliar la formación tecnológica, impulsar el empleo y respaldar nuevos proyectos productivos.', image: 'https://burbujapolitica.com/wp-content/uploads/2026/10/5116624690855218518_121-1024x576.jpg', date: '26 oct 2026' },
  { category: 'POLÍTICA REGIÓN', title: 'Dos integrantes de agrupación vallenata fallecen en siniestro vial', summary: 'La noticia enluta al folclor vallenato y a las comunidades de la región.', image: 'https://burbujapolitica.com/wp-content/uploads/2026/10/Web-47_5-1024x576.jpg', date: '26 oct 2026' },
  { category: 'CÓRDOBA', title: 'Avanza la etapa final del acueducto regional del San Jorge', summary: 'Las pruebas del sistema avanzan hacia la puesta en marcha para varios municipios cordobeses.', image: 'https://burbujapolitica.com/wp-content/uploads/2026/10/image_2026-10-26_07-55-49-1024x768.jpg', date: '26 oct 2026' },
  { category: 'ACTUALIDAD', title: 'Montería le apuesta a la energía solar para reducir el gasto eléctrico', summary: 'La iniciativa busca reducir costos de energía en sedes públicas y avanzar en sostenibilidad.', image: 'https://burbujapolitica.com/wp-content/uploads/2026/10/photo_2026-10-22_23-08-38-1024x689.jpg', date: '22 oct 2026' },
  { category: 'OPINIÓN', title: 'La seguridad nacional no puede estar por encima de la Constitución', summary: 'Una reflexión sobre el equilibrio entre las políticas de seguridad y las garantías constitucionales.', image: 'https://burbujapolitica.com/wp-content/uploads/2026/10/opinion-1-1024x576.jpg', date: '8 oct 2026' },
  { category: 'COMUNIDAD', title: 'Una comunidad cordobesa se reúne para rendir homenaje a su patrullera', summary: 'Habitantes y familiares se reunieron en un acto de reconocimiento, memoria y gratitud.', image: 'https://burbujapolitica.com/wp-content/uploads/2026/10/Web-45_5-1024x576.jpg', date: '26 oct 2026' }
]
const mostReadStories = [stories[0], stories[1], stories[2], stories[5], stories[3]]
const politicalStories = [stories[0], stories[1], stories[2], stories[4], stories[3]]
const searchTerm = useState('bp-search', () => '')
const sessionPublications = useState<Array<{ id: number; title: string; category: string; date: string; image?: string; summary?: string }>>('bp-demo-published', () => [])
const visibleStories = computed(() => [
  ...sessionPublications.value.map(post => ({ ...post, category: post.category.toUpperCase(), image: post.image || stories[0].image })),
  ...stories
])
const leadStory = computed(() => visibleStories.value[0])
const activeTab = ref('Recientes')
const filteredStories = computed(() => visibleStories.value.filter(story => story.title.toLowerCase().includes(searchTerm.value.toLowerCase())))
const articleSlug = (title: string) => title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const articleLink = (story: { title: string; category: string; image?: string; date?: string; summary?: string; body?: string | string[] }) => ({
  path: `/noticia/${articleSlug(story.title)}/`,
  query: { title: story.title, category: story.category, image: story.image || '', date: story.date || '', summary: story.summary || '', body: Array.isArray(story.body) ? JSON.stringify(story.body) : story.body || '' }
})
</script>

<template>
  <div class="home-layout">
    <aside class="home-news-rail most-read-rail" aria-label="Noticias más leídas"><h2>Top 5 más leídas</h2><NuxtLink v-for="(story, index) in mostReadStories" :key="story.title" :to="articleLink(story)" class="rail-news-card"><span class="rail-rank">0{{ index + 1 }}</span><img :src="story.image" :alt="story.title" loading="lazy"><span class="tag">{{ story.category }}</span><b>{{ story.title }}</b></NuxtLink></aside>
  <main class="wrap main-content">
    <div class="flash"><strong><span class="live-dot"></span> EN DESARROLLO</strong><div class="ticker"><span>Lo que pasa en Córdoba y Colombia, contado con contexto. &nbsp; • &nbsp; Información, análisis y voces del territorio. &nbsp; • &nbsp; Sigue conectado con la actualidad.</span></div></div>
    <section class="lead-grid">
      <NuxtLink :to="articleLink(leadStory)" class="lead-story"><img :src="leadStory.image" alt="Noticia destacada"><div class="lead-shade"></div><div class="lead-copy"><span class="tag">{{ leadStory.category }}</span><h1>{{ leadStory.title }}</h1><p>{{ leadStory.summary || 'Conoce los anuncios y las decisiones que están marcando la agenda.' }}</p><span class="story-date">{{ leadStory.date }} <b>·</b> 5 min de lectura</span></div></NuxtLink>
      <div class="side-leads"><NuxtLink v-for="story in visibleStories.slice(1, 3)" :key="story.title" :to="articleLink(story)" class="side-story"><img :src="story.image" :alt="story.title"><div class="side-shade"></div><div class="side-copy"><span class="tag">{{ story.category }}</span><h2>{{ story.title }}</h2><p class="side-excerpt">{{ story.summary }}</p><span class="story-date">{{ story.date }}</span></div></NuxtLink></div>
    </section>
    <section id="noticias" class="latest section-space"><div class="section-heading"><div><span class="eyebrow">LA AGENDA DEL DÍA</span><h2>Últimas noticias</h2></div><NuxtLink to="/category/politica-nacion/" class="more-link">Ver todas las noticias <span>→</span></NuxtLink></div>
      <div v-if="filteredStories.length" class="news-grid"><NuxtLink v-for="story in filteredStories" :key="story.title" :to="articleLink(story)" class="news-card"><div class="card-image"><img :src="story.image" :alt="story.title" loading="lazy"><span class="tag">{{ story.category }}</span></div><div class="card-copy"><h3>{{ story.title }}</h3><p class="card-excerpt">{{ story.summary }}</p><p class="story-date">{{ story.date }} <b>·</b> Redacción</p></div></NuxtLink></div><p v-else class="empty-state">No encontramos noticias que coincidan con “{{ searchTerm }}”.</p>
    </section>
    <section id="secciones" class="section-space region-section"><div class="section-heading"><div><span class="eyebrow">INFORMACIÓN CERCANA</span><h2>Desde el territorio</h2></div><NuxtLink to="/category/politica-cordoba/" class="more-link">Política Córdoba <span>→</span></NuxtLink></div><div class="region-grid"><NuxtLink :to="articleLink(stories[3])" class="region-feature"><img :src="stories[3].image" :alt="stories[3].title"><div><span class="tag">{{ stories[3].category }}</span><h3>{{ stories[3].title }}</h3><p>{{ stories[3].summary }}</p></div></NuxtLink><div class="region-list"><NuxtLink v-for="story in [stories[2], stories[1], stories[5]]" :key="story.title" :to="articleLink(story)" class="region-item"><img :src="story.image" :alt="story.title" loading="lazy"><div><span class="tag">{{ story.category }}</span><h3>{{ story.title }}</h3><p class="region-excerpt">{{ story.summary }}</p><span class="story-date">{{ story.date }}</span></div></NuxtLink></div></div></section>
     <section class="opinion section-space"><div class="section-heading"><div><span class="eyebrow">VOCES Y PERSPECTIVAS</span><h2>Opinión</h2></div><div class="tabs"><button v-for="tab in ['Recientes', 'Destacados']" :key="tab" :class="{ selected: activeTab === tab }" @click="activeTab = tab">{{ tab }}</button></div></div><div class="opinion-grid"><NuxtLink v-for="story in stories.filter(item => item.category === 'OPINIÓN')" :key="story.title" :to="articleLink(story)" class="opinion-card"><img class="opinion-image" :src="story.image" :alt="story.title" loading="lazy"><span class="opinion-mark">“</span><span class="tag">{{ story.category }}</span><h3>{{ story.title }}</h3><p class="opinion-excerpt">{{ story.summary }}</p><div class="byline"><span class="avatar">BP</span><span><b>Redacción Burbuja</b><small>{{ activeTab === 'Recientes' ? story.date : 'Columna destacada' }}</small></span></div></NuxtLink></div></section>
     <section class="about-band"><div class="about-logo">BP</div><div><span class="eyebrow">SOBRE NOSOTROS</span><h2>Sabemos de Política</h2><p>Burbuja Política es un medio digital especializado en política, entendiendo que muchos de los temas que gravitan sobre el desarrollo de los territorios pasan por la ejecución de programas y proyectos políticos. Hacer visible acciones gubernamentales y de la sociedad civil hacen parte de nuestro norte informativo.</p></div><NuxtLink to="/quienes-somos/">Conócenos <span>→</span></NuxtLink></section>
  </main>
    <aside class="home-news-rail politics-rail" aria-label="Ámbito político"><h2>Ámbito político</h2><NuxtLink v-for="story in politicalStories" :key="story.title" :to="articleLink(story)" class="rail-news-card"><img :src="story.image" :alt="story.title" loading="lazy"><span class="tag">{{ story.category }}</span><b>{{ story.title }}</b></NuxtLink></aside>
  </div>
</template>
