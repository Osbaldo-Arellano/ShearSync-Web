"use client";

interface FontSizeSliderProps {
  headingSize: number;
  bodySize: number;
  onHeadingSizeChange: (value: number) => void;
  onBodySizeChange: (value: number) => void;
}

export default function FontSizeSlider({
  headingSize,
  bodySize,
  onHeadingSizeChange,
  onBodySizeChange,
}: FontSizeSliderProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label className="text-xs text-gray-400">
          Heading Font Size: {headingSize}px
        </label>
        <input
          type="range"
          min={16}
          max={48}
          value={headingSize}
          onChange={(e) => onHeadingSizeChange(parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-xs text-gray-400">
          Body Font Size: {bodySize}px
        </label>
        <input
          type="range"
          min={12}
          max={24}
          value={bodySize}
          onChange={(e) => onBodySizeChange(parseInt(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
}
