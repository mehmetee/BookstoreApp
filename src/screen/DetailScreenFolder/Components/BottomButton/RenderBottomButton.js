import React from "react";
import {icons} from '../../../../constants'
import {Text, View,TouchableOpacity,  Image,} from "react-native";
import styles from './bottomButton.style';

export default function RenderBottomButton(){
    return(
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.bookmarkButton}
            onPress={()=>console.log('Bookmark')}
            >
                <Image 
                source={icons.bookmark_icon}
                style={styles.bookmarkImage}
                />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.startingButton}
            onPress={()=>console.log('Start Reading')}
            >
                <Text style={styles.startingButtonText}> Start Reading</Text>
            </TouchableOpacity>
        </View>
    )
}