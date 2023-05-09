import React from "react";
import { View,Text, TouchableOpacity,Image, } from "react-native";

import {icons} from '../../../../constants'
import styles from './renderHeader.styles'

function RenderHeader({profile}){
    return(
        <View style={styles.container}>
            {/* Greetings*/}
            <View style={styles.greetingsContainer}>
                <View style={styles.greetingsInnerContainer}>
                    <Text style={styles.greetingsText}>Good Morning</Text>
                    <Text style={styles.greetingsUserName}>{profile.name}</Text>
                </View>
            </View>
                        {/* Points*/}
            <TouchableOpacity style={styles.plusButtonContainer}
            onPress={()=>console.log('points')}>
                <View style={styles.plusButtonInnerContainer}>
                    <View style={styles.buttonIconsPlusContainer}>
                        <Image 
                        source={icons.plus_icon}
                        style={styles.plusImage}
                        />
                    </View>
                    <Text style={styles.profilePointText}>{profile.point} points</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default RenderHeader;