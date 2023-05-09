import { StyleSheet } from "react-native";
import {COLORS, FONTS, SIZES} from '../../../../constants'

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:15
    },
    innerContainer:{
        flexDirection:'row',
        height:70,
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.radius
    },
                /* Claim */
    claimButtonContainer:{
        flex:0.85
    },
    claimİnnerContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"center"
    },
    claimImage:{
        resizeMode:'contain',
        width:27,
        height:27
    },
    claimTitle:{
        marginLeft:SIZES.base,
        ...FONTS.body4,
        color:COLORS.white
    },
                /* Divider */
    dividerColor: COLORS.lightGray,

                /* Get Point */
    pointButtonContainer:{
        flex:1
    },
    pointinnerContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    pointImage:{
        resizeMode:'contain',
        width:27,
        height:27
    },
    pointTitle:{
        marginLeft:SIZES.base,
        ...FONTS.body4,
        color:COLORS.white
    },
                /* my card */
    myCardButtonContainer:{
        flex:1,
    },
    myCardInnerContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    myCardImage:{
        resizeMode:'contain',
        width:27,
        height:27
    },
    myCardTitle:{
        marginLeft:SIZES.base,
        ...FONTS.body4,
        color:COLORS.white}


})