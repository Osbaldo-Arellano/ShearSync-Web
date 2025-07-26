"use client";

import { getPlatform, getPlatformIcon } from "@/lib/PlatformSelector";

interface SocialLinksInputProps {
  value: string[];
  onChange: (links: string[]) => void;
}

export default function SocialLinksInput({
  value,
  onChange,
}: SocialLinksInputProps) {
  const normalizeUrl = (url: string) =>
    url.trim().startsWith("http") ? url.trim() : `https://${url.trim()}`;

  const handleLinkChange = (index: number, link: string) => {
    const updated = [...value];
    updated[index] = link; // keep raw for now
    onChange(updated);
  };

  const addLink = () => onChange([...value, ""]);
  const removeLink = (index: number) =>
    onChange(value.filter((_, i) => i !== index));

  const handleBlur = (index: number) => {
    const updated = [...value];
    updated[index] = normalizeUrl(updated[index]);
    onChange(updated);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs text-gray-400">Social Media Links</label>
      {value.map((link, idx) => {
        const platform = getPlatform(link);
        const icon = getPlatformIcon(platform);

        return (
          <div key={idx} className="flex items-center gap-2">
            <span className="text-lg">{icon}</span>
            <input
              type="text"
              value={link}
              onChange={(e) => handleLinkChange(idx, e.target.value)}
              onBlur={() => handleBlur(idx)}
              placeholder="instagram.com/yourname"
              className="flex-1 bg-neutral-800 border border-neutral-700 rounded px-2 py-1 text-white text-sm"
            />
            <button
              onClick={() => removeLink(idx)}
              className="text-red-500 text-xs px-2"
            >
              ✕
            </button>
          </div>
        );
      })}

      <button
        onClick={addLink}
        className="text-xs text-blue-400 hover:underline mt-1 text-left"
      >
        + Add Link
      </button>
    </div>
  );
}
