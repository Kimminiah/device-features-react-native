import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';  
import { useTheme } from '../context/ThemeContext';
import HomeScreen from '../screens/HomeScreen';
import TravelEntryScreen from '../screens/TravelEntryScreen';

export type RootStackParamList = {
  Home: undefined;
  TravelEntry: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: isDarkMode ? '#10002B' : '#F3E5FF', // Deep violet/Very light lavender
        }
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Travel Diary',
          headerLeft: () => null,
          headerRight: () => (
            <Ionicons
              name={isDarkMode ? 'sunny' : 'moon'}
              size={24}
              color={isDarkMode ? '#E2C0FF' : '#5A189A'}
              onPress={toggleDarkMode}
              style={{ paddingRight: 10 }}
            />
          ),
          headerStyle: {
            backgroundColor: isDarkMode ? '#3A0CA3' : '#C77DFF',
          },
          headerTitleStyle: {
            color: isDarkMode ? '#FFFFFF' : '#10002B',
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="TravelEntry"
        component={TravelEntryScreen}
        options={{
          headerTitle: '',
          headerLeft: () => null,
          headerRight: () => (
            <Ionicons
              name={isDarkMode ? 'sunny' : 'moon'}
              size={24}
              color={isDarkMode ? '#E2C0FF' : '#5A189A'}
              onPress={toggleDarkMode}
              style={{ paddingRight: 10 }}
            />
          ),
          headerStyle: {
            backgroundColor: isDarkMode ? '#3A0CA3' : '#C77DFF',
          },
          headerTitleStyle: {
            color: isDarkMode ? '#FFFFFF' : '#10002B',
          },
        }}
      />
    </Stack.Navigator>
  );
}