import type { CustomizationControls } from "~/types/theme";
import { colorOptions, fontFamilyOptions } from "~/data/themes";
import { Slider } from "~/components/ui/slider/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select/select";
import styles from "./customization-controls.module.css";

interface CustomizationControlsProps {
  customizations: CustomizationControls;
  onUpdate: (key: keyof CustomizationControls, value: string | number) => void;
}

export function CustomizationControlsComponent({ customizations, onUpdate }: CustomizationControlsProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Customize Theme</h2>

      <div className={styles.controlGroup}>
        <label className={styles.label}>
          Primary Color
          <span className={styles.description}>Choose the main accent color for your theme</span>
        </label>
        <div className={styles.colorGrid}>
          {colorOptions.map((option) => (
            <div
              key={option.value}
              className={`${styles.colorOption} ${customizations.primaryColor === option.value ? styles.selected : ""}`}
              style={{ backgroundColor: option.color }}
              onClick={() => onUpdate("primaryColor", option.value)}
              title={option.label}
            />
          ))}
        </div>
      </div>

      <div className={styles.controlGroup}>
        <label className={styles.label}>
          Font Family
          <span className={styles.description}>Select the typography style for your interface</span>
        </label>
        <Select value={customizations.fontFamily} onValueChange={(value) => onUpdate("fontFamily", value)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {fontFamilyOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className={styles.controlGroup}>
        <div className={styles.sliderContainer}>
          <div className={styles.sliderHeader}>
            <label className={styles.label}>Border Radius</label>
            <span className={styles.sliderValue}>{customizations.borderRadius}px</span>
          </div>
          <span className={styles.description}>Adjust the roundness of interface elements</span>
          <Slider
            className={styles.customSlider}
            value={[customizations.borderRadius]}
            onValueChange={(value) => onUpdate("borderRadius", value[0])}
            min={0}
            max={20}
            step={1}
          />
        </div>
      </div>

      <div className={styles.controlGroup}>
        <div className={styles.sliderContainer}>
          <div className={styles.sliderHeader}>
            <label className={styles.label}>Spacing</label>
            <span className={styles.sliderValue}>{customizations.spacing}px</span>
          </div>
          <span className={styles.description}>Control the spacing between interface elements</span>
          <Slider
            className={styles.customSlider}
            value={[customizations.spacing]}
            onValueChange={(value) => onUpdate("spacing", value[0])}
            min={8}
            max={32}
            step={2}
          />
        </div>
      </div>
    </div>
  );
}
