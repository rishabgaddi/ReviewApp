import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
// import * as Font from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    NunitoRegular: require('./assets/fonts/Nunito-Regular.ttf'),
    NunitoBold: require('./assets/fonts/Nunito-Bold.ttf')
  })

  if (!loaded) {
    return null;
  }

  return (
    <Home />
  );
}
