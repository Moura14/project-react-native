import { Component } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableWithoutFeedback as TWF, View } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

class AddComment extends Component {
    state = {
       comment : '',
       editMode: false 
    }

    handleAddComment = () => {
        Alert.alert('Adicionando!', this.state.comment)
    }

    render (){
        let commentArea = null
        if(this.state.editMode){
            commentArea = (
                <View style={styles.container}>
                    <TextInput placeholder='Pode comentar...' 
                        style={styles.input} 
                        autoFocus={true} 
                        value={this.state.comment} 
                        onChangeText={comment => this.setState({comment})}
                        onSubmitEditing={this.handleAddComment}
                        ></TextInput>
                        <TWF onPress={() => this.setState({editMode: false})}>
                            <Icon name='times' size={15} color='#555'></Icon>
                        </TWF>
                </View>
            )
        }else{
            commentArea = (
                <TWF onPress={() => this.setState({editMode: true})}>
                    <View style={styles.container}>
                        <Icon name='comment-o' size={25} color='#555'></Icon>
                        <Text style={styles.caption}>Adicione um comentário...</Text>
                    </View>
                </TWF>
            )
        }

        return (
            <View style={{flex: 1}}>
                {commentArea}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC'
    },
    input: {
        width: '90%'
    }
})


export default AddComment