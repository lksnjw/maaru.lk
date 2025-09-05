import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Colors } from '@/constants/Colors';
import { Logo } from '@/components/Logo';

// Sample products data
const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
    description: 'Premium wireless headphones with noise cancellation and superior sound quality.'
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
    description: 'Advanced smartwatch with health monitoring, GPS tracking, and smartphone connectivity.'
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
    description: 'Portable Bluetooth speaker with powerful bass and crystal clear sound.'
  },
];

const { width } = Dimensions.get('window');
const itemWidth = (width - 48) / 2;

export default function ProductsScreen() {
  const { t } = useTranslation();

  const renderProduct = ({ item }: { item: any }) => (
    <Link href={`/product/${item.id}`} asChild>
      <TouchableOpacity style={styles.productCard}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
          <Text style={styles.productPrice}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Logo width={50} height={30} color="#fff" />
          <Text style={styles.title}>Products</Text>
        </View>
      </View>
      
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: Colors.PRIMARY,
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  productList: {
    padding: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    width: itemWidth,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
  },
});
