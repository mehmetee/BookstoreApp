import { StyleSheet } from "react-native";
import {COLORS, FONTS, SIZES} from '../../../../constants'

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row'
    },
            /* Book mark icon */
    bookmarkButton:{
        width:60,
        backgroundColor:COLORS.secondary,
        marginLeft:SIZES.padding,
        marginVertical:SIZES.base,
        borderRadius:SIZES.radius,
        alignItems:'center',
        justifyContent:'center'
    },
    bookmarkImage:{
        resizeMode:'contain',
        width:25,
        height:25,
        tintColor:COLORS.lightGray2
    },
        /* Startin readin button */
    startingButton:{
        flex:1,
        backgroundColor:COLORS.primary,
        marginHorizontal:SIZES.base,
        marginVertical:SIZES.base,
        borderRadius:SIZES.radius,
        alignItems:'center',
        justifyContent:'center'
    },
    startingButtonText:{
        ...FONTS.h3,
        color:COLORS.white
    }
})