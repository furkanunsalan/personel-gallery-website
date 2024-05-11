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
                className="h-auto max-w-full md:h-full md:max-w-auto rounded-[50px] object-cover object-center"
                src={path}
                alt={alt}
            />
            {isClicked && (
                <div
                    className="absolute flex flex-col items-center text-white"
                    style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        padding: '10px',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '50px'
                    }}
                >
                    <p className="text-lg font-bold flex items-center justify-center gap-1">
                        <FaMapMarkerAlt />
                        {location}
                    </p>
                    <p className="text-sm flex items-center justify-center gap-1">
                        <FaCalendarAlt />
                        {date}
                    </p>
                </div>
            )}
        </div>
    );
};
