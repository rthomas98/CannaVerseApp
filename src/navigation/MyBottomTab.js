import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Home from "../screens/Home";
import Discover from "../screens/Discover";
import Post from "../screens/Post";
import Profile from "../screens/Profile";
import messages from "../screens/Messages";
import { Colors } from "../constants/colors";

const MyTab = createBottomTabNavigator();

export default function MyBottomTab() {
    return (
        <MyTab.Navigator>
            <MyTab.Screen 
                name="Home" component={Home} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: {
                        color: Colors.primary,
                        fontSize: 14,
                        fontWeight: 'bold',
                    
                    },
                    tabBarIcon: ({color, focused}) => (
                        <Image 
                            source={focused 
                                ? require('../../src/imgs/home-hover.png')
                                : require('../../src/imgs/home.png')
                            }
                        />
                    ),
                }}
            />
            <MyTab.Screen 
                name="Discover" 
                component={Discover} 
                options={{
                    tabBarLabel: 'Discover',
                    tabBarIcon: ({color, focused}) => (
                        <Image 
                            source={focused
                               ? require('../../src/imgs/discover-hover.png')
                               : require('../../src/imgs/discover.png')
                            }
                        />
                    ),
                }}
            />
            <MyTab.Screen 
                name="Post" 
                component={Post}
                options={{
                    tabBarLabel: 'Post',
                    tabBarIcon: ({color, focused}) => (
                        <Image 
                            source={focused
                                ? require('../../src/imgs/home-hover.png')
                                : require('../../src/imgs/home.png')
                            }
                        />
                    ),
                }}
            />
            <MyTab.Screen
                name="Messages" 
                component={messages} 
                options={{
                    tabBarLabel: 'Messages',
                    tabBarIcon: ({color, focused}) => (
                        <Image 
                            source={focused
                                ? require('../../src/imgs/messages-hover.png')
                                : require('../../src/imgs/messages.png')
                            }
                        />
                    ),
                }}
            />
            <MyTab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({color, focused}) => (
                        <Image 
                            source={focused
                                ? require('../../src/imgs/profile-hover.png')
                                : require('../../src/imgs/profile.png')}
                        />
                    ),
                }}
            />
        </MyTab.Navigator>
    );
    }   
