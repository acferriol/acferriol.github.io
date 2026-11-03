# Alejandro Cespón Ferriol | Research portfolio

A static, editorial portfolio for an AI/ML researcher at the University of Granada and DaSCI. Built with HTML, CSS, and a small progressive-enhancement script. No build step, remote dependencies, web fonts, analytics, or credentials are required.

## Preview and publish

Open `index.html` for a local preview. To test clipboard access, serve the directory on localhost or use HTTPS. The email link works independently of clipboard support.

For GitHub Pages, place this directory's contents at the root of `acferriol.github.io`, including `.nojekyll`, `index.html`, and `assets/`. In the repository's **Settings > Pages**, select **Deploy from a branch**, the default branch, and **/(root)**. The published address is `https://acferriol.github.io/`.

## Files and design

| File | Purpose |
| --- | --- |
| `index.html` | All content, four project cases, five publications, contact links, and original inline SVG diagrams. |
| `assets/style.css` | The complete visual system: cool paper, white, charcoal, vermilion, responsive layouts, focus states, print, and reduced-motion support. |
| `assets/main.js` | Accessible project filters and email copying, enabled only when supported. |
| `assets/Alejandro_Cespon_CV_AI_ML_EN.pdf` | Existing CV download; not modified by the website redesign. |

All project descriptions, publications, and contact information are available without JavaScript. Diagrams describe concepts and system structure, not measured results. The ADMM figure has an accessible description; purely typographic project marks are decorative.

## Selected work

The four cases link to five repositories:

| Case | Repository |
| --- | --- |
| Intensive care / explainability | [Intensive-Care-Hidden-Mortality](https://github.com/acferriol/Intensive-Care-Hidden-Mortality) |
| Distributed anomaly detection | [fed-admm-oc](https://github.com/acferriol/fed-admm-oc) and [I-One-Class-SVM](https://github.com/cii-uclv/I-One-Class-SVM) |
| Protein representations | [I-IA-AA-Analysis](https://github.com/cii-uclv/I-IA-AA-Analysis) |
| University chatbot | [uclv-chatbot](https://github.com/acferriol/uclv-chatbot) |

The bioinformatics case links directly to both related publications: the [RCCI 2026 explainable ProtFlash workflow](https://rcci.uci.cu/index.php/RCCI/article/view/13245) and the [Springer ProtFlash/ProtT5 comparison](https://doi.org/10.1007/978-3-032-41324-6_12), published online in 2026 with print year 2027. Collaborative work is described as collaborative.

## Publication metadata

The list retains five works. In addition to the two protein-model publications, it includes the [2025 JAMRIS ADMM paper](https://doi.org/10.14313/jamris-2025-009), the [WEA chapter](https://doi.org/10.1007/978-3-032-08206-0_23), and *Intelligent Decision Support System for Intensive Care Units*.

The WEA chapter appears in CCIS 2702, Part II, pages 271–282, with online publication in 2025 and volume year 2026. The ICU title is retained from the supplied CV without adding an unverified date, author list, or article URL. The RCCI peptide metadata follows the information supplied by the portfolio owner.

## Review checklist

- Run `node --check assets/main.js`.
- Check local asset paths and in-page anchor targets after editing the HTML.
- Review at narrow mobile widths, tablet, and desktop, including 200% zoom.
- Test keyboard focus, project-filter announcements, and email-copy success and failure.
- Disable JavaScript: all four cases, five publications, and contact links must remain visible.
- Enable reduced motion and verify that anchor navigation does not animate.
- Keep publication titles in their original language and add quantitative results only when verified.
