import React from "react";
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
          <div className={styles.stickyHeader}>Hello world</div>
          {colorGroups.map((group, groupIndex) => (
            <React.Fragment key={group.name}>
              <DropdownMenu.Group className={styles.colorGroup}>
                {group.colors.map((color) => (
                  <DropdownMenu.Item
                    key={color.label}
                    className={styles.colorItem}
                    onSelect={() => {
                      console.log(`Selected: ${color.label} - ${color.value} (${color.badgeName})`);
                    }}
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
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
