const images = [
    {
        src: "/images/F397AEEF-FAC9-462D-BCFA-908EBB7284B4.jpg",
        event: "Harvest Festival",
    },
    {
        src: "/images/30DEC9A9-36F6-49D3-82FD-8540DC77443C.jpg",
        event: "Harvest Festival",
    },
    {
        src: "/images/D08B451E-5E07-4873-BBBF-EBA325F0D0A2.jpg",
        event: "Welcome Back Jamboree",
    },
    {
        src: "/images/3AE33D24-12E0-47C9-80AA-666A8E1C0884.jpg",
        event: "Welcome Back Jamboree",
    },
    {
        src: "/images/B0FE52E2-7E8C-4D03-83E9-1AEFC30E6789.jpg",
    },
    {
        src: "/images/4476BBCE-D34A-4FAC-8747-BB46551D22C0.jpg",
    },
];

const ImageSection = () => {
    return (
        <div className="w-full grid grid-cols-1 gap-6 md:gap-0 md:flex items-center justify-center">
            {images.map((image, i) => (
                <div
                    key={`image-${i}`}
                    className="overflow-hidden relative md:px-3 md:w-20 md:h-96 md:hover:w-1/3 transition-all group"
                >
                    <img
                        src={image.src}
                        className="w-full h-full object-cover rounded-lg"
                        alt={image.event || "FFA Event"}
                        loading="lazy"
                    />
                    <p className="absolute text-white text-lg bottom-4 left-8 whitespace-nowrap font-semibold md:opacity-0 group-hover:opacity-100 transition-opacity">
                        {image.event || ""}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ImageSection;
