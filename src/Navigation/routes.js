import LoginScreen from '../screen/LoginScreen';
import HomeScreen from '../screen/HomeScreen';
import AboutScreen from '../screen/About';
// import CreditsScreen from '../Views/Credits';

/* Icon key is optional. It must be of type string and its value should match a valid provider icon
  name.
  To omit the icon just pass null on its value.
*/
export default [
  {name: 'Login', screen: LoginScreen, icon: 'airplane-takeoff'},
  {name: 'Home', screen: HomeScreen, icon: 'compass-outline'},
  {name: 'About', screen: AboutScreen, icon: 'information-outline'},
  // {name: 'Credits', screen: CreditsScreen, icon: 'account-circle'},
];
