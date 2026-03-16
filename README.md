# BMI Calculator - Thomas Sifferle 🚀

![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)
![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)
![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://github.com/TomSif)
[![React](https://img.shields.io/badge/react_19-20232a?style=for-the-badge&logo=react&logocolor=61dafb)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-646cff?style=for-the-badge&logo=vite&logocolor=white)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/tailwindcss_v4-0F172A?&logo=tailwindcss&logocolor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

![Design preview for the Body Mass Index Calculator coding challenge]()

### 🌐 Live Demo:

**[View live site →](https://front-endmentorbmi-calculator.vercel.app/)**

Deployed on Vercel with HTTPS and performance optimizations.

---

# Frontend Mentor - Body Mass Index Calculator Solution

This is a solution to the [Body mass index calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/body-mass-index-calculator-bMdX7KRbwk). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Select whether they want to use metric or imperial units
- Enter their height and weight
- See their BMI result, with their weight classification and healthy weight range
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop](/images/screen-desktop.png)

### Links

- Solution URL: [Git-hub](https://github.com/TomSif/Front-end_Mentor_BMI-Calculator)
- Live Site URL: [Vercel](https://front-endmentorbmi-calculator.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties via Tailwind CSS v4 `@theme`
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework

### What I learned

This was my first TypeScript project. Coming from vanilla JavaScript and two previous React projects, adding static typing was both challenging and rewarding.

#### TypeScript fundamentals for React

Learning to type component props with interfaces was my main focus. The pattern of separating data types from component-specific props using `extends` proved particularly useful:

```typescript
// Data structure (src/data/infoCards.ts)
export interface infoCardsDataProps {
  icon: string;
  iconBg?: string;
  title: string;
  description: string;
  isIconResponsive: boolean;
}

// Component props extend data props
interface InfoCardProps extends infoCardsDataProps {
  variant: "row" | "col";
  className?: string;
}
```

#### Union types for controlled states

Using union types instead of plain strings for state that has a fixed set of values:

```typescript
const [unity, setUnity] = useState<"metric" | "imperial">("metric");
```

This catches typos at compile time and provides better autocomplete in the IDE.

#### zero state for empty inputs

Handling "user hasn't entered anything yet" :

```typescript
const [height, setHeight] = useState<number>(0);
const [weight, setWeight] = useState<number>(0);
```

#### The className forwarding pattern

A common pattern in component libraries like shadcn/ui — accepting an optional `className` prop to allow parent components to add styles:

```typescript
interface InfoCardProps {
  className?: string;
  // ... other props
}

// In the component
<li className={`base-styles ${className ?? ""}`}>
```

#### CSS Grid staircase layout

The limitations section required a complex staggered grid layout. After exploring `nth-of-type` selectors (native in Tailwind v4), I settled on using the `.map()` index for clearer, more maintainable code:

```tsx
{
  cards.map((card, index) => (
    <InfoCard
      className={`
      col-span-2
      ${index === 3 ? "xl:col-start-2" : ""}
      ${index === 4 ? "xl:col-start-4" : ""}
    `}
    />
  ));
}
```

#### Custom radio buttons and input styling

Styling native form elements required going beyond Tailwind utilities:

```css
/* Removing number input spinners — not covered by Tailwind */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
```

For custom radios: `appearance-none` removes native styling, then fixed dimensions + `ring` utilities create the custom look.

#### Derived values vs. state

A key React concept I solidified: BMI score doesn't need to be in state — it's computed from height and weight on every render:

```typescript
// ❌ Unnecessary state
const [bmi, setBmi] = useState<number>(0);

// ✅ Derived value
const bmi = calculateBMI(); // Computed from height/weight states
```

### Continued development

Areas I want to focus on in future projects:

- **TypeScript generics**: Moving beyond basic interfaces to more flexible type patterns
- **Form validation libraries**: Exploring Zod or React Hook Form for complex form handling
- **Component testing**: Adding unit tests with Vitest and React Testing Library
- **Accessibility auditing**: Implementing automated a11y testing with axe-core

### Useful resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs) - Essential for understanding `@theme`, `@utility`, and the new variant syntax
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/) - The official guide for learning TypeScript fundamentals
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) - Practical patterns for typing React components
- [MDN Web Docs](https://developer.mozilla.org/) - Reference for CSS pseudo-elements and form styling

### AI Collaboration

This project was developed with AI assistance from **Claude** (Anthropic), used as a learning companion and technical mentor.

**How I used AI:**

- **TypeScript onboarding**: Getting explanations of syntax and concepts as I encountered them for the first time
- **Debugging type errors**: Understanding cryptic TypeScript compiler messages
- **Pattern discovery**: Learning idiomatic TypeScript/React patterns like `interface extends` and className forwarding
- **CSS problem-solving**: Working through the staircase grid layout and custom form element styling

**What worked well:**

- Having concepts explained in context — learning `useState<union type>` while actually building the metric/imperial toggle
- Getting immediate feedback on whether my approach was idiomatic TypeScript or just "JavaScript that compiles"
- Using AI as a sounding board for architectural decisions before writing code

**What I learned about AI collaboration:**

- TypeScript error messages are often cryptic — AI excels at translating them into actionable fixes
- It's valuable to ask "is this the idiomatic way?" rather than just "does this work?"
- Tracking repeated mistakes (like `onChange={fn()}` instead of `onChange={() => fn()}`) helps identify gaps in understanding vs. typos

**Honest reflection:**

I made the same callback invocation mistake (`onChange={setUnity("metric")}` instead of `onChange={() => setUnity("metric")}`) that I'd made in previous projects. Having AI catch it immediately helped, but the pattern clearly needs more practice to become automatic.

## Author

- Website - [Thomas Sifferle](https://thomas-sifferle.com)
- Frontend Mentor - [@TomSif](https://www.frontendmentor.io/profile/TomSif)
