import { Button, Text, View } from 'react-native'
import { Link } from 'expo-router'
import styles from '../styles'
import useBearStore from '../context/useBearStore'
import { shallow } from 'zustand/shallow'
import BearButton from '../components/BearButton'
import BearCounter from '../components/BearCounter'
import { FC } from 'react'

const Test: FC = () => {

    const [ bears, increasePopulation ] = useBearStore( state => [ state.bears, state.increasePopulation], shallow)



    return <View style={styles.container}>

        <Text style={styles.headline}>Test Page</Text>

        <BearCounter bears={ bears } />

        <BearButton 
            onClick={
                () => increasePopulation()
            } 
        >
            Add Bear
        </BearButton>

        <Link style={styles.link} href='/'>Back Home!</Link>

    </View>
}

export default Test