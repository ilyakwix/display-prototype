import { useThemeCustomizer } from "~/hooks/use-theme-customizer";
import { ThemeSelector } from "~/components/theme-selector";
import { CustomizationControlsComponent } from "~/components/customization-controls";
import { LivePreview } from "~/components/live-preview";
import { ActionButtons } from "~/components/action-buttons";
import { ColorSchemeToggle } from "~/components/ui/color-scheme-toggle/color-scheme-toggle";
import { Palette } from "lucide-react";
import styles from "./home.module.css";

export default function Home() {
  const { selectedTheme, customizations, hasChanges, selectTheme, updateCustomization, applyChanges, resetToDefault } =
    useThemeCustomizer();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <Palette size={20} />
            </div>
            <h1 className={styles.logoText}>ThemePilot</h1>
          </div>
          <ColorSchemeToggle />
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.leftColumn}>
          <ThemeSelector selectedTheme={selectedTheme} onThemeSelect={selectTheme} />
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.controlsPanel}>
            <CustomizationControlsComponent customizations={customizations} onUpdate={updateCustomization} />
          </div>
        </div>
      </main>

      <div className={styles.previewSection}>
        <div className={styles.previewContent}>
          <LivePreview />
        </div>
        <ActionButtons hasChanges={hasChanges} onApply={applyChanges} onReset={resetToDefault} />
      </div>
    </div>
  );
}
