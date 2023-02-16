import React, { useState } from 'react';
import './Upload.css'
import Navbar from '../Navbar/Navbar';
import Comments from '../comments/Comments';

function Upload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreviewUrl('');
  };

  return (
    <div>
      <Navbar />
      <div className='file-position'>
        {selectedImage ? (
          <>
            <img className='img-styling' src={imagePreviewUrl} alt="Preview" />
            <button className='remove-image' onClick={handleRemoveImage}>Remove Image</button>
            <Comments/>
          </>
        ) : (
          <>
          <div className="preImage-position">
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Upload;
