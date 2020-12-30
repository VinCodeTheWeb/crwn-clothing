import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('ZP5sMsynS8gZY8ObXAce')
  .collection('cartItems')
  .doc('9BrVkEC1IHin4hoC1leb');
firestore.doc('/users/ZP5sMsynS8gZY8ObXAce/cartItems/cartItems/9BrVkEC1IHin4hoC1leb');
firestore.collection('/users/ZP5sMsynS8gZY8ObXAce/cartItems/cartItems/');
