import {HomePage} from "../page/Home/Home";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ProductScreen} from "./Product";

const Stack = createNativeStackNavigator();

// <Routes>....</Routes> => Stack.Navigator


export const HomeScreen = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="HomePage" component={HomePage} options={{title: 'WaterGo'}}/>
                <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ title: 'Product' }} />
            </Stack.Navigator>
        </>
    )
}