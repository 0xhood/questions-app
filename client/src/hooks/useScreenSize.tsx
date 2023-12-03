import { useState, useEffect } from 'react';

function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  const tailwindSizes = {
    isXs: screenSize.width <= 640,
    isSm: screenSize.width >= 640,   // Tailwind sm breakpoint
    isMd: screenSize.width >= 768,   // Tailwind md breakpoint
    isLg: screenSize.width >= 1024,  // Tailwind lg breakpoint
    isXl: screenSize.width >= 1280,  // Tailwind xl breakpoint
    is2xl: screenSize.width >= 1536, // Tailwind 2xl breakpoint
  };

  return { ...screenSize, ...tailwindSizes };
}

export default useScreenSize;
