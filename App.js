import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './js/Home';
import Player from './js/Player';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Player: {screen: Player},
});

const App = createAppContainer(MainNavigator);

export default App;




