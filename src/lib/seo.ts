import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.zhbsolutions.com";

export const SITE_METADATA: Metadata = {
  title: "ZHB Solutions — Digital Products & Cloud Services",
  description:
    "ZHB Solutions builds scalable web, mobile, and cloud products. We design, develop, and operate modern digital experiences.",
  keywords: ["ZHB", "digital agency", "web development", "mobile apps", "cloud"],
  openGraph: {
    title: "ZHB Solutions — Digital Products & Cloud Services",
    description:
      "ZHB Solutions builds scalable web, mobile, and cloud products. We design, develop, and operate modern digital experiences.",
    url: SITE_URL,
    siteName: "ZHB Solutions",
    images: ["/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

type PageMetaInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path = "/",
  image,
  keywords,
}: PageMetaInput): Metadata {
  const resolvedTitle = title ? `${title} | ZHB Solutions` : SITE_METADATA.title;
  const resolvedDescription = description || SITE_METADATA.description;
  const url = path?.startsWith("http") ? path : `${SITE_URL}${path}`;

  // Casts are used to align with Next.js Metadata type unions in this project setup.
  const meta: Metadata = {
    title: resolvedTitle as unknown as string,
    description: resolvedDescription as unknown as string,
    keywords: (keywords || SITE_METADATA.keywords) as string[],
    openGraph: {
      title: resolvedTitle as unknown as string,
      description: resolvedDescription as unknown as string,
      url,
      siteName: (SITE_METADATA.openGraph?.siteName || "ZHB Solutions") as string,
      images: image ? [image] : (SITE_METADATA.openGraph?.images as string[] | undefined),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical: url,
    },
  };

  return meta;
}

export default SITE_METADATA;
