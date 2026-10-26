export function useSiteTheme() {
  const theme = useState<'day' | 'night'>('bp-site-theme', () => 'day')
  const nightStyles = `
    .night-mode { --ink:#e4e5e7; --muted:#a1a6ad; --paper:#202226; --line:#3c3f44; --soft:#292c30; min-height:100vh; background:#202226 !important; color:#e4e5e7; }
    .night-mode .masthead,.night-mode .category-list .news-card,.night-mode .category-brief,.night-mode .article-share button,.night-mode .related-card,.night-mode .recommended-card,.night-mode .sidebar-widget,.night-mode .info-sidebar,.night-mode .contact-form-card { background:#292c30 !important; border-color:#41444a !important; color:#e3e4e6; }
    .night-mode .topline { background:#101113; }
    .night-mode .nav,.night-mode .opinion-card,.night-mode .card-image { background:#24262a; border-color:#41444a; }
    .night-mode .search-panel,.night-mode .region-section { background:#292c30 !important; border-color:#41444a; }
    .night-mode .section-heading,.night-mode .region-item,.night-mode .category-rule,.night-mode .brief-item,.night-mode .article-related,.night-mode .recommended-section { border-color:#41444a; }
    .night-mode .section-heading h2,.night-mode .card-copy h3,.night-mode .region-item h3,.night-mode .opinion-card h3,.night-mode .category-heading h1,.night-mode .category-list .section-heading h2,.night-mode .article-header h1,.night-mode .article-body h2,.night-mode .info-hero h1,.night-mode .info-section h2 { color:#f2f2f2 !important; }
    .night-mode .card-excerpt,.night-mode .region-excerpt,.night-mode .category-heading p,.night-mode .category-list .card-copy p,.night-mode .brief-item h3,.night-mode .article-body,.night-mode .article-deck,.night-mode .info-hero p,.night-mode .info-section p,.night-mode .info-section ul { color:#d0d2d5 !important; }
    .night-mode footer { background:#101113 !important; }
    .night-mode .footer-bottom { background:#090a0b !important; }
    .night-mode .theme-toggle { background:#303338; border-color:#595c62; color:#fff; }
    .night-mode .dashboard { background:#1c1e22 !important; color:#e4e5e7; }
    .night-mode .dashboard .topbar,.night-mode .dashboard .metric-card,.night-mode .dashboard .panel-card { background:#292c30 !important; border-color:#41444a !important; color:#e3e4e6; }
    .night-mode .dashboard .page-heading h1,.night-mode .dashboard .metric-value,.night-mode .dashboard .panel-heading h2,.night-mode .dashboard .entry-title,.night-mode .dashboard .editor-top h2 { color:#f3f3f3 !important; }
    .night-mode .dashboard .metric-top,.night-mode .dashboard .metric-foot,.night-mode .dashboard .panel-heading p,.night-mode .dashboard td,.night-mode .dashboard .date-cell,.night-mode .dashboard .views-cell { color:#b9bec4; }
    .night-mode .dashboard thead,.night-mode .dashboard .editor-settings,.night-mode .dashboard .publish-actions { background:#222428 !important; }
    .night-mode .dashboard th,.night-mode .dashboard td,.night-mode .dashboard .editor-top,.night-mode .dashboard .editor-actions { border-color:#41444a; }
    .night-mode .dashboard .field-label,.night-mode .dashboard .editor-settings h3 { color:#e1e2e4; }
    .night-mode .dashboard input,.night-mode .dashboard textarea,.night-mode .dashboard select { background:#1d1f23; border-color:#50535a; color:#eee; }
    .night-mode .revision-page { background:#202226 !important; color:#e5e5e7; }
    .night-mode .revision-topbar { background:#17191d !important; border-color:#3b3e43; }
    .night-mode .revision-brand b,.night-mode .revision-heading h1,.night-mode .revision-card-content h2 { color:#f2f2f2 !important; }
    .night-mode .revision-brand small,.night-mode .revision-date,.night-mode .revision-heading p,.night-mode .revision-card-content p,.night-mode .revision-card-author { color:#b8bdc3; }
    .night-mode .revision-card,.night-mode .revision-empty { background:#292c30 !important; border-color:#44474d !important; }
    .night-mode .revision-card-top,.night-mode .revision-card-footer,.night-mode .edit-modal,.night-mode .modal-header,.night-mode .modal-footer { background:#24262a !important; border-color:#41444a !important; }
    .night-mode .revision-label,.night-mode .modal-header h2 { color:#f0f0f0; }
    .night-mode .revision-label textarea,.night-mode .revision-label select { background:#1e2024 !important; border-color:#4c4f55; color:#eee; }
  `

  function applyTheme(value: 'day' | 'night') {
    theme.value = value
    if (import.meta.client) {
      document.documentElement.dataset.theme = value
      localStorage.setItem('bp-site-theme', value)
      let style = document.getElementById('bp-night-theme-styles') as HTMLStyleElement | null
      if (value === 'night') {
        if (!style) {
          style = document.createElement('style')
          style.id = 'bp-night-theme-styles'
          document.head.appendChild(style)
        }
        style.textContent = nightStyles
      } else {
        style?.remove()
        document.body.style.removeProperty('background')
        document.body.style.removeProperty('color')
        document.documentElement.style.removeProperty('background')
      }
    }
  }

  function toggleTheme() {
    applyTheme(theme.value === 'day' ? 'night' : 'day')
  }

  if (import.meta.client) {
    onMounted(() => {
      const saved = localStorage.getItem('bp-site-theme')
      const value = saved === 'night' ? 'night' : theme.value
      applyTheme(value)
    })
  }

  return { theme, toggleTheme }
}
