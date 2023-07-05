import * as DogModel from '@/models/DogModel';



export async function getRandomDogImage(): Promise<string> {
    try {
      const imageUrl = await DogModel.fetchRandomDogImage();
      return imageUrl;
    } catch (error) {
      console.error('Failed to fetch random dog image:', error);
      throw error;
    }
  }
