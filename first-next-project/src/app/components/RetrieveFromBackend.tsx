import { useState } from 'react';

import styles from './SendToBackend.module.scss';

const SendToBackend: React.FC = () => {
  const [data, setData] = useState<Row[]>([]);

  const submitGetDataFromBackendHandler = async () => {
    try {
      const response = await fetch('/api/getData', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        console.log('Error sending data to backend', response);
      }
      const data = await response.json();
      setData(data.dataStream);
      console.log(data);
    } catch (e) {
      console.log('Error sending data to backend', e);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <span
        className={styles.inputContainer_submit}
        onClick={submitGetDataFromBackendHandler}
      >
        Fetch!
      </span>
      <div>
        {data &&
          data.map((row) => (
            <div key={row.id}>
              <span>{row.id} </span>
              <span>{row.name} </span>
              <span>{row.age} </span>
            </div>
          ))}
      </div>
    </div>
  );
};

type Row = {
  id: string;
  name: string;
  age: string;
};

export default SendToBackend;
