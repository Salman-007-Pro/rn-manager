import React from 'react';
import {Button, StyleSheet} from 'react-native';
import Card from '../Components/Card/Card';
import CardItem from '../Components/CardItem/CardItem';
import {Actions} from 'react-native-router-flux';

const LogoutScreen = () => {
  return (
    <Card>
      <CardItem>
        <Button title="Logout" onPress={() => Actions.reset('auth')} />
      </CardItem>
    </Card>
  );
};

export default LogoutScreen;

const styles = StyleSheet.create({});
