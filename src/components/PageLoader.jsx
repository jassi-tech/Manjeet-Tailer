import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

const PageLoader = ({ isVisible }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the Lottie animation from public folder
    fetch('/animations/12345.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-primary-light bg-opacity-95 z-[9999] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Lottie Animation */}
        <div className="w-140 h-140">
          {animationData && (
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
