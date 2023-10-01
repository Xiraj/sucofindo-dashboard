import { useState } from "react";

function ImageViewer({ imageUrl }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div>
    {isFullScreen ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90">
          <div className="max-w-screen-xl h-screen mx-auto overflow-hidden flex items-center justify-center">
            <img
              src={imageUrl}
              alt="Full Screen"
              className="max-h-screen w-auto h-auto max-w-full object-contain"
            />
          </div>
          <button
            className="absolute top-5 right-5 text-white text-2xl z-60 hover:text-red-500"
            onClick={toggleFullScreen}
          >
            &#x2716;
          </button>
        </div>
      ) : (
        <img
          src={imageUrl}
          alt="Thumbnail"
          className="cursor-pointer max-h-80vh max-w-full transition-transform duration-300 transform hover:scale-105"
          onClick={toggleFullScreen}
        />
      )}
    </div>
  );
}

export default ImageViewer;