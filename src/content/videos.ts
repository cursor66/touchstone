import { t2i } from "./image";

export type Video = {
  title: string;
  duration: string;
  plays: string;
  likes: string;
  date: string;
  category: string;
  image: string;
  alt: string;
};

export const videoCategories = ["生活 VLOG", "旅拍记录", "器材分享", "影像教程"];

export const videos: Video[] = [
  {
    title: "镜头下的川西：寻找消失的地平线",
    duration: "12:45",
    plays: "2.4k",
    likes: "156",
    date: "2个月前",
    category: "旅拍记录",
    image: t2i("cinematic drone shot of a winding river in a dark pine forest valley, snowy mountains in distance, moody landscape", "landscape_16_9"),
    alt: "川西森林河谷与雪山航拍",
  },
  {
    title: "2025年我的主力，选择了这款微单",
    duration: "08:20",
    plays: "5.1k",
    likes: "428",
    date: "1个月前",
    category: "器材分享",
    image: t2i("professional mirrorless camera top view on dark background, sleek design, luxury tech photography", "landscape_16_9"),
    alt: "深色背景上的微单相机俯拍",
  },
  {
    title: "极致纯净：雪山之巅的呼吸",
    duration: "05:22",
    plays: "3.8k",
    likes: "294",
    date: "3个月前",
    category: "旅拍记录",
    image: t2i("majestic snow-capped mountain peaks above clouds, blue sky, wide aerial shot, stunning nature landscape", "landscape_16_9"),
    alt: "云海之上的雪山之巅",
  },
  {
    title: "森林徒步：治愈系慢生活 VLOG",
    duration: "15:10",
    plays: "1.9k",
    likes: "112",
    date: "4个月前",
    category: "生活 VLOG",
    image: t2i("lush green forest with sun rays through leaves, hiking trail, serene nature walk photography", "landscape_16_9"),
    alt: "阳光穿过树叶的森林徒步小径",
  },
];
