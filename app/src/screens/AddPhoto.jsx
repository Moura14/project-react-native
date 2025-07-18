import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { Component } from "react";
import {
    Alert,
    Dimensions,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
 
export default class AddPhoto extends Component {
    state = {
        image: null,
        comment: ""
    };
 
    pickImage = async () => {
        let res = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1
        });
        console.log(res)

        if(!res.canceled && res.assets && res.assets.length > 0){
            this.setState({image: res.assets[0].uri})
        }
    }


    pickImageFromCamera = async () => {
        let res = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1
        });

        console.log(res);

        if(!res.canceled && res.assets && res.assets.length > 0){
            this.setState({image: res.assets[0].uri, base64: res.assets[0].base64})
        }
    }
 
    save = async () => {
        Alert.alert("Imagem adicionada!", this.state.comment);
    };
 
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe uma imagem</Text>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: this.state.image }} style={styles.image} />
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.button}>
                        <Text style={styles.buttonText}>Escolha a foto</Text>
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Algum comentário para a foto?"
                        style={styles.input}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                    />
                    <View style={styles.optionsContainer}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={this.pickImage} style={styles.option}>
                                <FontAwesome name="photo" size={30} color='#000'></FontAwesome>
                                <Text>Galeria</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ this.pickImageFromCamera} style={styles.option}>
                                <FontAwesome name="camera" size={30} color='#000'></FontAwesome>
                                <Text>Câmera</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={this.save} style={styles.button}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === "ios" ? 30 : 10
    },
    imageContainer: {
        width: "100%",
        height: Dimensions.get("window").width / 2,
        backgroundColor: "#EEE",
        marginTop: 10
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: "#4286f4",
        borderRadius: 5
    },
    buttonText: {
        fontSize: 20,
        color: "#FFF",
        textAlign: 'center'
    },
    input: {
        marginTop: 20,
        width: "100%",
        padding: 10,
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 5
    },
    optionsContainer: {
        flexDirection: 'column',
        alignContent: 'center',
        width: '90%',
        margin: 10,
        alignContent: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
        padding: 10
    }
});