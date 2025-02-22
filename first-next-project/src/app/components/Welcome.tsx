'use client';

const Home: React.FC<Props> = ({ message, name }) => {
  return (
    <div>
      {message} {name}
    </div>
  );
};

interface Props {
  message: string;
  name: string;
}

export default Home;
