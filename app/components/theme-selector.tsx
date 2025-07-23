import type { ThemeConfig } from "~/types/theme";
import { predefinedThemes } from "~/data/themes";
import styles from "./theme-selector.module.css";

interface ThemeSelectorProps {
  selectedTheme: ThemeConfig;
  onThemeSelect: (theme: ThemeConfig) => void;
}

export function ThemeSelector({ selectedTheme, onThemeSelect }: ThemeSelectorProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Choose a Theme</h2>
      <div className={styles.grid}>
        {predefinedThemes.map((theme) => (
          <div
            key={theme.id}
            className={`${styles.themeCard} ${selectedTheme.id === theme.id ? styles.selected : ""}`}
            onClick={() => onThemeSelect(theme)}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{theme.name}</h3>
              {selectedTheme.id === theme.id && <span className={styles.selectedBadge}>Active</span>}
            </div>
            <p className={styles.cardDescription}>{theme.description}</p>
            <div
              className={styles.preview}
              style={{
                backgroundColor: theme.preview.backgroundColor,
                color: theme.preview.textColor,
              }}
            >
              <div className={styles.previewContent}>
                <div className={styles.previewHeader}>
                  <div className={styles.previewDot} style={{ backgroundColor: theme.preview.accentColor }} />
                  <div className={styles.previewDot} style={{ backgroundColor: theme.preview.accentColor }} />
                  <div className={styles.previewDot} style={{ backgroundColor: theme.preview.accentColor }} />
                </div>
                <div>
                  <p className={styles.previewText}>Sample Interface</p>
                  <button
                    className={styles.previewButton}
                    style={{
                      backgroundColor: theme.preview.accentColor,
                      color: "white",
                    }}
                  >
                    Action
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
