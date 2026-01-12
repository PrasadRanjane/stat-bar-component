# Stat Bar Component - Expo Snack

A reusable progress bar component for displaying stats and data. Extracted from the pokedex project.

## Features

- ✅ **Animated Progress Bars** - Visual representation of stat values
- ✅ **Customizable Colors** - Set custom colors for each bar
- ✅ **Multiple Sizes** - Small, default, and large variants
- ✅ **Stat Groups** - Container component with totals
- ✅ **Dark Mode Support** - Automatic theme detection
- ✅ **Zero Dependencies** - Only React Native core

## Installation in Expo Snack

1. Copy `components/StatBar.tsx` and `components/StatBarGroup.tsx` to your Snack
2. Copy `App.tsx` for examples
3. No additional dependencies needed!
4. Run!

## Usage

### Basic Usage

```tsx
import { StatBar } from './components/StatBar';

<StatBar
  label="HP"
  value={80}
  maxValue={255}
  color="#10b981"
/>
```

### With Stat Group

```tsx
import { StatBarGroup } from './components/StatBarGroup';

<StatBarGroup
  stats={[
    { label: 'HP', value: 80, color: '#10b981' },
    { label: 'ATK', value: 82, color: '#ef4444' },
  ]}
  maxValue={255}
  showTotal={true}
  title="Pokemon Stats"
/>
```

### Size Variants

```tsx
<StatBar {...props} size="small" />
<StatBar {...props} size="default" />
<StatBar {...props} size="large" />
```

### Without Numeric Values

```tsx
<StatBar {...props} showValue={false} />
```

## Props

### StatBar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | **required** | Stat label (e.g., "HP", "ATK") |
| `value` | `number` | **required** | Current stat value |
| `maxValue` | `number` | `255` | Maximum possible value |
| `color` | `string` | `primary` | Bar color |
| `showValue` | `boolean` | `true` | Show numeric value |
| `size` | `'small' \| 'default' \| 'large'` | `'default'` | Size variant |

### StatBarGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `stats` | `Stat[]` | **required** | Array of stat objects |
| `maxValue` | `number` | `255` | Maximum value for stats |
| `showTotal` | `boolean` | `true` | Show total stat value |
| `color` | `string` | `undefined` | Base color for all bars |
| `size` | `StatBarSize` | `'default'` | Size variant |
| `title` | `string` | `undefined` | Group title |

## Stat Interface

```tsx
interface Stat {
  label: string;
  value: number;
  color?: string; // Optional custom color
}
```

## Example Snack

See `App.tsx` for complete examples showcasing all features and variants.

## Source

This component was extracted from the [pokedex project](https://github.com/PrasadRanjane/pokedex), specifically from `app/pokemon/[slug].tsx`.

## License

Free to use in your projects!
