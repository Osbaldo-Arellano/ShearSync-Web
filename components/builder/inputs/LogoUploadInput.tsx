'use client';

interface LogoUploadInputProps {
  onUpload: (base64: string | null) => void;
}

export default function LogoUploadInput({ onUpload }: LogoUploadInputProps) {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      onUpload(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-gray-400">Logo</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="text-xs text-gray-400"
      />
    </div>
  );
}
