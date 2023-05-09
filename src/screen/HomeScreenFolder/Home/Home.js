import React from "react";
import { SafeAreaView,View,StatusBar,ScrollView } from "react-native";

import { myBooksData,profileData} from "../../../Data/Data";
import RenderHeader from "../Components/header/RenderHeader";
import RenderButtonSection from "../Components/buttonSection/RenderButtonSection";
import RenderMyBookSection from "../Components/MyBookSection/RenderMyBookSection";
import RenderCategoriesHeader from "../Components/CategoriesHeader";
import RenderCategoryData from "../Components/CatagoryData/RenderCategoryData";
import styles from "./homeStyles";

function Home({navigation}){

    const [profile,setProfile]=React.useState(profileData); 
    const [myBooks,setMyBooks]=React.useState(myBooksData)

    
  

    return(
        <SafeAreaView style={styles.homecontainer}>
            <StatusBar backgroundColor={styles.statuseBar} />
            {/* Header Section*/}
            <View style={styles.headerSection}>
                <RenderHeader profile={profile}/>
                <RenderButtonSection/>
            </View>

            {/* Body Section*/}
            <ScrollView style={styles.scrolll}>
            {/* Books Section*/}
            <View>
                <RenderMyBookSection myBooks={myBooks} navigation={navigation}/>
            </View>
            {/* Catagories Section*/}
            <View style={styles.catagoriesSection}>
                <View>
                    <RenderCategoriesHeader/>
                </View>
                <View>
                    <RenderCategoryData navigation={navigation}/> 
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home