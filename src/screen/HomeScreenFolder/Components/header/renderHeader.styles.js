import { StyleSheet } from "react-native";
import {COLORS, FONTS, SIZES} from '../../../../constants'

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        paddingHorizontal:SIZES.padding,
        alignItems:'center'
    },
            /* Greetings*/
    greetingsContainer:{
        flex:1,
    },
    greetingsInnerContainer:{
        marginRight:SIZES.padding
    },
    greetingsText:{
        ...FONTS.h3,
        color:COLORS.white
    },
    greetingsUserName:{
        ...FONTS.h3,
        color:COLORS.white
    },
                        /* Points*/

    plusButtonContainer:{
        backgroundColor:COLORS.primary,
        height:40,
        paddingLeft:3,
        paddingRight:SIZES.radius,
        borderRadius:20,
    },
    plusButtonInnerContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonIconsPlusContainer:{
        width:30,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25,
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    plusImage:{
        resizeMode:'contain',
        width:20,
        height:20
    },
    profilePointText:{
        marginLeft:SIZES.base,
        color:COLORS.white,
        ...FONTS.body3
    }
})