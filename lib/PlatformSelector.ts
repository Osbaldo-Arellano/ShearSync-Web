// lib/PlatformSelector.ts

export const getPlatform = (url: string): string => {
  const u = url.toLowerCase();
  if (u.includes("instagram")) return "Instagram";
  if (u.includes("facebook")) return "Facebook";
  if (u.includes("tiktok")) return "TikTok";
  if (u.includes("twitter") || u.includes("x.com")) return "Twitter";
  if (u.includes("youtube")) return "YouTube";
  if (u.includes("linkedin")) return "LinkedIn";
  return "Custom";
};

export const getPlatformIcon = (platform: string): string => {
  switch (platform) {
    case "Instagram":
      return "📸";
    case "Facebook":
      return "📘";
    case "TikTok":
      return "🎵";
    case "Twitter":
      return "🐦";
    case "YouTube":
      return "▶️";
    case "LinkedIn":
      return "💼";
    default:
      return "🔗";
  }
};
