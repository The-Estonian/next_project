'use client';

import { useState } from 'react';
import styles from './page.module.css';

import Home from './components/Welcome';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('Welcome to Next.js!');
  return (
    <div className={styles.page}>
      <Home message={message} name='New User' />
    </div>
  );
};

export default App;
