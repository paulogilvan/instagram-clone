import { Photo } from '../types/Photo';
import axios from 'axios';

const apiKey = import.meta.env.VITE_KEY_API_PEXELS;
const baseURL = 'https://api.pexels.com/v1/curated';

type PexelsResponse = {
  photos: Photo[];
}

type props = {
  photosPerPage: [];    
}

export const getPhotos = async ({ photosPerPage }: props) => {

  try {      
    const response = await axios.get<PexelsResponse>(
      baseURL,
      {
        params: { "page": 1, "per_page": photosPerPage },
        headers: {
            Authorization: apiKey,
        },
      }
    );
    return response.data.photos;
  } catch(error) {
      console.error(error);
  } 
}