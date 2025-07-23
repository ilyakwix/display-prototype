import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./home.module.css";
import { DropdownMenu, Switch, Text, Flex, TextField } from "@radix-ui/themes";

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
  const [hoveredColorInfo, setHoveredColorInfo] = useState<string | null>(null);
  const [showAllColors, setShowAllColors] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleMouseEnter = (colorIndex: number) => {
    const usageGuidance = colorUsageGuidance[colorIndex - 1];
    setHoveredColorInfo(usageGuidance);
  };

  const handleMouseLeave = () => {
    setHoveredColorInfo(null);
  };

  const shouldShowColor = (colorIndex: number): boolean => {
    if (showAllColors) return true;
    // Show colors 1, 2, 10, 11, 12 (indices 0, 1, 9, 10, 11)
    return colorIndex === 0 || colorIndex === 1 || colorIndex >= 9;
  };

  const matchesSearch = (color: ColorOption): boolean => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return color.label.toLowerCase().includes(query) || color.badgeName.toLowerCase().includes(query);
  };

  const shouldDisplayColor = (color: ColorOption, colorIndex: number): boolean => {
    const hasSearchQuery = searchQuery.trim().length > 0;

    // If there's a search query, show all colors that match the search
    if (hasSearchQuery) {
      return matchesSearch(color);
    }

    // If no search query, use the "Show all colors" toggle logic
    return shouldShowColor(colorIndex);
  };

  const handleDropdownOpenChange = (open: boolean) => {
    if (!open) {
      // Reset to condensed view when dropdown closes
      setShowAllColors(false);
      setHoveredColorInfo(null);
      setSearchQuery("");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Radix Colors Dropdown Menu</h1>

      <DropdownMenu.Root onOpenChange={handleDropdownOpenChange}>
        <DropdownMenu.Trigger>
          <button className={styles.dropdownTrigger}>
            Select Color
            <ChevronDown size={16} />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className={styles.dropdownContent}>
          <div className={styles.searchContainer}>
            <TextField.Root>
              <TextField.Slot>
                <input
                  type="text"
                  placeholder="Search colors..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    width: "100%",
                    fontSize: "var(--font-size-1)",
                    color: "var(--color-base-text)",
                  }}
                />
              </TextField.Slot>
            </TextField.Root>
          </div>

          {colorGroups.map((group, groupIndex) => {
            const filteredColors = group.colors.filter((color, colorIndex) => shouldDisplayColor(color, colorIndex));

            if (filteredColors.length === 0) return null;

            return (
              <React.Fragment key={group.name}>
                <DropdownMenu.Group className={styles.colorGroup}>
                  {filteredColors.map((color) => {
                    const colorIndex = group.colors.indexOf(color);

                    return (
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
                    );
                  })}
                </DropdownMenu.Group>
                {groupIndex < colorGroups.length - 1 && filteredColors.length > 0 && <DropdownMenu.Separator />}
              </React.Fragment>
            );
          })}

          <div className={styles.stickyFooter}>
            {hoveredColorInfo ? (
              <Text size="1">{hoveredColorInfo}</Text>
            ) : (
              <Flex align="center" gap="2" className={styles.switchContainer}>
                <label htmlFor="show-all-colors" className={styles.switchLabel}>
                  <Text size="1">Show all colors</Text>
                </label>
                <Switch id="show-all-colors" checked={showAllColors} onCheckedChange={setShowAllColors} size="1" />
              </Flex>
            )}
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
