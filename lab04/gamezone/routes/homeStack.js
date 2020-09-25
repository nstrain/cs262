import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

// const screens = {
//     Home: {
//         screen: Home
//     },
//     ReviewDetails: {
//         screen: ReviewDetails
//     }
// }

const Stack = createStackNavigator();
export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#ddd', height: 60}}}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{title: 'GameZone',
                    headerStyle: {backgroundColor: '#333', height: 60}}}
            />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{title: 'Review Details',
                    headerStyle: {backgroundColor: '#333'}}}
            />
        </Stack.Navigator>
    );
};
