import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import 'react-native-gesture-handler';

const navigator = createStackNavigator ({
  Login: LoginScreen,
}, {
  initialRouteName: "Login",
  defaultNavigationOptions: {
    title: "Calorie Counter",
  }
});

export default createAppContainer(navigator);