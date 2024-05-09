import {useState} from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

export const Image = ({ path, alt, location, date }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div onClick={handleClick} className="relative m-5">
            <img
                className="h-auto max-w-full rounded-[50px] object-cover object-center"
                src={path}
                alt={alt}
            />
            {isClicked && (
                <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white transition-opacity duration-300"
                    style={{ borderRadius: '50px' }} // Apply same border radius as the image
                >
                    <div className="text-center">
                        <p className="text-lg font-bold flex items-center justify-center gap-1">
                            <FaMapMarkerAlt />
                            {location}
                        </p>
                        <p className="text-sm flex items-center justify-center gap-1">
                            <FaCalendarAlt />
                            {date}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};