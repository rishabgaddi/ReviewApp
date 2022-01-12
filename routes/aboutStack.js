import { createStackNavigator } from '@react-navigation/stack'
import About from '../screens/About';
import Header from '../shared/Header';

const {Navigator, Screen} = createStackNavigator();

export default function AboutStack({ navigation }) {
  return (
    <Navigator screenOptions={{ headerStyle: { backgroundColor: '#eee' }, headerTintColor: '#444' }}>
      <Screen name='About' component={About} options={{ headerTitle: () => <Header navigation={navigation} /> }} />
    </Navigator>
  )
}