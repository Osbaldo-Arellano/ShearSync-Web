"use client";

import { createContext, useContext, useState } from "react";

interface Availability {
  [day: string]: { open: string; close: string };
}

type LayoutType = "compact" | "tabbed" | "sidebar";

interface StylingContextProps {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  layout: LayoutType;
  setLayout: (layout: LayoutType) => void;
  logoUrl: string | null;
  setLogoUrl: (url: string | null) => void;
  heroBannerUrls: string[];
  setHeroBannerUrls: (urls: string[]) => void;
  about: string;
  setAbout: (text: string) => void;
  headingFont: string;
  setHeadingFont: (font: string) => void;
  bodyFont: string;
  setBodyFont: (font: string) => void;
  headingSize: number;
  setHeadingSize: (size: number) => void;
  bodySize: number;
  setBodySize: (size: number) => void;
  headingWeight: number;
  setHeadingWeight: (weight: number) => void;
  bodyWeight: number;
  setBodyWeight: (weight: number) => void;
  availability: Availability;
  setAvailability: (availability: Availability) => void;
  location: string;
  setLocation: (location: string) => void;
  socialLinks: string[];
  setSocialLinks: (links: string[]) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

const StylingContext = createContext<StylingContextProps | null>(null);

export const StylingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [primaryColor, setPrimaryColor] = useState("#cccc");
  const [layout, setLayout] = useState<LayoutType>("compact");
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [heroBannerUrls, setHeroBannerUrls] = useState<string[]>([]);
  const [about, setAbout] = useState("");
  const [headingFont, setHeadingFont] = useState("Inter");
  const [bodyFont, setBodyFont] = useState("Inter");
  const [headingSize, setHeadingSize] = useState(24);
  const [bodySize, setBodySize] = useState(16);
  const [headingWeight, setHeadingWeight] = useState(700);
  const [bodyWeight, setBodyWeight] = useState(400);
  const [availability, setAvailability] = useState<Availability>({
    Mon: { open: "", close: "" },
    Tue: { open: "", close: "" },
    Wed: { open: "", close: "" },
    Thu: { open: "", close: "" },
    Fri: { open: "", close: "" },
    Sat: { open: "", close: "" },
    Sun: { open: "", close: "" },
  });
  const [location, setLocation] = useState("");
  const [socialLinks, setSocialLinks] = useState<string[]>([]);
  const [theme, setTheme] = useState("dark");

  return (
    <StylingContext.Provider
      value={{
        primaryColor,
        setPrimaryColor,
        layout,
        setLayout,
        logoUrl,
        setLogoUrl,
        heroBannerUrls,
        setHeroBannerUrls,
        about,
        setAbout,
        headingFont,
        setHeadingFont,
        bodyFont,
        setBodyFont,
        headingSize,
        setHeadingSize,
        bodySize,
        setBodySize,
        headingWeight,
        setHeadingWeight,
        bodyWeight,
        setBodyWeight,
        availability,
        setAvailability,
        location,
        setLocation,
        socialLinks,
        setSocialLinks,
        theme,
        setTheme,
      }}
    >
      {children}
    </StylingContext.Provider>
  );
};

export const useStyling = () => {
  const context = useContext(StylingContext);
  if (!context)
    throw new Error("useStyling must be used within a StylingProvider");
  return context;
};
