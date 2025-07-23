import { ChevronDown } from "lucide-react";
import styles from "./home.module.css";
import { DropdownMenu } from "@radix-ui/themes";

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
      <DropdownMenu.Root>Dropdown</DropdownMenu.Root>
    </div>
  );
}
