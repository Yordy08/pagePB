export default defineNuxtRouteMiddleware((to) => {
  const session = useCookie('bp-admin-demo-session')
  const role = useCookie<'admin' | 'revision' | null>('bp-admin-demo-role')
  const path = to.path.replace(/\/+$/, '')
  const hasSession = session.value === 'admin-demo'
  const canOpenDashboard = role.value === 'admin'
  const canOpenRevision = role.value === 'admin' || role.value === 'revision'

  if (!hasSession || (path === '/dasbuard' && !canOpenDashboard) || (path === '/revision' && !canOpenRevision)) {
    return navigateTo({ path: '/login', query: { next: to.fullPath } })
  }
})
