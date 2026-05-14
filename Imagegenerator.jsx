import React, { useState, useRef } from 'react';
import './Imagegenerator.css';
import default_image from '../assets/default_image.svg';

const Imagegenerator = () => {
  const [image_url, setImage_url] = useState(default_image);
  const inputRef = useRef(null);

  const generateImage = () => {
    const prompt = inputRef.current.value;

    if (!prompt) {
      alert("Please enter a prompt!");
      return;
    }

    const encodedPrompt = encodeURIComponent(prompt);
    const url = `https://image.pollinations.ai/prompt/${encodedPrompt}`;

    setImage_url(url);
  };

  return (
    <div className='ai-image-generator'>

      <div className="header">
        AI Image <span>Generator</span>
      </div>

      <div className="img-loading">
        <div className='img'>
          <img src={image_url} alt="Generated" />
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          ref={inputRef}
          className='search-input'
          placeholder='Describe what you want to see'
        />

        <div className="generate-btn" onClick={generateImage}>
          Generate
        </div>
      </div>

    </div>
  );
};

export default Imagegenerator;