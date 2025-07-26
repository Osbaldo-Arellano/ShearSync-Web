"use client";
export default function LocationText({ location }: { location: string }) {
  return <p className="text-sm text-gray-400 italic">📍 {location}</p>;
}
