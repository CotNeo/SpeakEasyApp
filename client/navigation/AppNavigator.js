import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import ChatScreen from '../screens/ChatScreen';
import GroupScreen from '../screens/GroupScreen';
import SettingsScreen from '../screens/SettingsScreen';
import VoiceRecordScreen from '../screens/VoiceRecordScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ title: 'Chat' }}
        />
        <Stack.Screen
          name="Group"
          component={GroupScreen}
          options={{ title: 'Group Chat' }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
        <Stack.Screen
          name="VoiceRecord"
          component={VoiceRecordScreen}
          options={{ title: 'Voice Record' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;