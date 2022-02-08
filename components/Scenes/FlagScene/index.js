import { Canvas } from "@react-three/fiber";

import Flag from "./Flag";

export default function FlagScene() {
    return (
        <div className="rounded-lg bg-gray-100 h-screen max-h-[80vmin] w-full mt-6">
            <Canvas className="w-full h-full">
                <Flag />
            </Canvas>
        </div>
    );
}
