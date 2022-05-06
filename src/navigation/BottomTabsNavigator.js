import React from 'react';
import { Text, Platform, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen"

import { SIZES, COLORS } from '../constants'

export default () => {
    const BottomTab = createBottomTabNavigator();

    const TabButton = ({ label, icon, focused }) => {
        return (
            <View
                style={[
                    {
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                ]}
            >
                <View
                    style={[
                        {
                            flexDirection: 'column',
                            height: 50,
                            minWidth: 50,
                            paddingHorizontal: SIZES.margin,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25,
                            backgroundColor: focused ? COLORS.primary : COLORS.white,
                        }
                    ]}
                >
                    {icon}

                    {focused &&
                        <Text
                            numberOfLines={1}
                            style={{
                                color: focused ? COLORS.white : COLORS.primary,
                                fontSize: SIZES.fontSmallest,
                            }}>
                            {label}
                        </Text>
                    }
                </View>
            </View>
        )
    }

    return (
        <BottomTab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                unmountOnBlur: true,
                tabBarShowLabel: false,
                tabBarStyle: {
                    width: '95%',
                    height: Platform.OS === 'ios' ? 100 : 50,
                    marginBottom: SIZES.margin * 3,
                    alignSelf: 'center',
                    paddingHorizontal: SIZES.margin,
                    paddingTop: Platform.OS === 'ios' ? 25 : 0,
                    backgroundColor: COLORS.grayLight,
                    borderRadius: 100,
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <BottomTab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabButton
                            label='home'
                            focused={focused}
                            icon={<Ionicons
                                name='home-outline'
                                size={20}
                                color={focused ? COLORS.white : COLORS.primary}
                            />}
                        />
                    )
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabButton
                            label='Search'
                            focused={focused}
                            icon={<Ionicons
                                name='search-outline'
                                size={20}
                                color={focused ? COLORS.white : COLORS.primary}
                            />}
                        />
                    )
                }}
            />
            <BottomTab.Screen
                name="Cart"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabButton
                            label='Cart'
                            focused={focused}
                            icon={<Ionicons
                                name='cart-outline'
                                size={20}
                                color={focused ? COLORS.white : COLORS.primary}
                            />}
                        />
                    )
                }}
            />
            <BottomTab.Screen
                name="Favorites"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabButton
                            label='Favorites'
                            focused={focused}
                            icon={<Ionicons
                                name='heart-outline'
                                size={20}
                                color={focused ? COLORS.white : COLORS.primary}
                            />}
                        />
                    )
                }}
            />
            <BottomTab.Screen
                name="Notification"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabButton
                            label='Notification'
                            focused={focused}
                            icon={<Ionicons
                                name='notifications-outline'
                                size={20}
                                color={focused ? COLORS.white : COLORS.primary}
                            />}
                        />
                    )
                }}
            />
        </BottomTab.Navigator>
    )
}