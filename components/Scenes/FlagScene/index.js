import { Canvas } from "@react-three/fiber";

import Flag from "./Flag";

export default function FlagScene() {
    return (
        <div className="rounded-lg h-screen max-h-[80vmin] w-full mt-6" style={{ background: "radial-gradient(rgb(243 244 246), rgb(243 244 246), #fff);" }}>
            <Canvas className="w-full h-full">
                <Flag />
            </Canvas>
        </div>
    );
}
