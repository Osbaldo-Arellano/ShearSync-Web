'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function StylingIDE() {
  const [primaryColor, setPrimaryColor] = useState('#FF5733');
  const [layout, setLayout] = useState('compact');
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-neutral-950 text-white font-sans">

      {/* === Top Bar === */}
      <header className="h-12 px-4 flex items-center justify-between border-b border-neutral-800 bg-neutral-900">
        <div className="flex items-center gap-2 text-sm font-medium tracking-wide text-gray-300">
          🎨 ShearSync Style Builder
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span>Logged in as: Chato Blendz</span>
        </div>
      </header>

      {/* === Main IDE Body === */}
      <div className="flex flex-1 overflow-hidden">

        {/* === Sidebar === */}
        <aside className="w-[260px] border-r border-neutral-800 bg-neutral-900 p-4 flex flex-col gap-6 text-sm text-gray-300">
          <div className="text-xs uppercase font-semibold text-gray-500 tracking-wide">Style Options</div>

          {/* Color Picker */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-400">Primary Color</label>
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="w-full h-8 border border-neutral-700 rounded bg-transparent cursor-pointer"
            />
          </div>

          {/* Layout Selector */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-400">Layout</label>
            <select
              value={layout}
              onChange={(e) => setLayout(e.target.value)}
              className="bg-neutral-800 border border-neutral-700 rounded px-2 py-1 text-white text-sm"
            >
              <option value="compact">Compact</option>
              <option value="tabbed">Tabbed</option>
              <option value="sidebar">Sidebar</option>
            </select>
          </div>

          {/* Logo Upload */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-400">Logo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="text-xs text-gray-400"
            />
          </div>
        </aside>

      </div>

    </div>
  );
}
