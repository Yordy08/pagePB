export default defineNuxtConfig({
  compatibilityDate: '2025-04-15',
  devtools: { enabled: true },
  css: ['~/assets/css/theme.css'],
  devServer: {
    host: '127.0.0.1',
    port: 4517
  },
  vite: {
    server: {
      strictPort: true
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'Burbuja Política | Sabemos de política',
      meta: [
        { name: 'description', content: 'Noticias, análisis y actualidad política de Córdoba, Colombia y el mundo.' },
        { name: 'theme-color', content: '#111827' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Source+Sans+3:wght@400;600;700;800&display=swap' }
      ]
    }
  }
})
