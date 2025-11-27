export const metadata: Metadata = {
  title: "Digitrix Solutions | Digital Marketing & Web Development Agency",
  description:
    "Digitrix Solutions offers digital marketing, website development, branding, social media management, and strategic growth solutions for businesses.",
  keywords: [
    "digital marketing",
    "web development",
    "branding",
    "social media",
    "performance marketing",
    "Digitrix Solutions",
  ],
  openGraph: {
    title: "Digitrix Solutions",
    description:
      "Digital marketing, web development, branding, and growth services.",
    url: "https://digitrixsolutions.in",
    siteName: "Digitrix Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Digitrix Solutions Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}

        {/* --- Structured Data (Schema.org) --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Digitrix Solutions",
              url: "https://digitrixsolutions.in",
              logo: "https://digitrixsolutions.in/logo.png",
              sameAs: [
                "https://www.instagram.com/digitrixsolutions",
                "https://www.linkedin.com/company/digitrixsolutions",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
