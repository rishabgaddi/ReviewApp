import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import Header from '../shared/Header';

const {Navigator, Screen} = createStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Navigator screenOptions={{ headerStyle: { backgroundColor: '#eee' }, headerTintColor: '#444'}}>
      <Screen name='Home' component={Home} options={{ headerTitle: () => <Header navigation={navigation} /> }} />
      <Screen name='ReviewDetails' component={ReviewDetails} options={{ title: 'Review Details' }} />
    </Navigator>
  )
}