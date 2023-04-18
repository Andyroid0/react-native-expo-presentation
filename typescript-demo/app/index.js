import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import styles from '../styles'

const Index = () => {

    return <View style={styles.container}>

        <Text style={styles.headline}>Hello World</Text>

        <Link style={styles.link} href='/test'>Test Page</Link>
        
    </View>
}

export default Index