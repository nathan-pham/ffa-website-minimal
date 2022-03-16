import { PaperPlane } from "react-ionicons";

import { useRef } from "react";
import useMover from "hooks/useMover";

import P from "components/Atoms/P";
import H2 from "components/Atoms/H2";

export default function ProfileCard({ src, name, position, email }) {
    const _src = `/images/profiles/${src}`;

    const buttonRef = useRef(null);
    const [onMouseMove, onMouseLeave] = useMover(buttonRef);

    return (
        <div className="border rounded-lg dark:border-gray-900">
            <div className="h-72 grid place-items-center bg-gray-100 rounded-t-lg relative dark:bg-gray-900">
                <img
                    className="h-28 w-28 rounded-full object-cover border dark:border-gray-900"
                    src={_src}
                    alt={`${name}'s profile picture`}
                />

                <a
                    className="absolute h-14 w-14 rounded-full bg-yellow-500 dark:bg-blue-600 grid place-items-center right-4 -bottom-6 cursor-pointer"
                    href={`mailto:${email}`}
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    ref={buttonRef}
                >
                    <span className="pointer-events-none">
                        <PaperPlane color="#fff" />
                    </span>
                </a>
            </div>
            <div className="py-10 text-center flex flex-col items-center justify-center">
                <H2 className="uppercase font-semibold text-xl">{name}</H2>
                <P className="text-md">{position}</P>
            </div>
        </div>
    );
}
