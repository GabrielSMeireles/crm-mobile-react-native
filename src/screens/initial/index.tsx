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
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import logoSmall from "../../../assets/app-name-small.png";


const { width } = Dimensions.get('window');

// Produtos simulados
const products = {
  notebooks: [
    {
      name: 'MacBook Air de 13”',
      price: 'R$ 7.999,99',
      image: require('../../../assets/540d7697864354f0c0bed1741209d7f1.png'), // macbook-air
    },
    {
      name: 'MacBook Pro de 16”',
      price: 'R$ 15.999,99',
      image: require('../../../assets/540d7697864354f0c0bed1741209d7f1.png'), // macbook-pro (mesma imagem)
    },
  ],
  pcs: [
    {
      name: 'PC Gamer EasyPC',
      price: 'R$ 3.599,99',
      image: require('../../../assets/Grupo-417.png'), // pc-easy
    },
    {
      name: 'PC Gamer Rocket',
      price: 'R$ 3.999,99',
      image: require('../../../assets/Grupo 1127.png'), // pc-rocket
    },
  ],
  hardware: [
    {
      name: 'AMD Ryzen 7 5800X',
      price: 'R$ 2.280,00',
      image: require('../../../assets/61DYLoyNRWL._AC_SX679_.png'), // ryzen
    },
    {
      name: 'Intel Core i7 9700KF',
      price: 'R$ 1.799,00',
      image: require('../../../assets/Grupo-414.png'), // i7
    },
  ],
  perifericos: [
    {
      name: 'Headset Hyperx',
      price: 'R$ 299,99',
      image: require('../../../assets/61hAn48vroL._AC_SX522_.png'), // headset
    },
    {
      name: 'Mouse Redragon',
      price: 'R$ 99,99',
      image: require('../../../assets/Grupo-414.png'), // mouse (mesma do i7)
    },
  ],
};

const ProductList = ({ title, data }: { title: string; data: any[] }) => (
  <View style={{ marginBottom: 20 }}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 10,
      }}
    >
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
      <Text style={{ color: '#6E00FF', fontSize: 13 }}>Ver tudo</Text>
    </View>

    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20 }}
      data={data}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <View style={{ marginRight: 16, width: 120 }}>
          <Image
            source={item.image}
            style={{ width: '100%', height: 100, borderRadius: 10 }}
            resizeMode="contain"
          />
          <Text numberOfLines={2} style={{ fontSize: 13 }}>{item.name}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 13 }}>{item.price}</Text>
        </View>
      )}
    />
  </View>
);

export function Initial() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 40 }}>
      <Image source={logoSmall} style={styles.imageLogo} resizeMode="stretch" />


        <Feather name="shopping-bag" size={24} color="#6E00FF" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner promocional */}
        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <Image
            source={require('../../../assets/Grupo-417.png')}        
            style={{ width: width - 40, height: 120, borderRadius: 10 }}
            resizeMode="cover"
          />
        </View>

        {/* Categorias */}
        <ProductList title="Notebooks" data={products.notebooks} />
        <ProductList title="Computadores" data={products.pcs} />
        <ProductList title="Hardware" data={products.hardware} />
        <ProductList title="Periféricos" data={products.perifericos} />

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Navegação inferior */}
      <View style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 10,
      }}>
        <TouchableOpacity>
          <Feather name="home" size={24} color="#6E00FF" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="grid" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: '#6E00FF',
          padding: 10,
          borderRadius: 30,
        }}>
          <Feather name="user" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
