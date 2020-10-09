import React, {useState} from 'react';
import {StyleSheet, Text, Picker, Button, Alert} from 'react-native';
import Card from '../Card/Card';
import CardItem from '../CardItem/CardItem';
import Input from '../Input/input';
import Loading from '../Loading/Loading';
const EmployeeFrom = ({
  onClick,
  isLoading,
  isName = '',
  isPhone = '',
  isShift = 'Monday',
  title = 'Create',
}) => {
  const [name, setName] = useState(isName);
  const [phone, setPhone] = useState(isPhone);
  const [shift, setShift] = useState(isShift);

  const resetHandler = () => {
    setName('');
    setPhone('');
    setShift('Monday');
  };
  const buttonHandler = async () => {
    if (name && phone)
      try {
        await onClick(name, phone, shift);
        resetHandler();
      } catch (e) {
        console.log(e);
      }
    else Alert.alert('Error!!', 'Plz enter the correct Fields');
  };
  return (
    <Card>
      <CardItem>
        <Input
          label="Name"
          value={name}
          setValue={setName}
          placeholder="enter the name"
        />
      </CardItem>
      <CardItem>
        <Input
          label="Phone"
          value={phone}
          setValue={(text) => setPhone(text.replace(/[^0-9]/g, ''))}
          placeholder="555-555-855"
          numeric
        />
      </CardItem>
      <CardItem extraStyle={{flexDirection: 'column'}}>
        <Text style={styles.label}>Shift:</Text>
        <Picker selectedValue={shift} onValueChange={setShift}>
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </CardItem>
      <CardItem>
        {isLoading ? (
          <Loading />
        ) : (
          <Button title={title} onPress={buttonHandler} />
        )}
      </CardItem>
    </Card>
  );
};

export default EmployeeFrom;

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
