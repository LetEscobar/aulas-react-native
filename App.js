import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Alert,
    TouchableOpacity,
    textStyle
} from 'react-native'

const App = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        if (username === '' || password === '') {
            Alert.alert('Campos Vazios', 'Por favor, preencha todos os campos.')
        } else {
            Alert.alert('Login', `Username: ${username}\nPassword: ${password}`)
        }
    }

    const handleClear = () => {
        setUsername('')
        setPassword('')
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fefefe' }}>
            {/* View início da tela */}
            <View
                style={{
                    backgroundColor: 'black',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    height: 100
                }}
            >
                <View style={{ flex: 1, backgroundColor: '#4169E1' }} />
                <View style={{ flex: 1, backgroundColor: '#1E90FF' }} />
                <View style={{ flex: 1, backgroundColor: '#00BFFF' }} />
            </View>

            {/* Formulário de login */}
            <View style={styles.container}>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        paddingBottom: 20
                    }}
                >
                    Login
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setUsername}
                    value={username}
                    placeholder="Nome de usuário"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Senha"
                    secureTextEntry={true}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleClear}
                        style={[styles.button, styles.buttonLimpar]}
                    >
                        <Text style={[styles.text, textStyle]}>Limpar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={[styles.button, styles.buttonEntrar]}
                    >
                        <Text style={[styles.text, textStyle]}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* View do fim da tela */}
            <View
                style={{
                    justifyContent: 'center',
                    height: 110,
                    gap: -1
                }}
            >
                <View style={{ flex: 1, backgroundColor: '#00BFFF' }} />
                <View style={{ flex: 1, backgroundColor: '#1E90FF' }} />
                <View style={{ flex: 1, backgroundColor: '#4169E1' }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
        gap: 10
    },
    input: {
        width: '100%',
        borderColor: 'gray',
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10
    },
    button: {
        padding: 10,
        borderRadius: 8,
        width: '48%'
    },
    buttonEntrar: {
        backgroundColor: '#318234'
    },
    buttonLimpar: {
        backgroundColor: '#9E1E1E'
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default App
