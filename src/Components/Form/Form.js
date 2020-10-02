import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import Card from '../Card/Card';
import CardItem from '../CardItem/CardItem';
import Input from '../Input/input';
import Loading from '../Loading/Loading';
const Form = ({isLoading, error, login}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginAction = () => {
    email && password
      ? login(email, password)
      : Alert.alert('Error!!', 'Plz enter the correct Fields');
  };
  return (
    <View>
      <Card>
        <CardItem extraStyle={{padding: 0}}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Login Form</Text>
          </View>
        </CardItem>
        <CardItem>
          <Input
            title="Email"
            value={email}
            setValue={setEmail}
            placeholder="enter the email"
          />
        </CardItem>
        <CardItem>
          <Input
            title="Password"
            value={password}
            setValue={setPassword}
            placeholder="enter the password"
            secureTextEntry
          />
        </CardItem>
        {/* {error && <Text>{error}</Text>} */}
        <CardItem>
          {false ? (
            <Loading />
          ) : (
            <Button title={'Login'} onPress={loginAction} />
          )}
        </CardItem>
      </Card>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  headingContainer: {
    backgroundColor: '#2196F3',
    padding: 10,
  },
  heading: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
