import {useState} from "react";
import {goWaterContext} from "./store/GoWaterContext";
import {PaperProvider} from "react-native-paper";
import {TabNavigators} from "./tabs/TabNavigators";

export default function App() {
    const [water, setWater] = useState(0)
    return (
        <goWaterContext.Provider value={{water, setWater}}>
            <PaperProvider>
                <TabNavigators />
            </PaperProvider>
        </goWaterContext.Provider>
    );
}
