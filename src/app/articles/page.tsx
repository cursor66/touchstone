import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ArticleBrowser from "./ArticleBrowser";

export const metadata: Metadata = { title: "文章｜心之所向" };

export default function ArticlesPage() {
  return (
    <>
      <SiteHeader active="/articles" />
      <main className="subpage">
        <div className="articles-main">
          <ArticleBrowser />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
