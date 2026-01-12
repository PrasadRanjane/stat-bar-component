/**
 * StatBar Component
 * 
 * A reusable progress bar component for displaying stats/data.
 * Extracted from pokedex project.
 * 
 * @param label - Stat label (e.g., "HP", "ATK")
 * @param value - Current stat value
 * @param maxValue - Maximum possible value (default: 255)
 * @param color - Bar color (optional, defaults to primary)
 * @param showValue - Show numeric value (default: true)
 * @param size - Size variant: 'small' | 'default' | 'large'
 */

import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

// Theme colors (from pokedex constants/Colors.ts)
const Colors = {
  light: {
    text: '#1e293b',
    textSecondary: '#64748b',
    surfaceVariant: '#f1f5f9',
    primary: '#6366f1',
    border: '#e2e8f0',
  },
  dark: {
    text: '#f1f5f9',
    textSecondary: '#cbd5e1',
    surfaceVariant: '#334155',
    primary: '#818cf8',
    border: '#334155',
  },
};

export type StatBarSize = 'small' | 'default' | 'large';

interface StatBarProps {
  label: string;
  value: number;
  maxValue?: number;
  color?: string;
  showValue?: boolean;
  size?: StatBarSize;
}

export const StatBar: React.FC<StatBarProps> = ({
  label,
  value,
  maxValue = 255,
  color,
  showValue = true,
  size = 'default',
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = Colors[isDark ? 'dark' : 'light'];

  const percentage = Math.min((value / maxValue) * 100, 100);
  const barColor = color || colors.primary;

  const sizeConfig = {
    small: {
      barHeight: 6,
      fontSize: 12,
      labelWidth: 60,
      valueWidth: 30,
    },
    default: {
      barHeight: 8,
      fontSize: 14,
      labelWidth: 80,
      valueWidth: 40,
    },
    large: {
      barHeight: 10,
      fontSize: 16,
      labelWidth: 100,
      valueWidth: 50,
    },
  };

  const config = sizeConfig[size];

  return (
    <View style={styles.statRow}>
      <Text
        style={[
          styles.statName,
          {
            fontSize: config.fontSize,
            width: config.labelWidth,
            color: colors.textSecondary,
          },
        ]}
      >
        {label.toUpperCase()}
      </Text>
      {showValue && (
        <Text
          style={[
            styles.statValue,
            {
              fontSize: config.fontSize,
              width: config.valueWidth,
              color: colors.text,
            },
          ]}
        >
          {value}
        </Text>
      )}
      <View
        style={[
          styles.statBarContainer,
          {
            backgroundColor: colors.surfaceVariant,
            height: config.barHeight,
          },
        ]}
      >
        <View
          style={[
            styles.statBar,
            {
              width: `${percentage}%`,
              backgroundColor: barColor,
              height: config.barHeight,
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  statName: {
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  statValue: {
    fontWeight: 'bold',
    textAlign: 'right',
    marginLeft: 8,
  },
  statBarContainer: {
    flex: 1,
    borderRadius: 4,
    marginLeft: 12,
    overflow: 'hidden',
  },
  statBar: {
    borderRadius: 4,
  },
});
