import {Text, View} from "react-native";
import styled from "styled-components/native";
import {Button} from "react-native-paper";
import {goWaterContext} from "../store/GoWaterContext";
import {useContext} from "react";

const ProductView = styled.View`
  align-items: center;
  justify-content: center;
`


const ProductImageView = styled.View`
  align-items: center;
  justify-content: center;
`
const ProductImage = styled.Image`
  height: 100px;
  width: 100px;
`
export const ProductScreen = () => {
    return (
        <ProductView>
            <ProductImageView>
                <ProductImage source={require('../assets/card/morshynska.webp')}/>
            </ProductImageView>
            <Text>
                Моршинська
            </Text>
            <Text>Безкоштовна доставка</Text>
            <Text>Від <Text>192₴</Text></Text>
        </ProductView>
    )
}