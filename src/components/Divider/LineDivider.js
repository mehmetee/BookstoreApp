import React from "react";
import { View  } from "react-native";
import styles from './lineDividerStyles';

export default function lineDivider({bgColor}){
    return(
        <View style={styles.container}>
            <View style={[styles.innerContainer,{borderLeftColor:bgColor}]}></View>
        </View>
    )
}