"use client";

interface PrimaryColorPickerProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PrimaryColorPicker({
  value,
  onChange,
}: PrimaryColorPickerProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-gray-400">Primary Color</label>
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-8 border border-neutral-700 rounded bg-transparent cursor-pointer"
      />
    </div>
  );
}
