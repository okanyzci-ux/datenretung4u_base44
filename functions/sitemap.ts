Deno.serve(async (req) => {
  const baseUrl = 'https://datenrettung4u.at';
  const today = new Date().toISOString().split('T')[0];

  const pages = [
    // Main pages
    { url: '', priority: '1.0', changefreq: 'daily', lastmod: today },
    { url: '/datenrettung', priority: '1.0', changefreq: 'weekly', lastmod: today },
    { url: '/leistungen', priority: '0.9', changefreq: 'weekly', lastmod: today },
    { url: '/preise', priority: '0.9', changefreq: 'weekly', lastmod: today },
    { url: '/ratgeber', priority: '0.9', changefreq: 'daily', lastmod: today },
    { url: '/ueber-uns', priority: '0.8', changefreq: 'monthly', lastmod: today },
    { url: '/kontakt', priority: '0.9', changefreq: 'monthly', lastmod: today },
    
    // Service pages
    { url: '/iphone-datenrettung', priority: '0.9', changefreq: 'weekly', lastmod: today },
    { url: '/samsung-datenrettung', priority: '0.9', changefreq: 'weekly', lastmod: today },
    { url: '/android-datenrettung', priority: '0.8', changefreq: 'weekly', lastmod: today },
    { url: '/handy-wasserschaden-datenrettung', priority: '0.9', changefreq: 'weekly', lastmod: today },
    { url: '/handy-display-defekt-datenwichtig', priority: '0.8', changefreq: 'weekly', lastmod: today },
    { url: '/platinenschaden-datenrettung', priority: '0.9', changefreq: 'weekly', lastmod: today },
    { url: '/android-bootloop-startet-nicht', priority: '0.8', changefreq: 'weekly', lastmod: today },
    { url: '/wasserschaden-datenrettung', priority: '0.9', changefreq: 'weekly', lastmod: today },
    { url: '/display-schaden-datenrettung', priority: '0.8', changefreq: 'weekly', lastmod: today },
    
    // City pages
    { url: '/handy-daten-rettung-linz', priority: '0.9', changefreq: 'weekly', lastmod: today },
    { url: '/handy-daten-rettung-wien', priority: '0.9', changefreq: 'weekly', lastmod: today },
    { url: '/handy-daten-rettung-graz', priority: '0.9', changefreq: 'weekly', lastmod: today },
    { url: '/handy-daten-rettung-salzburg', priority: '0.9', changefreq: 'weekly', lastmod: today },
    { url: '/handy-daten-rettung-innsbruck', priority: '0.9', changefreq: 'weekly', lastmod: today },
    
    // Ratgeber/Blog pages
    { url: '/geloeschte-daten-wiederherstellen', priority: '0.8', changefreq: 'weekly', lastmod: today },
    { url: '/geloeschte-fotos-wiederherstellen', priority: '0.8', changefreq: 'weekly', lastmod: today },
    { url: '/handy-startet-nicht', priority: '0.8', changefreq: 'weekly', lastmod: today },
    { url: '/iphone-vs-samsung-datenrettung', priority: '0.8', changefreq: 'weekly', lastmod: today },
    
    // Legal pages
    { url: '/impressum', priority: '0.3', changefreq: 'yearly', lastmod: today },
    { url: '/datenschutz', priority: '0.3', changefreq: 'yearly', lastmod: today }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
});