import React, { useState } from "react";
import {COLORS,SIZES} from '../../../../constants'
import {Text, View,ScrollView} from "react-native";
import { Animated } from "react-native";
import styles from './description.style';

export default function RenderDescription({book}){

    const [scrollViewHeight,setScrollViewHeight]=useState(1);
    const [scrollViewVisibleHeight,setScrollViewVisibleHeight]=useState(0);
    const indicator = new Animated.Value(0)

    const indicatorSize =scrollViewHeight>scrollViewVisibleHeight ? scrollViewVisibleHeight*scrollViewVisibleHeight/scrollViewHeight:scrollViewVisibleHeight
    
    const difference =scrollViewVisibleHeight>indicatorSize ?scrollViewVisibleHeight-indicatorSize :1

    return(
        <View style={styles.container}>
            <View style={{width:4,height:'100%',backgroundColor:COLORS.gray}}>
                <Animated.View 
                style={{
                    width:4,
                    height:indicatorSize,
                    backgroundColor:COLORS.lightGray4,
                    transform:[{
                        translateY:Animated.multiply(indicator,
                            scrollViewVisibleHeight/scrollViewHeight).interpolate({
                                inputRange:[0,difference],
                                outputRange:[0,difference],
                                extrapolate:'clamp'
                            })
                    }]
                }}
                />
            </View>
            <ScrollView 
            contentContainerStyle={{paddingLeft:SIZES.padding2}}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onContentSizeChange={(width,height)=>{
                setScrollViewHeight(height)
            }}
            onLayout={({nativeEvent:{layout:{x,y,width,height}}})=>{
                setScrollViewVisibleHeight(height)
            }}
            onScroll={Animated.event(
                [{nativeEvent:{contentOffset:{y:indicator}}}],
                { useNativeDriver:false}
            )}
            >
                <Text style={styles.descriotionsTitle}>Description</Text>
                <Text style={styles.descriptions}>{book.description}</Text>
            </ScrollView>
        </View>
    )
}