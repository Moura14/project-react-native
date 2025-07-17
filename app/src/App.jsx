import { Component } from 'react'

import Navigator from '../src/Navigator'

import { SafeAreaView } from 'react-native'


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
                <Navigator></Navigator>
            </SafeAreaView>    
        )
    }
}