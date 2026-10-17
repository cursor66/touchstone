export type ImageSize = "square" | "square_hd" | "portrait_4_3" | "portrait_16_9" | "landscape_4_3" | "landscape_16_9";

/** 通过文生图接口生成配图地址，替换内容时只需更换 prompt。 */
export const t2i = (prompt: string, size: ImageSize = "landscape_4_3") =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;
