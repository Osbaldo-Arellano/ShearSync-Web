"use client";

interface Availability {
  [day: string]: { open: string; close: string };
}

interface Props {
  value: Availability;
  onChange: (value: Availability) => void;
}

export default function HoursAndAvailabilityEditor({ value, onChange }: Props) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const handleTimeChange = (
    day: string,
    field: "open" | "close",
    time: string
  ) => {
    onChange({
      ...value,
      [day]: { ...value[day], [field]: time },
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="text-xs text-gray-400">Business Hours</label>
      {days.map((day) => (
        <div
          key={day}
          className="flex items-center justify-between gap-2 text-sm"
        >
          <span className="w-10 text-gray-300">{day}</span>
          <input
            type="time"
            value={value[day]?.open || ""}
            onChange={(e) => handleTimeChange(day, "open", e.target.value)}
            className="bg-neutral-800 border border-neutral-700 rounded px-2 py-1 text-white w-28"
          />
          <span className="text-gray-500">–</span>
          <input
            type="time"
            value={value[day]?.close || ""}
            onChange={(e) => handleTimeChange(day, "close", e.target.value)}
            className="bg-neutral-800 border border-neutral-700 rounded px-2 py-1 text-white w-28"
          />
        </div>
      ))}
    </div>
  );
}
