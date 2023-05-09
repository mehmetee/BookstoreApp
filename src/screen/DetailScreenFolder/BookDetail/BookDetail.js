import React, { useEffect, useState } from "react";
import {View} from "react-native";

import RenderBookInfoSection from "../Components/BookInfoSection";
import RenderDescription from "../Components/Desciription";
import RenderBottomButton from "../Components/BottomButton";
import styles from './bookDetail.style';

export default function BookDetail({route,navigation}){
    const [book,setBook]=useState(null);

    useEffect(()=>{
        let {book}=route.params;
        setBook(book)
    },[book])

    if(book){
        return(
            <View style={styles.container}>
                {/*Book Cover Section*/}
                <View style={styles.coverSection}>
                    <RenderBookInfoSection  book={book} navigation={navigation}/>
                </View>
                {/*Description*/}
                <View style={styles.description}>
                    <RenderDescription book={book}/>
                </View>
                {/*Buttons*/}
                <View style={styles.buttons}>
                    <RenderBottomButton />
                </View>
            </View>
        )
    }else{
        return(<></>)
    }
}