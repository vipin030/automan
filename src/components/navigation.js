import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginForm from "./LoginForm";
import HomeScreen from "../screen/HomeScreen";
//import ListScreen from "./src/screens/ListScreen";
//import App from './src/App'

const navigator = createStackNavigator(
  {
    Login: LoginForm,
    Home: HomeScreen
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default navigator;
