import { Text, Pressable, View } from 'react-native'
import { TextStyle, ViewStyle } from 'react-native'

interface BearButtonProps {
    onClick: () => void,
    children: string,
    style?: ViewStyle
}

const BearButton = (props: BearButtonProps) => {

    const { onClick, children, style } = props

    const btn: ViewStyle = {
        width: 'auto',
        height: 40,
        borderRadius: 100,
        backgroundColor: 'black',
        paddingHorizontal: 16,
        justifyContent: 'center'
    }

    const txt: TextStyle = {
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    }

        return (
            <Pressable onPress={ () => onClick()} style={[btn, style]} >
                <Text style={txt} >
                    {children}
                </Text>
            </Pressable>
        )
}
export default BearButton