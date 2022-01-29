import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Pressable, TouchableOpacity, Linking } from 'react-native';

const width = Dimensions.get('window').width;

const Login = () => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState(null);
  const getYear = () => {
		return new Date().getFullYear()
	}
  return (
    <View style={loginStyles.loginContainer}>
      <Image source={require("../assets/bmt-micro-nav-logo-min.png")} style={loginStyles.image} resizeMode={'contain'} />
      {/* <Image source={require("../assets/bmt-micro-logo-new-white.png")} style={styles.image} resizeMode={'contain'} /> */}
      <View>
        <Text style={loginStyles.inputText}>Login:</Text>
        <TextInput
          style={loginStyles.input}
          onChangeText={onChangeUsername}
          value={username}
          textContentType='username'
          placeholder='Vendor ID'
          // placeholderTextColor='#545454'
        />
        <Text style={loginStyles.inputText}>Password:</Text>
        <TextInput
          style={loginStyles.input}
          onChangeText={onChangePassword}
          value={password}
          textContentType='password'
          placeholder='Password'
          // placeholderTextColor='#545454'
        />
        <Pressable>
          <Text
            style={{ marginBottom: 30, letterSpacing: .5, color: '#195a7c', paddingVertical: 2, paddingHorizontal: 3 }}
            onPress={() => Linking.openURL('https://vendors.bmtmicro.com/login-lost-password.jsp')}
          >
            Forgot Password?
          </Text>
        </Pressable>
      </View>
      <View>
        <TouchableOpacity style={[ loginStyles.button, {marginBottom: 250} ]}>
          <Text style={loginStyles.text}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ letterSpacing: .5 }}>&copy;&nbsp;BMT Micro, Inc. 1992 - {getYear()}</Text>
    </View>
  );
}

const loginStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * .3,
    marginTop: 50,
  },
  input: {
    height: 45,
    marginTop: 5,
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderRadius: 4,
    borderColor: '#195a7c',
    color: '#fff',
    letterSpacing: .75
  },
  button: {
    backgroundColor: '#195a7c',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    letterSpacing: .5,
    fontWeight: 'bold',
    lineHeight: 21
  },
  inputText: {
    fontSize: 18,
    letterSpacing: .5,
    // color: '#777777'
  },
  forgotText: {
    color: '#195a7c',

  }
});

export default Login;
