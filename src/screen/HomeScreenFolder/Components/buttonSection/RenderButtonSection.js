import React from "react";
import {View,Text, TouchableOpacity,Image, } from "react-native";

import { icons} from '../../../../constants'
import Divider from '../../../../components/Divider';
import styles from './buttonSection.styles'

function RenderButtonSection(){
    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                {/* Claim */}
                <TouchableOpacity style={styles.claimButtonContainer} 
                onPress={()=>console.log('claim')}
                >
                    <View style={styles.claimİnnerContainer}>
                        <Image 
                        source={icons.claim_icon}
                        style={styles.claimImage}
                        />
                        <Text style={styles.claimTitle}>Claim</Text>
                    </View>
                </TouchableOpacity>

                {/* Divider */}
                <Divider bgColor={styles.dividerColor}/>

                {/* Get Point */}
                <TouchableOpacity style={styles.pointButtonContainer} 
                onPress={()=>console.log('get point')}>
                    <View style={styles.pointinnerContainer}>
                        <Image 
                        source={icons.point_icon}
                        style={styles.pointImage}
                        />
                         <Text style={styles.pointTitle}>Get Point</Text>
                    </View>
                </TouchableOpacity>

                {/* Divider */}
                <Divider bgColor={styles.dividerColor}/>

                {/* my card */}
                <TouchableOpacity style={styles.myCardButtonContainer} 
                onPress={()=>console.log('My card')}>
                    <View style={styles.myCardInnerContainer}>
                        <Image 
                        source={icons.card_icon}
                        style={styles.myCardImage}
                        />
                         <Text style={styles.myCardTitle}>My Card</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RenderButtonSection;