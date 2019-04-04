/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native';
// import Main from './src/containers/Main'
import App from './App';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
