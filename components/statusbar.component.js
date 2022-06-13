import {View,StatusBar} from 'react-native'
import { statusBarStyle } from '../css/statusbar.style'
import COLOR from '../utils/color.constant'

export const StatusBarComponent = () =>{
    return (
        <View style={statusBarStyle.appBar}>
            <StatusBar 
            backgroundColor={COLOR.belge}
            />
        </View>
    );
}