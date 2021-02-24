/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: 'AIzaSyCObuNx5Uml4mxoncPGUTpl6tTcVoF-5Uw',
  authDomain: 'react-push-notification-58f73.firebaseapp.com',
  projectId: 'react-push-notification-58f73',
  storageBucket: 'react-push-notification-58f73.appspot.com',
  messagingSenderId: '467255263467',
  appId: '1:467255263467:web:dcac6c2c677bd1f1753eae',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});
