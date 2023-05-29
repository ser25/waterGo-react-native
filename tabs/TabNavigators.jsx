import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {CartScreen} from "../screens/Cart";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "../screens/Home";

const Tab = createBottomTabNavigator();
export const TabNavigators = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}
            >
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarLabel: 'home',
                    tabBarIcon: ({color, size, animationEasing}) => {
                        return <Icon name="home" size={size} color={color}/>;
                    },
                }}
                />
                <Tab.Screen name="CartScreen" component={CartScreen} options={{
                    tabBarLabel: 'cart',
                    tabBarIcon: ({color, size}) => {
                        return <Icon name="cart" size={size} color={color}/>
                    },
                    tabBarBadge: 3
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )

}