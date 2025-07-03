import { Helmet } from "react-helmet";

const SeoMeta = ({ title, description }) => {
  const logoUrl = "https://pca.pincodeads.com/logo.png"; // ✅ Change if hosted elsewhere
  const siteUrl = "https://pca.pincodeads.com";
  const social = {
    facebook: "https://facebook.com/pincodeads",
    twitter: "https://twitter.com/pincodeads",
    instagram: "https://instagram.com/pincodeads",
    linkedin: "https://linkedin.com/company/pincodeads"
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logoUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logoUrl} />

      {/* Structured Data: Organization */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "PincodeAds",
          "url": "${siteUrl}",
          "logo": "${logoUrl}",
          "sameAs": [
            "${social.facebook}",
            "${social.twitter}",
            "${social.instagram}",
            "${social.linkedin}"
          ]
        }
      `}</script>

      {/* Structured Data: WebSite + Search Action */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "PincodeAds",
          "url": "${siteUrl}",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "${siteUrl}/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      `}</script>
    </Helmet>
  );
};

export default SeoMeta;
