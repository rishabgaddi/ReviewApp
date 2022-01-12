import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";

const {Navigator, Screen} = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}}>
        <Screen name='HomeScreen' component={HomeStack} />
        <Screen name='AboutScreen' component={AboutStack} />
      </Navigator>
    </NavigationContainer>
  )
}