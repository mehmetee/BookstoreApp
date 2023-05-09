import { StyleSheet } from "react-native";
import {COLORS, FONTS, SIZES} from '../../../../constants'

export default StyleSheet.create({
    container:{
        flex:1,
    },
            /* header */
    headerContainer:{
        paddingHorizontal:SIZES.padding,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headerTitle:{
        ...FONTS.body2,
        color:COLORS.white
    },
    headerButtonText:{
        ...FONTS.body3,
        color:COLORS.lightGray,
        alignItems:'flex-start',
        textDecorationLine:'underline'
    },
                /* Book */
    bookContainer:{
        flex:1,
        marginTop:SIZES.padding
    },
            /* Render Item  */
    renderItemContainer:{
        flex:1,
        marginRight:SIZES.radius,

    },
    bookCoverImage:{
        resizeMode:'cover',
        width:160,
        height:230,
        borderRadius:20
    },
                /* book info */
    bookInfoContainer:{
        marginTop:SIZES.radius,
        flexDirection:'row',
        alignItems:'center'
    },
    bookInfoClockImage:{
        width:20,
        height:20,
        tintColor:COLORS.lightGray
    },
    bookInfoClockText:{
        marginLeft:5,
        ...FONTS.body3,
        color:COLORS.lightGray 
    },
    bookINfoPageImage:{
        marginLeft:SIZES.radius,
        width:20,
        height:20,
        tintColor:COLORS.lightGray
    },
    bookInfoPageText:{
        marginLeft:5,
        ...FONTS.body3,
        color:COLORS.lightGray
    }

})