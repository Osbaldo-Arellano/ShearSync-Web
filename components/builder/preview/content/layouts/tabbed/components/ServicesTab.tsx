// components/builder/preview/layouts/tabbed/ServicesTab.tsx
"use client";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

export default function ServicesTab({ tags }: { tags: string[] }) {
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap">
      {tags.map((tag, i) => (
        <Chip key={i} label={tag} size="small" />
      ))}
    </Stack>
  );
}
