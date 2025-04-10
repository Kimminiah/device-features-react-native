import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { TravelEntry } from '../types';
import styles from '../styles/styles';
import { ThemeContext } from '../context/ThemeContext';

type Props = {
  entry: TravelEntry;
  onRemove: () => void;
};

export default function TravelEntryItem({ entry, onRemove }: Props) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.entryItem,
        { 
          backgroundColor: isDarkMode ? 'rgba(58, 12, 163, 0.7)' : 'rgba(226, 192, 255, 0.7)',
          borderColor: isDarkMode ? '#9D4EDD' : '#7B2CBF',
          shadowColor: isDarkMode ? '#E2C0FF' : '#5A189A',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        } 
      ]}
    >
      <Image source={{ uri: entry.photoUri }} style={styles.entryImage} />
      <View style={styles.entryDetails}>
        <Text style={[styles.text, { 
          color: isDarkMode ? '#FFFFFF' : '#10002B',
          fontWeight: '600'
        }]}>
          📍 {entry.address}
        </Text>
      </View>
      <TouchableOpacity 
        onPress={onRemove} 
        style={[
          styles.removeButton,
          { 
            backgroundColor: isDarkMode ? '#9D4EDD' : '#7B2CBF',
            shadowColor: isDarkMode ? '#3A0CA3' : '#5A189A',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
            elevation: 5,
          }
        ]}
      >
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
}