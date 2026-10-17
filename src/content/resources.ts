export type Resource = {
  name: string;
  desc: string;
  size: string;
  date: string;
  type: string;
  category: string;
  icon: "filePdf" | "fileLines" | "fileZip" | "video";
  tone: "blue" | "green" | "orange" | "purple";
  /** 可选：文件角标小字（如 PDF）。 */
  badge?: string;
};

export const resourceCategories = ["设计趋势", "实用工具", "设计系统", "视频剪辑"];

export const resources: Resource[] = [
  {
    name: "2025年UI/UX设计趋势报告",
    desc: "深入分析未来一年的设计风向，包含色彩应用、排版逻辑及交互新范式。",
    size: "15.4 MB",
    date: "2025-10-09",
    type: "PDF",
    category: "设计趋势",
    icon: "filePdf",
    tone: "blue",
    badge: "PDF",
  },
  {
    name: "数字游民装备清单建议",
    desc: "基于我这一年旅居生活的亲身经验，整理的最实用的数码与生活好物。",
    size: "1.2 MB",
    date: "2025-08-22",
    type: "DOC",
    category: "实用工具",
    icon: "fileLines",
    tone: "green",
  },
  {
    name: "Figma 设计系统入门模版",
    desc: "一套完整的原子化设计系统模版，帮助你快速开启新项目的 UI 设计工作。",
    size: "42.8 MB",
    date: "2025-11-15",
    type: "ZIP",
    category: "设计系统",
    icon: "fileZip",
    tone: "orange",
  },
  {
    name: "视频剪辑常用快捷键汇总",
    desc: "涵盖 PR/FCPX/达芬奇，大幅提升剪辑效率的必备快捷键对照表。",
    size: "128 MB",
    date: "2025-12-01",
    type: "MP4",
    category: "视频剪辑",
    icon: "video",
    tone: "purple",
  },
];
