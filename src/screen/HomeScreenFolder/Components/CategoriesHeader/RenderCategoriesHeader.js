import React from "react";
import { View,Text, TouchableOpacity,FlatList} from "react-native";
import { catagoriesData} from "../../../../Data/Data";
import styles from './catagoriesHeaderStyles';
import { useDispatch } from "react-redux";
import { add } from "../../../../Redux/catagorDataIdSlice";

 function RenderCategoriesHeader(){
    const [selectedCatagory,setSelectedCatagory]=React.useState(1)
    const dispatch=useDispatch()
    const renderItem=({item})=>{
        return(
        <TouchableOpacity style={styles.renderItemButtonContainer}
        onPress={()=>{setSelectedCatagory(item.id),dispatch(add(item.id))}}>
            {
            selectedCatagory==item.id &&
            <Text style={styles.activeCatagoriesText}>{item.catagoriesName}</Text>
            }
             {
            selectedCatagory !==item.id &&
            <Text style={styles.noActiveCatagoriesText}>{item.catagoriesName}</Text>
            }
        </TouchableOpacity>
    )}
    return(
        <View style={styles.container}>
            <FlatList 
            data= {catagoriesData}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(item)=>{item.id}}
            />
        </View>
    )
}
export default RenderCategoriesHeader;