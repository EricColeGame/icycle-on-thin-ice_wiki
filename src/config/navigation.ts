export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon?: React.ComponentType<{ className?: string }> | React.ReactNode;
  isContentType?: boolean;
}

export const NAVIGATION_CONFIG: readonly NavigationItem[] = [] as const;

export const CONTENT_TYPES: readonly string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
