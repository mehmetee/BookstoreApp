import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {COLORS,icons} from '../constants'
import Home from '../screen/HomeScreenFolder/Home'

const Tab=createBottomTabNavigator();

function Tabs(){
return(
    <Tab.Navigator 
    screenOptions={({route})=>({
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle:{
            tabBarStyle: [
                {"display": "flex" },null ],
              backgroundColor:COLORS.black
        },
        
        tabBarIcon:({focused})=>{
            const tintColor=focused ? COLORS.white:COLORS.lightGray
            switch (route.name) {
                case 'Home':
                    return(
                        <Image 
                        source={icons.dashboard_icon}
                        style={{
                            tintColor:tintColor,
                            resizeMode:'contain',
                            width:25,
                            height:25
                        }}
                        />
                        )
                case 'Search':
                    return(
                        <Image 
                        source={icons.search_icon}
                        style={{
                            tintColor:tintColor,
                            resizeMode:'contain',
                            width:25,
                            height:25
                        }}
                        />
                        )
            
                case 'Notification':
                    return(
                        <Image 
                        source={icons.notification_icon}
                        style={{
                            tintColor:tintColor,
                            resizeMode:'contain',
                            width:25,
                            height:25
                        }}
                        />
                        )
                case 'Setting':
                    return(
                        <Image 
                        source={icons.menu_icon}
                        style={{
                            tintColor:tintColor,
                            resizeMode:'contain',
                            width:25,
                            height:25
                        }}
                        />
                        )
            }
        }
    })}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Home} />
        <Tab.Screen name="Notification" component={Home} />
        <Tab.Screen name="Setting" component={Home} />
    </Tab.Navigator>
)
}
export default Tabs;