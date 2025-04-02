import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView,TouchableOpacity } from 'react-native';
import { Avatar,Input } from 'react-native-elements';

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Avatar
        rounded
        size="xlarge"
        title="MJ"
        source={{
          uri:
            'https://avatars.githubusercontent.com/u/169060996?v=4',
        }}
      />
      <Input
        placeholder='Email'
        style={styles.input}
      />
      <Input
        placeholder='Senha'
      />
      <TouchableOpacity style={styles.botao_1}>
        <Text style={styles.texto}>Logar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao_2}>
        <Text style={styles.texto}>Cadastre-se</Text>
      </TouchableOpacity>
      <Text>esqueceu a senha</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao_1:{
    backgroundColor:'green',
    marginTop:10,
    paddingVertical:10,
    paddingHorizontal:44,
    borderRadius:10,
  },
  botao_2:{
    backgroundColor:'green',
    marginTop:10,
    paddingVertical:10,
    paddingHorizontal:15,
    borderRadius:10,
  },
  texto:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
  },
});
