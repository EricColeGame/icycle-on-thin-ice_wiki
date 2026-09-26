export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Icycle On Thin Ice Wiki",
  shortName: "Icycle On Thin Ice",
  logoText: "I",
  tagline: "Guides, Levels, Walkthroughs & Tips",
  description: "Explore Icycle On Thin Ice Wiki with gameplay guides, level walkthroughs, puzzle tips, and useful information to help players master the frozen adventure.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://icycle-on-thin-ice.wiki",
  supportEmail: "support@icycle-on-thin-ice.wiki",
  gameUrl: "https://store.steampowered.com/app/658990/Icycle_On_Thin_Ice/",
  heroVideoId: "0I9vv616Xuk",
  social: {
    discord: "https://steamcommunity.com/app/658990",
    youtube: "https://www.youtube.com/watch?v=0I9vv616Xuk",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
