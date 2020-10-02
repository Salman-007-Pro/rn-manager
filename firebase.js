import firebase from 'firebase';
var firebaseConfig = {
  apiKey: 'AIzaSyAf330G386ySsG9cvq4jzte0V0zRTQ59Vw',
  authDomain: 'rn-manager360.firebaseapp.com',
  databaseURL: 'https://rn-manager360.firebaseio.com',
  projectId: 'rn-manager360',
  storageBucket: 'rn-manager360.appspot.com',
  messagingSenderId: '661677959066',
  appId: '1:661677959066:web:fa26d890018a0c6fb7bc23',
};
const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;
