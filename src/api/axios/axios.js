import axios from 'axios';
import firebase from '../../../firebase';
const instance = axios.create({
  baseURL: 'https://rn-manager360.firebaseio.com',
});
// instance.interceptors.request.use(
//   async (config) => {
//     const token = await firebase.auth().currentUser.getIdToken();
//     if (token) {
//       console.log('s');
//       config.headers = {
//         'Content-Type': 'application/json',
//         token: token,
//       };
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );
export default instance;
