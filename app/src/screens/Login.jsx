import { Component } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'


class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    login = () => {
        this.props.navigation.navigate('Profile')
    }

    render(){
        return (
            <View style={styles.container}>
                <TextInput placeholder='Email' 
                style={styles.input} 
                autoFocus={true} 
                keyboardType='email-address' 
                value={this.state.email}
                onChangeText={email => this.setState({email})}
                ></TextInput>
                <TextInput placeholder='Senha' 
                style={styles.input}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={password => this.setState({password})}
                ></TextInput>
                <TouchableOpacity onPress={this.login} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Register')
                    }} style={styles.button}>
                    <Text style={styles.buttonText}>Criar nova conta</Text>
                    </TouchableOpacity>      
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 50,
        borderWidth: 1,
        borderColor: '#333'
    }
})


export default Login