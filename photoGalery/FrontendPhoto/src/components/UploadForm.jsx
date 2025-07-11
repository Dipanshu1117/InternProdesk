// src/components/UploadForm.jsx
import { useRef, useState } from 'react';
import axios from 'axios';

const UploadForm = ({ onUpload }) => {
  const fileRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!fileRef.current.files[0]) return;
    const formData = new FormData();
    formData.append('photo', fileRef.current.files[0]);

    try {
      setLoading(true);
      await axios.post('http://localhost:5000/api/photos', formData);
      onUpload();
      fileRef.current.value = '';
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" ref={fileRef} className="mb-2" />
      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        {loading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default UploadForm;
