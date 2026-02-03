export default defineNuxtPlugin(() => {
  // Allow easy local testing without real subdomains:
  // NUXT_PUBLIC_TENANT=ilab pnpm dev
  const cfg = useRuntimeConfig()
  const override = String(cfg.public.tenantOverride || '').trim()

  let host = ''
  if (process.server) {
    host = String(useRequestHeaders(['host']).host || '')
  } else {
    host = window.location.host
  }

  const cleanHost = host.split(':')[0] // remove port
  const sub = cleanHost.split('.')[0]  // ilab / itoon / ispark / localhost

  const tenant =
    override ||
    (['ilab', 'itoon', 'ispark'].includes(sub) ? sub : 'main')

  return {
    provide: {
      tenant,
      host: cleanHost
    }
  }
})
