"use client";
export default function LayoutInfo({ layout }: { layout: string }) {
  return (
    <p className="text-xs text-gray-500 mt-6">
      Layout: <span className="font-semibold">{layout}</span>
    </p>
  );
}
