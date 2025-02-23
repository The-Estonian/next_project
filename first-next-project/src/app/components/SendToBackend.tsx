import { useState } from 'react';

import styles from './SendToBackend.module.scss';

const SendToBackend: React.FC = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const inputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const inputAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const submitDataToBackendHandler = async () => {
    try {
      const response = await fetch('/api/sentData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age }),
      });
      if (!response.ok) {
        console.log('Error sending data to backend', response);
      }
      const data = await response.json();
      console.log(data);
      setName('');
      setAge('');
    } catch (e) {
      console.log('Error sending data to backend', e);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <span className={styles.inputContainer_title}>Name</span>
      <input
        className={styles.inputContainer_input}
        onChange={inputName}
        value={name}
      />
      <span className={styles.inputContainer_title}>Age</span>
      <input
        className={styles.inputContainer_input}
        onChange={inputAge}
        value={age}
      />
      <span
        className={styles.inputContainer_submit}
        onClick={submitDataToBackendHandler}
      >
        Submit
      </span>
    </div>
  );
};

export default SendToBackend;
