'use client'

import { useEffect, useState } from 'react';
import * as DogController from '@/app/controler';

const DogImage: React.FC = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');
  
    useEffect(() => {
      fetchDogImage();
    }, []);
  
    async function fetchDogImage() {
      try {
        const url = await DogController.getRandomDogImage();
        setImageUrl(url);
        setError('');
      } catch (error) {
        setError('Failed to fetch random dog image.');
      }
    }
  
    return (
      <div className="flex flex-col items-center">
                <button
          className="p-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={fetchDogImage}
        >
          Fetch Another Image
        </button>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Random dog"
            onClick={fetchDogImage}
            className="w-64 h-64 object-cover cursor-pointer m-4"
          />
        ) : (
          <p className="text-red-500 mb-4">{error}</p>
        )}

      </div>
    );
  };
  
  export default DogImage;