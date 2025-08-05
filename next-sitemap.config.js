module.exports={
        siteUrl: 'https://anantachakra.tech', // Replace with your domain
        generateRobotsTxt: true, // Generates robots.txt automatically
        sitemapSize: 7000, // Split large sitemaps (optional)
        changefreq: 'weekly',
        priority: 0.7,
        exclude: [ '/server-sitemap.xml' ], // Example: Exclude API routes
        robotsTxtOptions: {
                policies: [
                        {
                                userAgent: '*',
                                allow: '/',
                                disallow: [ '/api/' ], // Block API routes from crawling
                        },
                ],
        },
};