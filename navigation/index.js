import React from 'react';
import AppStack from './stackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from "react-native-bootsplash";

const Routes = () => {
    return (
        <NavigationContainer onReady={() => RNBootSplash.hide({duration:250})}>
            <AppStack/>
        </NavigationContainer>
    )
}
export default Routes;