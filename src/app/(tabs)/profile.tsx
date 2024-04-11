import { StyleSheet, View, Text } from 'react-native'
import { theme } from '@/theme'

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.black
  },
  title: {
    color: theme.colors.white,
    fontFamily: theme.fontFamily.medium,
    fontSize: 22
  }
})