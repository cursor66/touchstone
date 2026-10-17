import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import VideoBrowser from "./VideoBrowser";

export const metadata: Metadata = { title: "视频｜心之所向" };

export default function VideosPage() {
  return (
    <>
      <SiteHeader active="/videos" />
      <VideoBrowser />
      <SiteFooter />
    </>
  );
}
