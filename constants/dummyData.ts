export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
    description: 'Premium wireless headphones with noise cancellation and superior sound quality. Perfect for music lovers and professionals.'
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
    description: 'Advanced smartwatch with health monitoring, GPS tracking, and smartphone connectivity. Stay connected and healthy.'
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
    description: 'Portable Bluetooth speaker with powerful bass and crystal clear sound. Perfect for outdoor adventures and parties.'
  },
  {
    id: '4',
    name: 'Laptop Stand',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
    description: 'Ergonomic laptop stand for better posture and productivity. Adjustable height and angle for maximum comfort.'
  },
  {
    id: '5',
    name: 'Wireless Mouse',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop',
    description: 'Precision wireless mouse with ergonomic design and long battery life. Ideal for work and gaming.'
  },
  {
    id: '6',
    name: 'Phone Case',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&fit=crop',
    description: 'Durable phone case with premium materials and elegant design. Provides excellent protection without compromising style.'
  }
];
