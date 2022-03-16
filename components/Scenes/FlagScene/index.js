import { Canvas } from "@react-three/fiber";

import Flag from "./Flag";

export default function FlagScene() {
    return (
        <div className="rounded-lg h-screen max-h-[80vmin] w-full">
            <Canvas className="w-full h-full">
                <Flag />
            </Canvas>
        </div>
    );
}
