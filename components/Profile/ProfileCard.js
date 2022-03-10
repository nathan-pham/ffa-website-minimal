import { PaperPlane } from "react-ionicons";

export default function ProfileCard({ src, name, position, email }) {
    const _src = `/images/profiles/${src}`;

    return (
        <div className="border rounded-lg">
            <div className="h-72 grid place-items-center bg-gray-100 rounded-t-lg relative">
                <img
                    className="h-28 w-28 rounded-full object-cover border"
                    src={_src}
                    alt={`${name}'s profile picture`}
                />
                <a
                    className="absolute h-14 w-14 rounded-full bg-yellow-500 grid place-items-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-yellow-400 right-4 -bottom-6 cursor-pointer"
                    href={`mailto:${email}`}
                >
                    <PaperPlane color="#fff" />
                </a>
            </div>
            <div className="py-10 text-center flex flex-col items-center justify-center">
                <h2 className="uppercase font-semibold text-xl">{name}</h2>
                <p className="text-gray-500">{position}</p>
            </div>
        </div>
    );
}
