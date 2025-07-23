import type { ThemeConfig } from "~/types/theme";

export const predefinedThemes: ThemeConfig[] = [
  {
    id: "modern-violet",
    name: "Modern Violet",
    description: "Clean and professional with violet accents",
    primaryColor: "var(--violet-9)",
    fontFamily: "var(--font-neo-grotesque)",
    borderRadius: "var(--radius-2)",
    spacing: "var(--space-2)",
    preview: {
      backgroundColor: "var(--violet-2)",
      textColor: "var(--violet-11)",
      accentColor: "var(--violet-9)",
    },
  },
  {
    id: "ocean-blue",
    name: "Ocean Blue",
    description: "Calm and trustworthy blue theme",
    primaryColor: "var(--blue-9)",
    fontFamily: "var(--font-neo-grotesque)",
    borderRadius: "var(--radius-3)",
    spacing: "var(--space-3)",
    preview: {
      backgroundColor: "var(--blue-2)",
      textColor: "var(--blue-11)",
      accentColor: "var(--blue-9)",
    },
  },
  {
    id: "forest-green",
    name: "Forest Green",
    description: "Natural and sustainable green palette",
    primaryColor: "var(--green-9)",
    fontFamily: "var(--font-humanist)",
    borderRadius: "var(--radius-4)",
    spacing: "var(--space-2-5)",
    preview: {
      backgroundColor: "var(--green-2)",
      textColor: "var(--green-11)",
      accentColor: "var(--green-9)",
    },
  },
  {
    id: "sunset-orange",
    name: "Sunset Orange",
    description: "Warm and energetic orange theme",
    primaryColor: "var(--orange-9)",
    fontFamily: "var(--font-geometric-humanist)",
    borderRadius: "var(--radius-5)",
    spacing: "var(--space-3)",
    preview: {
      backgroundColor: "var(--orange-2)",
      textColor: "var(--orange-11)",
      accentColor: "var(--orange-9)",
    },
  },
  {
    id: "elegant-crimson",
    name: "Elegant Crimson",
    description: "Bold and sophisticated red theme",
    primaryColor: "var(--crimson-9)",
    fontFamily: "var(--font-transitional)",
    borderRadius: "var(--radius-1)",
    spacing: "var(--space-2)",
    preview: {
      backgroundColor: "var(--crimson-2)",
      textColor: "var(--crimson-11)",
      accentColor: "var(--crimson-9)",
    },
  },
  {
    id: "minimal-gray",
    name: "Minimal Gray",
    description: "Clean monochrome design",
    primaryColor: "var(--gray-9)",
    fontFamily: "var(--font-system-ui)",
    borderRadius: "var(--radius-1)",
    spacing: "var(--space-1-5)",
    preview: {
      backgroundColor: "var(--gray-2)",
      textColor: "var(--gray-11)",
      accentColor: "var(--gray-9)",
    },
  },
];

export const fontFamilyOptions = [
  { value: "var(--font-neo-grotesque)", label: "Neo Grotesque (Inter)" },
  { value: "var(--font-system-ui)", label: "System UI" },
  { value: "var(--font-humanist)", label: "Humanist" },
  { value: "var(--font-geometric-humanist)", label: "Geometric" },
  { value: "var(--font-transitional)", label: "Transitional" },
  { value: "var(--font-monospace-code)", label: "Monospace" },
];

export const colorOptions = [
  { value: "var(--violet-9)", label: "Violet", color: "#8b5cf6" },
  { value: "var(--blue-9)", label: "Blue", color: "#3b82f6" },
  { value: "var(--green-9)", label: "Green", color: "#10b981" },
  { value: "var(--orange-9)", label: "Orange", color: "#f97316" },
  { value: "var(--crimson-9)", label: "Crimson", color: "#dc2626" },
  { value: "var(--pink-9)", label: "Pink", color: "#ec4899" },
  { value: "var(--cyan-9)", label: "Cyan", color: "#06b6d4" },
  { value: "var(--yellow-9)", label: "Yellow", color: "#eab308" },
  { value: "var(--gray-9)", label: "Gray", color: "#6b7280" },
];
