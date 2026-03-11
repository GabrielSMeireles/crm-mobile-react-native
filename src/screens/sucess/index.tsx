import React from 'react';
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
import { ButtonWhite } from "../../components/ButtonWhite";

export function Success() {
  const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate("SignIn");
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

      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <Image
          source={require('../../../assets/sucess.png')} // substitua pelo caminho correto da ilustração
          style={{ width: 400, height: 400 }}
          resizeMode="contain"
        />
        {/* <Image
                  source={IllustrationImg}
                  style={styles.image}
                  resizeMode="stretch"
                /> */}
      </View>

      <View style={{ alignItems: 'center', marginTop: 30, paddingHorizontal: 20 }}>
        <Text style={{ color: '#4D007D', fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>
          Seu perfil foi criado com sucesso!
        </Text>
        <Text style={{ color: '#999', fontSize: 14, textAlign: 'center', marginTop: 10 }}>
          Realize o login com as credenciais inseridas nos passos anteriores.
        </Text>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 40 }}>
        <ButtonWhite title="Fazer Login" onPress={handleNavigate} />
      </View>
    </View>
  );
}
