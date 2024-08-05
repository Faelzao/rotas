import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function Contact() {
    const router = useRouter();
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>
      <Text style={styles.description}>
        esse é a tela de contato
      </Text>
      <Button title="voltar" onPress={() => router.push('/home')} color="#000" />
      <Button title="voltar" onPress={() => router.push('/about')} color="#000" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F511E', // Verde escuro
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#86FF84', // Verde neon
    marginBottom: 20,
    fontFamily: 'Inter', // Fonte 'Inter'
  },
  description: {
    fontSize: 16,
    color: '#FFF', // Branco
    textAlign: 'center',
    fontFamily: 'Love Light', // Fonte 'Love Light',
    paddingBottom: 10,
  },
});