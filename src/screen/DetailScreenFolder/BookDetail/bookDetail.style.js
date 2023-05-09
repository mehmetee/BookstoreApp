import { StyleSheet } from "react-native";
import {COLORS,} from '../../../constants'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.black
    },
                /*Book Cover Section*/
    coverSection:{flex:4},
                    /* Description */
    description:{flex:2},
                    /* Buttons */
    buttons:{
        height:70,
        marginBottom:25
    }
})