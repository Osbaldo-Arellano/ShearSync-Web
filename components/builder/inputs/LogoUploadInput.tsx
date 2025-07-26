"use client";

import { useState, useRef } from "react";

interface LogoUploadInputProps {
  onUpload: (base64: string | null) => void;
}

export default function LogoUploadInput({ onUpload }: LogoUploadInputProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setPreview(result);
      onUpload(result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setPreview(null);
    onUpload(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs text-gray-400">Logo</label>

      {preview ? (
        <div className="relative w-32 h-32 border rounded overflow-hidden">
          <img
            src={preview}
            alt="Logo preview"
            className="w-full h-full object-contain"
          />
          <button
            onClick={handleRemove}
            className="absolute top-0 right-0 bg-black bg-opacity-60 text-white text-xs px-1 rounded-bl hover:bg-opacity-80"
          >
            ✕
          </button>
        </div>
      ) : (
        <>
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            ref={fileInputRef}
            className="hidden"
            id="logo-upload"
          />
          <label
            htmlFor="logo-upload"
            className="inline-block w-fit px-4 py-2 rounded bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium cursor-pointer border border-neutral-700 transition"
          >
            Upload Logo
          </label>
        </>
      )}
    </div>
  );
}
