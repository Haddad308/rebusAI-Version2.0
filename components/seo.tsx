import Head from "next/head"

interface SEOProps {
  title: string
  description: string
  canonicalUrl?: string
  ogImage?: string
  article?: {
    publishedTime: string
    modifiedTime?: string
    author: string
    section: string
    tags: string[]
  }
}

export default function SEO({ title, description, canonicalUrl, ogImage, article }: SEOProps) {
  const siteTitle = "RebusAI"
  const fullTitle = `${title} | ${siteTitle}`
  const defaultOgImage = "/logo-rebus.webp"

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
      
      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          <meta property="article:author" content={article.author} />
          <meta property="article:section" content={article.section} />
          {article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": article ? "BlogPosting" : "WebPage",
            headline: title,
            description: description,
            image: ogImage || defaultOgImage,
            ...(canonicalUrl && { url: canonicalUrl }),
            ...(article && {
              datePublished: article.publishedTime,
              dateModified: article.modifiedTime || article.publishedTime,
              author: {
                "@type": "Person",
                name: article.author,
              },
              publisher: {
                "@type": "Organization",
                name: siteTitle,
                logo: {
                  "@type": "ImageObject",
                  url: defaultOgImage,
                },
              },
              keywords: article.tags.join(", "),
            }),
          }),
        }}
      />
    </Head>
  )
}
