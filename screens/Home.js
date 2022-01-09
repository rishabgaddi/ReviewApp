import { StyleSheet, Text, View } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Home screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  titleText: {
    fontFamily: 'NunitoBold',
    fontSize: 18
  }
})