# Claude Code Project Rules

## Environment setup

Before starting to work for the first time in a session, always run:

```bash
nvm use
```

This ensures the correct Node.js version (defined in `.nvmrc`) is active.

---

## Project context

This project is a personal portfolio static web application built with:

- Next.js 16
- TypeScript
- Tailwind CSS 4
- Light and dark theme support
- Internationalization (i18n)

The app should remain clean, modern, fast, accessible, and easy to maintain.

---

## Core development rules

### 1. Respect the stack

Always generate code that is compatible with:

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4

Do not introduce libraries, patterns, or APIs that conflict with this stack.

Prefer built-in Next.js capabilities before suggesting extra dependencies.

---

### 2. Static-first mindset

This is a static portfolio site.

Always prefer:

- static rendering
- build-time data
- simple components
- minimal runtime complexity

Avoid suggesting server actions, APIs, databases, authentication, or dynamic infrastructure unless explicitly requested.

When proposing a solution, ask yourself:

- Can this be fully static?
- Can this be simpler?
- Can this be done without extra dependencies?

Prefer the simplest static-friendly solution.

---

### 3. TypeScript standards

Always use strong TypeScript typing.

Rules:

- Avoid `any`
- Prefer explicit types for props, data models, and function returns
- Use unions and utility types when appropriate
- Keep types readable and maintainable
- If a type becomes reusable, extract it

Generated code must be type-safe and production-quality.

---

### 4. Component design

Prefer clean, reusable, composable components.

Rules:

- Keep components small and focused
- Extract repeated UI into shared components
- Separate layout concerns from content concerns
- Avoid deeply nested JSX when possible
- Prefer semantic HTML

When creating a component, think about:

- reusability
- readability
- accessibility
- responsiveness

---

### 5. Tailwind CSS usage

Use Tailwind CSS 4 idiomatically.

Rules:

- Prefer utility classes over custom CSS
- Keep class names organized and readable
- Reuse patterns through components instead of long duplicated class strings
- Only introduce custom CSS when Tailwind is not enough
- Keep spacing, typography, and layout consistent

Avoid overly noisy class lists when a reusable component would be better.

---

### 6. Light and dark theme support

Every UI suggestion must consider both light and dark theme.

Rules:

- Do not design only for light mode
- Ensure text/background contrast works in both themes
- Interactive states must remain clear in both modes
- Borders, cards, muted text, and hover states must work in both themes
- If you add a new component, include theme-aware styles by default

Always check:

- readability
- contrast
- visual hierarchy
- consistency across themes

---

### 7. i18n-first development

This project supports internationalization.

Rules:

- Never hardcode user-facing strings directly inside components
- All visible text must be translation-ready
- Prefer structured translation keys
- Keep translation keys predictable and scalable
- Consider text expansion when designing layouts
- Avoid UI patterns that break with longer translated text

When generating examples, use translation keys or clearly marked localized content.

All user-facing text must use translation keys.

#### Key structure

Use dot notation with this hierarchy:

- pages.{page}.{section}.{element}
- components.{component}.{element}
- common.{category}.{element}

#### Examples

- pages.home.hero.title
- pages.home.projects.title
- components.navbar.home
- common.buttons.contact

#### Rules

- Never hardcode strings in components
- Always infer the correct key from context
- Keep keys semantic and descriptive
- Do not use generic names like "text", "label", "value"
- Group related keys logically
- Reuse keys from "common" when possible

#### When adding new UI

You must:

1. Define the required translation keys
2. Show their structure
3. Use them in the code

#### Server-first

- Always try to use the getTranslations async function over the hook

#### Naming guidelines

- Use lowercase
- Use camelCase only when needed (e.g. viewMore)
- Avoid abbreviations

If a translation key does not exist:

- Create it following the rules
- Show where it should be added in the messages file

---

### 8. Accessibility

Accessibility is required, not optional.

Rules:

- Use semantic HTML
- Add alt text to images
- Use proper heading hierarchy
- Ensure keyboard accessibility
- Use accessible labels for buttons, links, and form controls
- Respect focus states
- Avoid relying only on color to convey meaning

Every UI suggestion should be reasonably accessible by default.

---

### 9. Performance and simplicity

Prefer performance-conscious solutions.

Rules:

- Avoid unnecessary client components
- Use client-side interactivity only when needed
- Minimize JavaScript
- Avoid heavy animation libraries unless requested
- Optimize images and assets
- Keep bundle size small

If there are two valid approaches, prefer the lighter one.

---

### 10. SEO and portfolio best practices

This is a portfolio site, so SEO and presentation matter.

Always consider:

- proper metadata
- descriptive page titles
- clean semantic structure
- accessible navigation
- optimized images
- meaningful headings
- good mobile presentation

When relevant, suggest improvements for:

- social sharing metadata
- project page structure
- performance
- discoverability

---

## Code generation preferences

### 11. File edits and suggestions

When suggesting code:

- match the existing project structure when possible
- avoid unnecessary refactors
- explain where each file belongs
- prefer incremental changes over rewriting everything

When generating a new feature:

- list files to create or edit
- keep changes minimal but complete

---

### 12. Styling and UI direction

Primary color of this project should be Emerald, and the secondary green (a modern green color).
Always use colors that go well with those two for backgrounds and cards, typography.
Regular text should always go in black for light theme and white for dark theme for better readability.
Use semantic color tokens only.

Available tokens:

- background
- foreground
- card
- border
- muted
- primary (emerald)
- secondary (green)
- accent

Rules:

- NEVER use raw Tailwind colors like "emerald-500"
- ALWAYS use semantic classes like "bg-primary"
- Ensure colors work in both light and dark mode
- Maintain contrast and readability

If a new UI element is created:

- it must use the existing color tokens
- it must support both themes

The design direction should feel:

- modern
- minimal
- elegant
- professional
- polished

Avoid:

- overly playful UI unless requested
- excessive decoration
- inconsistent spacing
- random color usage
- cluttered layouts

Favor:

- whitespace
- strong typography
- subtle motion
- visual clarity
- clean card and section composition

#### Shadow direction

Shadows must adapt to the current theme:

- **Light mode**: use black shadows (`oklch(0 0 0 / opacity)`)
- **Dark mode**: use white shadows (`oklch(1 0 0 / opacity)`)

Shadow tokens (`--shadow-xs` through `--shadow-xl`) already handle this automatically via CSS variables. Always use the existing shadow tokens — never hardcode shadow colors.

---

### 13. Content structure for portfolio pages

When suggesting portfolio sections or page layouts, prefer structures like:

- Hero
- About
- Skills / Stack
- Experience
- Selected Projects
- Contact

Project cards should usually include:

- title
- summary
- tech stack
- role or contribution
- links if relevant

Keep content concise and professional.

---

### 14. Technology icons and names

All technology icons and display names are centralised in `src/cross-site/ui/technologies/index.ts`.

- Always use `technologies[skillId]` to get the icon component and display name for any tech
- The key is the skill slug (lowercase, e.g. `"nextjs"`, `"typescript"`)
- Each entry exposes: `component` (SVG React component), `name` (display string), and optionally `shouldInvertOnLight` (boolean — when true, apply `invert` in light mode and `dark:invert-0` in dark mode)
- When adding a new technology: add the SVG icon under `src/cross-site/ui/technologies/icons/` and register it in the index
- Never hardcode tech names or import icons directly in page/component code — always go through the index

---

### 15. shadcn/ui components

Files under `src/components/ui/` are generated by shadcn/ui and must not be modified.

When working with className props:

- Apply the `cn` / one-class-per-argument rules only to code you own
- Do not refactor or reformat shadcn component internals
- Treat these files as read-only third-party code

---

### 16. File size and separation of concerns

Keep files small and strictly focused on a single responsibility.

Rules:

- **Constants** always live in their own file (e.g. `constants.ts`)
- **Types** always live in their own file (e.g. `types.ts`)
- **Helpers** always live in their own file (e.g. `utils.ts` or `helpers.ts`). A helper is any function that does not read or write component state — if it can be moved outside the component without breaking it, it must be extracted
- **Sub-components** always live in their own file inside a co-located `components/` folder
- **Component files** must contain only component logic and JSX — no inline constants, no type definitions, no state-agnostic utility functions
- If a file would exceed 200 lines after applying the above, split further

Exceptions:

- `src/components/ui/` (shadcn — read-only, rule does not apply)
- Translation JSON files
- Auto-generated files

---

### 17. Dependency discipline

Do not add dependencies unless there is a strong reason.

Before suggesting a library:

- explain why it is needed
- prefer native Next.js / React / Tailwind solutions
- avoid dependency bloat

If a feature can be done without a new package, do it without a new package.

---

### 18. Theme and i18n reminder for every suggestion

For every UI, component, page, or feature suggestion, explicitly verify:

- Does it work in light mode?
- Does it work in dark mode?
- Is all user-facing text ready for i18n?

If not, revise the solution before presenting it.

---

### 19. Responsiveness and breakpoint support

Every UI suggestion must be fully responsive.

Rules:

- Design mobile-first
- Ensure layouts work well across small, medium, large, and extra-large screens
- Support all breakpoints already defined in the project, including any custom added breakpoints
- Do not assume only default Tailwind breakpoints exist
- When writing responsive classes, use the project’s existing breakpoint system consistently
- Prevent overflow, broken wrapping, cramped spacing, and unusable touch targets on small screens
- Avoid layouts that only look correct on desktop
- Prefer flexible layouts using `flex`, `grid`, `minmax`, `clamp`, `max-w-*`, and responsive spacing
- Ensure typography, spacing, cards, navbars, and section layouts scale appropriately across breakpoints
- Consider longer translated text when testing responsive behavior
- If a component changes structure across screen sizes, do so intentionally and clearly

Always check:

- mobile layout
- tablet layout
- desktop layout
- ultra-wide behavior when relevant
- support for custom project breakpoints
- no horizontal scroll unless intentionally required

## Response behavior rules for Claude

### 20. When proposing solutions

For each suggestion:

1. prefer the simplest static-compatible solution
2. ensure TypeScript correctness
3. ensure Tailwind styling is theme-aware
4. ensure all text is i18n-ready
5. avoid unnecessary dependencies
6. keep the result production-friendly

---

### 21. When writing code

When generating code:

- provide complete, runnable code
- do not leave important placeholders unless unavoidable
- avoid pseudo-code unless explicitly requested
- keep naming clear and consistent
- align with existing conventions in the repo

---

### 22. When uncertain

If project conventions are unclear:

- infer the most standard Next.js 16 + TypeScript + Tailwind 4 approach
- do not invent unusual architecture
- choose maintainability over cleverness

---

## Final instruction

Every recommendation, component, and refactor must be evaluated against these priorities:

1. Static-first
2. Type-safe
3. Theme-aware
4. i18n-ready
5. Accessible
6. Simple
7. Maintainable
8. Professional UI

---

## Self-check before answering

Before answering, silently check:

- Is this compatible with Next.js 16?
- Is this fully typed?
- Does it support light and dark mode?
- Is it i18n-ready?
- Is it static-friendly?
- Is it responsive on mobile, tablet, desktop, and custom breakpoints?
- Could longer translated text break the layout?
- Is there a simpler solution?

If any answer is no, improve the solution before responding.
