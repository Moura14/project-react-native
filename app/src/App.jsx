import { Component } from 'react'
import Header from './components/Header'

import { View } from 'react-native'
import Post from './components/Post'


export default class App extends Component {
    render (){
        return (
           <View style={{flex: 1}}>
                <Header></Header>
                <Post image={require('../../assets/images/fence.jpg')}></Post>
           </View>
            
        )
    }
}