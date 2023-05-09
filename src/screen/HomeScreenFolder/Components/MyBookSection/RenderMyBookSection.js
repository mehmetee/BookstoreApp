import React from "react";
import { View,Text, TouchableOpacity,Image,FlatList} from "react-native";
import {SIZES, icons} from '../../../../constants'
import styles from './mybookSection.styles';

function RenderMyBookSection({myBooks,navigation}){

    const renderItem =({item,index})=>{
        return( 
            <TouchableOpacity style={[styles.renderItemContainer,{marginLeft:index ==0 ? SIZES.padding : 0}]}
             onPress={()=>{navigation.navigate('BookDetail',{book:item})}}
             >
                {/*Book cover */}
                <Image 
                source={item.bookCover}
                style={styles.bookCoverImage}
                />
                {/* book info */}
                <View style={styles.bookInfoContainer}>
                    <Image 
                    source={icons.clock_icon}
                    style={styles.bookInfoClockImage}
                    />
                    <Text style={styles.bookInfoClockText}>{item.lastRead}</Text>
                    <Image 
                    source={icons.page_icon}
                    style={styles.bookINfoPageImage}
                    />
                    <Text style={styles.bookInfoPageText} >{item.completion}</Text>
                </View>
             </TouchableOpacity>
        )
    }
    return(
        <View style={styles.container}>
            {/* header */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>My Book</Text>
                <TouchableOpacity
                onPress={()=>console.log('See More')}>
                    <Text style={styles.headerButtonText}>see more</Text>
                </TouchableOpacity>
            </View>
            {/*book */}
            <View style={styles.bookContainer}>
                <FlatList 
                data={myBooks}
                renderItem={renderItem}
                keyExtractor={(item)=>item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}
export default RenderMyBookSection;