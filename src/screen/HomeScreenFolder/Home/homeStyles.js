import { StyleSheet } from "react-native";
import {COLORS,SIZES} from '../../../constants';

export default StyleSheet.create({
    homecontainer:{
        flex:1,
        backgroundColor:COLORS.black
    },
    statuseBar:COLORS.black,
    headerSection:{
        height:200
    },
    scrolll:{
        marginTop:SIZES.radius
    },

    catagoriesSection:{
        marginTop:SIZES.padding
    }
})