import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Form from '../Components/Form/Form';
import {connect} from 'react-redux';
import Actions from '../redux/actions';
const {loginInProgress} = Actions;

const LoginScreen = ({login, loginAction}) => {
  const {loading, error} = login;
  return (
    <View>
      <Form isLoading={loading} error={error} login={loginAction} />
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (email, password) =>
      dispatch(loginInProgress(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({});
