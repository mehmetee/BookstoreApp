import { StyleSheet } from "react-native";
import {COLORS, FONTS, SIZES} from '../../../../constants'

export default StyleSheet.create({
    container:{
        flex:1,
        paddingLeft:SIZES.padding
    },
            /*render Item  */
    renderItemButtonContainer:{
        flex:1,
        marginRight:SIZES.padding
    },
    activeCatagoriesText:{
        color:COLORS.white,
        ...FONTS.h3
    },
    noActiveCatagoriesText:{
        color:COLORS.lightGray,
        ...FONTS.h3
    }
})