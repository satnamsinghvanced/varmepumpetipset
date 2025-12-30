import Breadcrumbs from "@/components/global/breadcrumbs";
import { ArticlePageProps } from "@/const/types";
import { getCachedArticlesPageData } from "@/services/page/article-page-service";
import { generatePageMetadata } from "@/utils/metadata";
import HomePage from "../page";
import ArticleContent from "./articleContent";

const getArticlePageData = async () => {
  const doc = await getCachedArticlesPageData();
  return await JSON.parse(JSON.stringify(doc));
}

export async function generateMetadata() {
  const articlesPage = await getArticlePageData()
  const { metaTitle, metaDescription, metaKeywords, metaImage, ogTitle, ogDescription, canonicalUrl, robots, jsonLd, publishedDate, lastUpdatedDate, subHeading, heading, ogImage, ogType, bannerImage } = articlesPage
  return generatePageMetadata({
<<<<<<< HEAD
    title: metaTitle || heading || "Home | Byggtipset.no",
    description: metaDescription || subHeading || "Welcome to Byggtipset.no — compare and find the best real estate agents in Norway.",
    path: "/",
    keywords: metaKeywords ? metaKeywords.split(",")?.map((k: string) => k.trim()).filter(Boolean) : ["byggtipset", "real estate", "agents", "compare"],
    type: ogType || "website",
    image: metaImage || ogImage || bannerImage || null,
    ogTitle: ogTitle || metaTitle || "Home | Byggtipset.no",
    ogDescription: ogDescription || metaDescription || "Compare top real estate agents in Norway easily with Byggtipset.no.",
=======
    title: metaTitle || heading || "Home | Meglertip.no",
    description: metaDescription || subHeading || "Welcome to Meglertip.no — compare and find the best real estate agents in Norway.",
    path: "/",
    keywords: metaKeywords ? metaKeywords.split(",")?.map((k: string) => k.trim()).filter(Boolean) : ["meglertip", "real estate", "agents", "compare"],
    type: ogType || "website",
    image: metaImage || ogImage || bannerImage || null,
    ogTitle: ogTitle || metaTitle || "Home | Meglertip.no",
    ogDescription: ogDescription || metaDescription || "Compare top real estate agents in Norway easily with Meglertip.no.",
>>>>>>> 1af58a38d1ff9c3c66554ba2e8a964c7534b2296
    canonicalUrl: canonicalUrl,
    robots: robots || "index, follow",
    jsonLd: jsonLd || {
      "@context": "https://schema.org",
      "@type": "WebSite",
<<<<<<< HEAD
      name: "Byggtipset.no"
=======
      name: "Meglertip.no"
>>>>>>> 1af58a38d1ff9c3c66554ba2e8a964c7534b2296
    },
    publishedDate: publishedDate,
    lastUpdatedDate: lastUpdatedDate,
  });
}

const ArticlePage = async ({ searchParams }: ArticlePageProps) => {
  const articlesPage = await getArticlePageData()
  return (
    <HomePage>
      <Breadcrumbs className="mt-8" />
      <ArticleContent searchParams={searchParams} title={articlesPage?.title} categoriesHeading={articlesPage.categoriesHeading} />
    </HomePage>
  );
};

export default ArticlePage;