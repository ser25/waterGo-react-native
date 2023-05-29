import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from "../../screens/Home";
import {TestMy} from "../Test";
import {NavigationContainer} from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {SdwScreens} from "../../screens/Cart";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

export const MyFooter = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            >
                {/*<Tab.Screen name="Home" component={HomeScreen} options={{*/}
                {/*    title: 'WaterGo',*/}
                {/*    tabBarLabel: 'Home',*/}
                {/*    tabBarIcon: ({ color, size, animationEasing }) => {*/}
                {/*        return <Icon name="home" size={size} color={color} />;*/}
                {/*    },*/}
                {/*}}*/}
                {/*/>*/}
                <Tab.Screen name="Sdw"  component={SdwScreens} options={{
                    title: 'test',
                    tabBarLabel: 'test1',
                    tabBarIcon: ({color, size}) => {
                        return <Icon name="cart" size={size} color={color} />
                    },
                    tabBarBadge: 3
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}