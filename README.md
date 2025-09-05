# MARU.LK E-commerce Mobile App

A complete React Native e-commerce application built with Expo Router and TypeScript, featuring product browsing, shopping cart functionality, payment simulation, and multi-language support.

## Features

### 🛍️ Core E-commerce Features
- **Product Catalog**: Browse products with images, names, and prices
- **Product Details**: View detailed product information with add-to-cart functionality
- **Shopping Cart**: Manage cart items with quantity tracking and total calculation
- **Payment Processing**: Simulate payment with form validation and card type detection
- **Payment Success**: Confirmation screen with order completion

### 🚀 Technical Features
- **Expo Router**: File-based navigation with TypeScript support
- **Global State Management**: Cart context using React Context API
- **Multi-language Support**: i18next integration with English and Spanish
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Optimized for mobile devices

### 🎨 UI/UX Features
- **Custom Brand Colors**: Primary color #008774
- **Card Detection**: Automatic Visa/Mastercard logo display
- **Form Validation**: Real-time validation with error messages
- **Tab Navigation**: Bottom tabs with cart badge counter
- **Loading States**: Processing indicators for better UX

## Project Structure

```
app/
├── (tabs)/                 # Tab-based screens
│   ├── _layout.tsx        # Tab navigator configuration
│   ├── index.tsx          # Home screen (product catalog)
│   ├── cart.tsx           # Shopping cart screen
│   └── settings.tsx       # Language settings screen
├── product/
│   └── [id].tsx           # Dynamic product detail screen
├── payment.tsx            # Payment processing screen
├── payment-success.tsx    # Payment confirmation screen
└── _layout.tsx            # Root stack navigator

constants/
├── Colors.ts              # App color palette
└── dummyData.ts          # Sample product data

context/
└── CartContext.tsx        # Shopping cart state management

localization/
├── i18n.ts               # i18next configuration
└── locales/
    ├── en.json           # English translations
    └── es.json           # Spanish translations
```

## Navigation Flow

1. **Home Screen** → Product list with navigation to product details
2. **Product Detail** → Individual product view with add-to-cart
3. **Cart Screen** → Cart management and checkout initiation
4. **Payment Screen** → Payment form with validation
5. **Payment Success** → Confirmation and return to home
6. **Settings Screen** → Language selection

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- Expo CLI
- iOS Simulator or Android Emulator (or Expo Go app)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npx expo start
```

3. Open the app:
   - **iOS**: Press `i` to open in iOS Simulator
   - **Android**: Press `a` to open in Android Emulator
   - **Web**: Press `w` to open in web browser
   - **Physical Device**: Scan QR code with Expo Go app

## Key Features Implementation

### Shopping Cart Management
The app uses React Context to manage global cart state with the following capabilities:
- Add products to cart
- Track quantities and totals
- Display cart badge on tab navigator
- Clear cart after successful payment

### Multi-language Support
Implemented using react-i18next:
- English and Spanish translations
- Automatic device language detection
- Manual language switching in settings
- Comprehensive translation coverage

### Payment Processing
Simulated payment system with:
- Form validation for all fields
- Dynamic card type detection (Visa/Mastercard)
- Card number formatting
- Expiry date validation
- Processing simulation with 2-second delay

### Type Safety
Full TypeScript implementation:
- Strongly typed product interfaces
- Type-safe navigation parameters
- Typed context providers
- Comprehensive error handling

## Technologies Used

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **Expo Router**: File-based navigation
- **TypeScript**: Type safety and better development experience
- **React Context**: Global state management
- **i18next**: Internationalization
- **React Hook Form**: Form handling and validation

## License

This project is created for educational/demonstration purposes.
