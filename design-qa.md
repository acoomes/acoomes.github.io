# Portfolio design and interaction QA

final result: passed

## Visual target and evidence

- Selected design: Option 3 (Open Workbench), with the user-requested official Phoenix Technologies logo correction.
- Source: `/Users/andrewcoomes/.codex/generated_images/01a0b24f-73b1-7371-8f20-70ffb1bb8f55/exec-f99cd095-de07-48a9-8409-a4c598d6f345.png` (1469 × 1071).
- Implementation: http://localhost:4173/; Chrome, since the in-app browser timed out on localhost.
- Evidence directory: `../design/qa/` in the task workspace (outside the deployed repository).
- Desktop viewport: 1440 × 1050 CSS pixels, light appearance, page at top, dialogs closed.
- Desktop screenshot: `desktop-final.png` (1425 × 1039 output pixels). Browser capture output is slightly downsampled relative to CSS size. Both reference and capture were normalized to 720 × 525 for the combined comparison; the subpixel aspect difference is insignificant.
- Full comparison: `final-comparison.jpg`, source and implementation together.
- Focused comparison: `phoenix-comparison.jpg`, confirming the actual lowercase black/red Phoenix mark.
- Other evidence: `full-page.png`, `project-desktop.png`, `mobile-top.png`, `project-mobile.png`, `contact-320.png`, `tablet-top.png`.

## Findings and iteration history

1. Initial desktop: white rectangular image backgrounds interrupted the continuous tabletop (P1). Removed the workbench stacking context so multiply compositing reaches the page background. Updated evidence: `desktop-v2.png` and `desktop-v2-comparison.jpg`.
2. Project captions were offset from their objects and the first section ran too tall (P2). Adjusted caption placement and desktop spacing. Final comparison preserves the headline, three-object composition, actions, and experience strip.
3. Enlarged corner mug overlapped current-work copy (P2). Shifted decorative artwork right and constrained copy width. Inspected the final current-work area at full readable scale; no overlap remains.
4. Dialog backward-tab behavior could leave the content (P2). Added explicit boundary focus wrapping. Retested after refreshing the script cache: Shift+Tab from Close reaches 86 Drift; Tab returns to Close. Escape closes and restores the triggering project link.
5. Final combined comparison: no actionable P0/P1/P2 findings.

## Required fidelity surfaces

- Typography: locally served DM Sans, heavy display headline, compact navigation, readable body text. Desktop two-line headline matches the selected composition. Mobile preserves the same headline at a responsive size; career and contact text wrap without clipping.
- Spacing: fixed desktop rail becomes a compact top navigation on tablet/phone; three-column desktop workbench becomes stacked objects on phones. Checked 1440, 768, 390, and 320 px widths without document overflow.
- Colors: warm ivory paper, near-black text, cobalt actions and accents. Visible keyboard focus, selected navigation states, and reduced-motion CSS are included.
- Images: independently generated, optimized illustrations share the selected tactile art direction. Official Phoenix logo is downloaded from phoenixtech.com and proportionally resized, not generated. All image and font files load locally. Source details are in `assets/SOURCES.md`.
- Content: existing site supplied employment, roles, project descriptions, certifications, location, and historical Formula Drift license. No invented employment dates, quantified outcomes, testimonials, or case-study results. Additional lower sections extend the selected first-screen concept with the same typography and spacing.

## Interaction verification

- All three project links open the correct accessible native dialog.
- Live-site and GitHub source URLs verified for each project.
- Keyboard activation, Escape dismissal, explicit forward/backward focus wrapping, and focus restoration verified.
- Main navigation and home anchor work; active navigation reflects visible section.
- Contact navigation and email-copy success tested. Mail and profile destinations inspected.
- Phone dialog and contact section inspected at 390 × 844 and 320 × 740; tablet inspected at 768 × 1024.
- No browser console errors or warnings in final runtime checks.
- JavaScript syntax check, all 59 HTML references, stylesheet assets, unique IDs, internal anchor targets, image alternative text, and `git diff --check` passed.
- A browser-generated favicon request initially returned 404; an ICO converted from the existing site icon now covers it.

## Accepted differences and test limits

- Individual illustrations are newly generated interpretations of the selected assets; exact folds and perspective differ. The artwork remains representative rather than actual application screenshots.
- Coffee mug crop, margin-note type, and company-strip sizing differ slightly from the mock (P3). These do not affect hierarchy or use.
- Responsive versions adapt the desktop concept rather than matching a separately supplied mobile mock.
- Verification used Chrome responsive viewports, not physical devices or every browser. External apps were not functionally audited. No email was sent.

## Implementation checklist

- [x] Correct official Phoenix Technologies logo
- [x] Selected design implemented in existing static GitHub Pages site
- [x] Functional projects, career, about, and contact sections
- [x] Desktop, tablet, phone, and keyboard checks
- [x] Combined visual comparison and focused brand verification
- [x] Local assets and source/license documentation
- [x] No production deployment
