"use client";

interface ThemeSelectorProps {
  value: string;
  onChange: (theme: string) => void;
}

const themes = ["Light", "Dark", "Pastel", "Neon"];

export default function ThemeSelector({ value, onChange }: ThemeSelectorProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-gray-400">Default Theme</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-neutral-800 border border-neutral-700 rounded px-2 py-1 text-white text-sm"
      >
        {themes.map((theme) => (
          <option key={theme} value={theme.toLowerCase()}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
}
