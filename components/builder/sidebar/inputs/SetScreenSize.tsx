"use client";

interface SetScreenSizeProps {
  value: "desktop" | "mobile";
  onChange: (value: "desktop" | "mobile") => void;
}

export default function SetScreenSize({ value, onChange }: SetScreenSizeProps) {
  const isMobile = value === "mobile";

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange("desktop")}
        className={`text-xs px-3 py-1 rounded border transition-colors ${
          value === "desktop"
            ? "bg-white text-black"
            : "border-neutral-700 text-gray-400 hover:text-white"
        }`}
      >
        Desktop
      </button>
      <button
        onClick={() => onChange("mobile")}
        className={`text-xs px-3 py-1 rounded border transition-colors ${
          isMobile
            ? "bg-white text-black"
            : "border-neutral-700 text-gray-400 hover:text-white"
        }`}
      >
        Mobile
      </button>
    </div>
  );
}
