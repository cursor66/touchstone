"use client";

import { useState } from "react";
import FilterBar from "@/components/FilterBar";
import Icon from "@/components/icons";
import { articles, articleCategories, articleTags, categoryTone } from "@/content/articles";

export default function ArticleBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");

  const list = articles.filter(
    (a) =>
      (!category || a.category === category) &&
      (!tag || a.tags.includes(tag)) &&
      (!query || (a.title + a.excerpt).toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <>
      <FilterBar
        variant="pill"
        placeholder="搜索你感兴趣的内容..."
        query={query}
        onQuery={setQuery}
        selects={[
          { label: "文章分类", options: articleCategories, value: category, onChange: setCategory },
          { label: "热门标签", options: articleTags, value: tag, onChange: setTag },
        ]}
      />
      {list.length > 0 ? (
        <div className="article-list">
          {list.map((a) => (
            <article className="article-card" key={a.title}>
              <div className="article-thumb">
                <img src={a.image} alt={a.alt} />
              </div>
              <div className="article-detail">
                <div>
                  <span className={`tag-pill tag-${categoryTone(a.category)}`}>{a.category}</span>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                </div>
                <div className="article-reads">
                  <Icon name="eye" size={15} />
                  <span>{a.reads} 阅读</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="empty-tip">没有找到匹配的文章，换个关键词试试。</p>
      )}
    </>
  );
}
