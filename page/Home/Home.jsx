import {FlatList, View, TouchableOpacity} from "react-native";
import {MyCard} from "../../components/Card/Card";
import {useState} from "react";


export const HomePage = ({navigation}) => {
    const [dataWater] = useState(['', '', '', '', ''])
    return (
        <>

            {/*{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center"}*/}
            <View>
                <FlatList data={dataWater}
                          renderItem={({dataWater}) =>
                              <TouchableOpacity
                                  onPress={() => navigation.navigate('ProductScreen',)}>
                                  <MyCard/>
                              </TouchableOpacity>
                          }/>
            </View>
        </>
    )
}