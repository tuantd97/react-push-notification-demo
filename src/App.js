import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getToken, onMessageListener } from './firebase';
import { Button, Toast } from 'react-bootstrap';

function App() {
  const [token, setToken] = useState(false);
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: '', body: '' });

  useEffect(() => {
    getToken(setToken);
  }, []);

  const handleClick = () => {};

  onMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(payload);
    })
    .catch((err) => console.log('failed: ', err));

  return (
    <div className='App'>
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        animation
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          minWidth: 200,
        }}
      >
        <Toast.Header>
          <img src='holder.js/20x20?text=%20' className='rounded mr-2' alt='' />
          <strong className='mr-auto'>{notification.title}</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>{notification.body}</Toast.Body>
      </Toast>
      <header className='App-header'>
        {token && <h1> Notification permission enabled </h1>}
        {!token && <h1> Need notification permission </h1>}
        <img src={logo} className='App-logo' alt='logo' />
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </header>
    </div>
  );
}

export default App;
