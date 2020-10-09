import React, {useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Button} from 'react-native';
import {
  employeeUpdateInProgress,
  employeeRemoveInProgress,
} from '../redux/actions/employeeAction';
import EmployeeForm from '../Components/EmployeeForm/EmployeeFrom';
import Card from '../Components/Card/Card';
import CardItem from '../Components/CardItem/CardItem';
import Communications from 'react-native-communications';
import Confirm from '../Components/Confirm/Confirm';

const EmployeeUpdateScreen = (props) => {
  const [visible, setVisible] = useState(false);
  const {
    updateEmployee,
    removeEmployee,
    employee: {loading},
    uid,
    Name,
    shift,
    phone,
  } = props;
  const updateEmployeeHandler = async (name, phone, shift) => {
    try {
      await new Promise((resolve, reject) => {
        updateEmployee({name, phone, shift}, uid, resolve, reject);
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };
  const OnTextPress = () => {
    Communications.textWithoutEncoding(
      phone,
      `Your Upcoming Shift is on ${shift}`,
    );
  };
  const visibleHandler = () => {
    setVisible((prevState) => !prevState);
  };
  const removeEmployeeHandler = () => {
    removeEmployee(uid);
  };
  return (
    <>
      <EmployeeForm
        onClick={updateEmployeeHandler}
        isloading={loading}
        title="Update"
        isName={Name}
        isPhone={phone}
        isShift={shift}
      />
      <Card>
        <CardItem>
          <Button title="Text Schedule" onPress={OnTextPress} />
        </CardItem>
        <CardItem>
          <Button title="Fire" onPress={visibleHandler} />
        </CardItem>
      </Card>
      <Confirm
        visible={visible}
        onDecline={visibleHandler}
        onAccept={removeEmployeeHandler}>
        Are you sure you want to delete this?
      </Confirm>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    employee: state.employee,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateEmployee: (createObj, uid, resolve, reject) =>
      dispatch(employeeUpdateInProgress(createObj, uid, resolve, reject)),
    removeEmployee: (uid) => dispatch(employeeRemoveInProgress(uid)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeUpdateScreen);
