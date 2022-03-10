const images = [
    {
        src: "/images/3AE33D24-12E0-47C9-80AA-666A8E1C0884.jpg",
    },
    {
        src: "/images/30DEC9A9-36F6-49D3-82FD-8540DC77443C.jpg",
    },
    {
        src: "/images/F397AEEF-FAC9-462D-BCFA-908EBB7284B4.jpg",
    },
];

const ImageSection = () => {
    return (
        <div className="w-full flex items-center justify-center">
            {images.map((image, i) => (
                <div
                    key={`image-${i}`}
                    className="overflow-hidden relative w-16 h-96 hover:w-1/3 transition-all px-2 group"
                >
                    <img
                        src={image.src}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <p className="absolute text-white text-lg bottom-4 left-8 whitespace-nowrap font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Harvest Festival
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ImageSection;

// export default function ImageSection() {
//     return (
//         <div className="w-full grid grid-cols-3 grid-rows-2 gap-6 h-screen relative z-[-1]">
//             <div className="relative col-span-3 row-span-2 md:col-span-2">
//                 <img
//                     src=""
//                     alt=""
//                     className="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg"
//                 />
//             </div>
//             <div className="relative hidden md:block">
//                 <img
//                     src=""
//                     alt=""
//                     className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
//                 />
//             </div>
//             <div className="relative hidden md:block">
//                 <img
//                     src=""
//                     alt=""
//                     className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
//                 />
//             </div>
//         </div>
//     );
// }
