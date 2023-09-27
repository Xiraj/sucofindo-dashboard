import React, { useState } from 'react';

const ImageView = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>Image Preview</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {imageSrc && (
        <div>
          <h2>Preview:</h2>
          <img src="https://www.sucofindo.co.id/wp-content/uploads/2022/09/Sucofindo_Utama.png" alt="Preview" />
        </div>
      )}
    </div>
  );
};

export default ImageView;
