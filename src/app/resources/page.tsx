import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Icon from "@/components/icons";
import ResourceBrowser from "./ResourceBrowser";

export const metadata: Metadata = { title: "资源｜心之所向" };

export default function ResourcesPage() {
  return (
    <>
      <SiteHeader active="/resources" />
      <main className="subpage resources-main">
        <div className="page-wrap">
          <ResourceBrowser />
          <div className="resource-help">
            <div className="resource-help-copy">
              <div className="help-icon">
                <Icon name="question" size={26} />
              </div>
              <div>
                <h3>没有找到你想要的资源？</h3>
                <p>如果你有特定需要的模版或资料，欢迎联系我，我会尽力整理分享出来。同时，所有资源仅供个人学习使用，严禁商用。</p>
              </div>
            </div>
            <a className="resource-contact" href="mailto:hello@example.com">联系我</a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
