import React from 'react';
import {connect} from 'react-redux';
import {employeeCreateInProgress} from '../redux/actions/employeeAction';
import EmployeeForm from '../Components/EmployeeForm/EmployeeFrom';
const EmployeeCreateScreen = (props) => {
  const {
    createEmployee,
    employee: {loading},
  } = props;
  const createEmployeeHandler = async (name, phone, shift) => {
    try {
      await new Promise((resolve, reject) => {
        createEmployee({name, phone, shift}, resolve, reject);
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };
  return <EmployeeForm onClick={createEmployeeHandler} isloading={loading} />;
};
const mapStateToProps = (state) => {
  return {
    employee: state.employee,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createEmployee: (createObj, resolve, reject) =>
      dispatch(employeeCreateInProgress(createObj, resolve, reject)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeCreateScreen);
