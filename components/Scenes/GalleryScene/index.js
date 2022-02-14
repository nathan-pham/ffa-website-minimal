import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useRef, useEffect, useState, useCallback } from "react";
import Gallery from "./Gallery";
import { arrayLength } from "./config";

const Cube = () => (
    <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="red" />
    </mesh>
);

const getImage = (id = 0) => `https://source.unsplash.com/collection/${id}/512x512`;
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const imageLength = new Array(arrayLength).fill(0);

export default function GalleryScene() {
    const [imageRefs, setImageRefs] = useState([]);
    const [images, setImages] = useState([]);
    const [loaded, setLoaded] = useState(0);
    const galleryRef = useRef();

    useEffect(() => {
        setImages(
            imageLength.map((_, i) => ({
                src: getImage(i),
                gridRows: random(1, 4),
                gridCols: random(1, 4),
            }))
        );
    }, []);

    const imageRef = useCallback((node) => {
        if (node) {
            setImageRefs((refs) => [...refs, node]);
        }
    }, []);

    const onLoad = () => {
        setLoaded((loaded) => {
            console.log(loaded)
            return loaded + 1
        });
    };

    return (
        <>
            <div className="grid grid-cols-3 place-items-center p-6 gap-6 invisible h-screen relative overflow-hidden" ref={galleryRef}>
                {images.map(({ src, gridRows, gridCols }, i) => (
                    <div key={i} className={`col-span-${gridCols} row-span-${gridRows}`}>
                        <img src={src} alt="Gallery" className="object-cover" ref={imageRef} onLoad={onLoad} />
                    </div>
                ))}
            </div>

            {arrayLength == loaded && (
                <Canvas
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        display: "block",
                    }}
                    colorManagement
                >
                    <Gallery galleryRef={galleryRef} imageRefs={imageRefs} />
                </Canvas>
            )}
        </>
    );
}
