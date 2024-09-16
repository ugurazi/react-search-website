import './App.css';
import SearchHeader from './SearchHeader';
import searchImages from './api.js'
import {useState} from 'react';
import ImageList from './comploments/ImageList.js';
function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  }
  return (
    <div className="App">
      <SearchHeader search={handleSubmit}/>
      <ImageList imagesPlaceholder={images}/>
    </div>
  );
}

export default App;
