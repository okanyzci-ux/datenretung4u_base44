Deno.serve(async (req) => {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://datenrettung4u.at/sitemap.xml

# Crawl-delay
Crawl-delay: 0

# Disallow admin/backend pages (if any)
Disallow: /admin/
Disallow: /api/`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400'
    }
  });
});