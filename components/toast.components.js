import { ToastAndroid } from "react-native";

const showToast = (toastMessage) => {
    ToastAndroid.showWithGravity(
        toastMessage,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
    );
};

export default showToast;