import { Component } from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import icon from '../../../assets/images/icon.png'



class Header extends Component {
    render(){
        return (
            <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Image source={icon} style={styles.image}></Image>
                <Text style={styles.title}>Instagram</Text>
            </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 40,
        padding: 10, 
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%'
        
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        justifyContent: 'flex-start'
    },
    title: {
        color: '#000',
        fontFamily: 'shelter',
        height: 30,
        fontSize: 28
    }
})

export default Header