// src/App.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import PhotoGrid from './components/PhotoGrid';
import UploadForm from './components/UploadForm';

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 9;

  const fetchPhotos = async () => {
    const res = await axios.get('http://localhost:5000/api/photos', {
      params: { q: query, page, limit },
    });
    setPhotos(res.data.photos);
    setTotal(res.data.total);
  };

  useEffect(() => {
    fetchPhotos();
  }, [query, page]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPage(1); // Reset to first page
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">📷 Photo Gallery</h1>
      
      <div className="mb-4 flex gap-4 items-center justify-between">
        <input
          type="text"
          placeholder="Search photos..."
          value={query}
          onChange={handleSearch}
          className="border px-4 py-2 rounded w-full max-w-sm"
        />
        <UploadForm onUpload={fetchPhotos} />
      </div>

      <PhotoGrid photos={photos} />

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page * limit >= total}
          className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
