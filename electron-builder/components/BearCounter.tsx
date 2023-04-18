import { Text, TextStyle, View, ViewStyle } from 'react-native'


interface BearCounterProps {
    bears: number
}

const BearCounter = (props: BearCounterProps) => {

    const { bears } = props

    const tile: ViewStyle = {

        width: '10%',
        height: '10%',
        backgroundColor: 'rgba( 0, 0, 0, .1)',
        borderWidth: 1,
        borderColor: 'rgba( 0, 0, 0, .3)',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 24
    } 

    const txt: TextStyle = {

        fontSize: 12,
        fontWeight: '300',
        margin: 'auto'
    }

    return <View style={tile}>
        <Text style={txt}>
            {bears}
        </Text>
    </View>

}

export default BearCounter
