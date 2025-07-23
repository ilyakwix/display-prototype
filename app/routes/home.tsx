import React, { useState } from "react";
import { ChevronDown, Grid3X3Icon, ListIcon, Rows3Icon, SwatchBookIcon, TypeIcon } from "lucide-react";
import { GridIcon, ListBulletIcon, PlusIcon, MinusIcon } from "@radix-ui/react-icons";
import styles from "./home.module.css";
import { DropdownMenu, IconButton, Text, Flex, Tooltip } from "@radix-ui/themes";

interface ColorOption {
  label: string;
  value: string;
  badgeName: string;
}

interface ColorGroup {
  name: string;
  colors: ColorOption[];
}

interface HoveredColorInfo {
  label: string;
  description: string;
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
  const [hoveredColorInfo, setHoveredColorInfo] = useState<HoveredColorInfo | null>(null);
  const [showAllColors, setShowAllColors] = useState<boolean>(false);
  const [isSwatchView, setIsSwatchView] = useState<boolean>(false);

  const handleMouseEnter = (colorIndex: number, color: ColorOption) => {
    const usageGuidance = colorUsageGuidance[colorIndex - 1];
    setHoveredColorInfo({
      label: color.label,
      description: usageGuidance,
    });
  };

  const handleMouseLeave = () => {
    setHoveredColorInfo(null);
  };

  const shouldShowColor = (colorIndex: number): boolean => {
    if (showAllColors) return true;
    // Show colors 1, 2, 10, 11, 12 (indices 0, 1, 9, 10, 11)
    return colorIndex === 0 || colorIndex === 1 || colorIndex >= 9;
  };

  const handleDropdownOpenChange = (open: boolean) => {
    if (!open) {
      // Reset to condensed view when dropdown closes
      setShowAllColors(false);
      setHoveredColorInfo(null);
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
          <div className={styles.stickyHeader}>
            <Flex align="center" gap="3" justify="end">
              <Tooltip content={isSwatchView ? "Switch to List View" : "Switch to Swatch View"}>
                <IconButton
                  variant="ghost"
                  size="1"
                  color="gray"
                  onClick={() => setIsSwatchView(!isSwatchView)}
                  aria-label={isSwatchView ? "Switch to List View" : "Switch to Swatch View"}
                >
                  {isSwatchView ? (
                    <Rows3Icon size={16} strokeWidth={1.5} />
                  ) : (
                    <Grid3X3Icon size={16} strokeWidth={1.5} />
                  )}
                </IconButton>
              </Tooltip>
              <Tooltip content={showAllColors ? "Show Text Colors" : "Show All Colors"}>
                <IconButton
                  variant="ghost"
                  size="1"
                  color="gray"
                  onClick={() => setShowAllColors(!showAllColors)}
                  aria-label={showAllColors ? "Show Less Colors" : "Show All Colors"}
                >
                  {showAllColors ? (
                    <TypeIcon size={16} strokeWidth={1.5} />
                  ) : (
                    <SwatchBookIcon size={16} strokeWidth={1.5} />
                  )}
                </IconButton>
              </Tooltip>
            </Flex>
          </div>

          {colorGroups.map((group, groupIndex) => {
            const filteredColors = group.colors.filter((color, colorIndex) => shouldShowColor(colorIndex));

            if (filteredColors.length === 0) return null;

            return (
              <React.Fragment key={group.name}>
                <DropdownMenu.Group className={`${styles.colorGroup} ${isSwatchView ? styles.swatchViewGroup : ""}`}>
                  {filteredColors.map((color) => {
                    const colorIndex = group.colors.indexOf(color);

                    return (
                      <DropdownMenu.Item
                        key={color.label}
                        className={isSwatchView ? styles.swatchViewColorItem : styles.colorItem}
                        onSelect={() => {
                          console.log(`Selected: ${color.label} - ${color.value} (${color.badgeName})`);
                        }}
                        onMouseEnter={() => handleMouseEnter(colorIndex + 1, color)}
                        onMouseLeave={handleMouseLeave}
                        aria-label={`${color.label} - ${color.badgeName}`}
                      >
                        {isSwatchView ? (
                          <div className={styles.swatchViewColorSwatch} style={{ backgroundColor: color.value }} />
                        ) : (
                          <>
                            <div className={styles.colorInfo}>
                              <div className={styles.colorSwatch} style={{ backgroundColor: color.value }} />
                              <span className={styles.colorLabel}>{color.label}</span>
                            </div>
                            <span className={styles.colorBadge}>{color.badgeName}</span>
                          </>
                        )}
                      </DropdownMenu.Item>
                    );
                  })}
                </DropdownMenu.Group>
                {groupIndex < colorGroups.length - 1 && filteredColors.length > 0 && <DropdownMenu.Separator />}
              </React.Fragment>
            );
          })}

          <div className={styles.stickyFooter}>
            {isSwatchView && hoveredColorInfo && (
              <Text size="1" className={styles.hoveredColorName}>
                {hoveredColorInfo.label}
              </Text>
            )}
            <Text size="1" className={styles.hoveredColorDescription}>
              {hoveredColorInfo?.description || "Select a color"}
            </Text>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
