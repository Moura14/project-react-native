import { Component } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'


class Feed extends Component {

    state = {
        post: [{
            id: Math.random(),
            nickname: 'David Luiz',
            email: 'davidluiz@gmail.com',
            image: require('../../../assets/images/fence.jpg'),
            comments: [{
                nickname: 'Breno',
                comment: 'Craque!'
            },
        
            {
                nickname: 'Thierry',
                comment: 'Boa bola!'
            }
        
        ]
        }, {
            id: Math.random(),
            nickname: 'Vasco da Gama',
            email: 'vasco@gmail.com',
            image: require('../../../assets/images/bw.jpg')
        }]
    }

    render(){
        return (
            <View style={styles.container}>
                <Header></Header>
                <FlatList data={this.state.post} keyExtractor={item => `${item.id}`} renderItem={({item}) =>  
                    <Post key={item.id} {...item}></Post>
                }></FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:  '#F5FCFF',
        
    }
})

export default Feed