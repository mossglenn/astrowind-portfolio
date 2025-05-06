## 📁 Project Summary

**Name:** Astro Portfolio  
**Purpose:** Personal portfolio site for showcasing instructional design projects  
**Tech Stack:** Astro + TypeScript + Tailwind CSS v4 + DaisyUI + MDX  
**Deployment:** Netlify  

A working log of key decisions, tools, settings, conventions, and preferences for the Astro-based portfolio project.

---

## 🛠️ Tech Stack
- **Framework**: [Astro](https://astro.build/)
- **Styling**: Tailwind CSS with DaisyUI
- **Format**: Markdown preferred, no CMS or visual editor
- **Deployment**: Vercel
- **Automation Tools**: Keyboard Maestro, `.vscode/settings.json`

---

## 🎨 Design & UI Preferences
- Minimal, lightweight, static
- Strong focus on UI/UX polish and usability
- Avoid left-column nav; prefer top navigation with auto-highlighting
- No dark mode or personalization required
- Responsive design (mobile/tablet/desktop)
- Custom color theme using HSL-based CSS variables

---

## 📁 Project Conventions
- Modular folder structure (tokens, variables, utilities separated)
- Reusable Tailwind tokens in `globals.css` using `--brand-*`, `--accent-*`, etc.
- Keeping reusable references in `.vscode/settings.json`
- Notes and decision history tracked in this file

---

## 🧠 Usage Patterns
- When sharing important changes (e.g. config choices, structure updates), ChatGPT will suggest adding entries here
- Ask for clarification if needed before proposing updates
- Focus on reusability and future clarity

---

## 🔄 Outstanding Ideas / To Explore
- Consider small motifs (e.g. neuron icon, blueprint themes) to tie visual identity together



## 🛠 Tooling & Preferences

- Using ESLint flat config with TypeScript and Astro support
- Prettier with `.prettierrc`, including `prettier-plugin-astro`
- Format on save enabled in VS Code
- Tailwind CSS with DaisyUI plugin
- Custom reference folder: `.reference-files/` (ignored by Git, Prettier, ESLint)

## 🎨 Design System


## 🧠 Interaction & Animation Ideas
### Neuron Ring Animation Concept

**Hover interaction:**
- When the mouse hovers over a neuron:
  - The dendrites (spikes around the soma) **light up**, signaling incoming activity.

**Click interaction:**
- On click:
  - Myelin sheaths **light up in sequence**, simulating signal transmission along the axon.
  - **Synaptic terminals** (the dot-tipped arms) light up afterward.
  - Optionally: Small **"neurotransmitter bubbles"** animate outward from the terminals, showing signal release.

**Intent:**
- Communicates signal direction and interactivity.
- Reinforces learning/connection metaphors visually.
- Could serve as brand animation or transition into homepage content.




## 🧩 Component Usage Guidelines

- Prefer semantic HTML in `.astro` files
- Components will live in `src/components/`, organized by layout, utility, and content type


## 📂 Folder & Workflow Conventions

- `.reference-files/` is for unused or future-use assets (not linted or formatted)
- Assets are moved from `.reference-files/` into `public/` or `src/` when they’re used
- Final SCORM/xAPI packages are self-contained and not modified after export


## ❓ Questions Not Yet Answered
- Should the project invest in a js-based animation framework, if so, which one?

## 🧠 ChatGPT Usage Notes

- When I say “escape room object,” refer to the xAPI learning object in `.reference-files/learning-objects/escape-room-learning-activity/`
- When I say “generate a layout,” prefer semantic HTML + Tailwind + DaisyUI with component isolation
- Meaning of tags:
| Tag         | Use this when you're...                                         |
| ----------- | --------------------------------------------------------------- |
| `NOTE:`     | Sharing something you want to remember later or might reuse     |
| `DECISION:` | Finalizing a choice about config, tools, structure, etc.        |
| `PATTERN:`  | Noticing a reusable layout, naming convention, or technique     |
| `QUESTION:` | Asking a design/tech question you want to think through clearly |


## Pitfalls and Common Errors
✅ Common Pitfall: Props Without Brackets in .astro Files

Astro uses JSX-style syntax for passing variables as props. If you forget to wrap a variable in {} when passing it to a component, Astro (or Prettier) will interpret it as a string literal.
❌ Incorrect (will be interpreted as string):

<VerticalTimeline items=implementationItems />

✅ Correct (passes the actual variable):

<VerticalTimeline items={implementationItems} />

🧠 Why it matters:

    Without {}, the component receives "implementationItems" instead of the variable.

    Prettier may auto-correct this to a string, hiding the bug until runtime.

    TypeScript won't help unless strict prop types are enforced.


### getting rich formatting into the TimelineItems
🔧 For future sanity: If you do want rich content per item later

Instead of:

content: (
  <>
    <p>stuff</p>
  </>
),

Use slots or children passed into the component directly:

<VerticalTimeline>
  <TimelineItem icon={MyIcon}>
    <p><strong>Stakeholder-aligned:</strong> We collaborated early.</p>
  </TimelineItem>
</VerticalTimeline>

This avoids trying to serialize JSX as a prop entirely.



This file is uploaded at the start of any session where I need you to fully understand my project.
