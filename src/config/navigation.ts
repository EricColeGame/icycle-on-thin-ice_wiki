export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon?: any;
  isContentType?: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "walkthrough", path: "/walkthrough", isContentType: true },
  { key: "levels", path: "/levels", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "platforms", path: "/platforms", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: readonly string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
