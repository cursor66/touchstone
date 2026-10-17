"use client";

import Icon from "./icons";

export type FilterSelect = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function FilterBar({
  placeholder,
  selects,
  query,
  onQuery,
  variant = "plain",
}: {
  placeholder: string;
  selects: FilterSelect[];
  query: string;
  onQuery: (value: string) => void;
  variant?: "plain" | "pill";
}) {
  return (
    <div className={`filter-bar${variant === "pill" ? " pill" : ""}`}>
      <div className="f-search">
        <Icon name="search" size={14} />
        <input value={query} onChange={(e) => onQuery(e.target.value)} placeholder={placeholder} aria-label={placeholder} />
      </div>
      {selects.map((s) => (
        <div className="f-select" key={s.label}>
          <select value={s.value} onChange={(e) => s.onChange(e.target.value)} aria-label={s.label}>
            <option value="">{s.label}</option>
            {s.options.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          <Icon name="chevronDown" size={12} />
        </div>
      ))}
    </div>
  );
}
