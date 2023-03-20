import { registerRootComponent } from 'expo';
import App from './App';
import React from 'react';
import Toast from 'react-native-toast-message';
import { MyProvider } from './src/context';


const provider = () => {
    return (
        <MyProvider>
            <App/>
            <Toast ref={(ref) => Toast.setRef(ref)} />;
        </MyProvider> 
    )
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(provider);
