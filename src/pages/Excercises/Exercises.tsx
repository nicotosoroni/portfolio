// Define Types
type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Advanced';

interface Exercise {
  title: string;
  description: string;
}

interface TopicExercises {
  topic: string;
  difficulties: {
    [key in Difficulty]: Exercise[];
  };
}

// HTML Exercises
const htmlExercises: TopicExercises = {
  topic: 'HTML',
  difficulties: {
    Easy: [
      {
        title: 'Basic Resume Page',
        description: 'Create a basic personal resume page using semantic tags.',
      },
      {
        title: 'Form Input Fields',
        description: 'Build a simple form with all common input fields.',
      },
      {
        title: 'Two Column Layout',
        description: 'Design a two-column layout using only HTML.',
      },
      {
        title: 'Student Table',
        description: 'Create a table showing student records.',
      },
      {
        title: 'Image Gallery',
        description: 'Add image gallery with captions under each image.',
      },
    ],
    Medium: [
      {
        title: 'Responsive Navigation Bar',
        description: 'Make a responsive navigation bar with anchor links.',
      },
      {
        title: 'Multi-Step Registration Form',
        description: 'Create a multi-step registration form.',
      },
      {
        title: 'Accessible Form',
        description: 'Implement accessibility features in a form.',
      },
      {
        title: 'Contact Card',
        description: 'Build a contact card with user profile info.',
      },
      {
        title: 'Embedded Video Page',
        description: 'Embed YouTube video + custom description below it.',
      },
    ],
    Hard: [
      {
        title: 'Accessible Accordion',
        description:
          'Build an accessible accordion menu using only HTML & ARIA.',
      },
      {
        title: 'Accessible Modal',
        description:
          'Create a fully accessible modal dialog box using HTML and WAI-ARIA.',
      },
      {
        title: 'Tabbed Content Section',
        description: 'Build a tabbed content section without JavaScript.',
      },
      {
        title: 'Print CV Version',
        description:
          'Create a print-specific version of a CV using media queries.',
      },
      {
        title: 'Nested Comment Tree',
        description: 'Build a nested comment tree structure.',
      },
    ],
    Advanced: [
      {
        title: 'Dynamic Form Builder',
        description:
          'Build a dynamic form builder using drag-and-drop HTML elements.',
      },
      {
        title: 'Live HTML/CSS Playground',
        description: 'Create a live HTML/CSS playground using iframes.',
      },
      {
        title: 'Sitemap Generator',
        description:
          'Build a visual sitemap generator from nested `<ul>` and `<li>`.',
      },
      {
        title: 'Markdown-to-HTML Parser',
        description: 'Create a markdown-to-HTML parser interface.',
      },
      {
        title: 'SEO Optimized Article',
        description: 'Build an SEO-friendly article page with metadata.',
      },
    ],
  },
};

// CSS Exercises
const cssExercises: TopicExercises = {
  topic: 'CSS',
  difficulties: {
    Easy: [
      {
        title: 'Styled Button',
        description: 'Style a basic button with hover and active states.',
      },
      {
        title: 'Center Div',
        description:
          'Center a div both vertically and horizontally using Flexbox/Grid.',
      },
      {
        title: 'Loading Spinner',
        description: 'Create a loading spinner using only animations.',
      },
      {
        title: 'Navbar Hover Effects',
        description: 'Style a navbar with hover effects.',
      },
      {
        title: 'Responsive Font Size',
        description: 'Apply clamp() for responsive font-size.',
      },
    ],
    Medium: [
      {
        title: 'Grid Gallery',
        description: 'Create a responsive grid gallery with hover zoom effect.',
      },
      {
        title: 'Pricing Cards',
        description: 'Build a pricing card layout that adapts to mobile view.',
      },
      {
        title: 'Sticky Header',
        description: 'Create a sticky header with scroll transitions.',
      },
      {
        title: 'Custom Checkbox',
        description: 'Style a custom checkbox/radio component.',
      },
      {
        title: 'Animated Dropdown',
        description: 'Animate a dropdown menu with smooth transition.',
      },
    ],
    Hard: [
      {
        title: 'Horizontal Scroll Carousel',
        description: 'Implement horizontal scroll carousel using Scroll Snap.',
      },
      {
        title: 'Complex UI Clone',
        description: 'Replicate a complex UI design like Apple hero section.',
      },
      {
        title: 'Parallax Scrolling',
        description: 'Create a parallax scrolling effect with images.',
      },
      {
        title: 'Responsive Timeline',
        description: 'Style a responsive timeline with icons and line.',
      },
      {
        title: 'Dark Mode Toggle',
        description: 'Build a dark/light mode toggle using CSS variables.',
      },
    ],
    Advanced: [
      {
        title: 'CSS Only Modal',
        description:
          'Create a CSS-only modal with transitions and close on click.',
      },
      {
        title: 'Utility First Framework',
        description:
          'Develop a utility-first CSS framework like Tailwind-inspired utilities.',
      },
      {
        title: 'Feature-Based Responsive Layout',
        description: 'Build a layout with @supports and feature detection.',
      },
      {
        title: 'Optimize Large CSS File',
        description:
          'Optimize a large CSS file using PostCSS and purge classes.',
      },
      {
        title: 'CSS-in-JS Theming',
        description: 'Create a CSS-in-JS styling system mock-up with theming.',
      },
    ],
  },
};

// JS Exercises
const jsExercises: TopicExercises = {
  topic: 'Javascript',
  difficulties: {
    Easy: [
      {
        title: '',
        description: 'Write a function to convert Celsius to Fahrenheit.',
      },
      { title: '', description: 'Validate an email input using regex.' },
      {
        title: '',
        description: 'Create a counter app with increment/decrement buttons.',
      },
      { title: '', description: 'Filter even numbers from an array.' },
      {
        title: '',
        description:
          'Output a greeting message based on time (morning/day/evening).',
      },
    ],
    Medium: [
      {
        title: '',
        description: ' Build a to-do list where users can add/remove items.',
      },
      { title: '', description: ' Implement pagination logic for an array.' },
      {
        title: '',
        description: ' Write a debounce function for search inputs.',
      },
      { title: '', description: ' Sort an object array by key dynamically.' },
      {
        title: '',
        description:
          ' Create a calculator with event listeners and DOM updates.',
      },
    ],
    Hard: [
      {
        title: '',
        description: 'Implement a simple routing system without frameworks.',
      },
      {
        title: '',
        description:
          'Build a real-time chat UI simulation with messages added via JS.',
      },
      {
        title: '',
        description: 'Create a file upload preview with multiple images.',
      },
      {
        title: '',
        description: 'Build a drag-and-drop todo list between columns.',
      },
      {
        title: '',
        description: 'Fetch data from an API and display paginated results.',
      },
    ],
    Advanced: [
      {
        title: '',
        description:
          ' Implement a state management system similar to Redux (custom store).',
      },
      {
        title: '',
        description:
          ' Create a canvas-based drawing app with color and brush size.',
      },
      {
        title: '',
        description: ' Build a custom virtual DOM diffing engine (basic).',
      },
      {
        title: '',
        description:
          ' Write a router that supports dynamic routes and nested views.',
      },
      {
        title: '',
        description:
          " Build a reactive binding system like Vue's reactive() and watch().",
      },
    ],
  },
};

// TS Exercises
const tsExercises: TopicExercises = {
  topic: 'Typescript',
  difficulties: {
    Easy: [
      {
        title: '',
        description:
          ' Define types for a user object and use them in a function.',
      },
      {
        title: '',
        description:
          ' Create union types for a status field (e.g., pending, active, blocked).',
      },
      {
        title: '',
        description: ' Use generics in a function to return any type.',
      },
      {
        title: '',
        description: ' Interface for product with optional properties.',
      },
      {
        title: '',
        description: ' Type guard to check if a value is a string or number.',
      },
    ],
    Medium: [
      {
        title: '',
        description:
          ' Create a generic function to filter an array of objects by property.',
      },
      {
        title: '',
        description: ' Define mapped types to make all properties optional.',
      },
      {
        title: '',
        description:
          ' Use discriminated unions to handle different action types.',
      },
      {
        title: '',
        description: ' Implement interfaces for a class-based cart system.',
      },
      { title: '', description: ' Create a type-safe event emitter.' },
    ],
    Hard: [
      {
        title: '',
        description:
          'Use conditional types to map response types based on request input.',
      },
      {
        title: '',
        description: 'Create a factory pattern with typed constructors.',
      },
      { title: '', description: 'Implement a deep partial type recursively.' },
      {
        title: '',
        description:
          'Enforce exhaustive checks with union types in switch statements.',
      },
      {
        title: '',
        description:
          'Build a type-safe HTTP client wrapper with Axios and Zod.',
      },
    ],
    Advanced: [
      {
        title: '',
        description:
          'Create a reusable type-level utility library (e.g., DeepReadonly, DeepRequired).',
      },
      {
        title: '',
        description: 'Model a state machine using types and enums.',
      },
      {
        title: '',
        description:
          'Write type definitions for external libraries without TS support.',
      },
      {
        title: '',
        description:
          'Implement a GraphQL schema type generator from JSON responses.',
      },
      {
        title: '',
        description:
          'Build a CLI tool that parses JS files and generates type definitions automatically.',
      },
    ],
  },
};

// React Exercises
const reactExercises: TopicExercises = {
  topic: 'React',
  difficulties: {
    Easy: [
      { title: '', description: 'Build a counter component with useState.' },
      { title: '', description: 'Display a list of users using .map().' },
      {
        title: '',
        description:
          'Create a conditional rendering component (logged in/out).',
      },
      { title: '', description: 'Pass props from parent to child.' },
      { title: '', description: 'Toggle visibility of a modal.' },
    ],
    Medium: [
      {
        title: '',
        description: 'Build a to-do app with filtering (all/active/completed).',
      },
      { title: '', description: 'Create a custom hook for local storage.' },
      { title: '', description: 'Fetch data from an API using useEffect.' },
      {
        title: '',
        description: 'Implement a controlled form with validation.',
      },
      { title: '', description: 'Build a multi-select dropdown component.' },
    ],
    Hard: [
      {
        title: '',
        description: 'Implement pagination with sorting and filtering.',
      },
      {
        title: '',
        description: 'Build a dynamic form builder using React Hook Form.',
      },
      {
        title: '',
        description:
          'Create a reusable modal component with context providers.',
      },
      {
        title: '',
        description: 'Implement search + infinite scroll functionality.',
      },
      { title: '', description: 'Build a drag-and-drop Kanban board.' },
    ],
    Advanced: [
      {
        title: '',
        description:
          'Create a state management solution using Context + Reducer.',
      },
      {
        title: '',
        description: 'Implement server-side rendering (SSR) with Next.js.',
      },
      {
        title: '',
        description:
          'Optimize performance with React.memo, useMemo, useCallback.',
      },
      {
        title: '',
        description: 'Build a code editor component with syntax highlighting.',
      },
      {
        title: '',
        description:
          'Implement a full authentication flow with OAuth and protected routes.',
      },
    ],
  },
};

export const exerciseData: TopicExercises[] = [
  htmlExercises,
  cssExercises,
  jsExercises,
  tsExercises,
  reactExercises,
];
