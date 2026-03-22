"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div style={{ width: 36, height: 20 }} />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      style={{
        width: 36,
        height: 20,
        borderRadius: 10,
        border: "1px solid var(--border-default)",
        backgroundColor: isDark ? "var(--surface-3)" : "var(--surface-3)",
        position: "relative",
        cursor: "pointer",
        padding: 0,
        transition: "background-color 0.3s",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 2,
          left: isDark ? 18 : 2,
          width: 14,
          height: 14,
          borderRadius: "50%",
          backgroundColor: "var(--accent)",
          transition: "left 0.3s",
        }}
      />
    </button>
  );
}
