---
version: alpha
name: Accredian Modern
description: A bright, trust-forward education and career guidance system with strong blue accents and airy spacing.
colors:
  primary: "#1A73E8"
  primary-600: "#2563EB"
  primary-100: "#DDEBFF"
  secondary: "#111827"
  tertiary: "#6B7280"
  neutral: "#FFFFFF"
  surface: "#FFFFFF"
  surface-muted: "#F8FAFC"
  border: "#E5E7EB"
  on-surface: "#1F2937"
  on-surface-muted: "#4B5563"
  success: "#16A34A"
  error: "#DC2626"
typography:
  headline-display:
    fontFamily: Roboto
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
  headline-lg:
    fontFamily: Roboto
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.44
    letterSpacing: 0px
  headline-md:
    fontFamily: Circular, Inter, sans-serif
    fontSize: 25px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0px
  headline-sm:
    fontFamily: Circular, Inter, sans-serif
    fontSize: 21px
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: 0.4px
  body-lg:
    fontFamily: Roboto
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0px
  body-md:
    fontFamily: Roboto
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  body-sm:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  label-lg:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
  label-md:
    fontFamily: Roboto
    fontSize: 12.8px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
  label-sm:
    fontFamily: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0px
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 2px
  sm: 12px
  md: 24px
  lg: 32px
  xl: 64px
  gutter: 24px
  section: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary-600}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
    height: "44px"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "44px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  chip:
    backgroundColor: "{colors.primary-100}"
    textColor: "{colors.primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "6px 10px"
---

# Accredian Modern

## Overview
Accredian presents as a polished, professional education and career-growth brand with a calm, high-trust tone. The interface is airy and spacious, with large hero messaging, restrained surfaces, and bright blue accents that create momentum without feeling aggressive. The overall feel is optimistic and advisory, aimed at users seeking credible guidance and clear next steps.

## Colors
- **Primary (#1A73E8):** The signature brand blue used for links, highlights, and active states. It signals confidence, guidance, and action.
- **Primary-600 (#2563EB):** A slightly deeper blue used for solid call-to-action buttons and stronger interactive emphasis.
- **Secondary (#111827):** A near-black ink tone for major text, especially headlines and navigation. It gives the UI a serious, professional backbone.
- **Tertiary (#6B7280):** A muted gray used for supporting copy and less prominent UI text.
- **Neutral (#FFFFFF):** Clean white used for buttons, cards, and the main page canvas.
- **Surface (#FFFFFF):** The default content surface, kept bright and minimal.
- **Surface-muted (#F8FAFC):** A very subtle cool off-white used for hover states or gentle section differentiation.
- **Border (#E5E7EB):** Light gray borders that define cards and containers without adding visual weight.
- **On-surface (#1F2937):** Primary body text color with strong readability on white backgrounds.
- **On-surface-muted (#4B5563):** Secondary content text for supportive descriptions and metadata.
- **Success (#16A34A):** Reserved for positive outcomes or confirmation messaging.
- **Error (#DC2626):** Reserved for validation states and destructive alerts.

## Typography
The system relies on Roboto for most reading and interface text, paired with Circular for select display headings where a softer, more contemporary voice is useful. Headings are bold and compact, with large sizes that support a conversion-oriented landing page. Body text stays moderately weighted and readable, while labels are strong and crisp for buttons, nav items, and micro-UI.

- `headline-display` and `headline-lg` are the hero and section-driving levels: bold Roboto, large size, and tight vertical rhythm for immediate clarity.
- `headline-md` and `headline-sm` use Circular/Inter for a more editorial, human touch in secondary headings.
- `body-lg` and `body-md` handle supporting copy, with enough weight to remain legible against the clean white background.
- `body-sm` and the label styles are used for navigation, button text, and compact annotations.
- Letter spacing is mostly neutral; only `headline-sm` introduces a slight 0.4px tracking adjustment for refined emphasis.

## Layout & Spacing
The layout is fluid and wide, optimized for a desktop landing page with generous negative space. Content is left-aligned in the hero, while secondary modules feel centered and card-based, creating a clear browsing rhythm. The spacing scale is simple and practical: 2px for micro adjustments, 12px for compact gaps, 24px and 32px for standard breathing room, and 64px for section separation.

Cards and content blocks use comfortable internal padding around 16px to 24px, while buttons and navigation controls stay compact to preserve the airy feel. The page favors large horizontal margins and open vertical pacing over dense information stacking.

## Elevation & Depth
Depth is subtle and relies more on contrast and shadows than on layered color systems. Cards use thin borders and white surfaces to separate content cleanly. Primary buttons and floating controls introduce soft blue-tinged shadows to make key actions feel clickable and tactile, while most other elements remain flat and crisp.

This restrained elevation approach keeps the interface professional and avoids heavy chrome. The result is a clean hierarchy where the most important actions stand out through color and shadow, not through complex surface stacking.

## Shapes
The shape language is soft but disciplined. Corners are rounded at 8px for interactive controls and cards, which gives the UI a friendly modern edge without looking playful. Pills and small indicators may use fully rounded geometry, but the general system avoids excessive curvature.

Overall, the shapes feel stable, accessible, and enterprise-friendly.

## Components
Buttons are the most expressive component in the system and carry the primary blue brand presence.

- `button-primary` is a filled call-to-action with blue background, white text, 44px height, and 8px radius. Use it for the strongest action in a given context.
- `button-secondary` is the inverse/outlined-feeling companion used for less dominant actions. In the screenshot, it appears as a white or transparent control with blue border treatment and dark text.
- `button-primary-hover` should brighten slightly to the primary blue and maintain clear contrast.
- `button-secondary-hover` should gain a subtle surface tint to indicate interaction without losing the clean look.
- `button-tertiary` is text-only and should be used for navigation links or lightweight actions.

Cards should remain simple: white background, 1px light border, 8px radius, and minimal shadow. They are intended to organize content, not to compete for attention.

Inputs should follow the same clean card logic: white surface, light border, 8px radius, and comfortable internal padding. Focus states should use the primary blue rather than heavy glow effects.

Chips, badges, and small status markers should stay compact and pill-shaped, with the brand blue used for emphasis. Navigation items are text-first, with active or linked items using blue rather than decorative underlines.

Icon buttons, carousel arrows, and floating action controls should be circular or near-circular, softly shadowed, and kept visually lightweight so they do not disrupt the spacious page composition.

## Do's and Don'ts
- Do use strong blue only for primary actions, links, and emphasis.
- Do keep backgrounds white and surfaces understated to preserve the airy editorial feel.
- Do use bold, large headlines for key messages and keep body copy concise.
- Do maintain 8px rounded corners for buttons, cards, and inputs.
- Don't introduce dark backgrounds or heavy gradients that reduce the brand’s clarity.
- Don't make buttons overly tall, pill-shaped, or overly decorative.
- Don't crowd sections with dense grids or tight line spacing.
- Don't overuse shadows; reserve depth for interactive and floating elements.