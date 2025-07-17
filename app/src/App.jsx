import { Component } from 'react'
import Header from './components/Header'

import { View } from 'react-native'
import Post from './components/Post'


export default class App extends Component {
    render (){

        const comments = [{
            nickname: 'Neymar Jr',
            comment: 'Craque!'
        },
        {
            nickname: 'Galvão Bueno',
            comment: 'Bate pro gol Neymar!'
        }
    
    ]

        return ( 
           <View style={{flex: 1}}>
                <Header></Header>
                <Post image={require('../../assets/images/fence.jpg')} comments={comments}></Post>
           </View>
            
        )
    }
}