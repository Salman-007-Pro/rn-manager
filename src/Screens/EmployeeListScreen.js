import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import {
  employeeFetchInProgress,
  employeeFetchListenerInProgress,
} from '../redux/actions/employeeAction';
import List from '../Components/List/List';
import Loading from '../Components/Loading/Loading';
import employee from '../redux/reducers/employee';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const EmployeeListScreen = (props) => {
  const {
    employee: {employees, uiState, error},
    fetchEmployee,
    listenerEmployee,
  } = props;
  useEffect(() => {
    fetchEmployee();
    listenerEmployee();
  }, []);
  return (
    <View>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.uid}
        renderItem={({item}) => <List data={item} />}
      />
      {uiState && (
        <View style={styles.Container}>
          <Loading size={50} />
        </View>
      )}
      {!uiState && !error && !employees.length && (
        <View style={styles.Container}>
          <Text style={styles.text}>No Data!</Text>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    employee: state.employee,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployee: () => dispatch(employeeFetchInProgress()),
    listenerEmployee: () => dispatch(employeeFetchListenerInProgress()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListScreen);

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    width: width,
    height: height - 130,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  text: {
    color: '#d5d5d5',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
