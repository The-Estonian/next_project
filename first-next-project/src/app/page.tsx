import styles from './page.module.css';

const Home: React.FC<Props> = ({ name }) => {
  return <div className={styles.page}>Hey, {name}</div>;
};

interface Props {
  name: string;
}

export default Home;
