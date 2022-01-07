import React, { componentDidMount } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import { Colors } from '../helpers/colors.js';
import { LoadingComponent, ContentWrapper, CustomText } from '../Components';
import useAuth from '../hooks/useAuth';


const LoginScreen = () => {
  const { signInWithGoogle, loading } = useAuth();

  StatusBar.setHidden(true);

  return (
    <ContentWrapper style={styles.container}>
      {loading ? (
        <LoadingComponent>Ładowanie...</LoadingComponent>
      ) : (
        // Remove View to make wider
        <View>
          <View style={styles.upperSection}>
            <Image style={styles.logo}
                   source={require('../assets/img/logo_high.png')}
            ></Image>

            <CustomText style={styles.title}>Thyroid Care</CustomText>
          </View>

          <View style={styles.downSection}>
            <View style={styles.internalCredentials}>

              <TouchableOpacity style={[styles.button, styles.registerWrapper]}
                                onPress={() => console.log('Zarejestruj się')}
              >
                <CustomText style={styles.textWhite}>Zarejestruj się</CustomText>
              </TouchableOpacity>

              <View style={styles.loginWrapper}>
                <CustomText style={styles.textWhite}>Masz już konto? </CustomText>

                <TouchableOpacity onPress={() => console.log('Zaloguj się')}>
                  <CustomText style={styles.loginAnchor}>Zaloguj się</CustomText>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.externalCredentials}>
              <TouchableOpacity style={[styles.button, styles.externalLoginButton, { marginRight: 5 }]}
                                onPress={signInWithGoogle}
              >
                <CustomText style={styles.textWhite}>Google</CustomText>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.externalLoginButton, { marginLeft: 5 }]}
                                onPress={() => console.log('Zaloguj się facebook')}
              >
                <CustomText style={styles.textWhite}>Facebook</CustomText>
              </TouchableOpacity>
            </View>

            <CustomText style={[styles.disclaimer]}>kontynuując wyrażasz zgodę na warunki korzystania</CustomText>
          </View>
        </View>
      )
      }
    </ContentWrapper>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  // Container styles
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Upper section styles
  upperSection: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  logo: {
    height: undefined,
    width: '70%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  // Down section styles
  downSection: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
  },
  // Internal credentials
  internalCredentials: {},
  registerWrapper: {
    width: '100%',
    backgroundColor: Colors.primary,
  },
  loginWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
  },
  loginAnchor: {
    color: Colors.secondary,
  },
  // External credentials
  externalCredentials: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 30,
  },
  externalLoginButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  textWhite: {
    color: Colors.white,
    margin: 0,
  },
  disclaimer: {
    color: Colors.lightGrey,
    fontSize: 11,
    textAlign: 'center',
    marginTop: 5,
  },
});
