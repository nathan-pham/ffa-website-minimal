import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useState, useMemo, useRef } from "react";
import * as THREE from "three";

import { arrayLength } from "./config";

const fragmentShader = `
uniform vec2 uPlaneSizes;
uniform vec2 uImageSizes;
uniform sampler2D tMap;

varying vec2 vUv;

void main() {
    vec2 ratio = vec2(
        min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
        min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
    );

    vec2 uv = vec2(
        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

    gl_FragColor.rgb = texture2D(tMap, uv).rgb;
    gl_FragColor.a = 1.0;
}
`;

const vertexShader = `
#define PI 3.1415926535897932384626433832795

// attribute vec3 position;
// attribute vec2 uv;

// uniform mat4 modelViewMatrix;
// uniform mat4 projectionMatrix;

uniform float uStrength;
uniform vec2 uViewportSizes;

varying vec2 vUv;

void main() {
    vec4 newPosition = modelViewMatrix * vec4(position, 1.0);
    newPosition.z += sin(newPosition.y / uViewportSizes.y * PI + PI / 2.0) * -uStrength;

    vUv = uv;

    gl_Position = projectionMatrix * newPosition;
}
`;

export default function Media({ element, scroll, galleryRef, test }) {
    const { size, viewport } = useThree();
    const [bounds, setBounds] = useState({});

    const planeScale = useRef({});
    const planePos = useRef({});

    const extra = useRef(0);
    const isBefore = useRef(false);
    const isAfter = useRef(false);

    const uniforms = useMemo(
        () => ({
            tMap: {
                value: new THREE.TextureLoader().load(element.src, () => {
                    uniforms.uImageSizes.value = new THREE.Vector2(element.naturalWidth, element.naturalHeight);
                }),
            },
            uPlaneSizes: { value: [0, 0] },
            uImageSizes: { value: [0, 0] },
            uViewportSizes: { value: [viewport.width, viewport.height] },
            uStrength: { value: 0 },
        }),
        []
    );

    const updateScale = () => {
        const _bounds = element.getBoundingClientRect();
        setBounds(_bounds);

        planeScale.current.x = (viewport.width * _bounds.width) / size.width;
        planeScale.current.y = (viewport.height * _bounds.height) / size.height;

        uniforms.uPlaneSizes.value = [planeScale.current.x, planeScale.current.y];
        // uniforms.uViewportSizes.value = [viewport.width, viewport.height];
    };

    const updateX = (x = 0) => {
        planePos.current.x = -(viewport.width / 2) + planeScale.current.x / 2 + ((bounds.left - x) / size.width) * viewport.width;
    };

    const updateY = (y = 0) => {
        planePos.current.y = viewport.height / 2 - planeScale.current.y / 2 - ((bounds.top - y) / size.height) * viewport.height - extra.current;
    };

    useFrame(() => {
        updateScale();
        updateX();
        updateY(scroll.current.current);

        const planeOffset = planeScale.current.y / 2;
        const viewportOffset = viewport.height / 2;

        // calculate the gallery's height (scroll height?)
        const galleryHeight = (viewport.height * galleryRef.current.scrollHeight) / size.height;

        isBefore.current = planePos.current.y + planeOffset < -viewportOffset;
        isAfter.current = planePos.current.y - planeOffset > viewportOffset;

        if (scroll.current.direction === "up" && isBefore.current) {
            extra.current -= galleryHeight;
            isBefore.current = false;
            isAfter.current = false;
        }

        if (scroll.current.direction === "down" && isAfter.current) {
            extra.current += galleryHeight;
            isBefore.current = false;
            isAfter.current = false;
        }

        uniforms.uStrength.value = ((scroll.current.current - scroll.current.last) / size.width) * 10;
        if (test == arrayLength - 1) {
            scroll.current.last = scroll.current.current;
        }
    });

    return (
        uniforms && (
            <mesh position={[planePos.current.x, planePos.current.y, 0]} scale={[planeScale.current.x, planeScale.current.y, 0]} onClick={() => console.log(test)}>
                <planeBufferGeometry attach="geometry" />
                <shaderMaterial uniforms={uniforms} fragmentShader={fragmentShader} vertexShader={vertexShader} />
            </mesh>
        )
    );
}
