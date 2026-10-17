import Link from "next/link";

const links = [["首页", "/"], ["文章", "/articles"], ["视频", "/videos"], ["资源", "/resources"], ["关于我", "/about"]];
export default function SiteHeader({ active = "/" }: { active?: string }) {
  return <header className="topbar"><Link className="brand" href="/"><span className="brand-mark">⌁</span><span><strong>心之所向</strong><small>记录 · 创作 · 分享</small></span></Link><nav className="main-nav">{links.map(([label, href])=><Link key={href} className={active === href ? "active" : ""} href={href}>{label}</Link>)}</nav><label className="search"><span>⌕</span><input aria-label="搜索" placeholder="搜索文章、视频、资源..." /></label><button className="icon-button" aria-label="切换主题">☼</button></header>;
}
