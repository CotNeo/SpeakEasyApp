import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const LanguageSelector = ({ onSelectLanguage }) => {
  return (
    <View style={styles.container}>
      <Button title="English" onPress={() => onSelectLanguage('en')} />
      <Button title="Turkish" onPress={() => onSelectLanguage('tr')} />
      <Button title="Spanish" onPress={() => onSelectLanguage('es')} />
      <Button title="Russian" onPress={() => onSelectLanguage('ru')} />
      <Button title="Japanese" onPress={() => onSelectLanguage('ja')} />
      <Button title="Italian" onPress={() => onSelectLanguage('it')} />
      <Button title="German" onPress={() => onSelectLanguage('de')} />
      <Button title="French" onPress={() => onSelectLanguage('fr')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
});

export default LanguageSelector;