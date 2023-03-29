import { useState, useEffect } from 'react';

const useBottomScrollListener = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.scrollHeight;
      const scrollBottom = bodyHeight - (scrollY + windowHeight);

      setIsBottom(scrollBottom < 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isBottom;
};

export default useBottomScrollListener;
