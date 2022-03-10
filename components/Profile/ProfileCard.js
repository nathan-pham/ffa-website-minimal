import { PaperPlane } from "react-ionicons";

export default function ProfileCard({ src, name, position, email }) {
    const _src = `/images/profiles/${src}`;

    const onMouseMove = (e) => {
        const bbox = e.target.getBoundingClientRect();
        const x = e.clientX - bbox.left - bbox.width / 2;
        const y = e.clientY - bbox.top - bbox.height / 2;

        e.target.style.transform = `translate(${x}px, ${y}px)`;
    };

    const onMouseLeave = (e) => {
        e.target.style.transform = "";
    };

    return (
        <div className="border rounded-lg">
            <div className="h-72 grid place-items-center bg-gray-100 rounded-t-lg relative">
                <img
                    className="h-28 w-28 rounded-full object-cover border"
                    src={_src}
                    alt={`${name}'s profile picture`}
                />
                <a
                    className="absolute h-14 w-14 rounded-full bg-yellow-500 grid place-items-center shadow-lg hover:shadow-yellow-400 right-4 -bottom-6 cursor-pointer"
                    href={`mailto:${email}`}
                    // ref={planeRef}
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    style={{
                        transition:
                            "transform 200ms ease-out, box-shadow 200ms ease-in-out",
                    }}
                >
                    <span className="pointer-events-none">
                        <PaperPlane color="#fff" />
                    </span>
                </a>
            </div>
            <div className="py-10 text-center flex flex-col items-center justify-center">
                <h2 className="uppercase font-semibold text-xl">{name}</h2>
                <p className="text-gray-500">{position}</p>
            </div>
        </div>
    );
}
