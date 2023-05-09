import React from "react";
import { View,Text, TouchableOpacity,Image,FlatList } from "react-native";
import {icons} from '../../../../constants';
import { catagoriesData} from "../../../../Data/Data";
import styles from './CatagoryDataStyles'
import { useSelector } from "react-redux";

export default function RenderCategoryData({navigation}){
    const selector=useSelector(state=>state.catagory.catagoryDataId)
    
    var books=[]
    let selectedCatagoryBooks=catagoriesData.filter(x=>x.id==selector)
    
    if(selectedCatagoryBooks.length>0){
        books=selectedCatagoryBooks[0].books
    }
    const renderItem=({item})=>{
        return(
            <View style={styles.renderItemContainer}>
                <TouchableOpacity style={styles.renderItemHomeButtonContainer}
                onPress={()=>{navigation.navigate('BookDetail',{book:item})}}>
                    <Image 
                    source={item.bookCover}
                    style={styles.renderItemHomeImage}
                    />
                    <View style={styles.homeButtonInnerContainer}>
                        <View>
                            <Text style={styles.renderItemBookTitle}>{item.bookName}</Text>
                            <Text style={styles.renderItemBookWrite}>{item.author}</Text>
                        </View>
                        <View style={styles.renderItemIconsContainer}>
                            <Image 
                            source={icons.page_filled_icon}
                            style={styles.renderItemPageFilledImage}
                            />
                            <Text style={styles.renderItemPageNoText}>{item.pageNo}</Text>
                            <Image 
                            source={icons.read_icon}
                            style={styles.renderItemReadImage}
                            />
                            <Text style={styles.renderItemReaded}>{item.readed}</Text>
                            
                        </View>
                        <View style={styles.renderItemBookType}>
                           {
                            item.genre.includes('Adventure') &&
                            <View style={styles.adventureContainer}>
                                <Text style={styles.adventureText}>Adventure</Text>
                            </View>
                           }
                           {
                            item.genre.includes('Romance') &&
                            <View style={styles.romanceContainer}>
                                <Text style={styles.romanceText}>Romance</Text>
                            </View>
                           }
                           {
                            item.genre.includes('Drama') &&
                            <View style={styles.dramaContainer}>
                                <Text style={styles.dramaText}>Drama</Text>
                            </View>
                           }
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bookmarkButtonContainer}
                onPress={()=>{console.log('bookmark')}}
                >
                    <Image 
                    source={icons.bookmark_icon}
                    style={styles.bookmarkImage}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    return(
        <View style={styles.container}> 
            <FlatList  
            data={books}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item)=>{item.id}}
            />
        </View>
    )
}