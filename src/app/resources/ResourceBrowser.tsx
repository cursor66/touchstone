"use client";

import { useState } from "react";
import FilterBar from "@/components/FilterBar";
import Icon from "@/components/icons";
import { resources, resourceCategories } from "@/content/resources";

export default function ResourceBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const list = resources.filter(
    (r) =>
      (!category || r.category === category) &&
      (!query || (r.name + r.desc).toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <>
      <FilterBar
        placeholder="搜索资源..."
        query={query}
        onQuery={setQuery}
        selects={[{ label: "合集分类", options: resourceCategories, value: category, onChange: setCategory }]}
      />
      {list.length > 0 ? (
        <div className="resource-grid">
          {list.map((r) => (
            <div className="resource-card" key={r.name}>
              <div className="resource-top">
                <div className={`file-badge file-${r.tone}`}>
                  <Icon name={r.icon} size={24} />
                  {r.badge && <b>{r.badge}</b>}
                </div>
                <span className="resource-size">{r.size}</span>
              </div>
              <div className="resource-body">
                <h2>{r.name}</h2>
                <p>{r.desc}</p>
              </div>
              <div className="resource-foot">
                <span className="resource-date">
                  <Icon name="calendar" size={14} />
                  {r.date}
                </span>
                <button className="resource-download" type="button">
                  <Icon name="download" size={14} />
                  下载资源
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-tip">没有找到匹配的资源，换个关键词试试。</p>
      )}
    </>
  );
}
