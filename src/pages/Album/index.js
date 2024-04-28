import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Album = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data))
      .catch(error => {
        console.error(`Error fetching albums for user ${userId}:`, error);
      });
  }, [userId]);

  return (
    <div>
      {albums.map(album => (
        <div key={album.id}>
          <h3>{album.title}</h3>
          <Link to={`/photos/${album.id}`}>
            <button>Photos</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Album;
