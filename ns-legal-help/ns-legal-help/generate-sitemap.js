const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://nslegalhelp.com' });

  sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });
  sitemap.write({ url: '/about-us', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/private-limited-company', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/limited-liabilty-partnership', changefreq: 'monthly', priority: 0.8 });
  // Add more routes as needed

  sitemap.end();

  const data = await streamToPromise(sitemap);
  createWriteStream('./public/sitemap.xml').write(data.toString());
})();
