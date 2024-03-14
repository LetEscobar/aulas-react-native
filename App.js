import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native'

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
                <View style={{ flex: 1, backgroundColor: 'darkblue' }} />
                <View style={{ flex: 1, backgroundColor: 'yellow' }} />
                <View style={{ flex: 1, backgroundColor: 'darkred' }} />
            </View>

            {/* Formulário de login */}
            <View style={styles.container}>
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
                    <Button title="Limpar" onPress={handleClear} />
                    <Button title="Entrar" onPress={handleLogin} />
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
                <View style={{ flex: 1, backgroundColor: 'purple' }} />
                <View style={{ flex: 1, backgroundColor: 'darkorange' }} />
                <View style={{ flex: 1, backgroundColor: 'green' }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10
    }
})

export default App
