import firebase from '../../../firebase';

export const authentication = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => Promise.resolve(response))
    .catch(() => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => Promise.resolve(response))
        .catch(() => Promise.reject('Failed Authentication!!'));
    });
};
