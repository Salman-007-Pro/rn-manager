import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Router, Scene, Stack, Actions, Tabs} from 'react-native-router-flux';
import LoginScreen from '../Screens/LoginScreen';
import EmployeeListScreen from '../Screens/EmployeeListScreen';
import EmployeeCreateScreen from '../Screens/EmployeeCreateScreen';
import EmployeeUpdateScreen from '../Screens/EmployeeUpdateScreen';
import LogoutScreen from '../Screens/LogoutScreen';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar headerLayoutPreset={'center'}>
        <Scene key="auth">
          <Scene
            key="login"
            headerLayoutPreset={'center'}
            component={LoginScreen}
            title="Please Login"
            initial
          />
        </Scene>
        <Tabs key="main">
          <Stack key="list" title="Employees">
            <Scene
              initial
              key="EmployeeList"
              title="Employees"
              component={EmployeeListScreen}
            />
            <Scene
              key="Update"
              title="Update Employee"
              component={EmployeeUpdateScreen}
            />
          </Stack>
          <Scene
            tabs={true}
            key="EmployeeCreate"
            title="Create Employee"
            component={EmployeeCreateScreen}
          />
          <Scene
            tabs={true}
            key="Logout"
            title="Logout"
            component={LogoutScreen}
          />
        </Tabs>
      </Scene>
    </Router>
  );
};

export default RouterComponent;

const styles = StyleSheet.create({});
