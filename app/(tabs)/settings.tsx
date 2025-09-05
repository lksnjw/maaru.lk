import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Colors } from '@/constants/Colors';

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('settings.title')}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.language')}</Text>
        
        <TouchableOpacity
          style={[
            styles.languageButton,
            i18n.language === 'en' && styles.activeLanguageButton
          ]}
          onPress={() => changeLanguage('en')}
        >
          <Text style={[
            styles.languageButtonText,
            i18n.language === 'en' && styles.activeLanguageButtonText
          ]}>
            {t('settings.english')}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.languageButton,
            i18n.language === 'sin' && styles.activeLanguageButton
          ]}
          onPress={() => changeLanguage('sin')}
        >
          <Text style={[
            styles.languageButtonText,
            i18n.language === 'sin' && styles.activeLanguageButtonText
          ]}>
            {t('settings.sinhala')}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.languageButton,
            i18n.language === 'tamil' && styles.activeLanguageButton
          ]}
          onPress={() => changeLanguage('tamil')}
        >
          <Text style={[
            styles.languageButtonText,
            i18n.language === 'tamil' && styles.activeLanguageButtonText
          ]}>
            {t('settings.tamil')}
          </Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  languageButton: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  activeLanguageButton: {
    backgroundColor: Colors.PRIMARY,
    borderColor: Colors.PRIMARY,
  },
  languageButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  activeLanguageButtonText: {
    color: '#fff',
  },
});
