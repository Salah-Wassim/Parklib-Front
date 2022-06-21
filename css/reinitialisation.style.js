import { StyleSheet } from "react-native";
import SPACES from '../utils/space.constant';
import COLOR from '../utils/color.constant';

export const reinitialisationStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        backgroundColor: COLOR.blanc,
        alignItems: 'center',
        justifyContent:"flex-start"
    },
    textEntete:{
        color:COLOR.indigo,
        marginVertical:SPACES.L,
    },
    content:{
        marginVertical:SPACES.XL,
    },
    btnSubmit:{
        backgroundColor:COLOR.vert,
        marginVertical:SPACES.L
    }
});
