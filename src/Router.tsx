import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {RootStackParamList} from './data';
import EpisodeScreen from './screens/EpisodeScreen';
import HomeScreen from './screens/HomeScreen';

interface StackRouterProps {}

const Stack = createStackNavigator<RootStackParamList>();
const StackRouter: React.FC<StackRouterProps> = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HOME">
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="EPISODE" component={EpisodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRouter;
