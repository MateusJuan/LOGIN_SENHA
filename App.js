import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* Importando as Telas */
import TelaLogin from './telas/telaLogin';
import TelaCadastro from './telas/telaCadastro';
import TelaEsqueciSenha from './telas/telaEsqueciSenha';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="EsqueciSenha" component={TelaEsqueciSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
