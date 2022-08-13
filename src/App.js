import React, { useState } from "react";
import { Text, View, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";


export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.logoImage} source={require('../assets/images/logo.png')}/>
        <Text style={styles.logoText}>'ty sy 'nday</Text>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.label}>Adresse e-mail</Text>
        <TextInput style={styles.textInput} onChangeText={(email) => setEmail(email)}></TextInput>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.label}>Mot de passe</Text>
        <TextInput style={styles.textInput} onChangeText={(password) => setPassword(password)}></TextInput>
      </View>
      <TouchableOpacity style={styles.seConnecterBtn}>
        <Text style={styles.seConnecter}>Se connecter</Text>
      </TouchableOpacity>
      <View  style={styles.noteBtn}>
        <TouchableOpacity>
          <Text style={styles.note}>Mot de passe oublié?</Text>
        </TouchableOpacity>
        <Text style={styles.ou}>ou</Text>
        <TouchableOpacity>
          <Text style={styles.note}>Vous n'avez pas de compte</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.createAccountBtn}>
        <Text style={styles.createAccount}>Créer un compte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alingnItems:'center',
    padding: 40,
    backgroundColor: '#f3f9ff',
  },
  inputView:{
    marginBottom: 5
  },
  label:{
    fontWeight: 'semi-bold',
    fontSize: 14,
    marginBottom: 3
  },
  textInput:{
    height: 40,
    backgroundColor: '#f0f0fa',
    borderRadius:2,
    padding: 10
  },
  logo:{
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 45
  },
  logoImage:{
    width:40,
    height:40
  },
  logoText:{
    fontWeight: 'bold',
    fontSize: 24,
    color: '#242945'
  },
  seConnecter:{
    fontWeight: 'semi-bold',
    fontSize: 14,
    color: '#ffffff',
  },
  seConnecterBtn:{
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#242945",
    borderRadius:5,
    marginTop: 5
  },
  ou:{
    color: '#6e0b14'
  },
  noteBtn: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  note:{
    margin: 10,
    color: 'rgba(36, 41, 69, 0.28)'
  },
  createAccountBtn:{
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius:5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'rgba(36, 41, 69, 0.5)',
  },
  createAccount:{
    fontWeight: 'semi-bold',
    fontSize: 14,
    color: '#242945',
  }
});

