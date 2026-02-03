export function useTenantSeo() {
  const route = useRoute()
  const { $tenant } = useNuxtApp() as any

  const base = computed(() => {
    if ($tenant === 'ilab') return 'https://ilab.illusionarc.com'
    if ($tenant === 'itoon') return 'https://itoon.illusionarc.com'
    if ($tenant === 'ispark') return 'https://ispark.illusionarc.com'
    return 'https://iforge.illusionarc.com'
  })

  const prefix = computed(() => {
    if ($tenant === 'ilab') return '/ilab'
    if ($tenant === 'itoon') return '/itoon'
    if ($tenant === 'ispark') return '/ispark'
    return ''
  })

  // Internal route includes /ilab/... but public URL on ilab subdomain should be /...
  const publicPath = computed(() => {
    const p = route.fullPath || '/'
    const pre = prefix.value
    if (pre && p.startsWith(pre)) {
      const stripped = p.slice(pre.length)
      return stripped.length ? stripped : '/'
    }
    return p
  })

  const canonical = computed(() => base.value + publicPath.value)

  return { canonical, base, publicPath }
}
