# Dropdown Border Transition Effect

## Overview
This document explains how to reintroduce a border transition as an intermediate step when hovering over dropdown options in the Dropdown component.

## Current Implementation
The dropdown currently uses specific CSS transitions that only affect:
- `background-color`
- `color`
- `font-weight`

This is defined in [src/components/Dropdown/Dropdown.vue](../src/components/Dropdown/Dropdown.vue#L407-L409):

```javascript
itemButton:
  'group flex h-[2.438rem] w-full items-center gap-3 rounded-[0.75rem] px-[0.75rem] text-base text-custom-input-active transition-[background-color,color,font-weight] focus:outline-none focus-visible:outline-none focus:ring-0',
submenuTrigger:
  'group flex h-[2.438rem] w-full items-center gap-3 rounded-[0.75rem] px-[0.75rem] text-base text-custom-input-active transition-[background-color,color,font-weight] focus:outline-none focus-visible:outline-none focus:ring-0',
```

## How to Reintroduce Border Transition

### Option 1: Use `transition-all`
Replace the specific transitions with `transition-all` to transition all CSS properties including borders:

```javascript
itemButton:
  'group flex h-[2.438rem] w-full items-center gap-3 rounded-[0.75rem] px-[0.75rem] text-base text-custom-input-active transition-all focus:outline-none focus-visible:outline-none focus:ring-0',
submenuTrigger:
  'group flex h-[2.438rem] w-full items-center gap-3 rounded-[0.75rem] px-[0.75rem] text-base text-custom-input-active transition-all focus:outline-none focus-visible:outline-none focus:ring-0',
```

**Effect**: All CSS properties will transition, creating a visible border intermediate step before the background color appears.

### Option 2: Add Border to Transition List
Add `border` or `border-color` to the existing transition list:

```javascript
itemButton:
  'group flex h-[2.438rem] w-full items-center gap-3 rounded-[0.75rem] px-[0.75rem] text-base text-custom-input-active transition-[background-color,color,font-weight,border-color] focus:outline-none focus-visible:outline-none focus:ring-0',
submenuTrigger:
  'group flex h-[2.438rem] w-full items-center gap-3 rounded-[0.75rem] px-[0.75rem] text-base text-custom-input-active transition-[background-color,color,font-weight,border-color] focus:outline-none focus-visible:outline-none focus:ring-0',
```

**Effect**: Only the specified properties (including border) will transition, giving you more control.

### Option 3: Add Explicit Border Styles
If you want a specific border effect, add border classes and include them in transitions:

```javascript
itemButton:
  'group flex h-[2.438rem] w-full items-center gap-3 rounded-[0.75rem] px-[0.75rem] text-base text-custom-input-active border border-transparent data-[highlighted]:border-custom-blue transition-[background-color,color,font-weight,border-color] focus:outline-none focus-visible:outline-none focus:ring-0',
```

**Effect**: Adds a transparent border by default and shows a colored border on hover before/during the background transition.

## Why Was This Changed?
The border transition was removed because it created an undesired intermediate visual state:
1. User hovers over option
2. Border appears/transitions (unwanted intermediate step)
3. Background color and text color transition to final state

By limiting transitions to only `background-color`, `color`, and `font-weight`, the hover effect is immediate and clean without the border intermediate step.

## Adjusting Transition Timing
If you reintroduce border transitions and want to control the timing, you can adjust the transition duration:

```javascript
// Fast transition (current default from Tailwind)
transition-[background-color,color,font-weight]

// Custom duration
transition-[background-color,color,font-weight] duration-150

// Different durations for different properties
[&]:transition-[background-color] [&]:duration-100 [&]:transition-[border-color] [&]:duration-200
```

## Testing Changes
After making changes, test the dropdown hover behavior in:
1. Main dropdown items
2. Submenu items (nested dropdowns)
3. Items with different themes (especially `theme: 'red'`)

Check [Dropdown.story.vue](../src/components/Dropdown/Dropdown.story.vue) for examples and testing scenarios.
