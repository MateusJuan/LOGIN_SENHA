import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function TelaCadastro() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Esqueceu a Senha?</Text>
      </View>
      <Input
        placeholder="Email"
        leftIcon={<MaterialIcons name="email" size={24} color="black" />}
        containerStyle={styles.inputContainer}
      />
      <TouchableOpacity
        style={styles.botao_1}
        onPress={() => Alert.alert('Trocar Senha', 'Veja seu Email!')}
      >
        <Text style={styles.texto}>Enviar</Text>
      </TouchableOpacity>
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
  botao_1: {
    backgroundColor: 'green',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  texto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    alignSelf: 'center',
  },
});
