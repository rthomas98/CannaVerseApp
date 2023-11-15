import { createStackNavigator } from "@react-navigation/stack";

import MyBottomTab from "./MyBottomTab";

const HomeStack = createStackNavigator();

export default function MyStack() {
    return (
        <HomeStack.Navigator initialRouteName="Home"
            screenOptions={
                {
                    headerShown: false,
                }
            }
        >
            <HomeStack.Screen name="Root" component={MyBottomTab} />
        </HomeStack.Navigator>
    );
}