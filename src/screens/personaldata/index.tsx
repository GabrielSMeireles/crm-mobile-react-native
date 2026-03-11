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

export function PersonalData() {
    const navigation = useNavigation<any>();

  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    celular: '',
    telefone: '',
  });

  const handleNavigateToAccountData = () => {
  navigation.navigate('AccountData');
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
        Insira seus dados pessoais
      </Text>

      {[
        { label: 'Nome *', name: 'nome', placeholder: 'Insira seu nome' },
        { label: 'Sobrenome *', name: 'sobrenome', placeholder: 'Insira seu sobrenome' },
        { label: 'Celular *', name: 'celular', placeholder: 'Insira seu celular' },
        { label: 'Telefone', name: 'telefone', placeholder: 'Insira seu telefone' },
      ].map((field) => (
        <View key={field.name} style={{ marginTop: 20, marginHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#D3BDF0' }}>
          <Text style={{ color: '#000', fontWeight: field.label.includes('*') ? 'bold' : 'normal', fontSize: 13 }}>{field.label}</Text>
          <TextInput
            placeholder={field.placeholder}
            placeholderTextColor="#BCA4E3"
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
          onPress={handleNavigateToAccountData}
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
