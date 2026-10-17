import { t2i } from "./image";

export type Article = {
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  reads: string;
  image: string;
  alt: string;
};

export const articleCategories = ["个人成长", "设计思考", "技术探索", "数字游民"];
export const articleTags = ["AI工具", "UI设计", "React", "心理学", "读书笔记"];

/** 分类对应的标签配色（globals.css 中的 tag-* 变体）。 */
export const categoryTone = (category: string): "blue" | "green" | "yellow" | "purple" =>
  ({ 个人成长: "blue", 设计思考: "green", 技术探索: "yellow", 数字游民: "purple" })[category] as "blue" | "green" | "yellow" | "purple" ?? "blue";

export const articles: Article[] = [
  {
    title: "AI时代：如何构建核心竞争力",
    excerpt: "AI正在改变我们工作和生活的方式。在未来的竞争中，仅靠技能已不足够。我们需要深入思考如何提升自我核心竞争力，在AI浪潮中找到独特的价值...",
    category: "个人成长",
    tags: ["AI工具"],
    reads: "8,562",
    image: t2i("futuristic scifi room with glowing monitors and servers, synthwave aesthetic, high tech laboratory environment, cinematic lighting"),
    alt: "充满发光屏幕与服务器的未来感房间",
  },
  {
    title: "设计不只是美感，更是解决问题的过程",
    excerpt: "很多初学者认为设计只是让东西变好看。但真正的设计是从理解用户痛点出发，通过科学的方法解决实际问题。从用户调研到交互逻辑...",
    category: "设计思考",
    tags: ["UI设计"],
    reads: "4,231",
    image: t2i("minimalist desk setup with laptop, a cup of coffee, green plant, and smartphone, soft natural morning light, clean workspace photography"),
    alt: "极简桌面：笔记本、咖啡与绿植",
  },
  {
    title: "远程办公的一年：我学到的五个教训",
    excerpt: "从大厂辞职到成为一名自由职业者，这一年里我走过了四个城市。远程办公并不只是换个地方工作，更是一场关于自律与效率的终极考验...",
    category: "数字游民",
    tags: ["心理学"],
    reads: "3,890",
    image: t2i("aesthetic coffee shop interior with wooden furniture, warm lighting, people working on laptops, cozy atmosphere, lifestyle photography"),
    alt: "温暖灯光下的咖啡馆，人们在使用笔记本工作",
  },
  {
    title: "为什么你应该开始学习 TypeScript",
    excerpt: "如果你还在犹豫是否要从 JavaScript 转向 TypeScript，那么这篇文章将告诉你答案。通过强类型检查，我们可以在开发阶段规避 80% 的潜在错误...",
    category: "技术探索",
    tags: ["React"],
    reads: "6,120",
    image: t2i("coding on a laptop screen with matrix style green code overlay, dark room, cyberpunk vibes, blue ambient light, programming workspace"),
    alt: "暗室中笔记本屏幕上的代码",
  },
];
