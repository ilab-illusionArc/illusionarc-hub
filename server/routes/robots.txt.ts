export default defineEventHandler((event) => {
  const host = (getRequestHeader(event, 'host') || '').split(':')[0]

  // Default allow
  let body = `User-agent: *
Allow: /
`

  // On the main domain, tell crawlers not to index the internal subpaths
  if (host === 'iforge.illusionarc.com' || host === 'www.iforge.illusionarc.com') {
    body = `User-agent: *
Disallow: /ilab
Disallow: /itoon
Disallow: /ispark
`
  }

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return body
})
