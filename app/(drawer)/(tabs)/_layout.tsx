import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
    const colorScheme = useColorScheme();
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home77ee',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? 'home' : 'home-outline'}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? 'code-slash' : 'code-slash-outline'}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="reel"
                options={{
                    title: 'Reeuils3s',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? 'code' : 'code-outline'}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
