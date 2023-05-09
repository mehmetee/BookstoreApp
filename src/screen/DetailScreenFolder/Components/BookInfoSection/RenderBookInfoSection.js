import React from "react";
import {FONTS, SIZES, icons} from '../../../../constants'
import {Text, View,ImageBackground,TouchableOpacity,  Image} from "react-native";
import Divider from '../../../../components/Divider' 
import styles from './bookinfosection.style';

export default function RenderBookInfoSection({book,navigation}){
    return(
        <View style={styles.container}>
            <ImageBackground 
            source={book.bookCover}
            style={styles.imgBackgroun}
            />
            <View style={[styles.imgBackgrounBlur,{ backgroundColor:book.backgroundColor}]}></View>
            {/*header navigation*/}
            <View style={styles.navigationContainer}>
                <TouchableOpacity style={styles.navigationBackButton} 
                onPress={()=>navigation.goBack()}
                >
                    <Image
                    source={icons.back_arrow_icon}
                    style={[styles.backButtonImage,{tintColor:book.navTintColor}]}
                    />
                </TouchableOpacity>
                <View style={styles.headerDetailNameContainer}>
                    <Text style={[styles.headerDetailTitle,{color:book.navTintColor}]}>Book Detail</Text>
                </View>
                <TouchableOpacity style={styles.seemoreButtonContainer}
                onPress={()=>console.log('Click more')}>
                    <Image 
                    source={icons.more_icon}
                    style={[styles.seemoreButtonImage,{tintColor:book.navTintColor}]}
                    />
                </TouchableOpacity>
            </View>
            {/*Book cover */}
            <View style={{flex:5,paddingTop:SIZES.padding2,alignItems:'center'}}>
                    <Image 
                    source={book.bookCover}
                    style={{
                        resizeMode:'contain',
                        flex:1,
                        width:150,
                        height:'auto'
                    }}
                     />
            </View>
            {/* Book name  */}
            <View style={styles.coverContainer}>
                    <Text style={[styles.coverBookname,{color:book.navTintColor}]}>{book.bookName}</Text>
                    <Text style={{...FONTS.body3,color:book.navTintColor}}>{book.author}</Text>
           
            </View>
            {/*Book ınfo */}
            <View 
            style={styles.infoContainer}>
                {/*Rating */}
                <View style={styles.raitingContainer}>
                    <Text style={styles.raitingNumber}>{book.rating}</Text>
                    <Text style={styles.raitingText}>Rating</Text>
                </View>
                <Divider bgColor={styles.dividerbgColor}/>
                {/* Pages */}
                <View style={styles.pagesContainer}>
                    <Text style={styles.pagesNoText}>{book.pageNo}</Text>
                    <Text style={styles.pagesTitleText}>Pages</Text>
                </View>
                <Divider bgColor={styles.dividerbgColor}/>

                {/*Language */}
                <View style={styles.lngContainer}>
                    <Text style={styles.languageName}>{book.language}</Text>
                    <Text style={styles.languageText}>Language</Text>
                </View>
            </View>
        </View>
    )
}