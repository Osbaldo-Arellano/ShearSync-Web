"use client";

interface FontWeightSelectorProps {
  headingWeight: number;
  bodyWeight: number;
  onHeadingWeightChange: (weight: number) => void;
  onBodyWeightChange: (weight: number) => void;
}

const fontWeights = [
  { label: "Thin", value: 100 },
  { label: "Extra Light", value: 200 },
  { label: "Light", value: 300 },
  { label: "Normal", value: 400 },
  { label: "Medium", value: 500 },
  { label: "Semi Bold", value: 600 },
  { label: "Bold", value: 700 },
  { label: "Extra Bold", value: 800 },
  { label: "Black", value: 900 },
];

export default function FontWeightSelector({
  headingWeight,
  bodyWeight,
  onHeadingWeightChange,
  onBodyWeightChange,
}: FontWeightSelectorProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Heading Weight */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400">Heading Font Weight</label>
        <select
          value={headingWeight}
          onChange={(e) => onHeadingWeightChange(parseInt(e.target.value))}
          className="bg-neutral-800 border border-neutral-700 rounded px-2 py-1 text-white text-sm"
        >
          {fontWeights.map((weight) => (
            <option key={weight.value} value={weight.value}>
              {weight.label}
            </option>
          ))}
        </select>
      </div>

      {/* Body Weight */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400">Body Font Weight</label>
        <select
          value={bodyWeight}
          onChange={(e) => onBodyWeightChange(parseInt(e.target.value))}
          className="bg-neutral-800 border border-neutral-700 rounded px-2 py-1 text-white text-sm"
        >
          {fontWeights.map((weight) => (
            <option key={weight.value} value={weight.value}>
              {weight.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
