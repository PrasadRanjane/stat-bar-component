/**
 * Expo Snack: Stat Bar Component
 * 
 * A reusable progress bar component for displaying stats/data.
 * Extracted from pokedex project.
 * 
 * Features:
 * - Animated progress bars
 * - Customizable colors
 * - Multiple size variants
 * - Stat groups with totals
 * - Dark mode support
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
} from 'react-native';
import { StatBar } from './components/StatBar';
import { StatBarGroup } from './components/StatBarGroup';

export default function App() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Sample Pokemon stats
  const pokemonStats = [
    { label: 'HP', value: 80, color: '#10b981' },
    { label: 'ATK', value: 82, color: '#ef4444' },
    { label: 'DEF', value: 83, color: '#3b82f6' },
    { label: 'SP.ATK', value: 100, color: '#f59e0b' },
    { label: 'SP.DEF', value: 100, color: '#8b5cf6' },
    { label: 'SPD', value: 80, color: '#ec4899' },
  ];

  // Sample game stats
  const gameStats = [
    { label: 'Level', value: 75, color: '#6366f1' },
    { label: 'Experience', value: 120, color: '#10b981' },
    { label: 'Health', value: 90, color: '#ef4444' },
    { label: 'Mana', value: 60, color: '#3b82f6' },
  ];

  // Sample skill stats
  const skillStats = [
    { label: 'Strength', value: 85, color: '#f59e0b' },
    { label: 'Agility', value: 70, color: '#8b5cf6' },
    { label: 'Intelligence', value: 95, color: '#ec4899' },
    { label: 'Charisma', value: 65, color: '#10b981' },
  ];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? '#0f172a' : '#f8fafc' },
      ]}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.title, { color: isDark ? '#f1f5f9' : '#1e293b' }]}>
            Stat Bar Component
          </Text>
          <Text
            style={[styles.subtitle, { color: isDark ? '#cbd5e1' : '#64748b' }]}
          >
            Reusable progress bars for displaying stats and data
          </Text>
        </View>

        {/* Pokemon Stats Example */}
        <StatBarGroup
          stats={pokemonStats}
          maxValue={255}
          title="Pokemon Stats"
          size="default"
        />

        {/* Small Size */}
        <View style={styles.section}>
          <Text
            style={[styles.sectionTitle, { color: isDark ? '#f1f5f9' : '#1e293b' }]}
          >
            Small Size
          </Text>
          <View
            style={[
              styles.exampleContainer,
              { backgroundColor: isDark ? '#1e293b' : '#ffffff' },
            ]}
          >
            {pokemonStats.slice(0, 3).map((stat, index) => (
              <StatBar
                key={index}
                label={stat.label}
                value={stat.value}
                maxValue={255}
                color={stat.color}
                size="small"
              />
            ))}
          </View>
        </View>

        {/* Large Size */}
        <View style={styles.section}>
          <Text
            style={[styles.sectionTitle, { color: isDark ? '#f1f5f9' : '#1e293b' }]}
          >
            Large Size
          </Text>
          <View
            style={[
              styles.exampleContainer,
              { backgroundColor: isDark ? '#1e293b' : '#ffffff' },
            ]}
          >
            {pokemonStats.slice(0, 3).map((stat, index) => (
              <StatBar
                key={index}
                label={stat.label}
                value={stat.value}
                maxValue={255}
                color={stat.color}
                size="large"
              />
            ))}
          </View>
        </View>

        {/* Game Stats Example */}
        <StatBarGroup
          stats={gameStats}
          maxValue={100}
          title="Game Stats"
          size="default"
        />

        {/* Skill Stats Example */}
        <StatBarGroup
          stats={skillStats}
          maxValue={100}
          title="Character Skills"
          size="default"
        />

        {/* Without Values */}
        <View style={styles.section}>
          <Text
            style={[styles.sectionTitle, { color: isDark ? '#f1f5f9' : '#1e293b' }]}
          >
            Without Numeric Values
          </Text>
          <View
            style={[
              styles.exampleContainer,
              { backgroundColor: isDark ? '#1e293b' : '#ffffff' },
            ]}
          >
            {pokemonStats.slice(0, 3).map((stat, index) => (
              <StatBar
                key={index}
                label={stat.label}
                value={stat.value}
                maxValue={255}
                color={stat.color}
                showValue={false}
              />
            ))}
          </View>
        </View>

        {/* Usage Examples */}
        <View style={styles.section}>
          <Text
            style={[styles.sectionTitle, { color: isDark ? '#f1f5f9' : '#1e293b' }]}
          >
            Usage Examples
          </Text>
          <View
            style={[
              styles.codeBlock,
              { backgroundColor: isDark ? '#1e293b' : '#ffffff' },
            ]}
          >
            <Text
              style={[styles.codeText, { color: isDark ? '#cbd5e1' : '#1e293b' }]}
            >
              {'<StatBar\n'}
              {'  label="HP"\n'}
              {'  value={80}\n'}
              {'  maxValue={255}\n'}
              {'  color="#10b981"\n'}
              {'/>\n\n'}
              {'<StatBarGroup\n'}
              {'  stats={[\n'}
              {'    { label: "HP", value: 80 },\n'}
              {'    { label: "ATK", value: 82 }\n'}
              {'  ]}\n'}
              {'  maxValue={255}\n'}
              {'  showTotal={true}\n'}
              {'/>'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    marginBottom: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  exampleContainer: {
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  codeBlock: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 14,
    lineHeight: 20,
  },
});
