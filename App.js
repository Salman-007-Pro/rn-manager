import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import firebase from 'firebase';
import {Text, View} from 'react-native';

import LoginScreen from './src/Screens/LoginScreen';

const App = () => {
  // useEffect(() => {
  //   // var firebaseConfig = {
  //   //   apiKey: 'AIzaSyAf330G386ySsG9cvq4jzte0V0zRTQ59Vw',
  //   //   authDomain: 'rn-manager360.firebaseapp.com',
  //   //   databaseURL: 'https://rn-manager360.firebaseio.com',
  //   //   projectId: 'rn-manager360',
  //   //   storageBucket: 'rn-manager360.appspot.com',
  //   //   messagingSenderId: '661677959066',
  //   //   appId: '1:661677959066:web:fa26d890018a0c6fb7bc23',
  //   // };
  //   // firebase.initializeApp(firebaseConfig);
  // }, []);
  return (
    <Provider store={store}>
      <View>
        <LoginScreen />
      </View>
    </Provider>
  );
};

export default App;
