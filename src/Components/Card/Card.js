import React from 'react';
import {StyleSheet, View} from 'react-native';

const Card = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderWidth: 1,
    borderBottomWidth: 0,
    marginHorizontal: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
});
