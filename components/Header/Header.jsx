import {Text, TouchableOpacity, View} from "react-native";
import React from 'react'
import styled from "styled-components/native";
import {StatusBar} from "expo-status-bar";
import {useContext} from "react";
import {goWaterContext} from "../../store/GoWaterContext";
import {Appbar, Badge, BottomNavigation} from 'react-native-paper';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeScreen} from "../../screens/Home";

const Tab = createBottomTabNavigator();

const HeaderView = styled.View`
  flex-direction: row;
  padding: 15px 5px;
  align-items: center;
  justify-content: space-between;
  background-color: aqua;
`;
const HeaderCart = styled.View`
  position: relative;
`
const HeaderCartBadge = styled.View`
  position: absolute;
  top: 15px;
  left: 5px;
  z-index: 2;

`
const Circle = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 20px;
  background-color: black;

`;
const CircleText = styled.Text`
  color: antiquewhite;
  font-size: 8px;
`


export const Header = () => {
    const {water} = useContext(goWaterContext)


    return (
        <>
            <HeaderView>
                <TouchableOpacity><View><Text>burgerMenu</Text></View></TouchableOpacity>
                <TouchableOpacity><View><Text>WaterGo</Text></View></TouchableOpacity>
                <TouchableOpacity>
                    <HeaderCart>
                        <Text>Cart</Text>
                        <HeaderCartBadge>
                            <Circle>
                                <CircleText>{water}</CircleText>
                            </Circle>
                        </HeaderCartBadge>
                    </HeaderCart>
                </TouchableOpacity>
            </HeaderView>
            {/*<Appbar.Header mode={"center-aligned"}>*/}
            {/*    <Appbar.BackAction />*/}
            {/*    <Appbar.Content title="WaterGo"/>*/}
            {/*    <FooterCart>*/}
            {/*        <Appbar.Action icon="cart" />*/}
            {/*        <FooterCartBadge>*/}
            {/*            <Circle>*/}
            {/*                <CircleText>{water}</CircleText>*/}
            {/*            </Circle>*/}
            {/*        </FooterCartBadge>*/}
            {/*    </FooterCart>*/}

            {/*    /!*<Appbar.Action icon="dots-vertical" onPress={_handleMore} />*!/*/}
            {/*</Appbar.Header>*/}

        </>

    )
}