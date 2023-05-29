import {useContext} from 'react'
import {Text, View} from "react-native";
import {goWaterContext} from "../store/GoWaterContext";

export const TestMy = () => {
    const {water} = useContext(goWaterContext)
    return (
        <View>
            <Text>add {water}</Text>
        </View>
    )
}