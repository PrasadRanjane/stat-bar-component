/**
 * StatBarGroup Component
 * 
 * A container component for displaying multiple stat bars with a total.
 * Extracted from pokedex project.
 * 
 * @param stats - Array of stat objects with label and value
 * @param maxValue - Maximum possible value for each stat
 * @param showTotal - Show total stat value (default: true)
 * @param color - Base color for bars (optional)
 * @param size - Size variant
 */

import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { StatBar, StatBarSize } from './StatBar';

const Colors = {
  light: {
    text: '#1e293b',
    textSecondary: '#64748b',
    surface: '#ffffff',
    primary: '#6366f1',
    border: '#e2e8f0',
  },
  dark: {
    text: '#f1f5f9',
    textSecondary: '#cbd5e1',
    surface: '#1e293b',
    primary: '#818cf8',
    border: '#334155',
  },
};

interface Stat {
  label: string;
  value: number;
  color?: string;
}

interface StatBarGroupProps {
  stats: Stat[];
  maxValue?: number;
  showTotal?: boolean;
  color?: string;
  size?: StatBarSize;
  title?: string;
}

export const StatBarGroup: React.FC<StatBarGroupProps> = ({
  stats,
  maxValue = 255,
  showTotal = true,
  color,
  size = 'default',
  title,
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = Colors[isDark ? 'dark' : 'light'];

  const total = stats.reduce((acc, stat) => acc + stat.value, 0);

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      {title && (
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      )}
      {stats.map((stat, index) => (
        <StatBar
          key={index}
          label={stat.label}
          value={stat.value}
          maxValue={maxValue}
          color={stat.color || color}
          size={size}
        />
      ))}
      {showTotal && (
        <View style={[styles.totalRow, { borderTopColor: colors.border }]}>
          <Text style={[styles.totalLabel, { color: colors.text }]}>Total</Text>
          <Text style={[styles.totalValue, { color: colors.primary }]}>
            {total}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 15,
    borderTopWidth: 2,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
