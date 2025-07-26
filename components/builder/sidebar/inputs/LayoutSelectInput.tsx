"use client";
import { LayoutOption } from "@/types/LayoutOptions";

interface LayoutSelectInputProps {
  value: LayoutOption;
  onChange: (layout: "compact" | "tabbed" | "sidebar") => void;
}

export default function LayoutSelectInput({
  value,
  onChange,
}: LayoutSelectInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-gray-400">Layout</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as LayoutOption)}
        className="bg-neutral-800 border border-neutral-700 rounded px-2 py-1 text-white text-sm"
      >
        <option value="compact">Compact</option>
        <option value="tabbed">Tabbed</option>
        <option value="sidebar">Sidebar</option>
      </select>
    </div>
  );
}
