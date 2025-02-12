import React, { useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [imageURL, setImageURL] = useState("");

  const handleAddImage = () => {
    if (imageURL.trim() !== "") {
      setImages([...images, imageURL]);
      setImageURL("");
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mood Board</h1>
      </header>
      <div className="form">
        <input
          type="text"
          placeholder="Enter image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <button onClick={handleAddImage}>Add Image</button>
      </div>
      <div className="mood-board">
        {images.map((image, index) => (
          <div key={index} className="mood-item">
            <img src={image} alt={`Mood board item ${index}`} />
            <button onClick={() => handleRemoveImage(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;