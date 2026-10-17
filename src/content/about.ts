import { t2i } from "./image";

export const profile = {
  avatar: t2i("portrait of a young creative professional man, friendly smile, clean minimalist background, cinematic soft light", "square"),
  avatarAlt: "卡卡的个人肖像",
  roles: ["UI/UX Designer", "Photographer", "Digital Nomad"],
  socials: [
    { name: "weibo", label: "微博", href: "#" },
    { name: "weixin", label: "微信", href: "#" },
    { name: "bilibili", label: "哔哩哔哩", href: "#" },
    { name: "instagram", label: "Instagram", href: "#" },
  ],
} as const;

/** strong 字段中的文字会在段落里加粗高亮。 */
export const story: { text: string; strong?: string }[] = [
  { text: "在过去的 7 年里，我一直在设计行业摸爬滚打，曾负责过日活千万级产品的视觉体验。这些经历让我学会了如何在大规模协作中保持设计的严谨性，以及如何用数据驱动体验的增长。" },
  { text: "2024 年，我决定离开舒适区，开启一段名为「数字游民」的旅程。我开始带着相机走入荒野，去感受真实世界的尺度感，并在这里记录我对时代的思考，分享我的影像作品和设计资源。" },
  { text: "。通过这些碎片化的内容，我希望不仅能作为自己成长的注脚，更希望能在这个快速流动的时代里，与更多志同道合的朋友建立有深度的连接。", strong: "「记录即思考，分享即成长」" },
];

export const storyMotto = "我坚信";

export const projects = [
  { name: "影像创作", desc: "正在拍摄《边境线上的生活》系列纪录短片，探索多元文化的交织。" },
  { name: "设计系统", desc: "维护一套面向独立开发者的开源 UI 组件库，提升协作效率。" },
];
