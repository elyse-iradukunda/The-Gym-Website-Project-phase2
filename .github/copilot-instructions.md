# Copilot Instructions for The-Gym-Website-Project-phase2

## Project Overview
This is a modular static website project for a gym, using HTML and Tailwind CSS. The architecture is component-based, with each major section (header, hero, contact, footer) in its own HTML file under `src/sections/`. The main entry point is `index.html`, which dynamically loads these sections using JavaScript and fetch API.

## Key Files and Structure
- `index.html`: Loads all main sections via JS, using `fetch` to inject HTML into divs with matching IDs.
- `src/sections/`: Contains modular HTML files for each section (e.g., `header.html`, `hero.html`).
- `src/input.css` and `src/output.css`: Tailwind CSS input and compiled output.
- No build system or backend detected; all logic is client-side.

## Developer Workflows
- **Live Preview:** Open `index.html` in a browser. All sections are loaded dynamically; changes to section files are reflected on reload.
- **Styling:** Edit `src/input.css` and recompile with Tailwind CLI to update `src/output.css`.
- **Section Updates:** To update a section, edit the corresponding file in `src/sections/`. Ensure any scripts inside section files are self-contained and do not assume global scope.

## Project-Specific Patterns
- **Dynamic Section Loading:** All main content is loaded via JS `fetch` calls in `index.html`. Section scripts must be robust to dynamic loading (e.g., wrap logic in functions or use `DOMContentLoaded`).
- **No Global JS:** Avoid global variables/functions in section files. Use local scope or initialization functions.
- **Responsive Design:** Tailwind classes are used for responsiveness. JS for toggling menus (see `header.html`) should check viewport width and update classes accordingly.

## Integration Points
- **No external APIs or backend.**
- **No test or build scripts detected.**
- **No package manager usage except for Tailwind CSS.**

## Example: Navbar Toggle
See `src/sections/header.html` for the pattern to toggle navigation links on mobile. JS should be wrapped in a function and called after the section is loaded into the DOM.

## How to Extend
- Add new sections by creating HTML files in `src/sections/` and updating the JS in `index.html` to load them.
- For new styles, update `src/input.css` and recompile Tailwind.

## Conventions
- All section files should be self-contained and not depend on global JS state.
- Use Tailwind for all styling.
- Keep scripts inside section files minimal and robust to dynamic loading.

---

If any workflow or pattern is unclear, please provide feedback so this guide can be improved.