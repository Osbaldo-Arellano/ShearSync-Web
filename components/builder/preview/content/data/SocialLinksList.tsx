"use client";

import { getPlatform, getPlatformIcon } from "@/lib/PlatformSelector";

export default function SocialLinksList({ links }: { links: string[] }) {
  return (
    <>
      {links.map((link, i) => {
        let formattedUrl = link.trim();
        if (!/^https?:\/\//i.test(formattedUrl)) {
          formattedUrl = `https://${formattedUrl}`;
        }

        let hostname = "Invalid URL";
        try {
          hostname = new URL(formattedUrl).hostname.replace("www.", "");
        } catch {}

        const platform = getPlatform(formattedUrl);
        const icon = getPlatformIcon(platform);

        return (
          <a
            key={i}
            href={formattedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-xs flex items-center gap-1"
          >
            <span>{icon}</span>
            <span>{hostname}</span>
          </a>
        );
      })}
    </>
  );
}
