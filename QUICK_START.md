# Quick Start Guide - Stat Bar Component

## How to Use in Expo Snack

### Step 1: Create a New Snack
1. Go to [snack.expo.dev](https://snack.expo.dev)
2. Click "Create Snack" or sign in

### Step 2: Copy Components
1. Copy `components/StatBar.tsx` to your Snack
2. Copy `components/StatBarGroup.tsx` to your Snack

### Step 3: Copy the App
Copy the contents of `App.tsx` to replace the default `App.tsx` in your Snack.

### Step 4: Run!
Click "Run" or press `Cmd+R` (Mac) / `Ctrl+R` (Windows)

## Minimal Example

```tsx
// App.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatBar } from './components/StatBar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatBar
        label="HP"
        value={80}
        maxValue={255}
        color="#10b981"
      />
      <StatBar
        label="ATK"
        value={120}
        maxValue={255}
        color="#ef4444"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
```

## Files to Copy

For full functionality:
- ✅ `components/StatBar.tsx` - Main stat bar component
- ✅ `components/StatBarGroup.tsx` - Stat group container
- ✅ `App.tsx` - Example usage and showcase

## Dependencies Required

None! Just React Native core.

That's it! 🎉
