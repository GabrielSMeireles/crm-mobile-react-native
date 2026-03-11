import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

export function AccountData() {
  const navigation = useNavigation<any>();
  const [form, setForm] = useState({
    email: '',
    username: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleNavigateToSuccess = () => {
    navigation.navigate('Success'); // ou a próxima etapa, se houver
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 40, marginLeft: 10 }}>
        <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Image
          source={require('../../../assets/LogoSmall.png')}
          style={{ width: 60, height: 30 }}
          resizeMode="contain"
        />

      </View>

      <Text style={[styles.title, { marginTop: 20, fontSize: 24 }]}>
        Insira os dados da sua conta
      </Text>

      {[
        { label: 'E-mail *', name: 'email', placeholder: 'Insira seu e-mail' },
        { label: 'Nome de usuário *', name: 'username', placeholder: 'Insira seu nome de usuário' },
        { label: 'Senha *', name: 'senha', placeholder: 'Insira sua senha', secure: true },
        { label: 'Confirme a senha *', name: 'confirmarSenha', placeholder: 'Insira sua senha', secure: true },
      ].map((field) => (
        <View key={field.name} style={{ marginTop: 20, marginHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#D3BDF0' }}>
          <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 13 }}>{field.label}</Text>
          <TextInput
            placeholder={field.placeholder}
            placeholderTextColor="#BCA4E3"
            secureTextEntry={field.secure || false}
            value={form[field.name as keyof typeof form]}
            onChangeText={(text) =>
              setForm((prev) => ({ ...prev, [field.name]: text }))
            }
            style={{ height: 40, color: '#000' }}
          />
        </View>
      ))}

      <View style={{ marginHorizontal: 20, marginTop: 30 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleNavigateToSuccess}
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
