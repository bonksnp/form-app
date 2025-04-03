# Theming Instructions for Onboarding Components

To update the remaining onboarding components with theme support, follow these class replacements:

## General Container Classes
- Replace `bg-white` with `themed-bg-primary`
- Replace `shadow-md` with `themed-shadow`
- Add `transition-colors` to container elements

## Text Classes
- Replace `text-gray-700`, `text-gray-800` with `themed-text-primary`
- Replace `text-gray-600`, `text-gray-500` with `themed-text-secondary`
- Replace `text-gray-400` with `themed-text-tertiary`

## Background Classes
- Replace `bg-gray-50`, `bg-gray-100` with `themed-bg-secondary`
- Replace `bg-gray-200`, `bg-gray-300` with `themed-bg-tertiary`

## Button Classes
- Replace `bg-blue-500 text-white` with `themed-accent`
- Replace `hover:bg-blue-600` with `hover:opacity-90`
- Replace `bg-gray-300 text-gray-700` with `themed-bg-tertiary themed-text-primary`
- Replace `hover:bg-gray-400` with `hover:opacity-80`

## Border Classes
- Replace `border-gray-300` with `themed-border`

## Form Elements
- Add `themed-bg-primary themed-text-primary` to inputs/textareas
- Replace `focus:ring-blue-500` with `focus:ring-2 focus:ring-opacity-50 focus:ring-accent-primary`

## Import Requirements
- Add `import { useTheme } from '../ThemeContext';` at the top of each file
- Add `const { theme } = useTheme();` inside each component function

## Theme Usage Example
```jsx
// Before
<div className="bg-white rounded-lg shadow-md p-8">
  <h2 className="text-2xl font-bold text-gray-800">Title</h2>
  <p className="text-gray-600">Content</p>
  <button className="bg-blue-500 text-white px-4 py-2 rounded">Button</button>
</div>

// After
<div className="themed-bg-primary rounded-lg themed-shadow p-8 transition-colors">
  <h2 className="text-2xl font-bold themed-text-primary">Title</h2>
  <p className="themed-text-secondary">Content</p>
  <button className="themed-accent px-4 py-2 rounded">Button</button>
</div>
``` 