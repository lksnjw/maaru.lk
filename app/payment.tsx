import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useCart } from '@/context/CartContext';
import { Colors } from '@/constants/Colors';

interface FormData {
  cardNumber: string;
  cardholderName: string;
  expiryDate: string;
  cvc: string;
}

interface FormErrors {
  cardNumber?: string;
  cardholderName?: string;
  expiryDate?: string;
  cvc?: string;
}

export default function PaymentScreen() {
  const { t } = useTranslation();
  const { totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvc: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});

  const getCardType = (cardNumber: string) => {
    const cleanNumber = cardNumber.replace(/\s/g, '');
    if (cleanNumber.startsWith('4')) {
      return 'visa';
    } else if (cleanNumber.startsWith('5')) {
      return 'mastercard';
    }
    return 'generic';
  };

  const getCardLogo = () => {
    const cardType = getCardType(formData.cardNumber);
    
    // For demo purposes, using placeholder images
    switch (cardType) {
      case 'visa':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png';
      case 'mastercard':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png';
      default:
        return 'https://via.placeholder.com/100x60/cccccc/ffffff?text=CARD';
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Card number validation
    const cleanCardNumber = formData.cardNumber.replace(/\s/g, '');
    if (!cleanCardNumber || cleanCardNumber.length < 13) {
      newErrors.cardNumber = t('payment.errors.cardNumber');
    }

    // Cardholder name validation
    if (!formData.cardholderName.trim()) {
      newErrors.cardholderName = t('payment.errors.cardholderName');
    }

    // Expiry date validation (MM/YY format)
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryRegex.test(formData.expiryDate)) {
      newErrors.expiryDate = t('payment.errors.expiryDate');
    }

    // CVC validation
    if (!formData.cvc || formData.cvc.length < 3) {
      newErrors.cvc = t('payment.errors.cvc');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCardNumberChange = (text: string) => {
    // Format card number with spaces
    const cleaned = text.replace(/\s/g, '');
    const formatted = cleaned.replace(/(.{4})/g, '$1 ').trim();
    setFormData({ ...formData, cardNumber: formatted });
  };

  const handleExpiryDateChange = (text: string) => {
    // Format expiry date as MM/YY
    let formatted = text.replace(/\D/g, '');
    if (formatted.length >= 2) {
      formatted = formatted.substring(0, 2) + '/' + formatted.substring(2, 4);
    }
    setFormData({ ...formData, expiryDate: formatted });
  };

  const handlePayment = async () => {
    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      router.replace('/payment-success');
    }, 2000);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <View style={styles.cardLogoContainer}>
          <Image source={{ uri: getCardLogo() }} style={styles.cardLogo} />
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>{t('payment.cardNumber')}</Text>
            <TextInput
              style={[styles.input, errors.cardNumber && styles.inputError]}
              value={formData.cardNumber}
              onChangeText={handleCardNumberChange}
              placeholder="1234 5678 9012 3456"
              keyboardType="numeric"
              maxLength={19}
            />
            {errors.cardNumber && <Text style={styles.errorText}>{errors.cardNumber}</Text>}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>{t('payment.cardholderName')}</Text>
            <TextInput
              style={[styles.input, errors.cardholderName && styles.inputError]}
              value={formData.cardholderName}
              onChangeText={(text) => setFormData({ ...formData, cardholderName: text })}
              placeholder="John Doe"
              autoCapitalize="words"
            />
            {errors.cardholderName && <Text style={styles.errorText}>{errors.cardholderName}</Text>}
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>{t('payment.expiryDate')}</Text>
              <TextInput
                style={[styles.input, errors.expiryDate && styles.inputError]}
                value={formData.expiryDate}
                onChangeText={handleExpiryDateChange}
                placeholder="MM/YY"
                keyboardType="numeric"
                maxLength={5}
              />
              {errors.expiryDate && <Text style={styles.errorText}>{errors.expiryDate}</Text>}
            </View>

            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>{t('payment.cvc')}</Text>
              <TextInput
                style={[styles.input, errors.cvc && styles.inputError]}
                value={formData.cvc}
                onChangeText={(text) => setFormData({ ...formData, cvc: text.replace(/\D/g, '') })}
                placeholder="123"
                keyboardType="numeric"
                maxLength={4}
                secureTextEntry
              />
              {errors.cvc && <Text style={styles.errorText}>{errors.cvc}</Text>}
            </View>
          </View>
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total: </Text>
          <Text style={styles.totalAmount}>${totalPrice.toFixed(2)}</Text>
        </View>

        <TouchableOpacity
          style={[styles.payButton, isProcessing && styles.payButtonDisabled]}
          onPress={handlePayment}
          disabled={isProcessing}
        >
          <Text style={styles.payButtonText}>
            {isProcessing ? t('payment.processing') : t('payment.payButton', { amount: totalPrice.toFixed(2) })}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  cardLogoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  cardLogo: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
  form: {
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  inputError: {
    borderColor: '#ff4444',
  },
  errorText: {
    color: '#ff4444',
    fontSize: 14,
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
  },
  payButton: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  payButtonDisabled: {
    backgroundColor: '#ccc',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
