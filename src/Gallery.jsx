import './index.css'
import {Image} from "./Image.jsx";
import p1 from '/public/images/IMG_2276.jpeg'
import p2 from '/public/images/IMG_2206.jpeg'

export function Gallery() {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 bg-gradient-to-bl from-gray-900 to-gray-800">
            <div className="grid gap-4">
                <Image path={p2} alt="blabla" date="today" location="istanbul"/>
            </div>
            <div className="grid gap-4">

            </div>
            <div className="grid gap-4">

            </div>
            <div className="grid gap-4">

            </div>
        </div>
    );
}