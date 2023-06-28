import { TextInput, View, StyleSheet, Button, Alert } from "react-native";

export default function Login() {
  return(
    <View style={styles.container}>
      <TextInput
        placeholder="Usuário"
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
      />
      <Button
        title="Entrar"
        accessibilityLabel="Entrar nas aulas"
        onPress={testButton}
      />
    </View>
  )
}

const testButton = () => {
  Alert.alert('Só testanto');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});