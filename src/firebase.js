import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyCObuNx5Uml4mxoncPGUTpl6tTcVoF-5Uw',
  authDomain: 'react-push-notification-58f73.firebaseapp.com',
  projectId: 'react-push-notification-58f73',
  storageBucket: 'react-push-notification-58f73.appspot.com',
  messagingSenderId: '467255263467',
  appId: '1:467255263467:web:dcac6c2c677bd1f1753eae',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

export const getToken = (setToken) => {
  return messaging
    .getToken({
      vapidKey:
        'BPN8xpfaQBG3f6DS_4-JJiDP3naMY7TwDYw6qDXvDDU_mFJAytiiJAaSbjbxXCeiQs_hgqaS-fEmBs_DTTBELWA',
    })
    .then((currentToken) => {
      if (currentToken) {
        console.log('Current token: ', currentToken);
        setToken(true);
      } else {
        console.log(
          'No registration token available. Request permission to generate one.'
        );
        setToken(false);
      }
    })
    .catch((error) => {
      console.log('An error occurred while retrieving token.', error);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
