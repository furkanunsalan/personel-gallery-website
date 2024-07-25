import { useEffect, useState } from 'react';
import '../styles/index.css';
import { Image } from './Image.jsx';

export function Gallery() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch('/api/fetch-photos');
                const data = await response.json();
                setPhotos(data.photos);
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchPhotos();
    }, []);

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {photos.map((photo, index) => (
                <div key={index} className="grid gap-4">
                    <Image path={photo.url} alt={photo.name} date="N/A" location="N/A" />
                </div>
            ))}
        </div>
    );
}
