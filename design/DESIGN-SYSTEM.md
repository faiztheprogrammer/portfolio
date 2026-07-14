# Faiz Ur Rehman — Portfolio Design System (v1.0, LOCKED)

Positioning: **Software Engineer specializing in Full-Stack Development, AI Automation, and Quality Engineering.**
Hierarchy: Software Engineer → Full-Stack → AI & Automation → Quality Engineering (as proof of discipline).
Brand essence: *Precision. Proof. Polish.*

---

## 1. Design Tokens

### Color (dark-first; light theme derived, not inverted)

```css
:root {
  /* Neutrals — warm near-black, not slate-blue */
  --bg:            #0A0A0B;   /* page background */
  --bg-subtle:     #101012;   /* alternating sections */
  --surface:       #141416;   /* cards */
  --surface-hover: #1A1A1D;
  --border:        #232326;   /* hairlines */
  --border-strong: #2E2E33;   /* interactive borders */

  /* Text */
  --text:          #F4F4F5;   /* headings, primary (15.6:1) */
  --text-body:     #C9C9CF;   /* body copy (10.5:1) */
  --text-muted:    #8E8E96;   /* captions, meta (4.9:1 — AA floor, never smaller than 14px) */

  /* Accent — "tests pass" emerald */
  --accent:        #10B981;   /* CTAs, links, active states */
  --accent-hover:  #34D399;
  --accent-subtle: rgba(16,185,129,0.08);  /* tinted surfaces */
  --accent-ring:   rgba(16,185,129,0.35);  /* focus rings, glows */

  /* Semantic */
  --danger:        #F87171;
  --warning:       #FBBF24;

  /* Terminal syntax (hero + code accents) */
  --code-green:    #4ADE80;
  --code-cyan:     #67E8F9;
  --code-violet:   #C4B5FD;
  --code-comment:  #6B7280;
}
```

Rules:
- Accent used surgically: primary CTA, links, active nav, checkmarks, metrics. Never for large surfaces.
- On-accent text is `#052E1B` (dark on emerald) — white on emerald fails contrast.
- Light theme ships at launch via `data-theme="light"` (bg `#FAFAF9`, surface `#FFFFFF`, text `#18181B`, accent darkened to `#059669` for 4.5:1). Dark is default; no flash-of-wrong-theme (inline script sets theme before paint).

### Typography

| Role | Font | Weights | Usage |
|---|---|---|---|
| Display / headings | **Space Grotesk** | 500, 700 | h1–h3, big numbers |
| Body / UI | **Inter** | 400, 500, 600 | paragraphs, nav, buttons |
| Mono | **JetBrains Mono** | 400, 500 | terminal, metrics, tags, section indices |

Fluid scale (clamp, 1.25 ratio at desktop):

```
--fs-hero:  clamp(2.5rem, 1.2rem + 5.2vw, 4.5rem)   / lh 1.05 / tracking -0.02em
--fs-h2:    clamp(1.75rem, 1.2rem + 2.2vw, 2.75rem) / lh 1.15 / tracking -0.01em
--fs-h3:    clamp(1.25rem, 1.1rem + 0.8vw, 1.5rem)  / lh 1.3
--fs-body:  1rem (16px) / lh 1.65                    (1.125rem for lead paragraphs)
--fs-small: 0.875rem / lh 1.5
--fs-mono:  0.8125rem / lh 1.6
```

Self-hosted via `next/font` (subset latin, `display: swap`). Body max measure: 65ch.

### Spacing & Layout

- 4px base scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- Container: `max-width: 1152px` (max-w-6xl), gutters 20px mobile / 32px tablet / 48px desktop.
- Section vertical rhythm: 96px desktop / 64px mobile between sections.
- Grid: 12-col desktop, 4-col mobile. Bento tiles snap to this grid.
- Radii: `--r-sm: 8px` (tags, inputs), `--r-md: 12px` (cards), `--r-lg: 20px` (bento feature tiles), pill for buttons.
- Breakpoints: 375 / 768 / 1024 / 1440.
- Z-index scale: 0 / 10 (sticky nav) / 40 (dropdown) / 100 (modal) / 110 (toast).

### Elevation & Effects

Dark UIs read elevation through **borders + background steps**, not shadows:
- Card: `background: var(--surface); border: 1px solid var(--border)`.
- Hover: border → `--border-strong`, bg → `--surface-hover`, translateY(-2px).
- Accent glow reserved for primary CTA hover and hero terminal: `box-shadow: 0 0 24px var(--accent-ring)`.
- Page texture: fixed 2.5% opacity noise overlay + faint 64px grid lines in hero only (engineering-blueprint cue). Both pure CSS, zero requests.
- No glassmorphism, no gradient meshes, no particles. Restraint is the aesthetic.

### Iconography

- **Lucide** (`lucide-react`), 1.5px stroke, 20px default / 16px inline. One family, outline only. No emojis anywhere in UI.

## 2. Motion System (Framer Motion)

Global tokens — every animation uses these; no ad-hoc values:

```ts
export const ease = [0.21, 0.47, 0.32, 0.98];      // easeOutQuart-ish
export const dur  = { fast: 0.15, base: 0.25, slow: 0.4 };
export const spring = { type: "spring", stiffness: 260, damping: 24 };
// Reveal: fade + y:12px, once:true, viewport margin -80px
// Stagger children: 0.06s; exits at 60% of enter duration
```

Choreography:
1. **Hero load:** name/role lines stagger in (0.06s), then terminal types its test run once. Total sequence < 1.6s; content readable from first frame (animate opacity 0.001→1 trick not used — SSR text is visible without JS).
2. **Scroll reveals:** fade + 12px rise, once only. Max 2 animated groups per viewport.
3. **Cards:** spring lift + border color shift on hover; scale 0.98 on press.
4. **Primary CTA:** magnetic pull (max 6px) + glow on hover — the only "showpiece" micro-interaction, which is why it stays special.
5. **Nav:** active-link underline via `layoutId` shared layout.
6. **Case-study transitions:** shared-element thumbnail → hero image.
7. `prefers-reduced-motion`: all transforms/typing disabled via MotionConfig `reducedMotion="user"`; opacity fades only.

## 3. Component Specs

**Button / primary** — pill, emerald bg, `#052E1B` text, Inter 600 15px, h 48px, px 28px. Hover: `--accent-hover` + glow. Focus: 2px ring `--accent-ring` offset 2px.
**Button / secondary** — transparent, 1px `--border-strong`, text `--text`. Hover: border `--accent`, text `--accent`.
**Nav** — sticky, h 64px, bg `rgba(10,10,11,0.8)` + backdrop-blur 12px, hairline bottom border appears after 8px scroll. Links: Home-sections + Resume. Right: theme toggle + "Contact" primary-sm. Mobile: full-screen overlay menu, staggered links.
**Project card** — surface card, r-12. Top: 16:10 screenshot (next/image, fixed aspect = zero CLS). Body: mono tag row (stack), h3 title, one-line outcome with metric, "Case study →". Entire card is one link with focus ring.
**Bento tile** — r-20, surface; feature tiles span 2 cols. Content: Lucide icon 20px in accent-subtle rounded square, h3, 2-line body, optional mono metric footer.
**Terminal (hero)** — r-12, `#0D0D0F`, traffic-light dots muted, JetBrains Mono 13px. Types 4 lines, ends with cursor blink. `aria-hidden="true"` (decorative; real content is in the H1).
**Metric stat** — Space Grotesk 700 clamp(2rem…2.75rem) in accent + Inter 14px muted label. Count-up on first view (disabled under reduced motion).
**Section header** — mono index (`01`, `02`…) in accent + h2. Left-aligned always.
**Footer** — big "Let's build something reliable." h2, email click-to-copy (toast "Copied ✓"), socials, availability line, tiny "Built with Next.js · tested with Playwright ✓" mono note.

## 4. Accessibility Contract (non-negotiable)

- All text ≥ 4.5:1 (verified per theme); muted text never below 14px.
- One h1 per page; sequential headings; landmarks (`header/nav/main/footer`); skip-link.
- Full keyboard nav, visible 2px focus rings everywhere; focus moved to main on route change.
- Touch targets ≥ 44px; `touch-action: manipulation`.
- Terminal/typing/count-ups: decorative, aria-hidden, reduced-motion-safe.
- No autoplaying media, no scroll-jacking, no cookie banner (cookieless analytics).

## 5. Performance Budget

- Lighthouse ≥ 95 all categories; LCP < 1.8s (hero is text — inherently fast), CLS < 0.05, INP < 200ms.
- JS: Framer Motion via `LazyMotion` + `domAnimation` (~21kb); no other animation libs; total first-load JS < 130kb.
- Fonts: 3 families × subsets, preloaded, swap. Images: AVIF/WebP via next/image, lazy below fold.
