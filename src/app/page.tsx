
import DogImage from '@/view/DogImage';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className='text-3xl text-center m-auto p-6'>Welcome to the Dog API!</h1>
      <DogImage />
    </div>
  );
};

export default HomePage;