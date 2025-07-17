import { Component } from 'react'

import { SafeAreaView } from 'react-native'
import Feed from './screens/Feed'


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
            <SafeAreaView style={{flex: 1}}>
                <Feed></Feed>
            </SafeAreaView>    
        )
    }
}