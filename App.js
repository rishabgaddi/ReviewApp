import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import AppNavigator from './routes/drawer';

export default function App() {
  const [loaded] = useFonts({
    NunitoRegular: require('./assets/fonts/Nunito-Regular.ttf'),
    NunitoBold: require('./assets/fonts/Nunito-Bold.ttf')
  })

  if (!loaded) {
    return null;
  }

  return (
    <AppNavigator />
  );
}
