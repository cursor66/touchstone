import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "心之所向｜记录 · 创作 · 分享",
  description: "在创作、学习和生活中，记录每一个值得分享的瞬间。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
