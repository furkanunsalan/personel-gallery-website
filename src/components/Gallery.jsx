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

    const metadata = {
        '1.webp': { date: '23 Nov 2023', location: 'Kadıköy, İstanbul' },
        '2.webp': { date: '23 Nov 2023', location: 'Kadıköy, İstanbul' },
        '3.webp': { date: '03 Feb 2024', location: 'Fatih, İstanbul' },
        '4.webp': { date: '03 Feb 2024', location: 'Fatih, İstanbul' },
        '5.webp': { date: '8 Feb 2024', location: 'Caddebostan, İstanbul' },
        '6.webp': { date: '22 Feb 2024', location: 'Maslak, İstanbul' },
        '7.webp': { date: '25 Feb 2024', location: 'İstanbul Bosphorus' },
        '8.webp': { date: '30 Apr 2024', location: 'Kemerburgaz, İstanbul' },
        '9.webp': { date: '8 May 2024', location: 'Kağıthane, İstanbul' },
        '10.webp': { date: '8 Jul 2023', location: 'Beşiktaş, İstanbul' },
        '11.webp': { date: '25 Sep 2023', location: 'Kağıthane, İstanbul' },
    };

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {photos.map((photo, index) => {
                const meta = metadata[photo.name] || { date: 'Unknown date', location: 'Unknown location' };
                return (
                    <div key={index} className="grid gap-4">
                        <Image
                            path={photo.url}
                            alt={photo.name}
                            date={meta.date}
                            location={meta.location}
                        />
                    </div>
                );
            })}
        </div>
    );
}
