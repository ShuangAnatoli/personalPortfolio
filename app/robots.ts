// import { baseUrl } from 'app/sitemap'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `https://portfolio-blog-starter.vercel.app/sitemap.xml`,
  }
}
