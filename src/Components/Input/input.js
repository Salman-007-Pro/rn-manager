import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const input = ({value, setValue, title, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}:</Text>
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        value={value}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        onChangeText={setValue}
      />
    </View>
  );
};

export default input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  inputText: {
    fontSize: 18,
    flex: 2.5,
  },
});
