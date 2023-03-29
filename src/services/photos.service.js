import instance from '../utils/axios';

const unsplashAccessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const getPhotos = async (page = 1) => {
  try {
    const response = await instance.get(`/photos?page=${page}&per_page=15&client_id=${unsplashAccessKey}`);

    return response.data;
  } catch (error) {
    return [];
  }
};
