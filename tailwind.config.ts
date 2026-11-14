import type { Config } from "tailwindcss";

/**
 * Design tokens carried over 1:1 from the original design export
 * (colours, spacing, radii, type scale) so the rebuild is pixel-faithful.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "surface-dim": "#d8dadc",
        "primary-fixed": "#d6e3ff",
        "on-primary-fixed": "#0d1c32",
        "surface-container-highest": "#e0e3e5",
        "on-surface": "#191c1e",
        "outline-variant": "#c5c6cd",
        "on-tertiary-container": "#6e84af",
        secondary: "#0055c7",
        "on-secondary-fixed": "#001945",
        background: "#f7f9fb",
        tertiary: "#000000",
        "secondary-fixed": "#d9e2ff",
        "inverse-on-surface": "#eff1f3",
        "on-background": "#191c1e",
        "surface-container-high": "#e6e8ea",
        "surface-bright": "#f7f9fb",
        "on-surface-variant": "#44474d",
        "secondary-fixed-dim": "#b0c6ff",
        "primary-fixed-dim": "#b9c7e4",
        "error-container": "#ffdad6",
        "tertiary-container": "#001b3f",
        primary: "#000000",
        surface: "#f7f9fb",
        "on-error": "#ffffff",
        "on-secondary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "surface-tint": "#515f78",
        "on-primary": "#ffffff",
        "inverse-primary": "#b9c7e4",
        "secondary-container": "#306fe4",
        "surface-container": "#eceef0",
        "on-primary-container": "#76849f",
        "surface-variant": "#e0e3e5",
        "primary-container": "#0d1c32",
        error: "#ba1a1a",
        "surface-container-low": "#f2f4f6",
        "inverse-surface": "#2d3133",
        "on-secondary-container": "#fefcff",
        outline: "#75777e",
        // Brand accent used for headings on dark backgrounds
        "on-secondary-fixed-variant": "#00419c",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        gutter: "1.5rem",
        "gutter-mobile": "1rem",
        margin: "3rem",
        "margin-mobile": "1.25rem",
      },
      fontFamily: {
        sans: ["\"Plus Jakarta Sans Variable\"", "system-ui", "sans-serif"],
        display: ["\"Plus Jakarta Sans Variable\"", "system-ui", "sans-serif"],
        label: ["\"Inter Variable\"", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.15", letterSpacing: "-0.03em", fontWeight: "800" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-lg": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg-mobile": ["1.75rem", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-md": ["1.75rem", { lineHeight: "1.3", letterSpacing: "-0.015em", fontWeight: "600" }],
        "headline-sm": ["1.25rem", { lineHeight: "1.4", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.5", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        "label-lg": ["1rem", { lineHeight: "1.2", letterSpacing: "0.01em", fontWeight: "600" }],
        "label-md": ["0.875rem", { lineHeight: "1.2", letterSpacing: "0.02em", fontWeight: "600" }],
        "label-sm": ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.04em", fontWeight: "600" }],
      },
      boxShadow: {
        cta: "0 10px 25px -3px rgba(29,99,216,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
