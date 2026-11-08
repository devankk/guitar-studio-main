---
name: ui-ux-pro-max
description: Complete design intelligence skill for UI/UX. Provides searchable palettes, typography pairings, design styles (Glassmorphism, Minimalist, Bento, Neumorphism, Brutalism), and stack-specific guidelines.
---

# UI/UX Pro Max Design Intelligence

A comprehensive design intelligence skill to plan, structure, and refine web and application user interfaces.

## When to Use This Skill
- Whenever planning, designing, or implementing new UI components, landing pages, or dashboards.
- When selecting color palettes, typography pairings, or design styles for specific domains (SaaS, E-commerce, Media/Audio, FinTech, DevTools).
- When validating accessibility, responsive layout rules, and micro-interactions.

## Design Workflow

### Step 1: Establish the Design System
Before writing frontend code, establish the core visual tokens:
1. **Industry Domain:** Identify whether the interface is SaaS, Creative/Audio, E-commerce, Developer Tools, or Editorial.
2. **Design Style:** Choose an intentional style direction:
   - **Bento Grid:** Information-dense, modular card layouts with varied aspect ratios.
   - **Minimalist / Clean:** Ultra-refined spacing, subtle borders, high typographic clarity.
   - **Dark Mode Studio:** Deep neutral backgrounds (#0a0a0c, #121216), crisp borders, neon or warm accents.
   - **Glassmorphism / Frosted:** Layered translucency (`backdrop-filter: blur()`), subtle specular highlights.
   - **Brutalism / High-Contrast:** Bold black borders, monospaced accents, raw geometric layout.

### Step 2: Typography Pairing System
- **Display / Heading Font:** High-character display typeface (e.g., Syne, Plus Jakarta Sans, Outfit, Cabinet Grotesk, Space Grotesk).
- **Body / Interface Font:** Crisp, readable sans-serif (e.g., Inter, DM Sans, Plus Jakarta Sans, Geist).
- **Monospace Font:** For numeric data, code, or technical metrics (e.g., JetBrains Mono, Fira Code).

### Step 3: Color Palette Formulation
Define 5 core CSS tokens:
- `--background`: Base surface (e.g., `#09090b` or `#f8fafc`)
- `--surface-raised`: Card / container surface (e.g., `#18181b` or `#ffffff`)
- `--foreground`: Primary text with strong contrast
- `--foreground-muted`: Secondary / metadata text
- `--primary-accent`: One distinct brand accent (e.g., Electric Violet `#8b5cf6`, Amber `#f59e0b`, Emerald `#10b981`)
- `--border-subtle`: 1px translucent border (`rgba(255, 255, 255, 0.08)`)

### Step 4: Component & UX Best Practices
- **Visual Depth:** Use subtle border contrast and layered background tones instead of heavy muddy drop shadows.
- **Micro-Interactions:** Smooth CSS transitions (150ms–250ms cubic-bezier), active scale transforms (`active:scale-[0.98]`).
- **Accessibility:** Minimum 4.5:1 text contrast ratio, clear visible focus rings (`focus-visible:ring-2`), minimum 44px touch targets.
- **Mobile Responsiveness:** Mobile-first layout with smooth fluid scaling and collapsible navigation.
