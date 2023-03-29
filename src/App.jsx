import { useCallback, useEffect, useState } from 'react';
import './App.css';

import { getPhotos } from './services/photos.service';
import useBottomScrollListener from './hooks/useBottomScrollListener';

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const isBottom = useBottomScrollListener();

  const fetchPhotos = useCallback(async (page = 1) => {
    setLoading(true);
    const photos = await getPhotos(page);
    setImages((prevPhotos) => [...prevPhotos, ...photos]);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchPhotos(page);
  }, [fetchPhotos, page]);

  useEffect(() => {
    setPage((prevPage) => prevPage + 1);
  }, [isBottom]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.regular}
            alt={image.alt_description}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default App;
