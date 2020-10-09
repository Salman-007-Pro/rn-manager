import React from 'react';
import {StyleSheet, Text, View, Modal, Button} from 'react-native';
import Card from '../Card/Card';
import CardItem from '../CardItem/CardItem';

const Confirm = ({children, visible, onDecline, onAccept}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}>
      <View style={styles.container}>
        <Card>
          <CardItem>
            <Text style={styles.textStyle}>{children}</Text>
          </CardItem>
          <CardItem>
            <Button title="Yes" onPress={onAccept} />
          </CardItem>
          <CardItem>
            <Button title="No" onPress={onDecline} />
          </CardItem>
        </Card>
      </View>
    </Modal>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
  },
});
