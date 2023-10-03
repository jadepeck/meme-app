// src/components/MemeDisplay.js

import React, { useState, useEffect } from 'react';

function MemeDisplay() {
  const [memes, setMemes] = useState([]);
  const apiKey = 'uENZsz8yWszcFEczA1dMNcAudr0r9wEr';

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`)
      .then((response) => response.json())
      .then((data) => setMemes(data.data))
      .catch((error) => console.error('Error fetching memes', error));
  }, []);

  return (
    <div>
      <h1>Meme Gallery</h1>
      <div className="meme-container">
        {memes.map((meme) => (
          <div key={meme.id} className="meme-item">
            <img src={meme.images.fixed_height.url} alt={meme.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemeDisplay;
