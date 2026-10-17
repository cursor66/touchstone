import Link from "next/link";

const posts = [
  ["用镜头记录最美的风景：孩子眼中的纯粹世界", "aed8cf5bae_1afb39d2bb3da3fb", "120", "18"],
  ["AI时代，个人成长的新机会与核心竞争力", "95e4b42ec8_d0e40f67c83ee5b7", "85", "12"],
  ["高效学习的5个小习惯：如何更好地管理你的精力和时间", "4e603695e0_80ab7a571d79b631", "93", "24"],
  ["我的数字游民生活：在不同的城市寻找创作灵感", "934c4597c5_97c547e8997cfcc5", "210", "45"],
  ["日落时分的思考：为什么我们需要慢下来去感受生活", "22421ce977_91b31e0a26371b19", "320", "56"],
  ["摄影入门：如何利用光影讲好一个故事", "a5cda2ec01_6c2a3715cc021612", "156", "22"],
  ["好物分享：提升办公幸福感的桌面清单", "02c76150be_846a0aff1251c88e", "88", "14"],
  ["午后时光：一杯抹茶拿铁带来的小确幸", "8de4aeb3af_304f84f1233e8e7c", "124", "30"],
  ["从0到1：我如何利用AI辅助完成这个设计项目", "e82e964ce0_84f9070d67512b8c", "276", "42"],
];
const image = (id: string) => `https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_${id}.png`;

function Header() {
  return <header className="topbar"><Link className="brand" href="/"><span className="brand-mark">⌁</span><span><strong>心之所向</strong><small>记录 · 创作 · 分享</small></span></Link><nav className="main-nav"><Link className="active" href="/">首页</Link><a href="#articles">文章</a><a href="#articles">视频</a><a href="#articles">资源</a><a href="#about">关于我</a></nav><label className="search"><span>⌕</span><input aria-label="搜索" placeholder="搜索文章、视频、资源..." /></label><button className="icon-button" aria-label="切换主题">☼</button></header>;
}
function Card({ post, index }: { post: string[]; index: number }) {
  return <article className="post-card"><a className="post-image" href="#articles"><img src={image(post[1])} alt="创作灵感与生活记录" />{index === 0 && <span className="play-mark">▶</span>}</a><div className="post-body"><h3>{post[0]}</h3><div className="author"><span className="avatar">卡</span><span>卡卡</span><span className="post-date">10月{18-index}日</span></div></div><footer className="post-footer"><span>♡ {post[2]}</span><span>◷ {post[3]}</span><span className="share">↗</span></footer></article>;
}
function Sidebar() {
  return <aside className="sidebar"><section className="panel profile" id="about"><div className="profile-avatar">卡<span /></div><h2>你好，我是卡卡</h2><p>热爱创作 · 喜欢分享 · 追求成长</p><span className="topic-highlight">最近在探索：AI 创作与儿童阅读</span><div className="stats"><div><b>128</b><small>文章</small></div><div><b>36</b><small>视频</small></div><div><b>24</b><small>资源</small></div><div><b>2.8k</b><small>粉丝</small></div></div><div className="profile-actions"><button className="button">✦ 关注我</button><a className="button button-outline" href="mailto:hello@example.com">✉ 联系我</a></div></section><section className="panel"><div className="panel-heading"><h3>✧ 本周精选</h3><a href="#articles">更多 →</a></div><div className="featured"><img src={image("2447d3accc_6ced1018b8777899")} alt="山脉数字艺术"/><div><b>AI赋能儿童阅读：从绘本到智能匹配的探索</b><p>分享我们在儿童绘本匹配领域的一些思考与实践。</p></div></div></section><section className="panel"><div className="panel-heading"><h3>🔥 最近受欢迎</h3><small>近7天 · 按浏览量排序</small></div>{["AI时代，个人成长的新机会", "我的创作工具分享", "如何制作高质量视频", "高效学习的5个小习惯", "生活中的小确幸"].map((title, i)=><div className="rank" key={title}><b>{i+1}</b><span>{title}</span><small>◉ {["8.6k","4.2k","3.9k","3.1k","2.7k"][i]}</small></div>)}</section><section className="panel"><div className="panel-heading"><h3>⌖ 最近在探索</h3></div><div className="tags">{["AI 创作","影像记录","阅读","效率工具","生活观察","亲子教育"].map(x=><span key={x}>{x}</span>)}</div></section><section className="panel newsletter"><h3>✉ 与我一起，发现更多美好</h3><p>订阅更新，获取最新创作与资源</p><form><input type="email" aria-label="邮箱地址" placeholder="输入你的邮箱"/><button className="button">订阅</button></form></section></aside>;
}
export default function Home() {
  return <><Header/><section className="hero"><img src={image("72b38b3ccd_b787bd15096dcbc5")} alt="夕阳下的山间湖泊"/><div className="hero-shade"/><div className="hero-copy"><span className="eyebrow">WELCOME TO MY CREATIVE SPACE</span><h1>用文字记录思考<br/>用影像分享生活<br/>用资源连接更多可能</h1><p>这是我的个人网站，分享我在创作、学习和生活中的点滴。</p><a className="hero-link" href="#articles">探索更多 <span>↓</span></a></div><blockquote>保持热爱<br/>持续创造<br/><i>— 未来可期</i></blockquote></section><main className="layout" id="articles"><section className="feed"><div className="feed-heading"><div><span className="eyebrow blue">THE LATEST</span><h2>灵感与日常</h2><p>记录每一个值得分享的瞬间</p></div><div className="filters"><button className="selected">全部</button><button>最新</button><button>最热</button></div></div><div className="post-grid">{posts.map((post, i)=><Card key={post[0]} post={post} index={i}/>)}</div><button className="load-more">发现更多内容 <span>→</span></button></section><Sidebar/></main><footer className="site-footer"><div className="footer-inner"><div><div className="footer-brand"><span>⌁</span> 心之所向</div><p>记录 · 创作 · 分享</p></div><div className="footer-center"><span>© 2025 心之所向. All rights reserved.</span><div>⌘　◉　◉　✉</div></div><div className="footer-motto">与更好的自己相遇</div></div><div className="footer-note">本网站由 AI 辅助构建 | 持续学习，持续输出</div></footer></>;
}
