import { StyleSheet } from "react-native";
import {COLORS, FONTS, SIZES} from '../../../../constants'

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        padding:SIZES.padding
    },
    descriotionsTitle:{
        ...FONTS.h2,
        color:COLORS.white,
        marginBottom:SIZES.padding
    },
    descriptions:{
        ...FONTS.body2,
        color:COLORS.lightGray
    }
})