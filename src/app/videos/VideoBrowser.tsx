"use client";

import { useState } from "react";
import FilterBar from "@/components/FilterBar";
import Icon from "@/components/icons";
import { videos, videoCategories } from "@/content/videos";

export default function VideoBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const list = videos.filter(
    (v) => (!category || v.category === category) && (!query || v.title.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <>
      <section className="subhero">
        <div className="page-wrap">
          <FilterBar
            placeholder="搜索视频..."
            query={query}
            onQuery={setQuery}
            selects={[{ label: "合集分类", options: videoCategories, value: category, onChange: setCategory }]}
          />
        </div>
      </section>
      <main className="subpage videos-main">
        <div className="page-wrap">
          {list.length > 0 ? (
            <div className="video-grid">
            {list.map((v) => (
              <article className="video-card" key={v.title}>
                <div className="video-thumb">
                  <img src={v.image} alt={v.alt} />
                  <span className="video-duration">{v.duration}</span>
                </div>
                <div className="video-info">
                  <h3>{v.title}</h3>
                  <div className="video-meta">
                    <div className="video-stats">
                      <span>
                        <Icon name="circlePlay" size={14} />
                        {v.plays} 次播放
                      </span>
                      <span>
                        <Icon name="heart" size={14} />
                        {v.likes}
                      </span>
                    </div>
                    <span>{v.date}</span>
                  </div>
                </div>
              </article>
            ))}
            </div>
          ) : (
            <p className="empty-tip">没有找到匹配的视频，换个关键词试试。</p>
          )}
        </div>
      </main>
    </>
  );
}
