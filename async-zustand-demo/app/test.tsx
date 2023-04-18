import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import styles from '../styles'
import { FC } from 'react'

const Test: FC = () => {

    return <View style={styles.container}>

        <Text style={styles.headline}>Test Page</Text>

        <Link style={styles.link} href='/'>Back Home!</Link>

    </View>
}

export default Test