import React from 'react';
import {StyleSheet, View} from 'react-native';

const CardItem = ({children, extraStyle}) => {
  return <View style={[styles.container, extraStyle]}>{children}</View>;
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    padding: 10,
  },
});
