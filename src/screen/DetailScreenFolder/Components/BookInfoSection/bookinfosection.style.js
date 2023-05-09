import { StyleSheet } from "react-native";
import {COLORS, FONTS, SIZES} from '../../../../constants'

export default StyleSheet.create({
    dividerbgColor:COLORS.lightGray2,
    container:{
        flex:1,
    },
    imgBackgroun:{
        resizeMode:'cover',
        position:'absolute',
        top:0,
        right:0,
        bottom:0,
        left:0
    },
    imgBackgrounBlur:{
        position:'absolute',
        top:0,
        right:0,
        bottom:0,
        left:0,
    },
            /*header navigation*/
    navigationContainer:{
        flexDirection:'row',
        paddingHorizontal:SIZES.radius,
        height:'12%',
        alignItems:'flex-end'
    },
    navigationBackButton:{
        marginLeft:SIZES.base
    },
    backButtonImage:{
        resizeMode:'contain',
        width:30,
        height:30,
    },
    headerDetailNameContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'  
    },
    headerDetailTitle:{
        ...FONTS.h3
    },
    seemoreButtonContainer:{
        marginRight:SIZES.base
    },
    seemoreButtonImage:{
        resizeMode:'contain',
        width:30,
        height:30,
        alignItems:'flex-end'
    },
                /*Book cover */
coverContainer:{
    flex:1.8,
    alignItems:'center',
    justifyContent:'center'
},
coverBookname:{
    ...FONTS.h2,
},
                /*Book info */
    infoContainer:{
        flexDirection:'row',
        paddingVertical:20,
        margin:SIZES.padding,
        borderRadius:SIZES.radius,
        backgroundColor:'rgba(0,0,0,0.3)'
    },
                /* Raiting */
    raitingContainer:{
        flex:1,
        alignItems:'center'
    },
    raitingNumber:{
        ...FONTS.body3,
        color:COLORS.white
    },
    raitingText:{
        ...FONTS.body4,
        color:COLORS.white
    },
                /* Pages */
    pagesContainer:{
        flex:1,
        alignItems:'center' ,
        paddingHorizontal:SIZES.radius
    },
    pagesNoText:{
        ...FONTS.body3,
        color:COLORS.white
    },
    pagesTitleText:{
        ...FONTS.body4,
        color:COLORS.white
    },
                /* Language */
    lngContainer:{
        flex:1,
        alignItems:'center'
    },
    languageName:{
        ...FONTS.body3,
        color:COLORS.white
    },
    languageText:{
        ...FONTS.body4,
        color:COLORS.white
    }
})