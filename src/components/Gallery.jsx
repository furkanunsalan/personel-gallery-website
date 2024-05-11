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
                <Image path={p9} alt="park" date="8 May 2024" location="Kağıthane, İstanbul"/>
                <Image path={p5} alt="landscape" date="8 Feb 2024" location="Caddebostan, İstanbul"/>
                <Image path={p2} alt="Sunset" date="23 Nov 2023" location="Kadıköy, İstanbul"/>

            </div>
            <div className="grid gap-4">
                <Image path={p8} alt="night" date="30 Apr 2024" location="Kemerburgaz, İstanbul"/>
                <Image path={p3} alt="Basilica Cistern" date="03 Feb 2024" location="Fatih, İstanbul"/>
                <Image path={p11} alt="mosque" date="25 Sep 2023" location="Kağıthane, İstanbul"/>

            </div>
            <div className="grid gap-4">
                <Image path={p7} alt="bosphorus" date="25 Feb 2024" location="İstanbul Bosphorus"/>
                <Image path={p4} alt="Basilica Cistern" date="03 Feb 2024" location="Fatih, İstanbul"/>
                <Image path={p10} alt="Dolmabahçe Palace" date="8 Jul 2023" location="Beşiktaş, İstanbul"/>

            </div>
            <div className="grid gap-4">
                <Image path={p6} alt="metro station" date="22 Feb 2024" location="Maslak, İstanbul"/>
                <Image path={p1} alt="ship" date="23 Nov 2023" location="Kadıköy, İstanbul"/>

            </div>

        </div>
    );
}