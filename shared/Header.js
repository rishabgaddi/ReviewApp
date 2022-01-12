import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
// import { useHeaderHeight } from '@react-navigation/elements';

// const headerHeight = useHeaderHeight();

export default function Header({ navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} style={styles.icon} onPress={openMenu} />
      <View>
        <Text style={styles.headerText}>Player Zones</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('screen').width,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 0
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1
  },
  icon: {
    position: 'absolute',
    left: 16
  }
})
