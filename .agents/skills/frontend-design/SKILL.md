---
name: frontend-design
description: Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, and making choices that don't read as templated defaults.
---

# Frontend Design

Approach this as the design lead at a boutique design studio known for giving every client a distinct visual identity that is not mistaken for anyone else's. Avoid cliché or templated proposals. Make deliberate, opinionated choices about palette, typography, and layout that are specific to the brief, taking aesthetic risk when justified.

## Ground your designs in the subject matter

If the brief does not identify what the product or subject matter is, identify it first before designing, or determine the audience and the primary job of the interface:
- A design for an analytics dashboard will be aesthetically very different from a luxury fashion editorial or an audio workstation.
- Build with the brief's real domain and subject matter throughout rather than generic placeholder styles.

## Core Design Principles

### 1. Aesthetic Direction & Tone
Commit to a strong, intentional aesthetic direction rather than generic defaults:
- Examples: *Brutally minimal*, *Editorial / magazine*, *Retro-futuristic*, *Warm / organic*, *Industrial / utilitarian*, *Modern dark mode / high contrast*.
- Avoid "AI slop" clichés: avoid uninspired purple gradient buttons, uniform rounded cards with 1px border everywhere, and identical 3-column feature layouts.

### 2. Typography
- Typography carries personality and sets the voice.
- Avoid relying solely on overused default system fonts like Inter, Roboto, or Arial when expressive typography is called for.
- Select purposeful pairings: a bold, characterful display font for headings matched with a highly legible, clean body font.
- Establish deliberate typographic scale, line-height, letter-spacing, and hierarchy.

### 3. Color & Theme
- Establish a deliberate, compact palette of 4–6 named color tokens tied to the product concept.
- Implement them consistently through CSS variables.
- Prioritize high contrast and accessibility (WCAG AA compliant color pairings).
- Balance dominant shades with one or two sharp, intentional accent colors.

### 4. Spatial Composition & Layout
- Break out of rigid, predictable card grids when appropriate.
- Use asymmetry, overlapping elements, grid-breaking callouts, or intentional generous whitespace.
- Structure responsive viewports down to mobile screens seamlessly.

### 5. Restraint & Self-Critique
- Spend boldness in one primary place: let one hero element or visual device be memorable.
- Keep supporting elements disciplined, quiet, and functional.
- Ensure keyboard focus states, reduced-motion preferences, and accessible tap targets are preserved.
