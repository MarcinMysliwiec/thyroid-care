import { useNavigation } from "@react-navigation/core"
import React, { useLayoutEffect } from 'react'
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import useAuth from '../hooks/useAuth';
import tw from 'tailwind-rn'

const LoginScreen = () => {
    const { signInWithGoogle, loading } = useAuth();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <>
                    <ActivityIndicator size="large" color="#FF84AA" />
                    <Text style={styles.textWhite}>Ładowanie...</Text>
                </>
            ) : (
                <>
                    <Image style={styles.logo}
                        source={require('../src/img/logo_high.png')}
                    ></Image>

                    <Text style={styles.title}>Thyroid Care</Text>

                    <TouchableOpacity style={{ ...styles.button, ...styles.buttonRegister }}
                        onPress={() => console.log('Zarejestruj się')}
                    >
                        <Text style={styles.textWhite}>Zarejestruj się</Text>
                    </TouchableOpacity>

                    <View style={styles.loginWrapper}>
                        <Text style={styles.textWhite}>Masz już konto? </Text>
                        <Text style={styles.loginAnchor}
                            onPress={() => console.log('zaloguj się')}>Zaloguj się</Text>
                    </View>

                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity style={{ ...styles.button, ...styles.buttonLogin, marginRight: 15, }}
                            onPress={signInWithGoogle}
                        >
                            <Text style={styles.textWhite}>Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...styles.button, ...styles.buttonLogin, marginLeft: 15, }}
                            onPress={() => console.log('Zaloguj się facebook')}
                        >
                            <Text style={styles.textWhite}>Facebook</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={{ ...styles.textLightGray, ...styles.disclaimer }}>kontynuując wyrażasz zgodę na warunki korzystania</Text>
                </>
            )}
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: 20,
        backgroundColor: '#1A1A1A',
    },
    logo: {
        height: '40%',
        width: undefined,
        aspectRatio: 1,
    },
    title: {
        fontSize: 34,
        textAlign: 'center',
        marginBottom: 30, color: '#FFFFFF',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 30,
    },
    buttonRegister: {
        width: '100%',
        backgroundColor: '#4c4159',
    },
    buttonLogin: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#4c4159',
    },
    textWhite: {
        color: '#FFFFFF',
    },
    textLightGray: {
        color: '#C1C1C1',
    },
    loginWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 5,
    },
    loginAnchor: {
        color: '#FF84AA'
    },
    buttonWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    disclaimer: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 5,
    },
});