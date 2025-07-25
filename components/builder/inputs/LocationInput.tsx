"use client";

interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function LocationInput({ value, onChange }: LocationInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-gray-400">Business Location</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="123 Main St, City, State"
        className="bg-neutral-800 border border-neutral-700 rounded px-2 py-1 text-white text-sm"
      />
    </div>
  );
}
