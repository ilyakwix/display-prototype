export interface ThemeConfig {
  id: string;
  name: string;
  description: string;
  primaryColor: string;
  fontFamily: string;
  borderRadius: string;
  spacing: string;
  preview: {
    backgroundColor: string;
    textColor: string;
    accentColor: string;
  };
}

export interface CustomizationControls {
  primaryColor: string;
  fontFamily: string;
  borderRadius: number;
  spacing: number;
}
