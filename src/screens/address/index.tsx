// src/screens/address/index.tsx

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

export function Address() {
  const navigation = useNavigation<any>();
  const [step, setStep] = useState<'select' | 'form'>('select');
  const [selectedCity, setSelectedCity] = useState('');
  const [form, setForm] = useState({
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
  });

  const cities = [
    'São Paulo, São Paulo, Brasil',
    'São Bernardo do Campo, São Paulo, Brasil',
    'Guarulhos, São Paulo, Brasil',
    'Osasco, São Paulo, Brasil',
    'Santo André, São Paulo, Brasil',
    'São Caetano do Sul, São Paulo, Brasil',
  ];

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setStep('form');
  };

  const handleNavigateToPersonalData = () => {
  navigation.navigate('PersonalData');
};


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        step === 'form' ? setStep('select') : navigation.goBack();
      }} style={{ marginTop: 40, marginLeft: 10 }}>
        <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Image
          source={require('../../../assets/LogoDefault.png')}
          style={{ width: 60, height: 30 }}
          resizeMode="contain"
        />

      </View>

      <Text style={[styles.title, { marginTop: 20, fontSize: 24 }]}>
        Para começar, insira seu endereço
      </Text>

      {step === 'select' ? (
        <>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, borderBottomWidth: 1, borderBottomColor: '#D3BDF0', marginHorizontal: 20 }}>
            <Feather name="send" size={16} color="#BCA4E3" style={{ marginRight: 10 }} />
            <TextInput
              placeholder="Insira sua cidade"
              placeholderTextColor="#BCA4E3"
              style={{ flex: 1, height: 40, color: '#000' }}
            />
          </View>

          <FlatList
            data={cities}
            keyExtractor={(item) => item}
            style={{ marginTop: 20, marginHorizontal: 20 }}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleCitySelect(item)}>
                <Text style={{ color: '#6E00FF', fontWeight: '500', fontSize: 15 }}>{item}</Text>
                <Text style={{ color: '#999', fontSize: 13 }}>Localização aproximada</Text>
              </TouchableOpacity>
            )}
          />
        </>
      ) : (
        <>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#D3BDF0', paddingBottom: 5 }}>
            <Feather name="send" size={16} color="#BCA4E3" style={{ marginRight: 10 }} />
            <Text style={{ color: '#6E00FF', fontSize: 15 }}>{selectedCity}</Text>
          </View>

          {[
            { label: 'CEP *', name: 'cep', placeholder: 'Insira seu CEP' },
            { label: 'Endereço *', name: 'endereco', placeholder: 'Insira seu endereço' },
            { label: 'Número *', name: 'numero', placeholder: 'Insira seu número' },
            { label: 'Complemento', name: 'complemento', placeholder: 'Insira seu complemento' },
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
              onPress={handleNavigateToPersonalData}
            >
              <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>

        </>
      )}
    </View>
  );
}
