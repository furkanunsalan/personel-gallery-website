import '../styles/index.css'
import {Image} from "./Image.jsx";
import p1 from '/public/images/1.webp'
import p2 from '/public/images/2.webp'
import p3 from '/public/images/3.webp'
import p4 from '/public/images/4.webp'
import p5 from '/public/images/5.webp'
import p6 from '/public/images/6.webp'
import p7 from '/public/images/7.webp'
import p8 from '/public/images/8.webp'
import p9 from '/public/images/9.webp'
import p10 from '/public/images/10.webp'
import p11 from '/public/images/11.webp'

export function Gallery() {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="grid gap-4">
                <Image path={p1} alt="blabla" date="today" location="istanbul"/>
                <Image path={p2} alt="blabla" date="today" location="istanbul"/>
                <Image path={p3} alt="blabla" date="today" location="istanbul"/>
                <Image path={p4} alt="blabla" date="today" location="istanbul"/>
            </div>
            <div className="grid gap-4">
                <Image path={p5} alt="blabla" date="today" location="istanbul"/>
                <Image path={p6} alt="blabla" date="today" location="istanbul"/>
                <Image path={p7} alt="blabla" date="today" location="istanbul"/>
                <Image path={p8} alt="blabla" date="today" location="istanbul"/>
            </div>
            <div className="grid gap-4">
                <Image path={p9} alt="blabla" date="today" location="istanbul"/>
                <Image path={p10} alt="blabla" date="today" location="istanbul"/>
                <Image path={p11} alt="blabla" date="today" location="istanbul"/>
            </div>
            <div className="grid gap-4">

            </div>
        </div>
    );
}