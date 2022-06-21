import { AppBar, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {APP_NAME} from '../utils/value.constant';
import {appbarStyle} from '../css/appbar.style';
import COLOR from '../utils/color.constant'

export const AppBarComponent = ()=>{
    return (
        <AppBar
            style={appbarStyle.container}
            title={APP_NAME}
            centerTitle={true}
            color={COLOR.blanc}
            leading={props => (
                <IconButton icon={props => <Icon name="arrow-left" {...props} />} {...props} />
            )}
        />
    );
}