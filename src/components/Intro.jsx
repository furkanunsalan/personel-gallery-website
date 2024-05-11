import { FaGithub } from 'react-icons/fa';
export function Intro() {
    return <div className="pr-5 pl-5 md:pr-0 md:pl-0">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="text-4xl font-serif text-center pt-10 pb-10 text-white">Furkan Ünsalan's Gallery</p>
        <p className="text-2xl font-serif text-center pb-5 text-white">Here are some of the photos I took over the years, enjoy!</p>
        <p className="text-xl font-serif text-center pb-4 text-white">Click on the images for more information.</p>
        <p className="text-xl font-serif text-center pb-4 text-white">Checkout the project on <a href="https://github.com/furkanunsalan/personel-gallery-website" className="text-gray-500">Github</a></p>
    </div>
}