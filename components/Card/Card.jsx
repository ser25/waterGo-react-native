import {Button} from 'react-native-paper';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import styled from "styled-components/native";
import {useContext} from "react";
import {goWaterContext} from "../../store/GoWaterContext";

const CardView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`
const CardImageView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`
const CardImage = styled.Image`
  height: 100px;
  width: 100px;
`
const CardTitle = styled.Text`
  text-align: center;
`


export const MyCard = () => {
    const {water, setWater} = useContext(goWaterContext)
    const addWater = () => {
        setWater(water + 1)
    }
    return (
        <CardView>
            <CardImageView>
                <CardImage source={require('../../assets/card/morshynska.webp')}/>
            </CardImageView>

            <CardTitle>МОРШИНСЬКА</CardTitle>
            {/*<Button icon="plus" style={styles.plus} mode="contained-tonal"*/}
            {/*        onPress={() => addWater()}*/}
            {/*>*/}
            {/*    Додати*/}
            {/*</Button>*/}
            <Text>Безкоштовна доставка</Text>
            <Text>Від <Text>192₴</Text></Text>
        </CardView>
    )
}

const styles = StyleSheet.create({
    plus: {
        width: 100
    }
})