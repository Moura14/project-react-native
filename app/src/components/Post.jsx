import { Component } from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'

import Author from './Author'


class Post extends Component {
    render (){
        return (
            <View style={StyleSheet.container}>
                <Image source={this.props.image} style={styles.image}></Image>
                <Author email='thierry@gmail.com' nickname='Thierry'></Author>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1   
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})


export default Post