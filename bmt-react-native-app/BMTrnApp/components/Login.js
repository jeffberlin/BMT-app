import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Pressable, TouchableOpacity } from 'react-native';

const width = Dimensions.get('window').width;

const Login = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <Image source={require("../assets/bmt-micro-nav-logo-min.png")} style={styles.image} resizeMode={'contain'}/>
      <View>
        <Text style={styles.inputText}>Login:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text style={styles.inputText}>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Pressable>
          <Text style={{ marginBottom: 30, letterSpacing: .5 }}>Forgot Password?</Text>
        </Pressable>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * .3,
    marginTop: -100
  },
  input: {
    height: 40,
    marginTop: 5,
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderRadius: 4,
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
    color: '#707070'
  }
});

export default Login;
