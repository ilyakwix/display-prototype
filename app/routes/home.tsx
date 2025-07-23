import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu/dropdown-menu";
import styles from "./home.module.css";

interface ColorOption {
  label: string;
  value: string;
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
    })),
  },
  {
    name: "Accent",
    colors: Array.from({ length: 12 }, (_, i) => ({
      label: `Accent ${i + 1}`,
      value: `var(--blue-${i + 1})`,
    })),
  },
  {
    name: "Focus",
    colors: Array.from({ length: 12 }, (_, i) => ({
      label: `Focus ${i + 1}`,
      value: `var(--red-${i + 1})`,
    })),
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Radix Colors Dropdown Menu</h1>

      <DropdownMenu>
        <DropdownMenuTrigger className={styles.dropdownTrigger}>
          Select Color
          <ChevronDown size={16} />
        </DropdownMenuTrigger>

        <DropdownMenuContent className={styles.dropdownContent}>
          {colorGroups.map((group, groupIndex) => (
            <div key={group.name} className={styles.colorGroup}>
              <DropdownMenuLabel className={styles.groupLabel}>{group.name}</DropdownMenuLabel>

              {group.colors.map((color) => (
                <DropdownMenuItem
                  key={color.label}
                  className={styles.colorItem}
                  onSelect={() => {
                    console.log(`Selected: ${color.label} (${color.value})`);
                  }}
                >
                  <div className={styles.colorSwatch} style={{ backgroundColor: color.value }} />
                  <span className={styles.colorLabel}>{color.label}</span>
                </DropdownMenuItem>
              ))}

              {groupIndex < colorGroups.length - 1 && <DropdownMenuSeparator />}
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
