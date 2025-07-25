"use client";

interface AboutTextareaProps {
  value: string;
  onChange: (value: string) => void;
}

export default function AboutTextarea({ value, onChange }: AboutTextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-gray-400">About / Bio</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        placeholder="Write something about your business..."
        className="w-full p-2 rounded border border-neutral-700 bg-neutral-800 text-sm text-white resize-none"
      />
    </div>
  );
}
