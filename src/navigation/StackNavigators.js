import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import BottomTabsNavigator from './BottomTabsNavigator';

import { SIZES, COLORS, icons, fakeDataAPI } from '../constants';
import { AppHeader} from "../components/AppHeader"

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerTintColor: COLORS.white,
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                cardStyle:{
                    backgroundColor: 'blue',
                },
                headerTitle: (props) => <AppHeader
                    title={props.children}
                />
            }}
        >
            <Stack.Screen name='Login' 
                component={LoginScreen}
                options={{ 
                    headerShown: false }} />
            <Stack.Screen name='Home' component={BottomTabsNavigator}/>
        </Stack.Navigator>
    );
}