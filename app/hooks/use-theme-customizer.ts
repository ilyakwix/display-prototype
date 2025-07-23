import { useState, useCallback } from "react";
import type { ThemeConfig, CustomizationControls } from "~/types/theme";
import { predefinedThemes } from "~/data/themes";

export function useThemeCustomizer() {
  const [selectedTheme, setSelectedTheme] = useState<ThemeConfig>(predefinedThemes[0]);
  const [customizations, setCustomizations] = useState<CustomizationControls>({
    primaryColor: predefinedThemes[0].primaryColor,
    fontFamily: predefinedThemes[0].fontFamily,
    borderRadius: 4,
    spacing: 16,
  });
  const [hasChanges, setHasChanges] = useState(false);

  const selectTheme = useCallback((theme: ThemeConfig) => {
    setSelectedTheme(theme);
    setCustomizations({
      primaryColor: theme.primaryColor,
      fontFamily: theme.fontFamily,
      borderRadius: parseInt(theme.borderRadius.match(/\d+/)?.[0] || "4"),
      spacing: parseInt(theme.spacing.match(/\d+/)?.[0] || "16"),
    });
    setHasChanges(false);
    applyThemeToDocument(theme, {
      primaryColor: theme.primaryColor,
      fontFamily: theme.fontFamily,
      borderRadius: parseInt(theme.borderRadius.match(/\d+/)?.[0] || "4"),
      spacing: parseInt(theme.spacing.match(/\d+/)?.[0] || "16"),
    });
  }, []);

  const updateCustomization = useCallback(
    (key: keyof CustomizationControls, value: string | number) => {
      setCustomizations((prev) => {
        const updated = { ...prev, [key]: value };
        setHasChanges(true);
        applyThemeToDocument(selectedTheme, updated);
        return updated;
      });
    },
    [selectedTheme],
  );

  const applyChanges = useCallback(() => {
    setHasChanges(false);
    // In a real app, this would save to localStorage or send to a server
    console.log("Theme applied:", { selectedTheme, customizations });
  }, [selectedTheme, customizations]);

  const resetToDefault = useCallback(() => {
    selectTheme(selectedTheme);
  }, [selectedTheme, selectTheme]);

  return {
    selectedTheme,
    customizations,
    hasChanges,
    selectTheme,
    updateCustomization,
    applyChanges,
    resetToDefault,
  };
}

function applyThemeToDocument(theme: ThemeConfig, customizations: CustomizationControls) {
  const root = document.documentElement;
  root.style.setProperty("--theme-primary-color", customizations.primaryColor);
  root.style.setProperty("--theme-font-family", customizations.fontFamily);
  root.style.setProperty("--theme-border-radius", `${customizations.borderRadius}px`);
  root.style.setProperty("--theme-spacing", `${customizations.spacing}px`);
}
