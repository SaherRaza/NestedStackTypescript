import {AppRegistry} from 'react-native';
import App from './AppDrawerNavigator';
import appConfig from './app.json'; // Import the entire configuration

const appName = appConfig.expo.name; // Access the 'name' field from the 'expo' object

AppRegistry.registerComponent(appName, () => App);
