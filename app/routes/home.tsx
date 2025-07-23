import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./home.module.css";
import { DropdownMenu } from "@radix-ui/themes";

interface ColorOption {
  label: string;
  value: string;
  badgeName: string;
}

interface ColorGroup {
  name: string;
  colors: ColorOption[];
}

const colorUsageGuidance = [
  "App background",
  "Subtle background",
  "UI element background",
  "Hovered UI element background",
  "Active / Selected UI element background",
  "Subtle borders and separators",
  "UI element border and focus rings",
  "Hovered UI element border",
  "Solid backgrounds",
  "Hovered solid backgrounds",
  "Low-contrast text",
  "High-contrast text",
];

const colorGroups: ColorGroup[] = [
  {
    name: "Neutral",
    colors: Array.from({ length: 12 }, (_, i) => ({
      label: `Neutral ${i + 1}`,
      value: `var(--gray-${i + 1})`,
      badgeName: `Slate ${i + 1}`,
    })),
  },
  {
    name: "Accent",
    colors: Array.from({ length: 12 }, (_, i) => ({
      label: `Accent ${i + 1}`,
      value: `var(--blue-${i + 1})`,
      badgeName: `Indigo ${i + 1}`,
    })),
  },
  {
    name: "Focus",
    colors: Array.from({ length: 12 }, (_, i) => ({
      label: `Focus ${i + 1}`,
      value: `var(--red-${i + 1})`,
      badgeName: `Red ${i + 1}`,
    })),
  },
];

export default function Home() {
  const [hoveredColor, setHoveredColor] = useState<string>("Select a color");

  const handleMouseEnter = (colorIndex: number) => {
    const usageGuidance = colorUsageGuidance[colorIndex - 1];
    setHoveredColor(usageGuidance);
  };

  const handleMouseLeave = () => {
    setHoveredColor("Select a color");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Radix Colors Dropdown Menu</h1>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button className={styles.dropdownTrigger}>
            Select Color
            <ChevronDown size={16} />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className={styles.dropdownContent}>
          {colorGroups.map((group, groupIndex) => (
            <React.Fragment key={group.name}>
              <DropdownMenu.Group className={styles.colorGroup}>
                {group.colors.map((color, colorIndex) => (
                  <DropdownMenu.Item
                    key={color.label}
                    className={styles.colorItem}
                    onSelect={() => {
                      console.log(`Selected: ${color.label} - ${color.value} (${color.badgeName})`);
                    }}
                    onMouseEnter={() => handleMouseEnter(colorIndex + 1)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className={styles.colorInfo}>
                      <div className={styles.colorSwatch} style={{ backgroundColor: color.value }} />
                      <span className={styles.colorLabel}>{color.label}</span>
                    </div>
                    <span className={styles.colorBadge}>{color.badgeName}</span>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Group>
              {groupIndex < colorGroups.length - 1 && <DropdownMenu.Separator />}
            </React.Fragment>
          ))}
          <div className={styles.stickyFooter}>{hoveredColor}</div>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
