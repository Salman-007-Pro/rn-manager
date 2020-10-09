import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

const List = ({data}) => {
  const {name: Name, uid, phone, shift} = data;
  return (
    <TouchableOpacity onPress={() => Actions.Update({uid, Name, phone, shift})}>
      <View style={styles.container}>
        <Text style={styles.text}>{Name}</Text>
        <Text>({shift})</Text>
      </View>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginRight: 5,
  },
});
