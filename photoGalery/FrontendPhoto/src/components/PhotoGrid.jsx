
const PhotoGrid = ({ photos }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {photos.map(photo => (
        <div key={photo.id} className="overflow-hidden rounded shadow hover:scale-105 transition">
          <img
            src={`http://localhost:5000${photo.url}`}
            alt={photo.name}
            className="w-full h-48 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
