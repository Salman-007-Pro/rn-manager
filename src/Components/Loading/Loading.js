import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

const Loading = ({size}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size || 'large'} color="#2196F3" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
