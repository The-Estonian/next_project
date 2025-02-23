'use client';

import { useState } from 'react';
import styles from './page.module.css';

import Home from './components/Welcome';
import SendToBackend from './components/SendToBackend';

const App: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [showGreeting, setShowGreeting] = useState<boolean>(false);

  const [showSendDataToBackend, setShowSendDataToBackend] =
    useState<boolean>(false);

  const handleGreetingSwitch = () => {
    console.log('Setting greeting to: ', !showGreeting);

    setShowGreeting(!showGreeting);
  };

  const handleSendDataToBackendSwitch = () => {
    setShowSendDataToBackend(!showSendDataToBackend);
  };

  const requestHello = async () => {
    try {
      const response = await fetch('/api/hello', {
        method: 'GET',
      });
      if (!response.ok) {
        console.log('Could not fetch hello data');
      }
      const data = await response.json();
      setMessage(data?.message);
      handleGreetingSwitch();
    } catch (e) {
      console.log('Error fetching hello data!', e);
    }
  };

  const handleHelloFetch = () => {
    requestHello();
  };

  return (
    <div className={styles.container}>
      {showGreeting && (
        <span className={styles.greeting}>Welcome message: </span>
      )}
      {showGreeting && <Home message={message} name='New User' />}
      {showSendDataToBackend && <SendToBackend />}
      <span className={styles.greetingButton} onClick={handleHelloFetch}>
        {!showGreeting ? 'Fetch Greeting!' : 'Hide Greeting!'}
      </span>
      <span
        className={styles.sendToBackendButton}
        onClick={handleSendDataToBackendSwitch}
      >
        {!showSendDataToBackend ? 'Send to backend!' : 'Hide Send to backend!'}
      </span>
    </div>
  );
};

export default App;
