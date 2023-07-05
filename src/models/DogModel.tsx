import { DOG_API } from "@/config/apiCall";



export async function fetchRandomDogImage(): Promise<string> {
    const response = await fetch(DOG_API);
    const data = await response.json();
    return data.message;
  }