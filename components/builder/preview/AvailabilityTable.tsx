"use client";

interface Props {
  availability: { [day: string]: { open: string; close: string } };
}

export default function AvailabilityTable({ availability }: Props) {
  return (
    <div className="mt-4 text-xs text-left max-w-sm w-full">
      <h2 className="text-gray-300 mb-2 font-semibold">Hours:</h2>
      <ul className="grid grid-cols-2 gap-y-1 text-gray-400">
        {Object.entries(availability).map(([day, time]) => (
          <li key={day}>
            <span className="font-medium text-gray-300">{day}</span>:{" "}
            {time.open} – {time.close}
          </li>
        ))}
      </ul>
    </div>
  );
}
