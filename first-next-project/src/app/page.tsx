'use client';

import { useState } from 'react';
import styles from './page.module.css';

import Home from './components/Welcome';

const App: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [showGreeting, setShowGreeting] = useState<boolean>(false);

  const handleGreetingSwitch = () => {
    console.log('Setting greeting to: ', !showGreeting);

    setShowGreeting(!showGreeting);
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
      <span className={styles.greetingButton} onClick={handleHelloFetch}>
        {!showGreeting ? 'Fetch greeting!' : 'Hide greeting!'}
      </span>
    </div>
  );
};

export default App;
