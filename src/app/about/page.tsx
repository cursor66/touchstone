import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Icon, { type IconName } from "@/components/icons";
import { profile, story, storyMotto, projects } from "@/content/about";

export const metadata: Metadata = { title: "关于我｜心之所向" };

export default function AboutPage() {
  return (
    <>
      <SiteHeader active="/about" />
      <main className="about-main">
        <div className="about-blob blob-a" />
        <div className="about-blob blob-b" />
        <div className="about-wrap">
          <div className="about-intro">
            <div className="about-avatar-wrap">
              <img className="about-avatar" src={profile.avatar} alt={profile.avatarAlt} />
              <div className="about-avatar-badge">
                <Icon name="camera" size={20} />
              </div>
            </div>
            <h2>
              一个正在探索
              <br />
              <span>生活边界</span>的
              <br />
              设计师。
            </h2>
            <div className="about-roles">
              {profile.roles.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>
            <div className="about-socials">
              {profile.socials.map((s) => (
                <a key={s.name} href={s.href} aria-label={s.label}>
                  <Icon name={s.name as IconName} size={24} />
                </a>
              ))}
            </div>
          </div>
          <div className="about-panels">
            <section className="about-card">
              <div className="about-card-head">
                <Icon name="book" size={30} />
                <h3>我的故事</h3>
              </div>
              <div className="about-story">
                {story.map((p, i) => (
                  <p key={i}>
                    {p.strong ? (
                      <>
                        {storyMotto}
                        <strong>{p.strong}</strong>
                        {p.text}
                      </>
                    ) : (
                      p.text
                    )}
                  </p>
                ))}
              </div>
            </section>
            <section className="about-card">
              <div className="about-card-head">
                <Icon name="rocket" size={30} />
                <h3>当前项目与探索</h3>
              </div>
              <div className="about-projects">
                {projects.map((p) => (
                  <div className="about-project" key={p.name}>
                    <h4>{p.name}</h4>
                    <p>{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
